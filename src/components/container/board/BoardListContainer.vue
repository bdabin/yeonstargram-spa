<template>
  <BoardListBox
    :posts="posts"
    @more="onMore"
    @like="onLike"
    @comment="onComment"
    @edit="edit"
    @deleteExecution="deleteExecution"
  />
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
      posts: []
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const response = await axios.get('/api/board')
      console.log(response)
      this.posts = response.data.sort((a, b) => {
        if (a.id > b.id) {
          return 1
        } else if (a.id < b.id) {
          return -1
        } else {
          return 0
        }
      })
    },
    onMore() {
      console.log('더보기')
    },
    onLike() {
      console.log('좋아요')
    },
    onComment() {
      console.log('코멘트 작성')
    },
    edit(id) {
      axios.get(`/api/board/write/${id}`).then(res => {
        console.log(res)
        this.$router.push(`/board/write/${id}`)
      })
    },
    async deleteExecution(id) {
      if (confirm('정말 삭제하시겠습니까?')) {
        const response = await axios.get(`/api/board/delete/${id}`)
        if (response.status === 200) {
          this.loadData()
        } else {
          alert('삭제 할 수 없습니다.')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
