import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

import Button from '../components/Button'
import InputGroup from '../components/InputGroup'
import Input from '../components/Input'
import ColorSelection from '../components/ColorSelection'
import DateSelector from '../components/DateSelector'

export default function CreateEvent() {
	const [eventName, setEventName] = useState('')
	const [description, setDescription] = useState('')
	const [start, setStart] = useState('')
	const [end, setEnd] = useState('')
	const [color, setColor] = useState('')
	
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
					<DateSelector />
				</InputGroup>
				<InputGroup label='Fim' width={'47%'}>
					<DateSelector />
				</InputGroup>
			</View>

			<InputGroup label='Selecione uma cor'>
				<ColorSelection selectedColor={color} setSelectedColor={setColor} />
			</InputGroup>

			<Button onPress={() => {console.log({eventName, description, start, end, color})}} >
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
