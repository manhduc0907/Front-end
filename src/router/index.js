import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Admin/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin/IndexView.vue'),
    children: [
      {
        path: 'product',
        component: () => import('../views/Admin/SanPham.vue'),
        props: true
      },
      {
        path: 'users',
        component: () => import('../views/Admin/UserView.vue'),
        props: true
      },
    ]
  },
  {
    path: '/dangnhap',
    name: 'DangNhap',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin/DangNhap.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
