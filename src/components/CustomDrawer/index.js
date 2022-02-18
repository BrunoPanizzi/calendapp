import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'react-native'

import defaultStyles from '../../styles/defaultStyles'

import Header from './Header'

export default function CustomDrawer() {
  return (
    <View style={[styles.container, { paddingTop: StatusBar.currentHeight}]}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors[0],
  }
})
