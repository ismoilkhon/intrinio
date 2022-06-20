import { api } from '../utilities/api'
import React, { createContext, useContext, useState } from 'react'

export const StoreContext = createContext()
export const useStore = () => useContext(StoreContext)

export function StoreContextProvider({ children }) {
	const [nextPage, setNextPage] = useState('')
	const [companies, setCompanies] = useState({ all: [] })
	const [company, setCompany] = useState({})
	const [news, setNews] = useState({})

	async function loadCompanies(query = '') {
		const params = { page_size: query ? 100 : 20 }

		if (query) {
			params.query = query
		}

		if (nextPage && !query) {
			params.next_page = nextPage
		}

		const data = await api.get(query ? '/companies/search' : '/companies', params)

		const newCompanies = { ...companies }
		if (query) {
			newCompanies[query] = data.companies
		} else {
			setNextPage(data.next_page)
			newCompanies.all = [...companies.all, ...data.companies]
		}

		setCompanies(prev => ({ ...prev, ...newCompanies }))
	}

	async function loadCompany(ticker) {
		const data = await api.get(`/companies/${ticker}`)
		setCompany(data)
	}

	async function loadNews(id) {
		const data = await api.get(`/companies/${id}/news`)
		setNews(data.news)
		console.log(news.news)
	}

	return (
		<StoreContext.Provider
			value={{
				companies,
				company,
				news,
				loadCompanies,
				loadCompany,
				loadNews,
			}}>
			{children}
		</StoreContext.Provider>
	)
}
