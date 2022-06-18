import { StyleSheet } from 'react-native'
import { theme } from '../../utilities/theme'

export const styles = StyleSheet.create({
	cont: {
		borderWidth: 1,
		borderRadius: 6,
		marginBottom: 10,
		overflow: 'hidden',
		flexDirection: 'row',
		borderColor: theme.colors.white,
		marginHorizontal: theme.sizes.offset,
	},
	input: {
		fontSize: 16,
		flexGrow: 1,
		paddingVertical: 8,
		paddingHorizontal: 20,
		color: theme.colors.white,
	},
	icon: {
		color: theme.colors.sacramentoGreen,
		fontSize: 22,
	},
	iconCont: {
		backgroundColor: theme.colors.white,
		paddingHorizontal: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
