import React from 'react'
import { styles } from './style.js'
import { Text } from '../text/index.js'
import { Pressable, View } from 'react-native'

export function Button({ title, variant = 'outlined', onPress }) {
	return (
		<Pressable style={({ pressed }) => [styles.cont, pressed && styles.pressed]} onPress={onPress}>
			<View style={[styles.innerCont, styles[variant]]}>
				<Text
					variant='button'
					style={variant === 'filled' && styles.bold}
					color={variant === 'filled' ? 'dark' : 'light'}
				>
					{title}
				</Text>
			</View>
		</Pressable>
	)
}
