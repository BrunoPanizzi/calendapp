import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CalendarService from '../services/CalendarService'

import isSameDay from '../utils/isSameDay'

import defaultStyles from '../styles/defaultStyles'

import useErrors from '../hooks/useErrors'
import useNotification from '../hooks/useNotification'

import InputGroup from '../components/InputGroup'
import Input from '../components/Input'
import DateSelector from '../components/DateSelector'
import ColorSelection from '../components/ColorSelection'
import Button from '../components/Button'


export default function CreateEvent({ route, navigation }) {
  const { addError, getErrorMessageByField, removeError } = useErrors()
	const [loading, setLoading] = useState(false)

	const [eventName, setEventName] = useState('')
	const [description, setDescription] = useState('')
	const [start, setStart] = useState()
	const [end, setEnd] = useState()
	const [color, setColor] = useState('')

  const handleChangeName = newName => {
    removeError('eventName')
    setEventName(newName)
    if (!newName) {
      addError({field: 'eventName', message: 'Escolha um nome para o evento'})
    }
  }

  const handleSetStart = date => {
    removeError('start')
    removeError('end')
    setStart(date)
  }

  const handleOpenEndSelector = () => {
    if (!start) {
      addError({field: 'end', message: 'Selecione uma data de inicio primeiro'})
    }
    return !!start
  }
  const handleSetColor = colorHue => {
    removeError('color')
    setColor(colorHue)
  }
	const handleSubmit = async () => {
    if (!eventName) {
      return addError({field: 'eventName', message: 'Escolha um nome para o evento'})
    }
    if (!start) {
      return addError({field: 'start', message: 'Selecione uma data de inicio'})
    }
    if (!color) {
      return addError({field: 'color', message: 'Escolha uma cor para o evento'})
    }

    try {
      setLoading(true)
			await CalendarService.addEvent(route.params, {
				title: eventName,
				colorHue: color,
				description,
				type: isSameDay(start, end) || !end ? 'single' : 'span',
				start: start?.valueOf(),
				end: end ? end.valueOf() : null, // firestore things, it doesn't understand `undefined`, just `null`
			})

      // add notification
      useNotification({
        title: `${eventName} está prestes a começar!`,
        time: start.valueOf() - 1000 * 60 * 5
      })

      end && useNotification({
        title: `⌛ ${eventName} acabou`,
        time: end.valueOf()
      })

			navigation.goBack()
		} catch (e) {
			console.log(e)
		} finally {
			setLoading(false)
		}
	}

	return (
		<View style={styles.container} >

			<InputGroup
        label='Nome do evento'
        error={!!getErrorMessageByField('eventName')}
        errorMessage={getErrorMessageByField('eventName')}
      >
				<Input value={eventName} onChange={handleChangeName} />
			</InputGroup>

			<InputGroup label='Descrição'>
				<Input value={description} onChange={setDescription} multiline />
			</InputGroup>

			<View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
				<InputGroup
          label='Inicio'
          width={'47%'}
          error={!!getErrorMessageByField('start')}
          errorMessage={getErrorMessageByField('start')}
        >
					<DateSelector
						placeholder='Escolha uma data'
						date={start}
						setDate={handleSetStart}
            minDate={Date.now()}
					/>
				</InputGroup>
				<InputGroup
          label='Fim'
          width={'47%'}
          error={!!getErrorMessageByField('end')}
          errorMessage={getErrorMessageByField('end')}
        >
					<DateSelector
						placeholder='Escolha uma data'
						date={end}
						setDate={setEnd}
            minDate={start}
            onRequestOpen={handleOpenEndSelector}
					/>
				</InputGroup>
			</View>

			<InputGroup
        label='Selecione uma cor'
        error={!!getErrorMessageByField('color')}
        errorMessage={getErrorMessageByField('color')}
      >
				<ColorSelection selectedColor={color} setSelectedColor={handleSetColor} />
			</InputGroup>

			<Button onPress={handleSubmit} loading={loading} >
				<Text style={styles.text}>Criar</Text>
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: defaultStyles.colors[0],
		padding: defaultStyles.spacing.large,
	},
	text: {
		color: defaultStyles.colors[0],
		fontSize: defaultStyles.text.huge,
		fontWeight: 'bold'
	},
})
