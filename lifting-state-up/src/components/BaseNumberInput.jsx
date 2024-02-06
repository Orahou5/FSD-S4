import React from 'react'

export default function BaseNumberInput({ onChangeBase, value}) {
	return (
		<input type="text" value={value} onChange={(e) => onChangeBase(e.target.value)} />
	)
}
