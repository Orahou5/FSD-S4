import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemonSlice.jsx";

const logger = (store) => (next) => (action) => {
    console.log("Action : ", action);
    console.log("Store", store.getState())
    next(action);
};

// Export des actions
const store = configureStore({
    reducer: {
       pokemon: pokemonSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});

// pour contextualiser le store dans l'arbre React
export default store;