import { useState, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import propTypes from 'prop-types'

import CalendarService from '../../services/CalendarService'

import defaultStyles from '../../styles/defaultStyles'

import Day from './Day'
import Header from './Header'

export default function CalendarComp({ compact, id }) {
	const events = CalendarService.getInfo(id).events

	const today = new Date()
	const [month, setMonth] = useState(new Date(today.getFullYear(), today.getMonth()))
	
	const daysArr = useMemo(() => {
		const calendarStart = new Date(month.valueOf() - month.getDay() * 24 * 60 * 60 * 1000)
		let assistArr = []

		let assistDate = calendarStart.valueOf()
		for (let i = 0; i < 42; i++) {
			let currentDay = new Date(assistDate)
			let dayObj = 
				<Day 
					events={events}
					key={Math.random()} 
					delay={i} 
					day={currentDay}
					isThisMonth={currentDay.getMonth() === month.getMonth()}
					fontSize={compact ? 10 : 16}
				/>

			assistArr.push(dayObj)
			assistDate += 24 * 60 * 60 * 1000
		}
		return assistArr
	}, [month])

	const nextMonth = () => {
		setMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1))
	}

	const previousMonth = () => {
		setMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1))
	}


	return (
		<>
			{!compact && 
			<Header 
				currDate={month}
				previousMonth={previousMonth}
				nextMonth={nextMonth}
			/>}
			<View style={styles.days}>
				{daysArr}
			</View>
		</>
	)
}

CalendarComp.propTypes = {
	compact: propTypes.bool,
	id: propTypes.string.isRequired
}

CalendarComp.defaultProps = {
	compact: false
}

const styles = StyleSheet.create({
	container: {
		borderRadius: defaultStyles.borderRadius,
		backgroundColor: defaultStyles.colors[100],
	},
	days: {
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
})
