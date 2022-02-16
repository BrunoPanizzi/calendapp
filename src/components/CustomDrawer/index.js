import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import defaultStyles from '../../styles/defaultStyles'

import Header from './Header'
import Item from './Item'

export default function CustomDrawer({ navigation }) {
  const items = [
    {
      icon: <Ionicons name="md-settings-outline" size={28} color="black" />,
      label: 'Configurações',
      onPress: () => {
        navigation.closeDrawer()
        navigation.navigate('Configuration')
      }
    },
    {
      icon: <Ionicons name="information-circle-outline" size={28} color="black" />,
      label: 'Sobre o app',
      onPress: () => {
        navigation.closeDrawer()
        navigation.navigate('Configuration')
      }
    },
  ]

  return (
    <View style={[styles.container, { paddingTop: StatusBar.currentHeight}]}>
      <Header />
      {items.map(item => <Item {...item} key={item.label} /> )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors[0],

  }
})
