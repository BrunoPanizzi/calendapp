import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import propTypes from 'prop-types'

import defaultStyles from '../styles/defaultStyles'

export default function Button({ children, disabled, onPress, loading }) {
	return (
		<TouchableOpacity
			style={styles.button}
			disabled={disabled}
			onPress={onPress}
		>
			{loading
				? <ActivityIndicator color={defaultStyles.colors[100]} size='large' />
				: children
			}
		</TouchableOpacity>
	)
}

Button.propTypes = {
	children: propTypes.node.isRequired,
	onPress: propTypes.func.isRequired,
	loading: propTypes.bool,
	disabled: propTypes.bool,
}

const styles = StyleSheet.create({
	button: {
		width: '100%',
    backgroundColor: defaultStyles.colors[500],
    borderRadius: defaultStyles.borderRadius,
    padding: defaultStyles.spacing.small,
    alignItems: 'center',
    marginTop: defaultStyles.spacing.small
	}
})
