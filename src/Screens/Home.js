import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, FlatList } from 'react-native'

import { Auth } from '../../firebase'

import UserService from '../services/UserService'
import CalendarService from '../services/CalendarService'

import defaultStyles from '../styles/defaultStyles'

import SmallCalendar from '../components/SmallCalendar'
import NewCalendarButton from '../components/NewCalendarButton'


export default function Home() {
	console.log('home rendered')
	const { width } = Dimensions.get('window')
	
	const [calendars, setCalendars] = useState([])
	
	async function get() {
		try {
			// gets calendars
			const calendarsQuery = await CalendarService.getCalendars(Auth.currentUser.uid)
			
			let calendarsComponents = calendarsQuery.docs.map(calendar => (
				<SmallCalendar
					calendar={calendar.data()}
					id={calendar.id}
					width={width}
				/>
			))

			// adds new calendar button to the end
			calendarsComponents.push(<NewCalendarButton width={width} />)
			setCalendars(calendarsComponents)
			
		} catch (e) {	
			console.log(e)
		}
	}
	
	useEffect(() => {
		get()
	}, [])
	
	

	return (
		<View style={styles.container}>
			<FlatList
				data={calendars}
				renderItem={({ item }) => item}
				keyExtractor={() => Math.random()}
				numColumns={2}
				contentContainerStyle={{paddingHorizontal: defaultStyles.spacing.medium / 2}}
				onRefresh={get}
				refreshing={false}
			/>

			<TouchableOpacity onPress={async () => await Auth.signOut()}>
				<Text>log out</Text>
			</TouchableOpacity>
		</View>
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
