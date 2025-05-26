// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import OnboardingView from '../views/OnboardingView.vue';
import ChatbotView from '../views/ChatbotView.vue';
import FoodView from '../views/FoodView.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: OnboardingView
  },
  {
    path: '/chatbot',
    name: 'Chatbot',
    component: ChatbotView
  },
  {
    path: '/food',
    name: 'Food',
    component: FoodView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
