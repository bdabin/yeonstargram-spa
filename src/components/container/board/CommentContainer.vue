<template>
  <div>
    <NavigationBar>
      <template #centerTitle>
        <Icon name="logo" />
      </template>
    </NavigationBar>
    <CommentBoxList
      :comments="comments"
      @nowCoordinates="nowCoordinates"
      @moveCoordinates="moveCoordinates"
    />
    <CommentBoxInput v-model="description" @commentwrite="commentwrite" />
    <!-- #TODO : 댓글 입력박스, 출력박스 구분, 삭제기능 추가 -->
  </div>
</template>

<script>
import axios from 'axios'
import CommentBoxList from '@/components/presentational/organisms/board/CommentBox/List.vue'
import CommentBoxInput from '@/components/presentational/organisms/board/CommentBox/Input.vue'
import NavigationBar from '@/components/presentational/organisms/NavigationBar/index.vue'

import Icon from '@/components/common/Icon'
export default {
  components: {
    CommentBoxList,
    NavigationBar,
    CommentBoxInput,
    Icon
  },
  data() {
    return {
      // #TODO : 입력 data, 출력 data 구분
      description: '',
      comments: [],
      id: this.$route.params.id || null,
      nowX: '',
      leftX: ''
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async commentwrite() {
      // 입력 데이터로 api 전송
      await axios.post(`/api/board/${this.id}/comment`, {
        content: this.description,
        writer: this.$store.state.user.id
      })
      this.loadData()
    },
    async loadData() {
      const response = await axios.get(`/api/board/${this.id}/comment`)
      if (response.status === 200) {
        this.comments = response.data
          .filter(comment => comment.writer)
          .map(data => {
            data.swipe = false
            return data
          })
      }
    },
    nowCoordinates() {
      this.nowX = event.pageX
    },
    moveCoordinates(id) {
      const activeIndex = this.comments.findIndex(data => data.id === id)
      this.leftX = event.pageX
      if (this.leftX < this.nowX) {
        this.comments.map((data, index) => {
          if (index === activeIndex) {
            data.swipe = true
          } else {
            data.swipe = false
          }
          return data
        })
      } else {
        this.comments[activeIndex].swipe = false
      }
    }
  }
}
</script>

<style>
</style>