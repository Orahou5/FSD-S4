import { useDispatch, useSelector } from "react-redux";
import { incrementAsyncCounter, incrementOneAsyncCounter, resetAsyncCounter } from "../store/asyncCounter.jsx";

export function AsyncCounter({min = 0, max = 0}) {
    const dispatch = useDispatch();
    const {counter, pair, status, star} = useSelector((s) => s.asyncCounter);
    return (
        <>
            <h2>AsyncCount : {counter} | {pair ? 'Pair' : 'Impair'}{status === 'loading' && " | (Increasing...)"}</h2>
            <button onClick={() => dispatch(incrementOneAsyncCounter())}>
                +1
            </button>
            <button onClick={() => dispatch(incrementAsyncCounter([min, max]))}>
                Random increment
            </button>
            <button onClick={() => dispatch(resetAsyncCounter())}>
                Reset
            </button>
            <br />
            <h3>{star}</h3>
        </>
    );
}