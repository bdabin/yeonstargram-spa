<template>
  <Box class="mypage-board-list" wrap padding="0 0 40px">
    <Box
      v-for="board in boards"
      :key="board.id"
      class="board-box"
      @click.native="$emit('detail',board.id)"
    >
      <Box :class="`${board.filter} content`" :style="`background-image:url(${board.image})`"></Box>
    </Box>
  </Box>
</template>

<script>
import Box from '@/components/presentational/molecules/Box'
export default {
  components: {
    Box
  },
  props: {
    boards: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mypage-board-list {
  width: 100%;
  position: relative;
  .board-box {
    display: flex;
    position: relative;
    flex-direction: column;
    width: calc((100vw) / 3);
    height: calc((100vw) / 3);
    background: #000;
    box-sizing: border-box;
    border: 0.5px solid #fff;
    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }
}
</style>