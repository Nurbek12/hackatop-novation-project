import './main.css'
import App from './app.vue'
import { createApp } from 'vue'
import { router } from './router'
import { createPinia } from 'pinia'
import VMask from '@devindex/vue-mask'

createApp(App)
    .use(router)
    .use(VMask)
    .use(createPinia())
    .mount('#app')