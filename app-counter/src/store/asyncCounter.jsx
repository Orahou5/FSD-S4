import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { randomNumberInRangeAsync } from "../js/randomNumberRange.js";

export const incrementAsyncCounter = createAsyncThunk(
    'asyncCounter/incrementAsyncCounterStatus',
    async (rangeArray, thunkAPI) => {
        if(rangeArray.length < 2) {
            return thunkAPI.rejectWithValue("Le tableau doit contenir 2 éléments")
        }
        const number = await randomNumberInRangeAsync(...rangeArray);
        return number;
    }
)

export const incrementOneAsyncCounter = createAsyncThunk(
    'asyncCounter/incrementOneAsyncCounterStatus',
    async (_, thunkAPI) => {
        const number = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1);
            }, 500);
        });
        return number;
    }
)

// définit un state 
const initialState = { 
    counter: 0,
    pair: true,
    status: 'idle',
    star: ""
}

export const asyncCounterSlice = createSlice({
// clé permettant d'identifier le reducer spécifique 
  name: 'asyncCounter',
  initialState,
  // gestions des actions dans le/les reducer(s) du state
  reducers: {
    resetCounter(state, action) {
        state.counter = 0
        state.pair = true
        state.star = ""
    },
    addStar(state, action) {
        state.star += "*";
    }
  },
    extraReducers : (builder) => {
        builder.addCase(incrementAsyncCounter.pending, (state, action) => {
            state.status = 'loading'
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
        builder.addCase(incrementOneAsyncCounter.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(incrementOneAsyncCounter.fulfilled, (state, action) => {
            state.counter += action.payload
            state.pair = state.counter % 2 == 0
            state.status = 'idle'
        })
    }
})

export const {
    resetCounter : resetAsyncCounter,
    addStar: addStarAsyncCounter  
} = asyncCounterSlice.actions

export const incrementAsyncMiddlewares = [
    ((store) => (next) => (action) => {
        next(action);

        if(action.type.startsWith('asyncCounter/increment') && action?.meta?.requestStatus === "fulfilled") {
            console.log("Incrementing by " + (action.payload ?? 1));
            store.dispatch(addStarAsyncCounter());
        }
    })
];