import { styles } from './style'
import { useStore } from '../../store'
import { FlatList } from 'react-native'
import { Input } from '../../components/input'
import React, { useEffect, useState } from 'react'
import { ListItem } from '../../components/list-item'
import { Container } from '../../components/container'

export function Home({ navigation }) {
	const [query, setQuery] = useState('')
	const [loading, setLoading] = useState(false)
	const { companies, loadCompanies, loadCompany } = useStore()

	useEffect(() => {
		loadCompanies(query)
	}, [])

	useEffect(() => {
		loadCompany()
	}, [])

	async function search() {
		if (query && !loading) {
			setLoading(true)
			await loadCompanies(query)
			setLoading(false)
		}
	}

	async function navigateToInfo(item) {
		await loadCompany(item?.ticker)
		navigation.navigate('Info')
	}

	return (
		<Container>
			<Input
				value={query}
				loading={loading}
				style={styles.input}
				onIconPress={search}
				returnKeyType='search'
				returnKeyLabel='Search'
				onChangeText={setQuery}
				onSubmitEditing={search}
				placeholder='Search for companies'
			/>
			<FlatList
				style={styles.list}
				keyboardDismissMode='on-drag'
				keyExtractor={item => item.id}
				onEndReached={() => loadCompanies(query)}
				data={query ? companies[query] : companies.all}
				renderItem={
					({ item, index }) => <ListItem
						{...item}
						index={index}
						onPress={() => navigateToInfo(item)}
					/>
				}
			/>
		</Container>
	)
}
