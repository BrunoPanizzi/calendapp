import { StyleSheet, Text,View, TouchableOpacity, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import UserService from '../services/UserService'

import defaultStyles from '../styles/defaultStyles'

import SmallCalendar from '../components/SmallCalendar'


export default function Home() {
	const navigation = useNavigation()
	const { width } = Dimensions.get('window')
	
	const calendars = UserService.listCalendars('')
	
	return (
		<View style={styles.container}>
			<View style={[styles.calendarsList, {width: width * .9}]}>
				{calendars.map(({ id, title }) => (
					<SmallCalendar title={title} key={id} size={(width * .9 - 36) / 2}/>
				))}
			</View>
			
			<TouchableOpacity 
				style={styles.button} 
				onPress={() => navigation.navigate('Calendar')}
			>
				<Text style={styles.text}>Go to calendar</Text>
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
		width: '90%',
		justifyContent: 'space-between',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	text: {
		color: defaultStyles.colors[700]
	},
	button: {
		backgroundColor: defaultStyles.colors[50],
		borderRadius: defaultStyles.borderRadius,
		padding: defaultStyles.spacing.medium
	}
})
