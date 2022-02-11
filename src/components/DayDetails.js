import { StyleSheet, Text, View } from 'react-native'
import propTypes from 'prop-types'

import { parseDate } from '../utils/parseDate'
import isSameDay from '../utils/isSameDay'
import isBetweenDates from '../utils/isBetweenDates'

import { useCalendar } from '../contexts/CalendarContext'

import defaultStyles from '../styles/defaultStyles'

import Event from './Event'


export default function DayDetails({ events }) {
  const { selectedDay } = useCalendar()

  let eventsOnDate = []
	events.forEach(e => {
		if (e.type === 'single') {
			isSameDay(e.start, selectedDay) && eventsOnDate.push(e)
		} else if (isBetweenDates(e.start, e.end, selectedDay)) {
			eventsOnDate.push(e)
		}
	})
    
  return (
    <>
      <Text style={styles.title}>{selectedDay ? parseDate(selectedDay) : 'Selecione um dia'}</Text>
      {eventsOnDate.length ?
        <View style={styles.info}>
          {eventsOnDate.map(item  => <Event {...item} key={Math.random()} />)}
        </View>
        :
        <Text style={styles.noEvents}>Sem eventos...</Text>
      }
    </>
  )
}

DayDetails.propTypes = {
  events: propTypes.array.isRequired
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    width: '100%',
    backgroundColor: defaultStyles.colors[0],
    marginTop: defaultStyles.spacing.medium,
    padding: defaultStyles.spacing.medium,
    paddingVertical: defaultStyles.spacing.medium / 2,
    borderRadius: defaultStyles.borderRadius
  },
  noEvents: {
    margin: defaultStyles.spacing.large,
    fontSize: defaultStyles.text.huge,
    color: defaultStyles.colors[700]
  }
})
