import { useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'

import defaultStyles from '../../styles/defaultStyles'

import Day from './Day'
import Header from './Header'

export default function CalendarComp() {
	let { width } = Dimensions.get('window')

	width *= 0.9
	
	let padding = defaultStyles.spacing.medium
	width -= 2 * padding
	
	const today = new Date()
	const [month, setMonth] = useState(new Date(today.getFullYear(), today.getMonth()))
	const calendarStart = new Date(month.valueOf() - month.getDay() * 24 * 60 * 60 * 1000)
	let daysArr = []

	let assistDate = calendarStart.valueOf()
	for (let i = 0; i < 42; i++) {
		let currentDay = new Date(assistDate)
		let isThisMonth = currentDay.getMonth() === month.getMonth()
		let dayObj = 
			<Day 
				key={Math.random()} 
				delay={i} 
				day={currentDay} 
				isThisMonth={isThisMonth}
				size={width * 0.9 * 0.13}
			/>

		daysArr.push(dayObj)
		assistDate += 24 * 60 * 60 * 1000
	}

	const nextMonth = () => {
		setMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1))
	}

	const previousMonth = () => {
		setMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1))
	}


	return (
		<View style={[{ padding, width }, styles.container]}>
			<Header 
				currDate={month}
				previousMonth={previousMonth}
				nextMonth={nextMonth}
			/>
			<View style={styles.days}>
				{daysArr}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderRadius: defaultStyles.borderRadius,
		backgroundColor: defaultStyles.colors[50],
	},
	days: {
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
})
