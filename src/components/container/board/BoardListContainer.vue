<template>
  <div>
    <moreBar v-show="isList" @closeBtn="closeBtn" @edit="edit" @deleteExecution="deleteExecution"></moreBar>
    <NavigationBar>
      <template #centerTitle>
        <Icon name="logo" />
      </template>
    </NavigationBar>
    <BoardListBox
      :posts="posts"
      @more="onMore"
      @like="onLike"
      @comment="onComment"
      @mypage="mypage"
    />

    <TabBar />
  </div>
</template>

<script>
import axios from 'axios'
import BoardListBox from '@/components/presentational/organisms/board/BoardListBox/index.vue'
import NavigationBar from '@/components/presentational/organisms/NavigationBar/index.vue'
import moreBar from '@/components/presentational/organisms/moreBar/index.vue'
import TabBar from '@/components/presentational/organisms/TabBar/index.vue'

import Icon from '@/components/common/Icon'

export default {
  components: {
    BoardListBox,
    NavigationBar,
    Icon,
    TabBar,
    moreBar
  },
  data() {
    return {
      posts: [],
      // #TODO : isList 이름 바꾸기
      isList: false,
      id: NaN
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const response = await axios.get('/api/board')
      this.posts = response.data
        .map(post => {
          const result = post.like.find(data => data.user_id === this.$store.state.user.id)
          post.likeIt = Boolean(result)
          return post
        })
        .sort((a, b) => {
          if (a.id > b.id) {
            return -1
          } else if (a.id < b.id) {
            return 1
          } else {
            return 0
          }
        })
    },
    onMore(id) {
      this.isList = !this.isList
      this.id = id
    },
    async onLike(post) {
      const method = post.likeIt ? 'delete' : 'post'
      const response = await axios({
        method,
        url: '/api/board/like',
        data: {
          user_id: this.$store.state.user.id,
          board_id: post.id
        }
      })

      if (response.status === 200) {
        post.likeIt = !post.likeIt
      }
    },
    onComment(id) {
      this.$router.push(`/board/comment/${id}`)
    },
    edit() {
      this.$router.push(`/board/write/${this.id}`)
    },
    async deleteExecution() {
      if (confirm('정말 삭제하시겠습니까?')) {
        const response = await axios.delete(`/api/board/delete/${this.id}`)
        // #TODO : 게시물 삭제 백앤드 api 수정
        // const response = await axios.delete(`/api/board/delete`, {
        //   board_id : this.id
        // })
        if (response.status === 200) {
          this.loadData()
          this.isList = false
        } else {
          alert('삭제 할 수 없습니다.')
        }
      }
    },
    mypage(id) {
      this.$router.push(`/mypage/${id}`)
    },

    closeBtn() {
      this.isList = !this.isList
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
