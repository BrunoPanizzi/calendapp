import { useContext } from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'

import UserService from '../services/UserService'

import defaultStyles from '../styles/defaultStyles'

import SmallCalendar from '../components/SmallCalendar'

import { AuthContext } from '../contexts/AuthContext'


export default function Home() {
	const { width } = Dimensions.get('window')
	const { handleAuth } = useContext(AuthContext)
	
	const calendars = UserService.listCalendars('')
	
	return (
		<ScrollView style={styles.container}>
			<View style={styles.calendarsList}>
				{calendars.map(({ id, title }) => (
					<SmallCalendar 
						key={id}
						id={id}
						title={title}
						width={width}
					/>
				))}
			</View>

			<TouchableOpacity onPress={handleAuth}>
				<Text>log out</Text>
			</TouchableOpacity>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors[0],
		flex: 1,
	},
	calendarsList: {
		padding: 12,
		paddingBottom: 0,
		justifyContent: 'space-between',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	calendarContainer: {
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
