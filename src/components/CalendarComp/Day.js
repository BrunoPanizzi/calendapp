import { useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import PropTypes from 'prop-types'

import isSameDay from '../../utils/isSameDay'
import isBetweenDates from '../../utils/isBetweenDates'

import defaultStyles from '../../styles/defaultStyles'

const events = [
	{
		title: 'Evento',
		color: '#7833cc88',
		type: 'single',
		start: Date.now() // start is always a number 
	},
	{
		title: 'Evento',
		color: '#6ecc3388',
		type: 'single',
		start: Date.now()
	},
	{
		title: 'Evento grandao',
		color: '#cc3399',
		type: 'span',
		start: Date.now(),
		end: Date.now() + 8 * 24 * 60 * 60 * 1000
	},
	{
		title: 'Evento grandao',
		color: '#33cc8f',
		type: 'span',
		start: Date.now() + 2 * 24 * 60 * 1000,
		end: Date.now() + 8 * 24 * 60 * 60 * 1000
	}
]

export default function Day({ delay, day, isThisMonth, size }) {

	// array that contains events to be displayed on this day
	const eventsThisDay = events.map(e => e.type === 'single' && isSameDay(e.start, day) && e ).filter(e => !!e) // holy shit
	
	const longEvent = events.find(e => e.type === 'span' && isBetweenDates(e.start, e.end, day))
	let borderStyle
	if (longEvent) {
		if (isSameDay(longEvent.start, day)){
			borderStyle = styles.beginning	
		} else if (isSameDay(longEvent.end, day)) {
			borderStyle = styles.end
		} else {
			borderStyle = styles.middle
		}
	}

	const opacity = useRef(new Animated.Value(0)).current

	useEffect(() => {
		Animated.timing(opacity, {
			useNativeDriver: true,
			toValue: 1,
			duration: 200,
			delay: delay * 5
		}).start()
	}, [])

	return (
		<Animated.View 
			style={[
				styles.day, 
				{ opacity, width: size, height: size, padding: size * .075 },
				longEvent && {borderColor: longEvent.color},
				borderStyle
			]}
		>
			<Text 
				style={[
					styles.text,
					isThisMonth ? styles.textInMonth : styles.textNotInMonth
				]}
			>
				{day.getDate()}
			</Text>

			<View style={styles.events}>
				{eventsThisDay.map(e => <View key={Math.random()} style={{flex: 1, backgroundColor: e?.color}} />)}
			</View>
			
		</Animated.View>
	)
}

Day.propTypes = { 
	delay: PropTypes.number.isRequired, 
	day: PropTypes.instanceOf(Date).isRequired, 
	isThisMonth: PropTypes.bool.isRequired, 
	size: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
	day: {
		position: 'relative',
		marginTop: '1%',  // magic number do not change
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: defaultStyles.borderRadius,
		borderWidth: 2,
		borderColor: 'transparent',
		overflow: 'hidden'
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
		color: defaultStyles.colors[400]
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
	}

})
