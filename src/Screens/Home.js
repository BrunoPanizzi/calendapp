import { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'

import { onSnapshot } from 'firebase/firestore'

import CalendarService from '../services/CalendarService'
import UserService from '../services/UserService'

import defaultStyles from '../styles/defaultStyles'

import NewCalendarButton from '../components/NewCalendarButton'
import HomeContent from '../components/HomeContent'


export default function Home() {
	const [calendars, setCalendars] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
    const user = UserService.getCurrentUser()
		const calendarsQuery = CalendarService.getCalendars(user.uid)
		const unsub = onSnapshot(calendarsQuery, (querySnapshot) => {
			setCalendars(querySnapshot.docs)
      setLoading(false)
		})

		return unsub
	}, [])

	return (
		<>
			<ScrollView style={styles.container}>
				{loading
					? <ActivityIndicator size='large' color={defaultStyles.colors[500]} />
					: <HomeContent calendars={calendars} />
				}
			</ScrollView>
			<NewCalendarButton />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors[0],
		flex: 1,
		padding: defaultStyles.spacing.medium
	},
	calendarsList: {
		padding: 12,
		paddingBottom: 0,
		justifyContent: 'space-between',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	calendarContainer: {
		backgroundColor: defaultStyles.colors[100],
		marginBottom: 12,
		padding: defaultStyles.spacing.medium,
		borderRadius: defaultStyles.borderRadius
	},
	text: {
		color: defaultStyles.colors[700],
		fontWeight: 'bold',
		fontSize: 16,
		marginBottom: 4
	}
})
