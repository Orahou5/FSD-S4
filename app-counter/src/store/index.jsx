import { configureStore } from "@reduxjs/toolkit";
import { counterSlice, incrementMiddlewares } from "./counter.jsx";
import { asyncCounterSlice, incrementAsyncMiddlewares } from "./asyncCounter.jsx";

const logger = (store) => (next) => (action) => {
    console.log("Action : ", action);
    console.log("Store", store.getState())
    next(action);
};

// Export des actions
const store = configureStore({
    reducer: {
       counter : counterSlice.reducer,
       asyncCounter : asyncCounterSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([...incrementMiddlewares, ...incrementAsyncMiddlewares]),
});

// pour contextualiser le store dans l'arbre React
export default store;