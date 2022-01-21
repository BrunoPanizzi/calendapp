import { StyleSheet, Text, View } from 'react-native'
import propTypes from 'prop-types'

import defaultStyles from '../styles/defaultStyles'

export default function ToggleGroup({ children, label, width }) {
  return (
    <View style={[styles.container, {width}]}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  )
}

ToggleGroup.propTypes = {
	width: propTypes.oneOfType([propTypes.string, propTypes.number]),
	label: propTypes.string.isRequired,
	children: propTypes.node.isRequired
}

ToggleGroup.defaultProps = {
	width: '100%'
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
		marginBottom: 16
	},
	label: {
		fontSize: 16,
		fontWeight: 'bold',
		color: defaultStyles.colors[800],
		marginBottom: 4,
		width: '75%',
	}
})
