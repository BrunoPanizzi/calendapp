import { StyleSheet, View, Dimensions } from 'react-native'

import UserService from '../services/UserService'

import defaultStyles from '../styles/defaultStyles'

import SmallCalendar from '../components/SmallCalendar'


export default function Home() {
	const { width } = Dimensions.get('window')
	
	const calendars = UserService.listCalendars('')
	
	return (
		<View style={styles.container}>
			<View style={[styles.calendarsList]}>
				{calendars.map(({ id, title }) => (
					<SmallCalendar title={title} key={id} size={(width - 36) / 2}/>
				))}
			</View>
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
	text: {
		color: defaultStyles.colors[700]
	}
})
