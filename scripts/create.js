const fs = require('fs')
const path = require('path')

const supportedTypes = {
	screen: 'screens',
	component: 'components',
}

const type = process.argv[2]
const name = process.argv[3]

const styleContent = `import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	cont: {},
})
`

const indexContent = `import React from 'react'
import { styles } from './style.js'
import { View, Text } from 'react-native'

export function ${cap(name)}() {
	return (
		<View style={styles.cont}>
			<Text>${name}</Text>
		</View>
	)
}
`

if (!supportedTypes[type]) {
	console.log(type, 'creation is not supported')
	process.exit()
}

const element = supportedTypes.component
const elementPath = path.join(__dirname, '../src', element, name)

if (fs.existsSync(elementPath)) {
	console.log(type, 'already exists')
	process.exit()
}

fs.mkdirSync(elementPath)
fs.writeFileSync(path.join(elementPath, 'index.js'), indexContent)
fs.writeFileSync(path.join(elementPath, 'style.js'), styleContent)

function cap(str) {
	return str[0].toUpperCase() + str.slice(1)
}
