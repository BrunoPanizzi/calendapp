import { useRef, useEffect } from 'react'
import { StyleSheet, Text, Animated } from 'react-native'

import defaultStyles from '../../styles/defaultStyles'

export default function Day({ delay, day, isThisMonth, size }) {

	const opacity = useRef(new Animated.Value(0)).current

	useEffect(() => {
		Animated.timing(opacity, {
			useNativeDriver: true,
			toValue: 1,
			duration: 200,
			delay: delay * 5
		}).start()
	}, [])

	return (
		<Animated.View
			style={[
				styles.day, 
				{ opacity, width: size, height: size }
			]}
		>
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
		marginTop: '1.2857%',  // magic number do not change
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: defaultStyles.borderRadius,
	},
	text: {
		fontSize: 16,
		color: defaultStyles.colors[700]
	},
	textInMonth: {
		fontWeight: 'bold'
	},
	textNotInMonth: {
		color: defaultStyles.colors[400]
	}
})
