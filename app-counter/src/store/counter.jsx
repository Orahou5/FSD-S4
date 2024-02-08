// import de la fonction 
import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { randomNumberInRange } from "../js/randomNumberRange.js";

import { randomNumberInRangeAsync } from "../js/randomNumberRange.js";

export const incrementAsyncCounter = createAsyncThunk(
    'asyncCounter/incrementAsyncCounterStatus',
    async (rangeArray, thunkAPI) => {
        console.log("hello: ", rangeArray)
        if(rangeArray.length < 2) {
            return thunkAPI.rejectWithValue("Le tableau doit contenir 2 éléments")
        }
        const number = await randomNumberInRangeAsync(...rangeArray);
        return number;
    }
)

// définit un state 
const initialStateAsync = { 
    counter: 0,
    pair: true,
    status: 'idle'
}

const asyncCounter = createSlice({
// clé permettant d'identifier le reducer spécifique 
  name: 'asyncCounter',
  initialState: initialStateAsync,
  // gestions des actions dans le/les reducer(s) du state
  reducers: {
    resetCounter(state, action) {
        state.counter = 0
        state.pair = true
    }
  },
    extraReducers : (builder) => {
        builder.addCase(incrementAsyncCounter.pending, (state, action) => {
            state.status = 'loading'
            console.log("loading: ", state.status)
        })
        builder.addCase(incrementAsyncCounter.fulfilled, (state, action) => {
            state.counter += action.payload
            state.pair = state.counter % 2 == 0
            state.status = 'idle'
        })
        builder.addCase(incrementAsyncCounter.rejected, (state, action) => {
            console.log(action.payload)
            state.status = 'idle'
        })
    }
})

// définit un state 
const initialState = { 
    counter: 0,
    pair: true
}

const counter = createSlice({
// clé permettant d'identifier le reducer spécifique 
  name: 'counter',
  initialState,
  // gestions des actions dans le/les reducer(s) du state
  reducers: {
    increment: {
        reducer: (state, action) => {
            state.counter += action.payload
            state.pair = state.counter % 2 == 0
        },
        prepare : () => ({payload : randomNumberInRange(0, 100)})
    },
    resetCounter(state, action) {
        state.counter = 0
        state.pair = true
    }
  },
})

// Export des actions
const store = configureStore({
     reducer: {
        counter : counter.reducer,
        asyncCounter : asyncCounter.reducer
    }
});

export const { 
    increment,
    resetCounter
} = counter.actions

export const {
    resetCounter : resetAsyncCounter
} = asyncCounter.actions

// pour contextualiser le store dans l'arbre React
export default store;