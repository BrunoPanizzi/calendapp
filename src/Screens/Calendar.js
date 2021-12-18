import { StyleSheet, Text, View } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

import CalendarComp from '../components/CalendarComp'

export default function Calendar() {
	return (
		<View style={styles.container}>
			<CalendarComp />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.background,
		flex: 1,
		alignItems: 'center'
	},
})
