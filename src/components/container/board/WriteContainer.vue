<template>
  <div>
    <NavigationBar>
      <template #centerTitle>
        <Icon name="logo" />
      </template>
    </NavigationBar>
    <WriteBox :board="board" @boardwrite="boardwrite" />
    <TabBar />
  </div>
</template>

<script>
import axios from 'axios'
import WriteBox from '@/components/presentational/organisms/board/WriteBox'

import NavigationBar from '@/components/presentational/organisms/NavigationBar/index.vue'
import TabBar from '@/components/presentational/organisms/TabBar/index.vue'
import Icon from '@/components/common/Icon'

export default {
  name: 'WriteContainer',
  components: {
    WriteBox,
    NavigationBar,
    Icon,
    TabBar
  },
  data() {
    return {
      board: {
        title: '',
        description: ''
      },
      id: this.$route.params.id || null
    }
  },
  created() {
    this.routeIdCheck()
  },
  methods: {
    routeIdCheck() {
      if (this.id) {
        axios.get(`/api/board/write/${this.id}`).then(res => {
          console.log(res.data)
          this.board.title = res.data.title
          this.board.description = res.data.description
        })
        console.log('aaaaa')
      } else {
        console.log('error')
      }
    },

    async boardwrite() {
      if (!this.id) {
        const response = await axios.post('/api/board/write', {
          ...this.board,
          writer: this.$store.state.user.id
        })
        if (response.status === 200) {
          alert('작성이 완료됐습니다 !')
          this.$router.push('/board')
        } else {
          alert('작성할 수 없는 내용입니다.')
        }
      } else {
        const response = await axios.post(`/api/board/write/${this.id}`, {
          ...this.board,
          writer: this.$store.state.user.id
        })

        if (response.status === 200) {
          this.$router.push('/board')
        }
      }
    }
  }
}
</script>

<style>
</style>