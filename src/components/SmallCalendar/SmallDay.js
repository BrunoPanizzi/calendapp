import { StyleSheet, Text, View } from 'react-native'

import defaultStyles from '../../styles/defaultStyles'

export default function SmallDay({ day, isThisMonth, size }) {
	return (
		<View 
			style={[
				styles.day, 
				{width: size, height: size}
			]}
		>
			<Text 
				style={[
					styles.text, 
					isThisMonth ? styles.textInMonth : styles.textNotInMonth
				]}
			>{day.getDate()}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	day: {
		marginTop: '1.2857%',  // magic number do not change
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: defaultStyles.borderRadius,
	},
	text: {
		fontSize: defaultStyles.text.small,
		color: defaultStyles.colors[700]
	},
	textInMonth: {
		fontWeight: 'bold'
	},
	textNotInMonth: {
		color: defaultStyles.colors[400]
	}
})