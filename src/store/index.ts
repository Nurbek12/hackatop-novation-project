import cookie from 'js-cookie'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        token: cookie.get('admin-token')||null,
        user: JSON.parse(localStorage.getItem ('admin-user') || "null"),
        rooms: [],
        devices: [],
    }),
    getters: {
        isLogged: state => !!state.token,
        get_token: state => state.token,
        get_user: state => state.user,
        rooms: state => state.rooms, 
        devices: state => state.devices, 
    },
    actions: {
        set_token(token: string | null) {
            if(token)
                cookie.set('admin-token', token, { expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000) })
            else
                cookie.remove('admin-token')
            
            this.$patch({ token })
        },
        set_user(user: any|null) {
            if(user)
                localStorage.setItem('admin-user', JSON.stringify(user))
            else
                localStorage.removeItem('admin-user')
            
            this.$patch({ user })
        },
        log_out() {
            this.set_token(null)
            this.set_user(null)
            window.location.href = '/auth/login'
        },
    }
})