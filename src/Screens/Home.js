import { StyleSheet, ScrollView } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

import CalendarsList from '../components/CalendarsList'
import NewCalendarButton from '../components/NewCalendarButton'

export default function Home() {
  console.log('home rendered')
  return (
    <>
      <ScrollView style={styles.container}>
        <CalendarsList />
      </ScrollView>
      <NewCalendarButton />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors[0],
    flex: 1,
    padding: defaultStyles.spacing.medium,
  },
})
