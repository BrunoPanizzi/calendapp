import { useState } from 'react'
import { StyleSheet, Text, Modal, Pressable, Keyboard } from 'react-native'

import CalendarService from '../services/CalendarService'

import defaultStyles from '../styles/defaultStyles'

import useErrors from '../hooks/useErrors'

import InputGroup from './InputGroup'
import Input from './Input'
import Button from './Button'


const examples = [
  'Faculdade',
  'Metas pessoais',
  'Férias',
  'Trabalho',
]

export default function NewCalendarModal({ visible, onClose }) {
  const [loading, setLoading] = useState(false)
  const [name, setName] =  useState('')

  const { addError, getErrorMessageByField, removeError } = useErrors()

  const handleNameChange = newName => {
    removeError('name')
    setName(newName)
    if (!newName) addError({field: 'name', message: 'Escolha um nome para seu calendário' })
  }

  const handleSubmit = async () => {
    Keyboard.dismiss()
    if (!name) {
      addError({field: 'name', message: 'Escolha um nome para seu calendário' })
      return
    }
    setLoading(true)
    try {
      await CalendarService.addCalendar({title: name})
      onClose()
      setName('')
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <Pressable
        style={styles.overlay}
        onPress={onClose}
      >
        <Pressable style={styles.contentContainer} /* Pressable is the new View */>

          <Text style={styles.title}>Novo calendário</Text>

          <InputGroup
            label='Nome'
            error={!!getErrorMessageByField('name')}
            errorMessage={getErrorMessageByField('name')}
          >
            <Input value={name} onChange={handleNameChange} placeholder={`Ex: ${examples[Math.floor(Math.random() * examples.length)]}`} />
          </InputGroup>
          <Button onPress={handleSubmit} loading={loading}>
            <Text style={styles.buttonLabel}>Criar</Text>
          </Button>

        </Pressable>
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '60%',
    backgroundColor: defaultStyles.colors[0],
    padding: defaultStyles.spacing.medium,
    borderRadius: defaultStyles.borderRadius
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: defaultStyles.colors[700],
    marginBottom: defaultStyles.spacing.medium
  },
  buttonLabel: {
    fontSize: 20,
    color: defaultStyles.colors[0],
    fontWeight: 'bold'
  }
})
