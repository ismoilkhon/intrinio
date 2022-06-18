import React from 'react'
import { Text } from '../text'
import { styles } from './style.js'
import { Pressable, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

export function ListItem({ name, ticker, onPress }) {
	return (
		<Pressable style={({ pressed }) => [styles.cont, pressed && styles.pressed]} onPress={onPress}>
			<View style={styles.avatar}>
				<Text variant='button'>{name?.slice(0, 2)}</Text>
			</View>
			<View style={styles.contentCont}>
				<Text variant='paragraph' numberOfLines={1} ellipsisMode='tail'>{name}</Text>
				<Text variant='label'>{ticker}</Text>
			</View>
			<View style={styles.iconCont}>
				<Feather name='chevron-right' style={styles.icon}/>
			</View>
		</Pressable>
	)
}
