<template>
  <Box direction="column" padding="0 0 50px">
    <template v-for="post in posts">
      <Cell
        :loading="loading"
        :key="post.id"
        :post="post"
        @more="(id) => $emit('more', id)"
        @like="(post) => $emit('like', post)"
        @comment="(id) => $emit('comment',id)"
        @edit="(id) => $emit('edit',id)"
        @deleteExecution="(id) => $emit('deleteExecution',id)"
        @mypage="(id) => $emit('mypage',id)"
      />
    </template>
  </Box>
</template>

<script>
import Box from '@/components/presentational/molecules/Box'
import Cell from './Cell'

export default {
  components: {
    Box,
    Cell
  },
  props: {
    posts: {
      type: Array,
      default() {
        return [{}]
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
