import { useContext } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'

import { AuthContext } from '../contexts/AuthContext'

import Calendapp from '../../assets/Calendapp.png'
import defaultStyles from '../styles/defaultStyles'

import MainLoginContent from '../components/LoginPage'


export default function Login() {
  const { setAuth } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Image source={Calendapp} style={styles.logo} />
      
      <MainLoginContent />

      <Pressable onPress={() => setAuth(true)}>
        <Text>dev</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: defaultStyles.spacing.large,
    backgroundColor: defaultStyles.colors[0]
  },
  logo: {
    width: '100%',
    resizeMode: 'contain'
  },

})
