export function Form(props) {
    const value = [...Array(11).keys()].map(i => i + 1);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <select value={props.base} onChange={ (e) => props.changeBase(e.target.value) }>
                {value.map((v, i) => (
                    <option key={i} value={v}>{v}</option>
                ))}
                <option value="0">Aucune</option>
            </select>
        </form>

    )
}