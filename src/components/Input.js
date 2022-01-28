import { TextInput, StyleSheet } from 'react-native'
import propTypes from 'prop-types'

import defaultStyles from '../styles/defaultStyles'

export default function Input({ value, onChange, placeholder, multiline, passwordVisible }) {
	return (
		<TextInput 
			style={styles.input} 
			selectionColor={defaultStyles.colors[200]}
			value={value}
			onChangeText={onChange}
			multiline={multiline}
			placeholder={placeholder}
			secureTextEntry={passwordVisible}
		/>
	)
}

Input.propTypes = {
	value: propTypes.string.isRequired,
	onChange: propTypes.func.isRequired,
	placeholder: propTypes.string,
	multiline: propTypes.bool,
	passwordVisible: propTypes.bool
}

const styles = StyleSheet.create({
	input: {
		width: '100%',
		backgroundColor: defaultStyles.colors[0],
		borderRadius: defaultStyles.borderRadius,
		padding: defaultStyles.spacing.small,
		fontSize: defaultStyles.text.normal
	}
})