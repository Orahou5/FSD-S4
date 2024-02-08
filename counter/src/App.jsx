import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeMessage } from './store/messageSlice.jsx'

function App() {
  const dispatch = useDispatch();
  const { message } = useSelector((s) => s.message);

  console.log(message);

  return (
    <>
      <h1>{message}</h1>
      <input
        type="text"
        onChange={(e) => dispatch(changeMessage(e.target.value))}
      />
    </>
  )
}

export default App
