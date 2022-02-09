import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useRoute } from '@react-navigation/native'
import propTypes from 'prop-types'

import { useCalendar } from '../../contexts/CalendarContext'

import isSameDay from '../../utils/isSameDay'
import isBetweenDates from '../../utils/isBetweenDates'

import defaultStyles from '../../styles/defaultStyles'


export default function Day({ events, day, isThisMonth, fontSize }) {
	const route = useRoute()
	const { selectedDay, setSelectedDay } = route.name !== 'Home' && useCalendar()
	const isSelected = isSameDay(selectedDay, day)

	const eventsThisDay = events.filter(e => e.type === 'single' && isSameDay(e.start, day))

	let longEvents = events.filter(e => e.type === 'span' && isBetweenDates(e.start, e.end, day))
	
	longEvents = longEvents.map((event) => {
		let borderStyle
	
		if (isSameDay(event.start, day)){
			borderStyle = styles.beginning	
		} else if (isSameDay(event.end, day)) {
			borderStyle = styles.end
		} else {
			borderStyle = styles.middle
		}

		// add borderStyle to event object, used to style the border of the component 
		event.borderStyle = borderStyle 
		event.isEventSelected = isBetweenDates(event.start, event.end, selectedDay)
			
		return event
	})
	
	return (
		<Pressable
			disabled={route.name === 'Home'}
			style={[
				styles.day,
				{ width: 100 / 7 + '%', aspectRatio: 1, padding: '2%' },
			]}
			onPress={() => setSelectedDay(day)}
		>
			<Text 
				style={[
					styles.text, 
					isThisMonth ? styles.textInMonth : styles.textNotInMonth, 
					isSelected && styles.selectedDay,
					{fontSize}
				]}
			>
				{day.getDate()}
			</Text>

			<View style={[styles.events, isSelected && styles.selectedDay]}>
				{eventsThisDay.map(e => 
					<View 
						key={Math.random()} 
						style={{
							flex: 1, 
							backgroundColor: `hsla(${e?.colorHue}, 100%, 50%, 0.5)`
						}} 
					/>
				)}
			</View>

			{longEvents.map(e => 
				<View 
					key={Math.random()} 
					style={[ 
						styles.longEvent, 
						e.borderStyle,
						e.isEventSelected && { borderWidth: 4},
						{borderColor: `hsla(${e?.colorHue}, 100%, 50%, 0.5)`}, 
					]} 
				/>
			)}
		</Pressable>
	)
}

Day.propTypes = { 
	events: propTypes.array.isRequired,
	delay: propTypes.number.isRequired, 
	day: propTypes.instanceOf(Date).isRequired, 
	isThisMonth: propTypes.bool.isRequired, 
	fontSize: propTypes.number.isRequired
}

const styles = StyleSheet.create({
	day: {
		position: 'relative',
		marginTop: '1%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	selectedDay: {
		transform: [{scale: 1.1}],
		color: defaultStyles.colors[500]
	},
	text: {
		position: 'absolute',
		zIndex: 2,
		fontSize: 16,
		color: defaultStyles.colors[700]
	},
	textInMonth: {
		fontWeight: 'bold'
	},
	textNotInMonth: {
		color: defaultStyles.colors[400],
	},
	events: {
		width: '100%',
		flex: 1,
		borderRadius: defaultStyles.borderRadius,
		overflow: 'hidden',
	},
	beginning: {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderRightWidth: 0
	},
	middle: {
		borderRadius: 0,
		borderRightWidth: 0,
		borderLeftWidth: 0,
	},
	end: {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		borderLeftWidth: 0
	},
	longEvent: {
		position: 'absolute',
		top: 0, left: 0, bottom: 0, right: 0,
		borderWidth: 2.5,
		borderRadius: defaultStyles.borderRadius,
		zIndex: -1,
	}
})
