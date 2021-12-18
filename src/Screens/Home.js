import { StyleSheet, Text,View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import defaultStyles from '../styles/defaultStyles'

export default function Home() {
	const navigation = useNavigation()
	
	return (
		<View style={styles.container}>
			<TouchableOpacity 
				style={styles.button} 
				onPress={() => navigation.navigate('Calendar')}
			>
				<Text style={styles.text}>Go to calendar</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.background,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: defaultStyles.colors.text
	},
	button: {
		backgroundColor: defaultStyles.colors.main,
		borderRadius: defaultStyles.borderRadius,
		padding: defaultStyles.spacing.medium
	}
})
