import React from 'react'
import { styles } from './style.js'
import { View } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements'

export function Container({ children, style }) {
	const headerHeight = useHeaderHeight()
	return <View style={[styles.cont, { marginTop: headerHeight }, style]}>{children}</View>
}
