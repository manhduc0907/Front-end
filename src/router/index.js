import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Product/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product/AdminView.vue')
  },
  {
    path: '/dangnhap',
    name: 'DangNhap',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product/DangNhap.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
