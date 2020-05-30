import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views')
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/work')
  },
  {
    path: '/account/login',
    name: '로그인',
    component: () => import('../views/account/login')
  },
  {
    path: '/account/join',
    name: '회원가입',
    component: () => import('../views/account/join')
  },
  {
    path: '/board',
    name: '목록',
    component: () => import('../views/board/list')
  },
  {
    path: '/board/write',
    name: '쓰기',
    component: () => import('../views/board/write')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
