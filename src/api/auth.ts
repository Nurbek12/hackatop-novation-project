import api from '.'

export const login = (data: any) => api.post('/user/login/', data)

export const register = (data: any) => api.post('/user/', data)

export const create_otp = (data: any) => api.post('/user/regenerate-otp/', data)

export const verify = (data: any) => api.post('/user/verify-otp/', data)