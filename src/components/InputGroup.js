import { StyleSheet, Text, View } from 'react-native'
import propTypes from 'prop-types'

import defaultStyles from '../styles/defaultStyles'

export default function InputGroup({ label, children, width, error, errorMessage }) {
	return (
		<View style={[styles.container, {width}]}>
			<Text style={styles.label}>{label}</Text>
			<View style={[styles.border, error && styles.borderDanger]}>
				{children}
			</View>
			{error &&
				<Text style={[styles.label, styles.errorLabel]}>{errorMessage}</Text>
			}
		</View>
	)
}

InputGroup.propTypes = {
	width: propTypes.oneOfType([propTypes.string, propTypes.number]),
	label: propTypes.string.isRequired,
	children: propTypes.node.isRequired,
	error: propTypes.bool,
	errorMessage: propTypes.string
}

InputGroup.defaultProps = {
	width: '100%',
	error: false,
	errorMessage: ''
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 16,
	},
	label: {
		fontSize: 14,
		fontWeight: 'bold',
		color: defaultStyles.colors[800],
		marginBottom: 4
	},
	errorLabel: {
		color: defaultStyles.colors.danger,
		marginBottom: 0,
		marginTop: 4
	},
	border: {
		borderRadius: defaultStyles.borderRadius,
		borderWidth: 2,
		borderColor: defaultStyles.colors[500]
	},
	borderDanger: {
		borderColor: defaultStyles.colors.danger
	}
})
