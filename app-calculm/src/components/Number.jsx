import './Number.css';

export function Number(props) {
    return (
        <li className="no-bullet">
            <span className="round-multiple">
                {props.mult} 
            </span>
            <button className="delete-button" onClick={e => props.handleClick(props.index)}>
                X
            </button>
        </li>
    )
}