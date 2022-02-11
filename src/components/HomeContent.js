import { StyleSheet, Text, View, Dimensions } from 'react-native'
import propTypes from 'prop-types'

import SmallCalendar from './SmallCalendar'
import NoCalendarMessage from './NoCalendarMessage'

import defaultStyles from '../styles/defaultStyles'


export default function HomeContent({ calendars }) {
	const { width } = Dimensions.get('window')
	return (
		<View>
			<Text style={styles.sectionTitle}>Seus calendários: </Text>
			<View style={styles.calendarsContainer} >
				{calendars.length 
					? calendars.map(calendar => (
						<SmallCalendar
							calendar={calendar.data()}
							id={calendar.id}
							width={(width - defaultStyles.spacing.medium * 3 ) / 2} // magic number do not change
						/>
					))
					: <NoCalendarMessage />
				}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	calendarsContainer: {
		flexDirection: 'row', 
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: defaultStyles.colors[700],
		marginBottom: defaultStyles.spacing.small
	}
})