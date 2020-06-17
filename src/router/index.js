import Vue from 'vue'
import store from '../store'
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
    component: () => import('../views/board/list'),
    async beforeEnter(to, from, next) {
      await store.dispatch('isLogin')
      if (!store.state.isLogin) {
        router.push('/account/login')
        return
      }
      next()
    }
  },
  {
    path: '/board/write',
    name: '쓰기',
    component: () => import('../views/board/write'),
    async beforeEnter(to, from, next) {
      await store.dispatch('isLogin')
      if (!store.state.isLogin) {
        router.push('/account/login')
        return
      }
      next()
    }
  },
  {
    path: '/mypage/:id',
    name: '마이페이지',
    component: () => import('../views/mypage'),
    async beforeEnter(to, from, next) {
      await store.dispatch('isLogin')
      if (!store.state.isLogin) {
        router.push('/account/login')
        return
      }
      next()
    }
  },
  {
    path: '/mypage/follow/:id',
    name: '마이페이지',
    component: () => import('../views/mypage/follow/index.vue'),
    async beforeEnter(to, from, next) {
      await store.dispatch('isLogin')
      if (!store.state.isLogin) {
        router.push('/account/login')
        return
      }
      next()
    }
  },
  {
    path: '/board/write/:id',
    name: '수정',
    component: () => import('../views/board/write'),
    async beforeEnter(to, from, next) {
      await store.dispatch('isLogin')
      if (!store.state.isLogin) {
        router.push('/account/login')
        return
      }
      next()
    }
  },
  {
    path: '/board/comment/:id',
    name: '수정',
    component: () => import('../views/board/comment')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
