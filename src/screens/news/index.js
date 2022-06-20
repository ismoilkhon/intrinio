import React from 'react'
import { styles } from './style'
import { useStore } from '../../store'
import { Text } from '../../components/text'
import { Container } from '../../components/container'
import { FlatList, Linking, Pressable, View } from 'react-native'

export function News() {
	const { news } = useStore()

	return (
		<Container>
			<FlatList
				style={styles.list}
				keyboardDismissMode='on-drag'
				keyExtractor={item => item.id}
				data={news}
				renderItem={({ item }) =>
					<Pressable style={() => [styles.cont]} >
						<View style={styles.contentCont}>
							<Text variant='paragraph'>{item?.title} </Text>
							<Text variant='p'>{item?.summary} </Text>
							<View style={styles.link}>
								<Text variant='label'>
									{item?.publication_date.slice(0, 10)}__
									{item?.publication_date.slice(11, 19)}
								</Text>
								<Text onPress={() => {
									Linking.openURL(`${item.url}`)
								}} variant='label'>See more...</Text>
							</View>
						</View>
					</Pressable>
				}
			/>
		</Container>
	)
}
