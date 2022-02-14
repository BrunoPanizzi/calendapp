import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import propTypes from 'prop-types'

import defaultStyles from '../styles/defaultStyles'

export default function Button({ children, disabled, onPress, loading, danger, outline }) {
  const color = danger ? defaultStyles.colors.danger : defaultStyles.colors[500]

	return (
		<TouchableOpacity
			style={[styles.button, outline ? styles.outlineButton(color) : styles.solidButton(color)]}
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
    borderRadius: defaultStyles.borderRadius,
    padding: defaultStyles.spacing.small,
    alignItems: 'center',
    marginTop: defaultStyles.spacing.small,
    borderWidth: 3,
	},
  solidButton(color) {
    return {
      borderColor: color,
      backgroundColor: color
    }
  },
  outlineButton(color) {
    return {
      borderColor: color
    }
  }
})
