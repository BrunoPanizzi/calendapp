import { useEffect, useState } from 'react'
import { 
	StyleSheet, 
	View, 
	Text, 
	Dimensions, 
	TouchableOpacity, 
	FlatList, 
	ActivityIndicator 
} from 'react-native'

import { onSnapshot } from 'firebase/firestore'

import { Auth } from '../../firebase'

import CalendarService from '../services/CalendarService'

import defaultStyles from '../styles/defaultStyles'

import SmallCalendar from '../components/SmallCalendar'
import NewCalendarButton from '../components/NewCalendarButton'


export default function Home() {
	const { width } = Dimensions.get('window')
	
	const [calendars, setCalendars] = useState([])
	const [loading, setLoading] = useState(true)
		
	useEffect(() => {
		const calendarsQuery = CalendarService.getCalendars(Auth.currentUser.uid)
		const unsub = onSnapshot(calendarsQuery, (querySnapshot) => {
			setCalendars(querySnapshot.docs)
			setLoading(false)
		})

		return unsub
	}, [])
	
	return (
		<View style={styles.container}>
			{loading ? 
				<ActivityIndicator size='large' color={defaultStyles.colors[500]} /> :
				<FlatList
					data={calendars}
					renderItem={({ item }) => 
						<SmallCalendar
							calendar={item.data()}
							id={item.id}
							width={width}
						/>
					}
					keyExtractor={() => Math.random()}
					numColumns={2}
					contentContainerStyle={{paddingHorizontal: defaultStyles.spacing.medium / 2}}
				/>
			}

			<NewCalendarButton width={width} />
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
