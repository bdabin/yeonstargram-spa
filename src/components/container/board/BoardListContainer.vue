<template>
  <div>
    <moreBar
      @closeBtn="closeBtn"
      @edit="edit"
      @deleteExecution="deleteExecution"
      :isMoreBtn="isMoreBtn"
    ></moreBar>
    <NavigationBar>
      <template #centerTitle>
        <Icon name="logo" />
      </template>
    </NavigationBar>
    <BoardListBox
      :loading="loading"
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
        loading: false,
       posts: [{}],
      // #TODO : isList 이름 바꾸기 -> isMoreBtn으로 변경
      isMoreBtn: false,
      id: NaN
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      this.loading = true
      const response = await axios.get('/api/board')
      this.posts = response.data
        .map(post => {
          if (post.Photo) {
            const url = post.Photo.url.split('/')
            post.image = `/api/image/${url[url.length - 1]}`
          }

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
      this.loading = false
    },
    onMore(id) {
      this.isMoreBtn = !this.isMoreBtn
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
      this.$router.push(`/board/${id}/comment`)
    },
    edit() {
      this.$router.push(`/board/write/${this.id}`)
    },
    async deleteExecution() {
      if (confirm('정말 삭제하시겠습니까?')) {
        const response = await axios.delete(`/api/board/delete/${this.id}`)
        // #TODO : 게시물 삭제 백앤드 api 수정 => 수정완료
        // const response = await axios.delete(`/api/board/delete`, {
        //   board_id : this.id
        // })
        if (response.status === 200) {
          this.loadData()
          this.isMoreBtn = false
        } else {
          alert('삭제 할 수 없습니다.')
        }
      }
    },
    mypage(id) {
      this.$router.push(`/mypage/${id}`)
    },

    closeBtn() {
      this.isMoreBtn = !this.isMoreBtn
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-up {
  transition: all 0.25s;
}
.slide-up-enter-active {
  transition: all 0.25s ease;
}
.slide-up-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-up-enter,
.slide-up-leave-active {
  opacity: 0;
  transform: translateY(100%);
}
</style>
