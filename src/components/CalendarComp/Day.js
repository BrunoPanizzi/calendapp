import { StyleSheet, Text, View, Pressable } from 'react-native'
import propTypes from 'prop-types'

import { useCalendar } from '../../contexts/CalendarContext'

import isSameDay from '../../utils/isSameDay'
import isBetweenDates from '../../utils/isBetweenDates'

import defaultStyles from '../../styles/defaultStyles'

// TODO useMemo some stuff for performance
export default function Day({ events, day, isThisMonth, compact }) {
	const { selectedDay, setSelectedDay } = !compact && useCalendar()
	const isSelected = isSameDay(selectedDay, day)
  const isToday = isSameDay(day, Date.now())

  const fontSize = compact ? 10 : 16
  const borderRadius = compact ? 4 : defaultStyles.borderRadius
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
			disabled={compact}
			style={[styles.day, isSelected && styles.selectedDay, { borderRadius }]}
			onPress={() => setSelectedDay(day)}
		>
			<View style={[styles.events, { borderRadius, opacity: 0.5 }]}>
				{eventsThisDay.map(e =>
					<View
						key={Math.random()}
						style={{
							flex: 1,
							backgroundColor: `hsl(${e?.colorHue}, 100%, 50%)`,
						}}
					/>
				)}
			</View>

			{longEvents.map(e =>
				<View
					key={Math.random()}
					style={[
						{ borderRadius },
            styles.longEvent,
						e.borderStyle,
						e.isEventSelected && { borderWidth: 4 },
						{borderColor: `hsla(${e?.colorHue}, 100%, 50%, 0.5)`},
					]}
				/>
			)}

      <Text
        style={[
          styles.text,
          isThisMonth ? styles.textInMonth : styles.textNotInMonth,
          { fontSize },
          isToday && { color: defaultStyles.colors[500], transform: [{scale: 1.4}] }
        ]}
      >
        {day.getDate()}
      </Text>
		</Pressable>
	)
}

Day.propTypes = {
	events: propTypes.array.isRequired,
	day: propTypes.instanceOf(Date).isRequired,
	isThisMonth: propTypes.bool.isRequired,
  compact: propTypes.bool
}

const styles = StyleSheet.create({
	day: {
		position: 'relative',
    zIndex: 4,
		marginTop: '1%',
		justifyContent: 'center',
		alignItems: 'center',
    width: 100 / 7 + '%',
    aspectRatio: 1,
    padding: '2%',
	},
	selectedDay: {
    backgroundColor: defaultStyles.colors[0],
    borderRadius: 8
  },
	text: {
		position: 'absolute',
		zIndex: 32,
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
		zIndex: -1,
	}
})
