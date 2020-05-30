<template>
  <BoardListBox :posts="posts" @more="onMore" @like="onLike" @comment="onComment" />
</template>

<script>
import axios from 'axios'
import BoardListBox from '@/components/presentational/organisms/board/BoardListBox/index.vue'
export default {
  components: {
    BoardListBox
  },
  data() {
    return {
      posts: [
      ]
    }
  },
  created(){
    this.loadData()
  },
  methods:{
    async loadData(){
      const response = await axios.get('/api/board')
      console.log(response)
      this.posts = response.data.sort((a,b) => {
        if(a.id > b.id) {
          return 1
        } else if (a.id < b.id) {
          return -1
        } else {
          return 0
        }
      })
    },
    onMore(){
      console.log('더보기')
    },
    onLike(){
      console.log('좋아요')
    },
    onComment(){
      console.log('코멘트 작성')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
