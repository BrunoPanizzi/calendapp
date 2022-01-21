import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import defaultStyles from '../styles/defaultStyles'
import { container } from './SmallCalendar'

export default function NewCalendarButton({ width }) {
  const navigation = useNavigation()
  
  return (
    <TouchableOpacity 
      style={[container, { width: width / 2 - defaultStyles.spacing.medium * 1.5}]}
      onPress={() => navigation.navigate('New Calendar')}
    >
      <Text style={styles.title}>Novo calendário</Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.line} />
        <View style={[styles.line, {transform: [{rotate: '90deg'}]}]} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: defaultStyles.colors[700],
    textAlign: 'center'
  },
  line: {
    position: 'absolute',
    height: '60%',
    width: 6,
    borderRadius: 42,
    backgroundColor: defaultStyles.colors[400]
  }
})
