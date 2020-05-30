import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    user:{
      id:0,
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
      state.isLogin = true
    }
  },
  actions: {
    async login({commit}, payload){
      // console.log(this.$http)
      // const response = await this.$http.post('/api/account/login', payload)
      const response = await axios.post('/api/account/login', payload)

      if(response.status === 200) {
        commit('login',response.data)
      } else {
        console.log('로그인 실패')
      }
    }
  }
})
