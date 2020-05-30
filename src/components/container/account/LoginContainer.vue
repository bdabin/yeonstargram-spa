<template>
  <div>
    <flash-message class="myCustomClass"></flash-message>
    <LoginBox :user="user" @login="login" />
  </div>
</template>

<script>
require('vue-flash-message/dist/vue-flash-message.min.css')
import axios from 'axios'
import LoginBox from '@/components/presentational/organisms/account/LoginBox'
export default {
  name: 'LoginContainer',
  components: {
    LoginBox
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      if (this.user.email == '') {
        alert('이메일을 입력해주세요')
        return
      }
      if (this.user.password == '') {
        alert('비밀번호를 입력해주세요')
        return
      }

      let data
      try {
        await axios
          .post('/api/account/login', {
            email: this.user.email,
            password: this.user.password
          })
          .then(res => {
            data = res
          })
      } catch (error) {
        data = error.response
      } finally {
        if (data.status === 200) {
          this.flash('로그인 성공', 'success', {
            timeout: 1000
          })
        } else {
          this.flash('로그인 실패', 'error', {
            timeout: 1000
          })
        }
      }
    }
  }
}
</script>

<style>
</style>