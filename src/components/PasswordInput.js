import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import useToggle from '../hooks/useToggle'

import defaultStyles from '../styles/defaultStyles'

import Input from './Input'

export default function PasswordInput(props) {
	const [showPassword, togglePassword] = useToggle()
		
	return (
		<View style={{justifyContent: 'center'}}>
			<Input 
				{...props}
				passwordVisible={showPassword}
			/>
			<TouchableOpacity onPress={togglePassword} style={styles.eye}>
				<Ionicons
					name={showPassword ? 'eye' : 'eye-off'}
					size={defaultStyles.spacing.large}
					color={defaultStyles.colors[700]}
				/>
			</TouchableOpacity>
		</View>
	)
}

PasswordInput.propTypes = {
	...Input.propTypes
}

const styles = StyleSheet.create({
	eye: {
		position: 'absolute',
		right: defaultStyles.spacing.small
	}
})
