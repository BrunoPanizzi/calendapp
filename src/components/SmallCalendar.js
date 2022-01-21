import { TouchableOpacity, Text, StyleSheet, View }  from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'

import Menu from './Menu'

import defaultStyles from '../styles/defaultStyles'

import CalendarComp from '../components/CalendarComp'

export default function SmallCalendar({ id, title, width }) {
  const navigation = useNavigation()
  
  return (
    <TouchableOpacity
      style={[styles.calendarContainer, {width: width/2 - 18}]}
      onPress={() => navigation.navigate('Calendar', {id, title})}
    >
      <View style={styles.header}>  
        <Text style={styles.text}>{title}</Text>  
        <Menu
          button={<FontAwesome5 name='ellipsis-v' size={18} color={defaultStyles.colors[600]} />}
          options={['opçao 1', 'opção2', 'opção 3']}
        />
      </View>
      <CalendarComp compact id={id} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  calendarContainer: {
		backgroundColor: defaultStyles.colors[100],
		marginBottom: 12, 
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