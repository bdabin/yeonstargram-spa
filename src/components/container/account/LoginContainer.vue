<template>
  <div>
    <LoginBox :user="user" @login="login"></LoginBox>
  </div>
</template>

<script>
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
    login() {
      if (this.user.email == '') {
        alert('이메일을 입력해주세요')
        return
      }
      if (this.user.password == '') {
        alert('비밀번호를 입력해주세요')
        return
      }
      console.log('로그인 완료')
    }
  }
}
</script>

<style>
</style>