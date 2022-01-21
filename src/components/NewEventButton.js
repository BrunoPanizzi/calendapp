import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import propTypes from 'prop-types'

import defaultStyles from '../styles/defaultStyles'

export default function NewEventButton({ calendarId }) {
  const navigation = useNavigation()
  
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('CreateEvent', calendarId)}
    >
      <View style={styles.line} />
      <View style={[styles.line, {transform: [{rotate: '90deg'}]}]} />
    </TouchableOpacity>
  )
}

NewEventButton.propTypes = {
  calendarId: propTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: defaultStyles.colors[500],
    bottom: defaultStyles.spacing.medium,
    right: defaultStyles.spacing.medium,
    borderRadius: 999,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    height: 3,
    left: 12,
    right: 12,
    borderRadius: 2,
    backgroundColor: defaultStyles.colors[100]
  }
})
