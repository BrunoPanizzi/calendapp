import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Modal } from 'react-native'

import parseDate from '../utils/parseDate'

import defaultStyles from '../styles/defaultStyles'

import SelectionCalendar from './SelectionCalendar'

export default function DateSelector() {
	const [modalVisible, setModalVisible] = useState(false)
	const [selectedDate, setSelectedDate] = useState()
	
	const handleModal = () => setModalVisible(prevModal => !prevModal)
	
	return (
		<>
			<Modal 
				visible={modalVisible} 
				transparent 
				animationType='fade'
				onRequestClose={handleModal}
				statusBarTranslucent
			>
				<View style={styles.center}>
					<View style={styles.modalArea}>

						<Text style={styles.text}>Selecione uma data:</Text>
						<View style={styles.calendarSelection}>
							<SelectionCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
							<TouchableOpacity onPress={handleModal} style={styles.button}>
								<Text style={{color: defaultStyles.colors[0], fontSize: defaultStyles.text.normal}}>
									{selectedDate ? 'Concluído' : 'Cancelar' }
								</Text>
							</TouchableOpacity>
							{
							selectedDate && 
							<TouchableOpacity onPress={() => console.log('abrir relogio')} style={styles.button}>
								<Text style={{color: defaultStyles.colors[0], fontSize: defaultStyles.text.normal}}>
									Selecionar horário
								</Text>
							</TouchableOpacity>
							}
						</View>

					</View>
				</View>
			</Modal>

			<TouchableOpacity style={styles.container} onPress={handleModal}>
				<Text
					style={{fontSize: defaultStyles.text.normal, color: selectedDate ? defaultStyles.colors[800] : defaultStyles.colors[200]}}
				>
					{selectedDate ? parseDate(selectedDate) : 'dd/mm/aaaa' }
				</Text>
			</TouchableOpacity>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: defaultStyles.colors[0],
		borderRadius: defaultStyles.borderRadius,
		borderWidth: 2,
		borderColor: defaultStyles.colors[500],
		padding: defaultStyles.spacing.small,
		fontSize: defaultStyles.text.normal
	},
	center: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.4)',
		padding: defaultStyles.spacing.large
	},
	modalArea: {
		width: '100%',
		padding: defaultStyles.spacing.medium,
		backgroundColor: defaultStyles.colors[0],
		borderRadius: defaultStyles.borderRadius
	},
	calendarSelection: {
		backgroundColor: defaultStyles.colors[100], 
		padding: defaultStyles.spacing.medium, 
		borderRadius: defaultStyles.borderRadius,
		marginBottom: defaultStyles.spacing.medium
	},
	text: {
		fontSize: defaultStyles.text.big,
		fontWeight: 'bold',
		marginBottom: defaultStyles.spacing.small
	},
	button: {
		backgroundColor: defaultStyles.colors[400],
		borderRadius: defaultStyles.borderRadius,
		paddingVertical: defaultStyles.spacing.small,
		paddingHorizontal: defaultStyles.spacing.medium,
		// width: '100%'
		
	}
})
