import queryString from 'query-string'
import { API_BASE, API_KEY } from '../../../env'

class Api {
	constructor() {
		this.apiKey = API_KEY
		this.baseUrl = API_BASE
	}

	get(path, query, body) {
		return this._request(path, query, body)
	}

	post(path, query, body) {
		return this._request(path, query, body, 'POST')
	}

	async _request(path, query, body, method = 'GET') {
		const params = { method }
		const url = queryString.stringifyUrl({
			url: `${this.baseUrl}${path}`,
			query: { ...query, api_key: this.apiKey },
		})

		if (body) {
			params.body = JSON.stringify(body)
		}

		try {
			const res = await fetch(url, params)
			return await res.json()
		} catch (err) {
			console.log(err)
		}
	}
}

export const api = new Api()
