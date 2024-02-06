import { useState } from 'react'
import './App.css'
import { Numbers } from './components/Numbers.jsx';
import { Form } from './components/Form.jsx';

function App() {
	const [base, setBase] = useState(0);

	const changeBase = (value) => {
		setBase(value);
	}

	return (
		<>
			<h1>Calcul de Multiples</h1>
			<p className="read-the-docs">
				Selectionne un nombre pour voir ses multiples jusqu'à 20
			</p>

			<Form base={base} changeBase={changeBase} />

			<Numbers base={base} />
		</>
	)
}

export default App
