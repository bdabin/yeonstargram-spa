<template>
  <div>
    <LoginBox :user="user" @login="login" />
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
    async login() {
      const { email, password } = this.user
      if (email == '') {
        alert('이메일을 입력해주세요')
        return
      }
      if (password == '') {
        alert('비밀번호를 입력해주세요')
        return
      }

      await this.$store.dispatch('login', {
        email,
        password
      })

      if (this.$store.state.isLogin) {
        this.$router.push('/board')
      }
    }
  }
}
</script>

<style>
</style>