import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import defaultStyles from '../styles/defaultStyles'

export default function ColorSelection() {
	return (
		<View style={styles.selection}>
			<TouchableOpacity style={[styles.ball, {backgroundColor: 'hsla(0, 100%, 50%, 0.5)'}]} />
			<TouchableOpacity style={[styles.ball, {backgroundColor: 'hsla(50, 100%, 50%, 0.5)'}]} />
			<TouchableOpacity style={[styles.ball, {backgroundColor: 'hsla(100, 100%, 50%, 0.5)'}]} />
			<TouchableOpacity style={[styles.ball, {backgroundColor: 'hsla(150, 100%, 50%, 0.5)'}]} />
			<TouchableOpacity style={[styles.ball, {backgroundColor: 'hsla(200, 100%, 50%, 0.5)'}]} />
			<TouchableOpacity style={[styles.ball, {backgroundColor: 'hsla(250, 100%, 50%, 0.5)'}]} />
		</View>
	)
}

const styles = StyleSheet.create({
	selection: {
		borderRadius: defaultStyles.borderRadius,
		borderWidth: 2,
		borderColor: defaultStyles.colors[500],
		paddingVertical: defaultStyles.spacing.small,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	ball: {
		width: defaultStyles.spacing.large,
		height: defaultStyles.spacing.large,
		borderRadius: 9999,
	}
})
