import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ChatbotView from './views/ChatbotView.vue'
import FoodView from './views/FoodView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/chatbot', component: ChatbotView },
  { path: '/food', component: FoodView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
