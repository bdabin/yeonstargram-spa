import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import upload from './upload'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    upload:upload
  },
  state: {
    isLogin:false,
    user:{
      id:null,
      username:'',
      email:'',
      phone:''
    }
  },
  mutations: {
    login(state, payload) {
      const user = {
        id : payload.id,
        username: payload.username,
        email: payload.email,
        phone : payload.phone
      }
      state.user = user
    },
    isLogin(state, payload) {
      if(!payload) {
        state.user = {
          id:null,
          username:'',
          email:'',
          phone:''
        }
      }
      state.isLogin = payload
    }
  },
  actions: {
    async login({dispatch}, payload){
      const response = await axios.post('/api/account/login', payload)

      if(response.status === 200) {
        await dispatch('isLogin')
      } else {
        console.log('로그인 실패')
      }
    },
  async isLogin({commit}) {
      const response = await axios.get('/api/account')
      if(response.status === 200) {
        commit('login', response.data)
        commit('isLogin', true)
      } else {
        commit('isLogin', false)
      }
    }
  },
  
})
