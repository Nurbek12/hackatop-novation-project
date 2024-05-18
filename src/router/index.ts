import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/auth',
            component: () => import('../pages/auth/layout.vue'),
            children: [
                { path: '', component: () => import('../pages/auth/index.vue') },
                { path: 'login', component: () => import('../pages/auth/login.vue') },
                { path: 'verify', component: () => import('../pages/auth/verify.vue') },
                { path: 'register', component: () => import('../pages/auth/register.vue') },
            ]
        },
        {
            path: '/',
            component: () => import('../pages/dashboard/layout.vue'),
            children: [
                { path: '', component: () => import('../pages/dashboard/index.vue') },
                { path: 'rooms', component: () => import('../pages/dashboard/rooms.vue') },
                { path: 'devices', component: () => import('../pages/dashboard/devices.vue') },
            ]
        }
    ]
})