<template>
  <Box direction="column">
    <button @click="$router.push('/board/write')">글쓰기</button>
    <template v-for="post in posts">
      <Cell
        :key="post.id"
        :post="post"
        @more="(id) => $emit('more', id)"
        @like="(id) => $emit('like', id)"
        @comment="(id) => $emit('comment',id)"
        @edit="(id) => $emit('edit',id)"
        @deleteExecution="(id) => $emit('deleteExecution',id)"
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
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
