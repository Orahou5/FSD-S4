import { useEffect, useState } from "react";
import './Numbers.css';
import { Number } from "./Number.jsx";

export function Numbers({base}) {
    const [multiples, setMultiples] = useState([]);

    const handleClick = (index) => {
		const newMultiples = [...multiples];
		newMultiples.splice(index, 1);
		setMultiples(newMultiples);

        // const newMultiples = multiples.filter( (m, i) => i !== index);
        // setMultiples(newMultiples)
	}

    const findMultiple = (base) => {
		const multiples = [];
		for(let i = 1; i <= 20 && base * i <= 20; i++) {
			multiples.push(base * i);
		}

		return multiples;
	}
    
    useEffect(() => {
        const newMultiples = findMultiple(base);
        setMultiples(newMultiples);
    }, [base])

    return (
        <>
            <p>Multiples de {base}</p>
            <ul className="p-zero">
                {
                    multiples.map((mult, i) => (
                        <Number key={i} index={i} mult={mult} handleClick={handleClick} />
                    ))
                }
            </ul>
        </>
    )
    
}