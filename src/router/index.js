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
    children: [
      {
        path: 'product',
        component: () => import('../views/Product/SanPham.vue'),
        props: true
      },
      {
        path: 'users',
        component: () => import('../views/Product/UserView.vue'),
        props: true
      },
    ]
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
