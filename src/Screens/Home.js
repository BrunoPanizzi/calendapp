import { useContext } from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Touchable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import UserService from '../services/UserService'

import defaultStyles from '../styles/defaultStyles'

import CalendarComp from '../components/CalendarComp'

import { AuthContext } from '../contexts/AuthContext'


export default function Home() {
	const { width } = Dimensions.get('window')
	const navigation = useNavigation()
	const { handleAuth } = useContext(AuthContext)
	
	const calendars = UserService.listCalendars('')
	
	return (
		<View style={styles.container}>

			<View style={styles.calendarsList}>
				{calendars.map(({ id, title }) => (
					<TouchableOpacity 
						style={[styles.calendarContainer, {width: width/2 - 18}]}
						onPress={() => navigation.navigate('Calendar')}
						key={id}
					>
						<Text style={styles.text}>{title}</Text>
						<CalendarComp compact />
					</TouchableOpacity>
				))}
			</View>

			<TouchableOpacity onPress={handleAuth}>
				<Text>log out</Text>
			</TouchableOpacity>
		
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors[0],
		flex: 1,
		alignItems: 'center'
	},
	calendarsList: {
		padding: 12,
		paddingBottom: 0,
		justifyContent: 'space-between',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	calendarContainer: {
		// width: '49%',
		backgroundColor: defaultStyles.colors[100],
		marginBottom: 12, 
		padding: defaultStyles.spacing.medium,
		borderRadius: defaultStyles.borderRadius
	},
	text: {
		color: defaultStyles.colors[700],
		fontWeight: 'bold',
		fontSize: 16,
		marginBottom: 4
	}
})
