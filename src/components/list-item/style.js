import Color from 'color'
import { StyleSheet } from 'react-native'
import { theme } from '../../utilities/theme'

export const colors = ['#F55D42', '#2ADAF5', '#F5AE11', '#1DF59A', '#427EF5', '#1D6BF5']

export const styles = StyleSheet.create({
	cont: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'flex-start',
		paddingVertical: 10,
		paddingHorizontal: theme.sizes.offset,
		borderBottomColor: 'rgba(0,0,0,0.4)',
		borderBottomWidth: 0.5,
	},
	avatar: {
		width: 60,
		height: 60,
		marginRight: 20,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Color(theme.colors.sacramentoGreen).darken(0.2).rgb().toString(),
	},
	contentCont: {
		height: 60,
		justifyContent: 'space-evenly',
		maxWidth: theme.sizes.width * 0.6,
	},
	iconCont: {
		top: 10,
		height: 60,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		right: theme.sizes.offset,
	},
	icon: {
		fontSize: 20,
		color: theme.colors.white,
	},
	pressed: {
		backgroundColor: Color(theme.colors.sacramentoGreen).darken(0.1).rgb().toString(),
	},
})
