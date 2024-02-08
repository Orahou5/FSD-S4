// import de la fonction 
import { configureStore, createSlice } from "@reduxjs/toolkit"
import shuffleArray from "../js/shuffleArray.js";

// définit un state 
const initialState = { 
    currentMessage: "Hello World!!!",
    messages: [],
    errorMessage: ""
}

const messageManaging = createSlice({
// clé permettant d'identifier le reducer spécifique 
  name: 'message',
  initialState,
  // gestions des actions dans le/les reducer(s) du state
  reducers: {
    changeMessage(state, action) {
        state.errorMessage = "";
        state.currentMessage = action.payload;
    },
    addMessage(state, action) {
        if(state.currentMessage == "") {
            state.errorMessage = "Message vide"
            return
        }
        state.messages.push(state.currentMessage)
    },
    removeMessage(state, action) {
        state.errorMessage = "";
        state.messages.splice(action.payload, 1)
    },
    clearMessages(state, action) {
        state.errorMessage = "";
        state.messages = []
    },
    changeMessagesToUpperCase(state, action) {
        state.errorMessage = "";
        state.messages = state.messages.map(message => message.toUpperCase())
    },
    changeMessagesToLowerCase(state, action) {
        state.errorMessage = "";
        state.messages = state.messages.map(message => message.toLowerCase())
    },
    changeMessagesFirstLetterToUpperCase(state, action) {
        state.errorMessage = "";
        state.messages = state.messages.map(message => message.charAt(0).toUpperCase() + message.slice(1))
    },
    shuffleMessages(state, action) {
        state.errorMessage = "";
        state.messages = shuffleArray(state.messages)
    },
  },
})

// Export des actions
const store = configureStore({
     reducer: {
       messages : messageManaging.reducer
    }
});

export const { 
    changeMessage, 
    addMessage, 
    removeMessage, 
    clearMessages, 
    changeMessagesToUpperCase, 
    changeMessagesToLowerCase, 
    changeMessagesFirstLetterToUpperCase,
    shuffleMessages 
} = messageManaging.actions

// pour contextualiser le store dans l'arbre React
export default store;