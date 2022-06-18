import React from 'react'
import { styles } from './style.js'
import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from '../../utilities/theme/index.js'
import { View, TextInput, Pressable, ActivityIndicator } from 'react-native'

export function Input({ iconName = 'search', Icon = Ionicons, onIconPress, style, loading, ...rest }) {
	return (
		<View style={[styles.cont, style]}>
			<TextInput
				{...rest}
				style={styles.input}
				keyboardAppearance='dark'
				placeholderTextColor='gray'
			/>
			{onIconPress && (
				<Pressable style={styles.iconCont} onPress={onIconPress}>
					{loading
						? <ActivityIndicator size='small' color={theme.colors.sacramentoGreen}/>
						: <Icon name={iconName} style={styles.icon}/>
					}
				</Pressable>
			)}
		</View>
	)
}
