import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import CalendarService from '../services/CalendarService'

import defaultStyles from '../styles/defaultStyles'

import InputGroup from '../components/InputGroup'
import Input from '../components/Input'
import DateSelector from '../components/DateSelector'
import ColorSelection from '../components/ColorSelection'
import Button from '../components/Button'

export default function CreateEvent() {
	const [eventName, setEventName] = useState('')
	const [description, setDescription] = useState('')
	const [start, setStart] = useState(new Date())
	const [end, setEnd] = useState(new Date())
	const [color, setColor] = useState('')
	
	const handleSubmit = () => {
		console.log({eventName, description, start, end, color})
		CalendarService.addEvent('123', {eventName, description, start, end, color})
	}
	
	// TODO add error messages
	return (
		<View style={styles.container} >
			
			<InputGroup label='Nome do evento'>
				<Input value={eventName} onChange={setEventName} />
			</InputGroup>

			<InputGroup label='Descrição'>
				<Input value={description} onChange={setDescription} multiline />
			</InputGroup>

			<View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
				<InputGroup label='Inicio' width={'47%'}>
					<DateSelector 
						placeholder='Escolha uma data' 
						date={start}
						setDate={setStart}
					/>
				</InputGroup>
				<InputGroup label='Fim' width={'47%'}>
					<DateSelector 
						placeholder='Escolha uma data' 
						date={end}
						setDate={setEnd}
					/>
				</InputGroup>
			</View>

			<InputGroup label='Selecione uma cor'>
				<ColorSelection selectedColor={color} setSelectedColor={setColor} />
			</InputGroup>

			<Button onPress={handleSubmit} >
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
