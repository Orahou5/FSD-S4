import './App.css';
import { AsyncCounter } from './components/AsyncCounter.jsx';
import { Counter } from './components/Counter.jsx';

function App() {
  return (
    <>
      <h1>Counter</h1>
        <Counter min={0} max={100} />
        <AsyncCounter min={0} max={100} />
    </>
  )
}

export default App
