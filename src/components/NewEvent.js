import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

export default function NewEvent() {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name="add" size={42} color={defaultStyles.colors[100]} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: defaultStyles.colors[500],
    bottom: 36,
    right: 36,
    borderRadius: 999,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 8
  }
})
