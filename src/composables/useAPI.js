import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://botw-compendium.herokuapp.com/api/v2/category/monsters',
})

const useApi = () => {
  return { instance }
}

export default useApi
