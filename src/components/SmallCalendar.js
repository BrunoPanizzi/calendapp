import { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, View }  from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'
import propTypes from 'prop-types'

import CalendarService from '../services/CalendarService'

import Menu from './Menu'

import defaultStyles from '../styles/defaultStyles'

import CalendarComp from './CalendarComp'
import DangerModal from './DangerModal'


export default function SmallCalendar({ calendar, id, width }) {
  const navigation = useNavigation()
  const [dangerModalVisible, setDangerModalVisible] = useState(false)

  const deleteCalendar = async () => await CalendarService.deleteCalendar(id)

  return (
    <TouchableOpacity
      style={[styles.calendarContainer, {width}]}
      onPress={() => navigation.navigate('Calendar', {id, calendar})}
    >
      <View style={styles.header}>
        <Text style={styles.text}>{calendar.title}</Text>
        <Menu
          button={<FontAwesome5 name='ellipsis-v' size={16} color={defaultStyles.colors[600]} />}
          options={['Excluir', 'opção2', 'opção 3']}
          actions={[() => setDangerModalVisible(true)]}
        />
        <DangerModal
          title={`Excluir ${calendar.title}?`}
          message={`Você realmente quer excluir ${calendar.title}?\nEssa ação é irreversível`}
          visible={dangerModalVisible}
          onClose={() => setDangerModalVisible(false)}
          dangerousAction={deleteCalendar}
          dangerLabel='Excluir'
        />
      </View>
      <CalendarComp compact calendar={calendar} />
    </TouchableOpacity>
  )
}

SmallCalendar.propTypes = {
  calendar: propTypes.shape({
    title: propTypes.string,
  }).isRequired,
  id: propTypes.string.isRequired,
  width: propTypes.number.isRequired
}

const styles = StyleSheet.create({
  calendarContainer: {
		backgroundColor: defaultStyles.colors[100],
		marginBottom: defaultStyles.spacing.medium,
		padding: defaultStyles.spacing.medium,
		borderRadius: defaultStyles.borderRadius,
	},
	text: {
		color: defaultStyles.colors[700],
		fontWeight: 'bold',
		fontSize: 16,
	},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  menuButton: {
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },
})
