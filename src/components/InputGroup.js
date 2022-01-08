import { StyleSheet, Text, View } from 'react-native'
import propTypes from 'prop-types'

import defaultStyles from '../styles/defaultStyles'

export default function InputGroup({ label, children, width }) {
	return (
		<View style={[styles.container, {width}]}>
			<Text style={styles.label} >{label}</Text>
			{children}
		</View>
	)
}

InputGroup.propTypes = {
	width: propTypes.oneOfType([propTypes.string, propTypes.number]),
	label: propTypes.string.isRequired,
	children: propTypes.node.isRequired
}

InputGroup.defaultProps = {
	width: '100%'
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 16
	},
	label: {
		fontSize: 14,
		fontWeight: 'bold',
		color: defaultStyles.colors[800],
		marginBottom: 4
	}
})
