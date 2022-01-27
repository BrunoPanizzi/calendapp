import { useContext, useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'

import UserService from '../services/UserService'

import { AuthContext } from '../contexts/AuthContext'

import Calendapp from '../../assets/Calendapp.png'
import defaultStyles from '../styles/defaultStyles'

import Button from '../components/Button'
import Input from '../components/Input'
import InputGroup from '../components/InputGroup'


export default function Login() {
  const { setAuth } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleCreateAccount = async () => {
    const user = await UserService.createUser(email, password)
    if (user) {
      setAuth(user)
    }
  }

  const handleLogin = async () => {
    const user = await UserService.login(email, password)

    if (user) {
      setAuth(user)
    }
  }
  
  return (
    <View style={styles.container}>
      <Image source={Calendapp} style={styles.logo} />
      
      <View style={{width: '100%'}}>
        <InputGroup label='Email'>
          <Input 
            value={email}
            onChange={setEmail}
          />
        </InputGroup>
        <InputGroup label='Senha'>
          <Input 
            value={password}
            onChange={setPassword}
          />
        </InputGroup>
      </View>

      <Button onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </Button>
      <Button onPress={handleCreateAccount}>
        <Text style={styles.loginText}>Criar conta</Text>
      </Button>

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
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    maxWidth: '70%',
    textAlign: 'center',
    color: defaultStyles.colors[800]
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 36,
    color: defaultStyles.colors[0]
  }
})
