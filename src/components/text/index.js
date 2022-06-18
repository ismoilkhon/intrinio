import React from 'react'
import { styles } from './style.js'
import { Text as _Text } from 'react-native'
import { theme } from '../../utilities/theme/index.js'

export function Text({ children, variant = 'paragraph', color = 'light', style, ...rest }) {
	return <_Text
		{...rest}
		style={[
			styles.text,
			styles[variant],
			{ color: color === 'light' ? theme.colors.white : theme.colors.sacramentoGreen },
			style,
		]}
	>
		{children}
	</_Text>
}
