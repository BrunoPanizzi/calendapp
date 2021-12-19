import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import defaultStyles from '../../styles/defaultStyles'

import SmallDay from './SmallDay'

export default function SmallCalendar({ title, size }) {
	const navigation = useNavigation()
	
	const innerWidth = size - 2 * defaultStyles.spacing.medium

	const today = new Date()
	const month = new Date(today.getFullYear(), today.getMonth())
	const calendarStart = new Date(month.valueOf() - month.getDay() * 24 * 60 * 60 * 1000)
	let daysArr = []

	let assistDate = calendarStart.valueOf()
	for (let i = 0; i < 42; i++) {
		let currentDay = new Date(assistDate)
		let isThisMonth = currentDay.getMonth() === month.getMonth()
		let dayObj = 
			<SmallDay 
				key={Math.random()} 
				day={currentDay} 
				isThisMonth={isThisMonth}
				size={innerWidth * 0.13}
			/>
		daysArr.push(dayObj)
		assistDate += 24 * 60 * 60 * 1000
	}

	return (
		<TouchableOpacity 
			onPress={() => navigation.navigate('Calendar')}
			style={[
				styles.container, 
				{width: size, height: size + defaultStyles.spacing.small}
			]}
		>
			<Text style={styles.text}>{title}</Text>
			<View style={styles.calendarDays}>
				{daysArr}
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors[100],
		marginBottom: 12,
		padding: defaultStyles.spacing.medium,
		borderRadius: defaultStyles.borderRadius
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold',
		color: defaultStyles.colors[700],
		marginBottom: defaultStyles.spacing.small
	},
	calendarDays: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
})
