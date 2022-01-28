import { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import propTypes from 'prop-types'

import UserService from '../../services/UserService'

import { AuthContext } from '../../contexts/AuthContext'

import defaultStyles from '../../styles/defaultStyles'

import Input from '../Input'
import InputGroup from '../InputGroup'
import Button from '../Button'


export default function LoginForm({ mode }) {
	const { setAuth } = useContext(AuthContext)
	
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	
	const handleSubmit = async () => {
		const method = mode === 'login' ? UserService.login : UserService.createUser

		const user = await method(email, password)

		if (user) setAuth(user)
	}
	
	return (
		<View style={styles.container}>
			<InputGroup label='Email'>
				<Input 
					value={email}
					onChange={setEmail}
				/>
			</InputGroup>
			<InputGroup label='Senha'>
				<Input 
					value={password}
					onChange={setPassword}
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

LoginForm.propTypes = {
	mode: propTypes.oneOf(['login', 'signUp']).isRequired
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-end'
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
