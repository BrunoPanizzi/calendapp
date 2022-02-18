import { useState  } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import propTypes from 'prop-types'
import { useRoute } from '@react-navigation/native'

import CalendarService from '../services/CalendarService'

import { parseDate, parseTime } from '../utils/parseDate'

import defaultStyles from '../styles/defaultStyles'

import Menu from './Menu'
import DangerModal from './DangerModal'


export default function Event({ event }) {
  const { title, colorHue, description, start, end } = event
  const [dangerModalVisible, setDangerModalVisible] = useState(false)

  const { id } = useRoute().params

  return (
    <TouchableOpacity
      style={[
        styles.container,

        {borderColor: `hsla(${colorHue}, 100%, 50%, 0.5)`}
      ]}
      onPress={() => console.log('figure out how to expand event')}
    >
      <View style={styles.rows}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Menu
          button={<FontAwesome5 name='ellipsis-v' size={16} color={defaultStyles.colors[600]} />}
          options={['Excluir']}
          actions={[() => setDangerModalVisible(true)]}
        />
      </View>
      <View style={styles.rows}>
        <View style={[styles.half, {marginRight: defaultStyles.spacing.small}]}>
          <Text style={{marginBottom: 2}}>Início: {`${parseDate(start, false)}, ${parseTime(start)}`}</Text>
          {end && <Text>Fim: {`${parseDate(end, false)}, ${parseTime(end)}`}</Text>}
        </View>
        <View style={styles.half}>
          <Text style={[styles.description, !description && {color: 'gray'}]} numberOfLines={3}>
            {description ? description : 'Sem descrição para esse evento'}
          </Text>
        </View>
      </View>
    <DangerModal
      visible={dangerModalVisible}
      onClose={() => setDangerModalVisible(false)}
      dangerLabel='Excluir'
      dangerousAction={() => CalendarService.deleteEvent(id, event)}
      message={`Você realmente deseja excluir o evento ${title}?`}
      title={`Excluir ${title}`}
    />
    </TouchableOpacity>
  )
}

Event.propTypes = {
  event: propTypes.shape({
    title: propTypes.string.isRequired,
    colorHue: propTypes.number.isRequired,
    start: propTypes.number.isRequired,
    end: propTypes.number,
    description: propTypes.string
  }).isRequired

}

const styles = StyleSheet.create({
  container: {
    marginVertical: defaultStyles.spacing.medium / 2,
    borderLeftWidth: 4,
    paddingLeft: defaultStyles.spacing.small
  },
  rows: {
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  half: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: defaultStyles.colors[800],
    textAlignVertical: 'center',
    textAlign: 'center',
    flex: 1
  }
})
