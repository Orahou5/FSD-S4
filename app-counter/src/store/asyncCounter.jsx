// import de la fonction 
import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { randomNumberInRangeAsync } from "../js/randomNumberRange.js";

export const incrementAsyncCounter = createAsyncThunk(
    'asyncCounter/incrementAsyncCounter',
    async (rangeArray, thunkAPI) => {
        // if(rangeArray.length < 2) {
        //     return thunkAPI.rejectWithValue("Le tableau doit contenir 2 éléments")
        // }
        const number = await randomNumberInRangeAsync(0, 100);
        return number;
    }
)

// définit un state 
const initialState = { 
    counter: 0,
    pair: true
}

const asyncCounter = createSlice({
// clé permettant d'identifier le reducer spécifique 
  name: 'asyncCounter',
  initialState,
  // gestions des actions dans le/les reducer(s) du state
  reducers: {
    resetCounter(state, action) {
        state.counter = 0
        state.pair = true
    }
  },
    extraReducers : (builder) => {
        builder.addCase(incrementAsyncCounter.fulfilled, (state, action) => {
            state.counter += action.payload
            state.pair = state.counter % 2 == 0
        })
        builder.addCase(incrementAsyncCounter.rejected, (state, action) => {
            console.log(action.payload)
        })
    }
})

// Export des actions
const store = configureStore({
     reducer: {
       asyncCounter : asyncCounter.reducer
    }
});

export const { 
    resetCounter
} = asyncCounter.actions

// pour contextualiser le store dans l'arbre React
export default store;