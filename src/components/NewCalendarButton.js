import { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

import NewCalendarModal from './NewCalendarModal'

export default function NewCalendarButton() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setModalVisible(true)}
    >
      <NewCalendarModal visible={modalVisible} onClose={() => setModalVisible(false)} />
      <View style={styles.line} />
      <View style={[styles.line, {transform: [{rotate: '90deg'}]}]} />
    </TouchableOpacity>
  )
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
