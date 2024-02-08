// import de la fonction 
import { createSlice } from "@reduxjs/toolkit";
import { randomNumberInRange } from "../js/randomNumberRange.js";

// définit un state 
const initialState = { 
    counter: 0,
    pair: true,
    star: ""
}

export const counterSlice = createSlice({
// clé permettant d'identifier le reducer spécifique 
  name: 'counter',
  initialState,
  // gestions des actions dans le/les reducer(s) du state
  reducers: {
    increment: (state, action) => {
        state.counter += 1;
        state.pair = state.counter % 2 == 0;
    },
    incrementRandom: {
        reducer: (state, action) => {
            state.counter += action.payload;
            state.pair = state.counter % 2 == 0;
        },
        prepare : (rangeArray) => {
            if(rangeArray.length !== 2) throw new Error('Range array must have 2 elements');
            return {payload : randomNumberInRange(...rangeArray)};
        }
    },
    resetCounter(state, action) {
        state.counter = 0
        state.pair = true
        state.star = ""
    },
    addStar(state, action) {
        state.star += "*";
    },
  }
})

export const { 
    increment,
    incrementRandom,
    resetCounter,
    addStar
} = counterSlice.actions

export const incrementMiddlewares = [
    ((store) => (next) => (action) => {
        next(action);

        if(action.type.startsWith('counter/increment') ) {
            console.log("Incrementing by " + (action.payload ?? 1));
            store.dispatch(addStar());
        }
    })
];