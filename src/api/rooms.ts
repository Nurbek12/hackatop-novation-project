import api from '.'

export const get_all_rooms = () => api.get('/room')

export const create_room = (data: any) => api.post('/room', data)
// export const get_all_rooms = () => api.get('/room')