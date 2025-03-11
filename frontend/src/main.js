import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 라우터 설정 불러오기

const app = createApp(App)
app.use(router) // Vue 앱에 라우터 추가
app.mount('#app')
