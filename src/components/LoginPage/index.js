import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import defaultStyles from '../../styles/defaultStyles'

import LoginForm from './LoginForm'

export default function MainLoginContent() {
	const [selectedMode, setSelectedMode] = useState('login')
	
	return (
		<View style={styles.container}>
			<View style={styles.navBar}>
				<TouchableOpacity 
					style={styles.textContainer}
					onPress={() => setSelectedMode('login')}
				>
					<Text style={styles.text}>Login</Text>
				</TouchableOpacity>
			
				<TouchableOpacity 
					style={styles.textContainer}
					onPress={() => setSelectedMode('signUp')}
				>
					<Text style={styles.text}>Criar conta</Text>
				</TouchableOpacity>
			</View>

			<LoginForm mode={selectedMode} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	navBar: {
		backgroundColor: defaultStyles.colors[100],
		borderRadius: defaultStyles.borderRadius,
		paddingVertical: defaultStyles.spacing.medium,
		marginBottom: defaultStyles.spacing.medium,
		flexDirection: 'row',
		justifyContent: 'space-around'
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
