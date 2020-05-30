<template>
  <WriteBox :board="board" @boardwrite="boardwrite" />
</template>

<script>
import axios from 'axios'
import WriteBox from '@/components/presentational/organisms/board/WriteBox'
export default {
  name: 'WriteContainer',
  components: {
    WriteBox
  },
  data() {
    return {
      board: {
        title: '',
        description: ''
      }
    }
  },

  methods: {
    async boardwrite() {
      const response =  await axios.post('/api/board/write', {
         ...this.board,
         writer:this.$store.state.user.id
      })

      if(response.status === 200) {
        alert('작성이 완료됐습니다 !')
        this.$router.push('/board')
      } else {
        alert('작성할 수 없는 내용입니다.')
      }
    }
  }
}
</script>

<style>
</style>