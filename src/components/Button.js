import { TouchableOpacity, StyleSheet } from 'react-native'
import propTypes from 'prop-types'

import defaultStyles from '../styles/defaultStyles'

export default function Button({ children, disabled, onPress }) {
	return (
		<TouchableOpacity
			style={styles.button}
			disabled={disabled}
			onPress={onPress}
		>
			{children}
		</TouchableOpacity>
	)
}

Button.propTypes = {
	children: propTypes.node.isRequired,
	onPress: propTypes.func.isRequired,
	disabled: propTypes.bool,
}

const styles = StyleSheet.create({
	button: {
		width: '100%',
    backgroundColor: defaultStyles.colors[500],
    borderRadius: defaultStyles.borderRadius * 2,
    padding: defaultStyles.spacing.small,
    alignItems: 'center'
	}
})