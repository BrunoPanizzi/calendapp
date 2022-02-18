import { useEffect, useState } from 'react'
import { StyleSheet, Text, ActivityIndicator, View, ScrollView, Dimensions } from 'react-native'

import { onSnapshot } from 'firebase/firestore'

import CalendarService from '../services/CalendarService'
import UserService from '../services/UserService'

import defaultStyles from '../styles/defaultStyles'

import SmallCalendar from '../components/SmallCalendar'
import NoCalendarMessage from '../components/NoCalendarMessage'
import NewCalendarButton from '../components/NewCalendarButton'


const { width } = Dimensions.get('window')

export default function Home() {
	const [calendars, setCalendars] = useState([])
	const [isEmpty, setIsEmpty] = useState(true)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
    const user = UserService.getCurrentUser()
		const calendarsQuery = CalendarService.getCalendars(user.uid)
		const unsub = onSnapshot(calendarsQuery, (querySnapshot) => {
			setCalendars(querySnapshot.docs)
      setIsEmpty(querySnapshot.empty)
      setLoading(false)
		})

		return unsub
	}, [])

	return (
		<>
			<ScrollView style={styles.container}>
				{loading ?
          <ActivityIndicator size='large' color={defaultStyles.colors[500]} /> :
          isEmpty ?
          <NoCalendarMessage /> :
          <View>
            <Text style={styles.sectionTitle}>Seus calendários:</Text>
            <View style={styles.calendarsContainer} >
              {calendars.map(calendar => (
                <SmallCalendar
                  key={calendar.id}
                  calendar={calendar.data()}
                  id={calendar.id}
                  width={(width - defaultStyles.spacing.medium * 3) / 2} // magic number do not change
                />
              ))}
            </View>
          </View>
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
	},
  calendarsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: defaultStyles.colors[700],
		marginBottom: defaultStyles.spacing.small
	}
})
