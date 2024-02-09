import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (pokemonName, thunkAPI) => {
        if(pokemonName == "" && typeof pokemonName !== "string") {
            return thunkAPI.rejectWithValue("Pokemon name is not valid");
        }
        try {
            console.log("Fetching : ", pokemonName);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }
);

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemon: {},
        status: 'idle',
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        // gestion des états de la promesse
            .addCase(fetchPokemon.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.pokemon = action.payload;
                console.log("Fetched : ", action.meta.arg);
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// utilisez la configuration du store déjà vu
export default pokemonSlice.reducer;
export { fetchPokemon };