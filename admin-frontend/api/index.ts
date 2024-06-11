import axios, { AxiosError } from 'axios'
import { useIsAuthorized } from '../composables/useIsAuthorized'

const { isAuthorized } = useIsAuthorized()

const api = axios.create({
  baseURL: '/api/admin',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  (response) => {
    isAuthorized.value = true
    return response
  },
  (error) => {
    if ((<AxiosError>error).response?.status === 403) {
      isAuthorized.value = false
    }
  }
)

export default api
