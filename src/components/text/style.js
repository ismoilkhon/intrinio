import { StyleSheet } from 'react-native'
import { theme } from '../../utilities/theme'

export const styles = StyleSheet.create({
	text: {
		color: theme.colors.white,
	},
	paragraph: {
		fontSize: 24,
		fontWeight: '300',
	},
	body: {
		fontSize: 20,
	},
	header: {
		fontSize: 30,
		fontWeight: '600',
	},
	button: {
		fontSize: 18,
		letterSpacing: 1.2,
		textTransform: 'uppercase',
	},
	label: {
		fontSize: 14,
		fontWeight: '200',
	},
})
