import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, resetCounter, incrementAsyncCounter, resetAsyncCounter } from './store/counter.jsx';

function App() {
  const { counter, pair } = useSelector((s) => s.counter);
  const dispatch = useDispatch();
  const {counter: asyncCounter, pair: asyncPair, status} = useSelector((s) => s.asyncCounter);

  return (
    <>
      <h1>Counter</h1>
        <h2>Count : {counter} | {pair ? 'Pair' : 'Impair'}</h2>
        <button onClick={() => dispatch(increment())}>
          Random increment
        </button>
        <button onClick={() => dispatch(resetCounter())}>
          Reset
        </button>
        <h2>AsyncCount : {asyncCounter} | {asyncPair ? 'Pair' : 'Impair'}{status === 'loading' && " | (Increasing...)"}</h2>
        <button onClick={() => dispatch(incrementAsyncCounter([0, 100]))}>
          Random increment
        </button>
        <button onClick={() => dispatch(resetAsyncCounter())}>
          Reset
        </button>
    </>
  )
}

export default App
