<template>
  <div>
    <NavigationBar>
      <template #centerTitle>
        <Icon name="logo" />
      </template>
    </NavigationBar>
    <BoardListBox :posts="posts" />
    <TabBar />
  </div>
</template>

<script>
import axios from 'axios'
import NavigationBar from '@/components/presentational/organisms/NavigationBar/index.vue'
import TabBar from '@/components/presentational/organisms/TabBar/index.vue'
import BoardListBox from '@/components/presentational/organisms/board/BoardListBox/index.vue'
import Icon from '@/components/common/Icon'

export default {
  components: {
    NavigationBar,
    Icon,
    TabBar,
    BoardListBox
  },
  data() {
    return {
      user: this.$route.query.user || undefined,
      id: this.$route.query.id || undefined,
      posts: []
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      this.loading = true
      const response = await axios.get('/api/board', {
        params: {
          writer: this.user
        }
      })
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
    }
  }
}
</script>

<style lang="scss" scoped>
#container {
  overflow: auto;
}
</style>
