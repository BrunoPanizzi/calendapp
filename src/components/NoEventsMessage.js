import { StyleSheet, Text, View } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

export default function NoEventsMessage() {
	return (
		<View>
			<Text style={[styles.text, {marginBottom: defaultStyles.spacing.medium}]}>
				Parece que você ainda não tem nenhum evento por aqui...
			</Text>
			<Text
				style={[
					styles.text,
					{color: defaultStyles.colors[500], fontSize: 24}
				]}
			>
				Crie um no botão abaixo!
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
	fontSize: 20,
	color: defaultStyles.colors[700],
	fontWeight: 'bold',
	textAlign: 'center',
	marginBottom: defaultStyles.spacing.small
}
})