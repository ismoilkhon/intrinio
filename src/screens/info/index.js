import { styles } from './style'
import { useStore } from '../../store'
import React, { useEffect, useState } from 'react'
import { Pressable, ScrollView, View } from 'react-native'
import { Text } from '../../components/text'
import { useNavigation } from '@react-navigation/native'
import { Container } from '../../components/container'

export function Info({ navigation }) {
	const { company, loadNews } = useStore()
	const { setOptions } = useNavigation()
	const [info, setInfo] = useState(true)

	useEffect(() => {
		setOptions({ title: company?.legal_name })
	}, [])

	useEffect(() => {
		loadNews(company?.id)
	}, [])

	async function navigateToNews(id) {
		await loadNews(id)
		navigation.navigate('News')
	}

	return (
		<Container>
			<ScrollView style={styles.cont}>
				<Text style={styles.info} variant='label' >CEO:</Text>
				<Text variant='body' >{company?.ceo}</Text>
				<Text style={styles.info} variant='label' >Company url:</Text>
				<Text variant='body' >{company?.company_url}</Text>
				<Text style={styles.info} variant='label' >Address:</Text>
				<Text variant='body' >{company?.hq_address1}</Text>
				<Text style={styles.info} variant='label' >City:</Text>
				<Text variant='body' >{company?.hq_address_city}</Text>
				<Text style={styles.info} variant='label' >Status:</Text>
				<Text variant='body' >{company?.entity_status}</Text>
				<Text style={styles.info} variant='label' >Phone number:</Text>
				<Text variant='body' >{company?.business_phone_no}</Text>
				<View>
					<Text style={styles.info} variant='label' >Description:</Text>
					<Text variant='body' >{info ? company?.short_description : company?.long_description }</Text>
					<Pressable
						style={styles.buttonRead}
						onPress={() => info
							? setInfo(false)
							: setInfo(true)
						}
					>
						<Text variant='label'>{info ? 'Read more...' : 'Show less'}</Text>
					</Pressable>
				</View>
				<Pressable
					style={styles.btn}
					onPress={ () => navigateToNews(company?.id)}
				>
					<Text variant='button'>News</Text>
				</Pressable>
			</ScrollView>
		</Container>
	)
}
