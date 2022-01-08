import { TextInput, StyleSheet } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

export default function Input() {
	return (
		<TextInput 
			style={styles.input} 
			selectionColor={defaultStyles.colors[200]} 
		/>
	)
}

const styles = StyleSheet.create({
	input: {
		width: '100%',
		backgroundColor: defaultStyles.colors[0],
		borderRadius: defaultStyles.borderRadius,
		borderWidth: 2,
		borderColor: defaultStyles.colors[500],
		padding: defaultStyles.spacing.small,
		fontSize: defaultStyles.text.normal
	}
})