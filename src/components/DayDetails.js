import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { parseDate } from '../utils/parseDate'

import { useCalendar } from '../contexts/CalendarContext'

import defaultStyles from '../styles/defaultStyles'

import Event from './Event'


export default function DayDetails() {
  const route = useRoute()
  const id = route.params.id
  
  const { selectedDay } = useCalendar()
  
  const eventsOnDate = []
  
  return (
    <>
      <Text style={styles.title}>{selectedDay ? parseDate(selectedDay) : 'Selecione um dia'}</Text>
      {false && 
        <FlatList 
          style={styles.info}
          contentContainerStyle={{alignItems: 'stretch'}}
          data={eventsOnDate}
          renderItem={({ item }) => <Event {...item} />}
          keyExtractor={() => Math.random()}
          ListEmptyComponent={() => <Text>sem itens</Text>}
        />
      }
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
