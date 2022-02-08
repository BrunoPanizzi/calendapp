import { useState } from 'react'

export default function useToggle(initialValue=false, nextValue=true) {
	const [currentValue, setCurrentValue] = useState(initialValue)

	const toggle = () => setCurrentValue(prevValue => prevValue === initialValue ? nextValue : initialValue)

	return [currentValue, toggle]
}