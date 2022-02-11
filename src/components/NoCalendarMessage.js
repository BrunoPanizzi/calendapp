import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import defaultStyles from '../styles/defaultStyles'

export default function NoCalendarMessage() {
	const navigation = useNavigation()
	
	return (
		<View style={styles.container}>
			<Text style={styles.nothingHere}>Nada por aqui...</Text>
			<TouchableOpacity 
				style={styles.firstCalendarContainer}
				onPress={() => navigation.navigate('NewCalendar')}
			>
				<Text style={styles.firstCalendar}>Crie seu primeiro calendário!</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	nothingHere: {
		fontSize: 24,
		color: defaultStyles.colors[300],
		fontWeight: 'bold',
	},
	firstCalendarContainer: {
		marginVertical: defaultStyles.spacing.medium,
		backgroundColor: defaultStyles.colors[500],
		borderRadius: defaultStyles.borderRadius,
		padding: defaultStyles.spacing.medium
	},
	firstCalendar: {
		color: defaultStyles.colors[0],
		fontWeight: 'bold',
		fontSize: 16
	}
})