import { useContext, useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'

import { AuthContext } from '../contexts/AuthContext'

import Calendapp from '../../assets/Calendapp.png'
import defaultStyles from '../styles/defaultStyles'

import Button from '../components/Button'
import Input from '../components/Input'
import InputGroup from '../components/InputGroup'


export default function Login() {
  const { handleAuth } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const onSubmit = () => {
    if (email && password) {
      handleAuth()
      return 
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

      <Button onPress={onSubmit}>
        <Text style={styles.loginText}>Login</Text>
      </Button>
      <Pressable onPress={handleAuth}>
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
