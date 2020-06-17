<template>
  <div>
    <NavigationBar>
      <template #centerTitle>
        <Icon name="logo" />
      </template>
    </NavigationBar>
    <CommentBox :comment="comment" @commentwrite="commentwrite"></CommentBox>
    <!-- #TODO : 댓글 입력박스, 출력박스 구분, 삭제기능 추가 -->
  </div>
</template>

<script>
import axios from 'axios'
import CommentBox from '@/components/presentational/organisms/board/CommentBox/index.vue'
import NavigationBar from '@/components/presentational/organisms/NavigationBar/index.vue'

import Icon from '@/components/common/Icon'
export default {
  components: {
    CommentBox,
    NavigationBar,
    Icon
  },
  data() {
    return {
      // #TODO : 입력 data, 출력 data 구분
      comment: [],
      id: this.$route.params.id || null
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async commentwrite() {
      // 입력 데이터로 api 전송
      const response = await axios.post(`/api/board/${this.id}/comment`, {
        ...this.comment,
        writer: this.$store.state.user.id
      })

      if (response.status === 200) {
        this.$router.push('/board')
      }
    },
    async loadData() {
      const response = await axios.get(`/api/board/${this.id}/comment`)
      if (response.status === 200) {
        this.comment = response.data.Reply
      }
    }
  }
}
</script>

<style>
</style>