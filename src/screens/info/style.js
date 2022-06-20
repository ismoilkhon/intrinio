import { StyleSheet } from 'react-native'
import { theme } from '../../utilities/theme'

export const styles = StyleSheet.create({
	cont: {
		flex: 1,
		paddingHorizontal: theme.sizes.offset,
	},

	buttonRead: {
		alignSelf: 'center',
		marginBottom: theme.sizes.offset * 2,
	},
	info: {
		marginTop: theme.sizes.offset * 1.5,
	},
	btn: {
		marginBottom: theme.sizes.offset,
		alignSelf: 'flex-end',
		borderColor: theme.colors.white,
		borderWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
	},
})
