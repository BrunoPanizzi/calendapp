import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

export default function ColorSelection({ selectedColor, setSelectedColor }) {
	const colors = [0, 50, 100, 150, 200, 250]

	return (
		<View style={styles.selection}>
			{colors.map(color => (
				<Pressable 
					key={color}
					style={[
						styles.ball,
						{backgroundColor: `hsla(${color}, 100%, 50%, 0.5)`, borderColor: `hsl(${color}, 75%, 35%)`},
						color === selectedColor && {borderWidth: 2, transform: [{scale: 1.2}]}
					]} 
					onPress={() => setSelectedColor(color)} 
				/>
			))}
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
