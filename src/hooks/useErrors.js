import { useState } from 'react'

export default function useErrors() {
	const [errors, setErrors] = useState([])

	const addError = ({ field, message }) => {
		const errorExists = errors.find(error => error.field === field)

		if (errorExists) return
		
		setErrors(prevErrors => [...prevErrors, { field, message }])
	}
	
	const removeError = field => 
		setErrors(prevErrors => prevErrors.filter(error => error.field !== field))

	const getErrorMessageByField = field => errors.find(error => error.field === field)?.message

	return {
		addError, 
		removeError,
		getErrorMessageByField
	}
}