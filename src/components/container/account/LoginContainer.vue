<template>
  <div>
    <LoginBox :user="user" @login="login" />
  </div>
</template>

<script>
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
          console.log('로그인성공')
        } else {
          console.log('로그인 실패')
        }
      }
    }
  }
}
</script>

<style>
</style>