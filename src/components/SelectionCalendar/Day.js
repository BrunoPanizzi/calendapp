import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import defaultStyles from '../../styles/defaultStyles'

import isSameDay from '../../utils/isSameDay'

export default function Day({ day, selected, handleSelection, isThisMonth }) {
	return (
		<TouchableOpacity 
			style={[
				styles.day, 
				selected && {borderColor: defaultStyles.colors[0]},
				isSameDay(day, Date.now()) && {backgroundColor: defaultStyles.colors[300]}
			]}
			onPress={handleSelection}
		>
			<Text
				style={[styles.text, isThisMonth && styles.textInMonth]}
			>
				{day.getDate()}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	day: {
		width: 100 / 7 + '%',
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: defaultStyles.borderRadius,
		borderWidth: 2,
		borderColor: 'transparent'
	},
	text: {
		fontSize: 16,
		color: defaultStyles.colors[400]
	},
	textInMonth: {
		fontWeight: 'bold',
		color: defaultStyles.colors[700]
	},
})
