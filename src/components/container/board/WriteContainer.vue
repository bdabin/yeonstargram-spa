<template>
  <div>
    <NavigationBar @rightBtn="checkUpdateMode">
      <template #centerTitle>
        <Icon name="logo" />
      </template>
      <template #rightBtn>
        <Span type="title1">등록</Span>
      </template>
    </NavigationBar>
    <WriteBox :board="board" />
    <TabBar />
  </div>
</template>

<script>
import axios from 'axios'
import WriteBox from '@/components/presentational/organisms/board/WriteBox/index.vue'
import NavigationBar from '@/components/presentational/organisms/NavigationBar/index.vue'
import TabBar from '@/components/presentational/organisms/TabBar/index.vue'
import Icon from '@/components/common/Icon'
import Span from '@/components/presentational/atoms/Span'

export default {
  name: 'WriteContainer',
  components: {
    WriteBox,
    NavigationBar,
    TabBar,
    Icon,
    Span
  },
  data() {
    return {
      board: {
        description: '',
        tag: ''
      },
      id: this.$route.params.id || null
    }
  },
  created() {
    this.routeIdCheck()
  },
  methods: {
    async routeIdCheck() {
      if (this.id) {
        await axios.get(`/api/board/write/${this.id}`).then(res => {
          this.board.title = res.data.title
          this.board.description = res.data.description
        })
      }
    },
    checkUpdateMode() {
      // 수정모드인지 확인
      if (this.id) {
        this.boardUpdate()
      } else {
        this.boardWrite()
      }
    },
    async boardWrite() {
      // 글쓰기
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
    },
    async boardUpdate() {
      // 글 수정
      const response = await axios.post(`/api/board/write/${this.id}`, {
        ...this.board,
        writer: this.$store.state.user.id
      })

      if (response.status === 200) {
        this.$router.push('/board')
      } else {
        alert('수정할 수 없습니다.')
      }
    }
  }
}
</script>

<style>
</style>