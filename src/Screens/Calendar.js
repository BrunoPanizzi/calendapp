import { StyleSheet, Text, View } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

import CalendarComp from '../components/CalendarComp'

export default function Calendar() {
	return (
		<View style={styles.container}>
			<View style={styles.calendarContainer}>
				<CalendarComp />
			</View>
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
