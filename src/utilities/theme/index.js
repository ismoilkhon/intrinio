import { Dimensions } from 'react-native'

export const theme = {
	colors: {
		white: '#ffffff',
		sacramentoGreen: '#08292E',
	},
	sizes: {
		offset: 20,
		...Dimensions.get('window'),
	},
}
