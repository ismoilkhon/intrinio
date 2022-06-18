import { StyleSheet } from 'react-native'
import { theme } from '../../utilities/theme'

export const styles = StyleSheet.create({
	cont: {
		borderWidth: 1,
		marginRight: 20,
		borderRadius: 6,
		marginVertical: 10,
		overflow: 'hidden',
		borderColor: theme.colors.white,
	},
	pressed: {
		opacity: 0.6,
	},
	innerCont: {
		paddingVertical: 8,
		paddingHorizontal: 20,
	},
	filled: {
		backgroundColor: theme.colors.white,
	},
	bold: {
		fontWeight: '600',
	},
})
