import { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { onSnapshot } from 'firebase/firestore'

import CalendarProvider from '../contexts/CalendarContext'

import CalendarService from '../services/CalendarService'

import defaultStyles from '../styles/defaultStyles'

import CalendarComp from '../components/CalendarComp'
import NewEventButton from '../components/NewEventButton'
import DayDetails from '../components/DayDetails'


export default function Calendar({ route }) {
	const { id, calendar } = route.params
	const [calendarInfo, setCalendarInfo] = useState(calendar)

	useEffect(() => {
		const calendarRef = CalendarService.getCalendar(id)
		const unsub = onSnapshot(calendarRef, calendarData => {
			setCalendarInfo(calendarData.data())
		})

		return unsub
	}, [])
	
	return (
		<>
			<ScrollView style={styles.container} contentContainerStyle={{padding: defaultStyles.spacing.medium}}>
				<CalendarProvider>
					<View style={[styles.contentContainer, {marginBottom: defaultStyles.spacing.medium}]}>
						<CalendarComp calendar={calendarInfo} />
					</View>
					<View style={styles.contentContainer}>
						<DayDetails />
					</View>
				</CalendarProvider>
			</ScrollView>
			<NewEventButton calendarId={id} />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors[0],
		flex: 1,
		// padding: defaultStyles.spacing.medium
	},
	contentContainer: {
		width: '100%',
		alignItems: 'center',
		backgroundColor: defaultStyles.colors[100],
		padding: defaultStyles.spacing.medium,
		borderRadius: defaultStyles.borderRadius
	}
})
