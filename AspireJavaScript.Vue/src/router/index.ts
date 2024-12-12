// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'  // Changed to type-only import

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/authentication/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/authentication/logout',
    name: 'logout',
    component: () => import('../views/LogoutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router