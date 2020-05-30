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
    boardwrite() {
      axios.post('/api/board/write', this.board).then(res => {
        console.log(res)
      })
      console.log('aa')
    }
  }
}
</script>

<style>
</style>