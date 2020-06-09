<template>
  <div>
    <moreBar
      v-show="isList"
      @closeBtn="closeBtn"
      :id="id"
      @edit="edit"
      @deleteExecution="deleteExecution"
    ></moreBar>
    <transition name="fade">
      <div class="back" v-show="isList"></div>
    </transition>
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
      isList: false,
      id: NaN,
      pageId: NaN
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
          this.isList = false
        } else {
          alert('삭제 할 수 없습니다.')
        }
      }
    },
    mypage(id) {
      this.pageId = id
      this.$router.push(`/mypage/${this.pageId}`)
    },

    closeBtn() {
      this.isList = !this.isList
    }
  }
}
</script>

<style lang="scss" scoped>
.back {
  background: rgba(0, 0, 0, 0.411);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
