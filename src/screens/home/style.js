import { theme } from '../../utilities/theme'
import { StyleSheet, StatusBar, Platform } from 'react-native'

export const styles = StyleSheet.create({
	list: {
		width: '100%',
	},
	input: {
		margin: Platform.select({
			ios: theme.sizes.offset,
			android: (theme.sizes.offset * 0.5) + StatusBar.currentHeight,
		}),
	},
})
