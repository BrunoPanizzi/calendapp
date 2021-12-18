import { useRef, useEffect } from 'react'
import { StyleSheet, Text, Animated } from 'react-native'

import defaultStyles from '../../styles/defaultStyles'

export default function Day({ delay, day, isThisMonth }) {

	const opacity = useRef(new Animated.Value(0)).current

	useEffect(() => {
		Animated.timing(opacity, {
			useNativeDriver: true,
			toValue: 1,
			duration: 200,
			delay: delay*5
		}).start()
	}, [])

	return (
		<Animated.View
			onPress={() => {}}
			style={[
				styles.day, 
				isThisMonth ? styles.inMonth : styles.notInMonth,
				{opacity: opacity}
			]}>
			<Text style={[
				styles.text,
				isThisMonth ? styles.textInMonth : styles.textNotInMonth
				]}>
				{day.getDate()}
			</Text>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	day: {
		width: '13%',
		marginBottom: '0.6%',
		height: '16%',
		justifyContent: 'center', 
		alignItems: 'center',
		borderRadius: defaultStyles.borderRadius,
		elevation: 2
	},
	inMonth: {
		backgroundColor: defaultStyles.colors.background,
		borderWidth: 1,
		borderColor: 'transparent',
		borderBottomColor: defaultStyles.colors.text
	},
	notInMonth: {
		backgroundColor: defaultStyles.colors.background,
	},
	text: {
		fontSize: 16,
		color: defaultStyles.colors.text
	},
	textInMonth: {
		fontWeight: 'bold'
	},
	textNotInMonth: {
		color: defaultStyles.colors.main
	},
	events: {
		height: '50%',
		justifyContent: 'center', 
		alignItems: 'center'
	}
})
