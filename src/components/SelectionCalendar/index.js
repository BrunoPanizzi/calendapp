import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import isSameDay from '../../utils/isSameDay'

import Header from '../CalendarComp/Header'
import Day from './Day'

export default function SelectionCalendar({ selectedDate, setSelectedDate }) {
	const today = new Date()
	const [month, setMonth] = useState(new Date(today.getFullYear(), today.getMonth()))
	const calendarStart = new Date(month.valueOf() - month.getDay() * 24 * 60 * 60 * 1000)
	
	let daysArr = []

	let assistDate = calendarStart.valueOf()
	for (let i = 0; i < 42; i++) {
		let currentDay = new Date(assistDate)
		let selected 
		if (isSameDay(currentDay, selectedDate)) {
			selected = true
		}
		let dayObj = 
			<Day 
				key={Math.random()} 
				day={currentDay}
				selected={selected}
				handleSelection={() => setSelectedDate(currentDay)}
				isThisMonth={currentDay.getMonth() === month.getMonth()}
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
		<>
			<Header currDate={month} previousMonth={previousMonth} nextMonth={nextMonth} />
			<View style={styles.days}>
				{daysArr}
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	days: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
})
