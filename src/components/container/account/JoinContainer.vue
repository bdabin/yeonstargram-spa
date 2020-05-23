<template>
  <JoinBox :user="user" @goJoin="goJoin" />
</template>

<script>
import axios from 'axios'

import JoinBox from '@/components/presentational/organisms/account/JoinBox'
export default {
  components: {
    JoinBox
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
        rePassword: '',
        username: '',
        phone: ''
      }
    }
  },
  methods: {
    async goJoin() {
      if (this.user.password !== this.user.rePassword) {
        alert('비밀번호가 일치하지 않습니다 !')
        return
      } else if (this.user.username === '') {
        alert('이름을 입력해주세요 !')
        return
      } else if (this.user.phone === '') {
        alert('휴대폰 번호를 입력해주세요 !')
        return
      }
      const { email, password, username, phone } = this.user

      let data
      try {
        await axios
          .post('/api/account', {
            email,
            password,
            username,
            phone
          })
          .then(res => {
            data = res
          })
      } catch (error) {
        data = error.response
      } finally {
        if (data.status === 200) {
          // 회원가입 성공
          console.log('회원가입 성공')
        } else {
          // 회원가입 실패
          console.log('회원가입 실패')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>