import React from 'react'
import { View } from 'react-native'
import { styles } from './style.js'

export function Card({ children }) {
	return <View style={[styles.cont]} >{children}</View>
}
