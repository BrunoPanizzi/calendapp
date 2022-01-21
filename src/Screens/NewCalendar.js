import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

import Input from '../components/Input'
import InputGroup from '../components/InputGroup'
import ToggleGroup from '../components/ToggleGroup'
import Button from '../components/Button'
import Toggle from '../components/Toggle'

export default function NewCalendar() {
  const [name, setName] = useState('')
  const [bool, setBool] = useState(false)
  
  return (
    <View style={styles.container}>
      <InputGroup label='Nome do calendário'>
        <Input value={name} onChange={setName} />
      </InputGroup>
      
      <ToggleGroup label='Permitir que outras pessoas adicionem eventos'>
        <Toggle
          value={bool}
          onChange={() => setBool(prev => !prev)}
          width={48}
          trackColor={{on: defaultStyles.colors[100], off: defaultStyles.colors[700]}}
          headColor={{ on: defaultStyles.colors[500], off: defaultStyles.colors[200]}}
        />
      </ToggleGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: defaultStyles.spacing.large,
    backgroundColor: defaultStyles.colors[0]
  }
})
