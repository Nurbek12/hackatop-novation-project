import api from '.'

export const get_all_devices = () => api.get('/device')

export const create_device = (data: any) => api.post('/device', data)