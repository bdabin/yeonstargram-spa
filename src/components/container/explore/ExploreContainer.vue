<template>
  <div>
    <NavigationBar>
      <template #centerTitle>
        <input type="text" :value="data" @input="e => data = e.target.value" />
      </template>
    </NavigationBar>
    <mypageboardlist :boards="boards" />
    <TabBar />
  </div>
</template>

<script>
import axios from 'axios'
import NavigationBar from '@/components/presentational/organisms/NavigationBar/index.vue'
import TabBar from '@/components/presentational/organisms/TabBar/index.vue'
import mypageboardlist from '@/components/presentational/organisms/mypage/BoardListBox.vue'

export default {
  components: {
    NavigationBar,
    TabBar,
    mypageboardlist
  },
  data() {
    return {
      data: '',
      boards: []
    }
  },
  watch: {
    data() {
      this.searchBoard()
    }
  },
  methods: {
    async searchBoard() {
      const response = await axios.get('/api/board/explore', {
        params: {
          name: this.data
        }
      })

      this.boards = response.data.map(board => {
        if (board.Photo) {
          const url = board.Photo.url.split('/')
          board.image = `/api/image/${url[url.length - 1]}`
          board.filter = board.Photo.filter
        }
        return board
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
