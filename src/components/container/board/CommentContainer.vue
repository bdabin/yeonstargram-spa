<template>
  <div>
    <NavigationBar>
      <template #centerTitle>
        <Icon name="logo" />
      </template>
    </NavigationBar>
    <CommentBox :comment="comment" @commentwrite="commentwrite"></CommentBox>
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
      comment: [],
      id: this.$route.params.id || null
    }
  },
  methods: {
    async commentwrite() {
      const response = await axios.post(`/api/board/comment/${this.id}`, {
        ...this.comment,
        writer: this.$store.state.user.id
      })

      if (response.status === 200) {
        this.$router.push('/board')
      }
    },
    async loadData() {
      const response = await axios.get(`/api/board/comment/${this.id}`)
      if (response.status === 200) {
        this.comment = response.data.Reply
      }
    }
  },
  created() {
    this.loadData()
  }
}
</script>

<style>
</style>