import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueMoment from 'vue-moment'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(vueMoment)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
