// import de la fonction 
import { configureStore, createSlice } from '@reduxjs/toolkit'

// définit un state 
const initialState = { message: 'Hello World!!!' }

const messageSlice = createSlice({
// clé permettant d'identifier le reducer spécifique 
  name: 'message',
  initialState,
  // gestions des actions dans le/les reducer(s) du state
  reducers: {
    changeMessage(state, action) {
      state.message = action.payload
    }
  },
})

// Export des actions
const store = configureStore({
     reducer: {
       message : messageSlice.reducer
    }
});

export const { changeMessage } = messageSlice.actions

// pour contextualiser le store dans l'arbre React
export default store;