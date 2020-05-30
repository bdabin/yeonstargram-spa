<template>
  <Box direction="column">
    <template v-for="post in posts">
      <Cell :key="post.id" :post="post" @more="(id) => $emit('more', id)" @like="(id) => $emit('like', id)" @comment="(id) => $emit('comment',id)" />
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
