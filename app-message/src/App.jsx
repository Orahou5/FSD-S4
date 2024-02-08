import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addMessage, changeMessage, changeMessagesFirstLetterToUpperCase, changeMessagesToLowerCase, changeMessagesToUpperCase, clearMessages, removeMessage, shuffleMessages } from './store/messageManaging.jsx';

function App() {
  const { currentMessage, messages, errorMessage } = useSelector(state => state.messages)
  const dispatch = useDispatch();

  return (
    <>
      <h1>{currentMessage}</h1>
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => dispatch(changeMessage(e.target.value))}
      />
      <button onClick={() => dispatch(addMessage())}>Ajouter</button>
      <button onClick={() => dispatch(clearMessages())}>Effacer</button>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      <ul className='list-no-bullets'>
        {messages.map((message, index) => (
          <li key={index}>
            {message}
            <button className='red-button' onClick={() => dispatch(removeMessage(index))}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(changeMessagesToUpperCase())}>Majuscules</button>
      <button onClick={() => dispatch(changeMessagesToLowerCase())}>Minuscules</button>
      <button onClick={() => dispatch(changeMessagesFirstLetterToUpperCase())}>Première lettre en majuscule</button>
      <br />
      <button onClick={() => dispatch(shuffleMessages())}>Shuffle</button>
    </>
  )
}

export default App
