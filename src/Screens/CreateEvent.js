import { StyleSheet, Text, TextInput, View } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

import Button from '../components/Button'
import InputGroup from '../components/InputGroup'
import Input from '../components/Input'
import ColorSelection from '../components/ColorSelection'

export default function CreateEvent() {
	return (
		<View style={styles.container} >
			
			<InputGroup label='Nome do evento'>
				<Input />
			</InputGroup>

			<View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
				<InputGroup label='Inicio' width={'47%'}>
					<Input />
				</InputGroup>
				<InputGroup label='Fim' width={'47%'}>
					<Input />
				</InputGroup>
			</View>

			<InputGroup label='Selecione uma cor'>
				<ColorSelection />
			</InputGroup>

			<Button onPress={() => {}} >
				<Text style={styles.text} >Criar</Text>
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: defaultStyles.colors[0],
		padding: defaultStyles.spacing.large,
	},
	text: {
		color: defaultStyles.colors[0],
		fontSize: defaultStyles.text.huge
	}
})
