import { StyleSheet, Text, View } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

import Toggle from '../components/Toggle'
import ToggleGroup from '../components/ToggleGroup'

export default function Configuration() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>nada por aqui</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors[0],
    padding: defaultStyles.spacing.large
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: defaultStyles.colors[600]
  }
})
