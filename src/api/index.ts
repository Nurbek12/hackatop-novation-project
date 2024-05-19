import axios from "axios"
import { useAppStore } from '../store'

const api = axios.create({ baseURL: import.meta.env.VITE_BACKEND_URL||'' })
const store = useAppStore()

api.interceptors.response.use(
    (resp) => {
        checkToken()
        return resp
    },
    (err) => {
        if(err.response && err.response.status === 401) {
            store.log_out()
            return
        }
        return Promise.reject(err)
    }
)

export const checkToken = () => {
    const token = store.token||''
    if(token) api.defaults.headers.common.Authorization = `Bearer ${token}`
}

checkToken()

export default api