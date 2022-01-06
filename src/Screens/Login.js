import { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import { AuthContext } from '../contexts/AuthContext'

import Calendapp from '../../assets/Calendapp.png'

import defaultStyles from '../styles/defaultStyles'

export default function Login() {
  const { handleAuth } = useContext(AuthContext)
  
  return (
    <View style={styles.container}>
      <Image source={Calendapp} style={styles.logo} />
      <Text style={styles.subtitle}>
        Um jeito diferente de organizar suas tarefas
      </Text>
      <TouchableOpacity style={styles.login} onPress={handleAuth}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: defaultStyles.spacing.large,
    backgroundColor: defaultStyles.colors[0]
  },
  logo: {
    width: '100%',
    resizeMode: 'contain'
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    maxWidth: '70%',
    textAlign: 'center',
    color: defaultStyles.colors[800]
  },
  login: {
    width: '100%',
    backgroundColor: defaultStyles.colors[600],
    borderRadius: 999,
    padding: defaultStyles.spacing.small,
    alignItems: 'center'
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 36,
    color: defaultStyles.colors[0]
  }
})