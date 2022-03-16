import { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native'
import { onSnapshot } from 'firebase/firestore'

import defaultStyles from '../styles/defaultStyles'

import UserService from '../services/UserService'
import CalendarService from '../services/CalendarService'

import SmallCalendar from './SmallCalendar'

export default function CalendarsList() {
  const { width } = Dimensions.get('screen')
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
      <Text style={styles.title}>Seus calendários:</Text>
      {!loading ? (
        <View style={styles.calendarsContainer}>
          {calendars.map((calendar) => (
            <SmallCalendar
              key={calendar.id}
              calendar={calendar.data()}
              id={calendar.id}
              width={(width - defaultStyles.spacing.medium * 3) / 2} // magic number do not change
            />
          ))}
        </View>
      ) : (
        <ActivityIndicator size={'large'} color={'#f0f'} />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: defaultStyles.colors[700],
    marginBottom: defaultStyles.spacing.small,
  },
  calendarsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
})
