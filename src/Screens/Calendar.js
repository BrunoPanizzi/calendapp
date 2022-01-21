import { StyleSheet, View } from 'react-native'

import CalendarProvider from '../contexts/CalendarContext'

import defaultStyles from '../styles/defaultStyles'

import CalendarComp from '../components/CalendarComp'
import NewEventButton from '../components/NewEventButton'
import DayDetails from '../components/DayDetails'


export default function Calendar({ route }) {
	const { id } = route.params

	return (
		<View style={styles.container}>
			<CalendarProvider>
				<View style={styles.contentContainer}>
					<CalendarComp id={id} />
				</View>
				<View style={styles.contentContainer}>
					<DayDetails />
				</View>

				<NewEventButton calendarId={id} />
			</CalendarProvider>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors[0],
		flex: 1,
		alignItems: 'center',
		padding: defaultStyles.spacing.medium
	},
	contentContainer: {
		width: '100%',
		alignItems: 'center',
		backgroundColor: defaultStyles.colors[100],
		padding: defaultStyles.spacing.medium,
		marginBottom: defaultStyles.spacing.medium,
		borderRadius: defaultStyles.borderRadius
	}
})
