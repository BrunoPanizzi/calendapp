import { StyleSheet, Text, View } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

import CalendarComp from '../components/CalendarComp'
import NewEventButton from '../components/NewEventButton'

export default function Calendar({ route }) {
	const { id } = route.params

	return (
		<View style={styles.container}>
			<View style={styles.calendarContainer}>
				<CalendarComp id={id} />
			</View>
			<NewEventButton calendarId={id} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors[0],
		flex: 1,
		alignItems: 'center',
		padding: defaultStyles.spacing.large
	},
	calendarContainer: {
		backgroundColor: defaultStyles.colors[100],
		padding: defaultStyles.spacing.medium,
		borderRadius: defaultStyles.borderRadius
	}
})
