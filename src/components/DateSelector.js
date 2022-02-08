import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform, Modal } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

import { parseDate, parseTime } from '../utils/parseDate'

import defaultStyles from '../styles/defaultStyles'


export default function DateSelector({ date, setDate, placeholder }) {
	const [hasBeenEdited, setHasBeenEdited] = useState(false)
  const [mode, setMode] = useState(Platform.OS === 'ios' ? 'datetime' : 'date')
  const [show, setShow] = useState(false)

	const onChange = (event, selectedDate) => { 
		setShow(false)
		if (event.type === 'dismissed') return 
		
		setHasBeenEdited(true)
		setDate(selectedDate)
		if (mode === 'date') {
			setMode('time')
			setShow(true)
		}
  }

	const handleOpenDatepicker = () => {
		Platform.OS === 'android' && setMode('date')
		setShow(true)
	}
	
	return (
		<>
			{show && 
				<DateTimePicker
					value={date || new Date()}
					mode={mode}
					is24Hour={true}
					onChange={onChange}
				/>
			}

			<TouchableOpacity style={styles.container} onPress={handleOpenDatepicker}>
				<Text style={{
					fontSize: defaultStyles.text.normal, 
					color: defaultStyles.colors[hasBeenEdited ? 800 : 200]
				}}>
					{hasBeenEdited ? parseDate(date) : placeholder }
				</Text>
				<Text style={{
					fontSize: defaultStyles.text.normal, 
					color: defaultStyles.colors[hasBeenEdited ? 800 : 200]
				}}>
					{hasBeenEdited && parseTime(date)}
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
		padding: defaultStyles.spacing.small,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

})
