import axios from 'axios'
const baseUrl = '/topic'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getOne = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  }

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }
  
const create = async newObject => {
	const config = {
		headers: { Authorization: token },
	}

	const response = await axios.post(baseUrl, newObject, config)
	return response.data
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getOne, getAll, create, remove, update, setToken }