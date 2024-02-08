import { useDispatch, useSelector } from "react-redux";
import { addStar, increment, incrementRandom, resetCounter } from "../store/counter.jsx";

export function Counter({min = 0, max = 0}) {
    const dispatch = useDispatch();
    const {counter, pair, star} = useSelector((s) => s.counter);
    return (
        <>
            <h2>Count : {counter} | {pair ? 'Pair' : 'Impair'}</h2>
            <button onClick={() => dispatch(increment())}>
                +1
            </button>
            <button onClick={() => dispatch(incrementRandom([min, max]))}>
                Random increment
            </button>
            <button onClick={() => dispatch(resetCounter())}>
                Reset
            </button>
            <br />
            <h3>{star}</h3>
        </>
    );
}