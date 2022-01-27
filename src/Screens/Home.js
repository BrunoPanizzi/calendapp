import { useContext } from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, FlatList } from 'react-native'

import UserService from '../services/UserService'

import { AuthContext } from '../contexts/AuthContext'

import defaultStyles from '../styles/defaultStyles'

import SmallCalendar from '../components/SmallCalendar'
import NewCalendarButton from '../components/NewCalendarButton'


export default function Home() {
	const { width } = Dimensions.get('window')
	const { setAuth } = useContext(AuthContext)
	
	let calendars = UserService.listCalendars('').map(item => (
		<SmallCalendar
			id={item.id}
			title={item.title}
			width={width}
		/>
	))

	calendars.push(<NewCalendarButton width={width} />)

	return (
		<View style={styles.container}>
			<FlatList
				data={calendars}
				renderItem={({ item }) => item}
				keyExtractor={() => Math.random()}
				numColumns={2}
				contentContainerStyle={{paddingHorizontal: defaultStyles.spacing.medium / 2}}
			/>

			<TouchableOpacity onPress={() => setAuth(false)}>
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
