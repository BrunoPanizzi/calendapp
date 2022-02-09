import { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import propTypes from 'prop-types'

import isEmailValid from '../../utils/isEmailValid'

import UserService from '../../services/UserService'

import { AuthContext } from '../../contexts/AuthContext'

import useErrors from '../../hooks/useErrors'

import defaultStyles from '../../styles/defaultStyles'

import Input from '../Input'
import PasswordInput from '../PasswordInput'
import InputGroup from '../InputGroup'
import Button from '../Button'


export default function Form({ mode }) {
	const { setAuth } = useContext(AuthContext)
	
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const {addError, getErrorMessageByField, removeError} = useErrors()

	const handleEmail = value => {
		setEmail(value)
		if (!isEmailValid(email)) {
			addError({field: 'email', message: 'Formato de email inválido'})
		}
		removeError('email')
	}

	const handlePassword = value => {
		setPassword(value)

		removeError('password')
	}

	const handleSubmit = async () => {
		if (!email) {
			addError({field: 'email', message: 'Email incorreto'})
			return
		} if (!password) {
			addError({field: 'password', message: 'Senha incorreta'})
			return	
		}
		
		const method = mode === 'login' ? UserService.login : UserService.createUser
		
		try {
			const userCredential = await method(email, password)

			console.log(`user logged in\n ${userCredential}` )
			
		} catch (err) {
			console.log(err.message)
			addError({field: 'email', message: 'Email incorreto'})
			addError({field: 'password', message: 'Senha incorreta'})
		}

	}
	
	return (
		<View style={styles.container}>
			<InputGroup 
				label='Email'
				error={!!getErrorMessageByField('email')}
				errorMessage={getErrorMessageByField('email')}
			>
				<Input
					value={email}
					onChange={handleEmail}
					error={!!getErrorMessageByField('email')}
				/>
			</InputGroup>
			<InputGroup
				label='Senha'
				error={!!getErrorMessageByField('password')}
				errorMessage={getErrorMessageByField('password')}
			>
				<PasswordInput
					value={password}
					onChange={handlePassword}
					error={!!getErrorMessageByField('password')}
				/>
			</InputGroup>
			{mode === 'login' && <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>}
			<Button onPress={handleSubmit}>
				<Text style={styles.buttonLabel}>
					{mode === 'login' ? 'Login' : 'Criar Conta'}
				</Text>
			</Button>
		</View>
	)
}

Form.propTypes = {
	mode: propTypes.oneOf(['login', 'signUp']).isRequired
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-end',
	},
	buttonLabel: {
		fontWeight: 'bold',
    fontSize: 36,
    color: defaultStyles.colors[0]
	},
	forgotPassword: {
		fontSize: defaultStyles.text.small,
		color: defaultStyles.colors[700],
		marginBottom: defaultStyles.spacing.small / 2
	}
})
