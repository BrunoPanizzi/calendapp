import { useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Animated } from 'react-native'

import defaultStyles from '../../styles/defaultStyles'

import Form from './Form'

export default function MainLoginContent() {
	const [width, setWidth] = useState(0)
	const selectionRef = useRef()
	const selectorAnimation = useRef(new Animated.Value(0)).current
	
	const scrollSelector = pos => {
		Animated.timing(selectorAnimation, {
			duration: 350,
			useNativeDriver: true,
			toValue: pos
		}).start()
	}
	
	const scrollToPosition = pos => {
		const selectorPos = pos === 0 ? pos / 2 : pos / 2 - defaultStyles.spacing.medium
		scrollSelector(selectorPos)
		selectionRef.current.scrollTo({
			x: pos,
			animated: true,
		})
	}
	
	return (
		<View 
			style={styles.container}
			onLayout={e => setWidth(e.nativeEvent.layout.width)}
		>
			<View style={styles.navBar}>
				<Animated.View 
					style={[
						styles.selector, 
						{transform: [{translateX: selectorAnimation}]}]}
				/>
				<TouchableOpacity 
					style={styles.textContainer}
					onPress={() => scrollToPosition(0)}
				>
					<Text style={styles.text}>Login</Text>
				</TouchableOpacity>
			
				<TouchableOpacity 
					style={styles.textContainer}
					onPress={() => scrollToPosition(width + defaultStyles.spacing.medium * 2)}
				>
					<Text style={styles.text}>Criar conta</Text>
				</TouchableOpacity>
			</View>

			<ScrollView 
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				scrollEnabled={false}
				ref={selectionRef}
			>
				<View style={{width, marginRight: defaultStyles.spacing.medium}}>
					<Form mode='login'/>
				</View>
				<View style={{width, marginLeft: defaultStyles.spacing.medium}}>
					<Form mode='signUp'/>
				</View>
			</ScrollView>
		
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		// marginBottom: defaultStyles.spacing.large * 3
	},
	navBar: {
		backgroundColor: defaultStyles.colors[100],
		borderRadius: defaultStyles.borderRadius,
		paddingVertical: defaultStyles.spacing.medium,
		marginBottom: defaultStyles.spacing.medium,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	selector: {
		position: 'absolute',
		width: '50%',
		top: 0,
		bottom: 0,
		borderRadius: defaultStyles.borderRadius,
		borderWidth: 3,
		borderColor: defaultStyles.colors[500],
		
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	text: {
		textAlign: 'center',
		fontSize: defaultStyles.text.big,
		fontWeight: 'bold',
		color: defaultStyles.colors[700]
	}
})
