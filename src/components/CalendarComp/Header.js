import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import propTypes from 'prop-types'

import defaultStyles from '../../styles/defaultStyles'

import AnimatedMonth from './AnimatedMonth'

export default function Header({ currDate, previousMonth, nextMonth }) {
	const arrowConfig = {
		size: defaultStyles.spacing.large,
		color: defaultStyles.colors[700]
	}
	
	return (
		<View>
			<View style={styles.months}>
				<TouchableOpacity onPress={previousMonth}>
					<Entypo name='chevron-left' {...arrowConfig} />
				</TouchableOpacity>

				<AnimatedMonth currDate={currDate}/>

				<TouchableOpacity onPress={nextMonth}>
					<Entypo name='chevron-right' {...arrowConfig} />
				</TouchableOpacity>
			</View>
			<View style={styles.weekDays}>
				<Text key={0} style={styles.day}>D</Text>
				<Text key={1} style={styles.day}>S</Text>
				<Text key={2} style={styles.day}>T</Text>
				<Text key={3} style={styles.day}>Q</Text>
				<Text key={4} style={styles.day}>Q</Text>
				<Text key={5} style={styles.day}>S</Text>
				<Text key={6} style={styles.day}>S</Text>
			</View>
		</View>
	)
}

Header.propTypes = { 
	currDate: propTypes.instanceOf(Date).isRequired, 
	previousMonth: propTypes.func.isRequired, 
	nextMonth: propTypes.func.isRequired 
}

const styles = StyleSheet.create({
	months: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	weekDays: {
		borderRadius: defaultStyles.borderRadius,
		backgroundColor: defaultStyles.colors[0],
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
		color: defaultStyles.colors[400],
		borderRadius: defaultStyles.borderRadius,
		padding: defaultStyles.spacing.small
	}
})
