import api from '.'

export const login = (data: any) => api.post('/user/login', data)

export const register = (data: any) => api.post('/user', data)