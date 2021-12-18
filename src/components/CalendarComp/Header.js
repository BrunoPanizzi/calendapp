import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import defaultStyles from '../../styles/defaultStyles'

import AnimatedMonth from './AnimatedMonth'

export default function Header({ currDate, previousMonth, nextMonth }) {
	
	const days = [
		<Text key={0} style={styles.day}>D</Text>,
		<Text key={1} style={styles.day}>S</Text>,
		<Text key={2} style={styles.day}>T</Text>,
		<Text key={3} style={styles.day}>Q</Text>,
		<Text key={4} style={styles.day}>Q</Text>,
		<Text key={5} style={styles.day}>S</Text>,
		<Text key={6} style={styles.day}>S</Text>,
	]
	
	return (
		<View>
			<View style={styles.months}>
				<TouchableOpacity onPress={() => previousMonth()}>
					<Ionicons name='chevron-back' size={30} color='white' />
				</TouchableOpacity>

				<AnimatedMonth currDate={currDate}/>
				
				<TouchableOpacity onPress={() => nextMonth()}>
					<Ionicons name='chevron-forward' size={30} color='white' />
				</TouchableOpacity>
			</View>
			<View style={styles.weekDays}> 
				{days}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	months: {
		padding: defaultStyles.spacing.small,
		backgroundColor: defaultStyles.colors.main,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: defaultStyles.borderRadius,
	},
	weekDays: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: defaultStyles.spacing.small,
	},
	day: {
		textAlign: 'center',
		width: '13%',
		fontSize: defaultStyles.text.normal,
		fontWeight: 'bold',
		color: defaultStyles.colors.text,
		backgroundColor: defaultStyles.colors.main,
		borderRadius: defaultStyles.borderRadius,
		padding: defaultStyles.spacing.small
	}
})
