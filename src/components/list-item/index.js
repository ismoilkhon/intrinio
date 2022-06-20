import React from 'react'
import { Text } from '../text'
import { colors, styles } from './style.js'
import { Pressable, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

function getIndex(index) {
	return index % colors.length
}

export function ListItem({ name, ticker, index, onPress }) {
	const avatarStyle = { backgroundColor: colors[getIndex(index)] }

	return (
		<>
			<Pressable style={({ pressed }) => [styles.cont, pressed && styles.pressed]} onPress={onPress} >
				<View style={[styles.avatar, avatarStyle]}>
					<Text variant='button'>{name?.slice(0, 2)}</Text>
				</View>
				<View style={styles.contentCont}>
					<Text variant='paragraph' numberOfLines={1} ellipsisMode='tail'>{name}</Text>
					<Text variant='label'>{ticker}</Text>
				</View>
				<View style={styles.iconCont}>
					<Feather name='chevron-right' style={styles.icon} />
				</View>
			</Pressable>
		</>
	)
}
