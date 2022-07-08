import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import SignUpPage from '@/pages/SignUpPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/users',
    name: 'users',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/pages/UsersPage'),
  },
  {
    path: '/',
    name: 'sign-up',
    component: SignUpPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
