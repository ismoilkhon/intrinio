import { StyleSheet } from 'react-native'
import { theme } from '../../utilities/theme'

export const styles = StyleSheet.create({
	cont: {
		flexGrow: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		paddingVertical: 10,
		paddingHorizontal: theme.sizes.offset,
		borderBottomColor: 'rgba(0,0,0,0.4)',
		borderBottomWidth: 0.5,
	},
	contentCont: {
		minHeight: theme.sizes.height * 0.3,
		justifyContent: 'space-evenly',
	},
	link: {
		paddingVertical: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})
