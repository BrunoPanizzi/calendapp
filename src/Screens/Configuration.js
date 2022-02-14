import { StyleSheet, Text, View } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

export default function Configuration() {
  return (
    <View style={styles.container}>
      <Text>nada por aqui</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors[0],
    justifyContent: 'center',
    alignItems: 'center'
  }
})
