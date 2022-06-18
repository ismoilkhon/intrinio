import React from 'react'
import { styles } from './style.js'
import { ActivityIndicator } from 'react-native'
import { Container } from '../container/index.js'
import { theme } from '../../utilities/theme/index.js'

export function Loader({ full }) {
	// eslint-disable-next-line no-negated-condition
	return !full
		? <ActivityIndicator size='small' color={theme.colors.white}/>
		: (
			<Container style={[styles.cont, full && styles.full]}>
				<ActivityIndicator size='small' color={theme.colors.white}/>
			</Container>
		)
}
