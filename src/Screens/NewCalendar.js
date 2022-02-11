import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CalendarService from '../services/CalendarService'

import useToggle from '../hooks/useToggle'

import defaultStyles from '../styles/defaultStyles'

import Input from '../components/Input'
import InputGroup from '../components/InputGroup'
import ToggleGroup from '../components/ToggleGroup'
import Button from '../components/Button'
import Toggle from '../components/Toggle'


export default function NewCalendar({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [isPublic, toggleisPublic] = useToggle()
  
  const handleSubmit = async () => {
    if (!title) return 
    setLoading(true)
    try {
      const calendarRef = await CalendarService.addCalendar({title, isPublic})
      navigation.goBack()
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <View style={styles.container}>
      <InputGroup label='Nome do calendário'>
        <Input 
          value={title} 
          onChange={setTitle} 
          placeholder='Ex: Faculdade'
        />
      </InputGroup>
      
      <ToggleGroup label='Permitir que outras pessoas adicionem eventos'>
        <Toggle
          value={isPublic}
          onChange={toggleisPublic}
          width={48}
          trackColor={{on: defaultStyles.colors[100], off: defaultStyles.colors[700]}}
          headColor={{ on: defaultStyles.colors[500], off: defaultStyles.colors[200]}}
        />
      </ToggleGroup>

      <Button onPress={handleSubmit} loading={loading} >
        <Text style={styles.buttonText}>Criar calendário</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: defaultStyles.spacing.large,
    backgroundColor: defaultStyles.colors[0]
  },
  buttonText: {
    color: defaultStyles.colors[0],
		fontSize: defaultStyles.text.huge,
		fontWeight: 'bold'
  }
})
