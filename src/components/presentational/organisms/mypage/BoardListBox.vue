<template>
  <Box class="mypage-board-list" padding="0 0 40px">
    <Box v-for="(board,index) in mypageInfo.BoardList" :key="index" class="board-box">
      <Box class="content">sdsds</Box>
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
    mypageInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mypage-board-list {
  width: 100%;
  position: relative;
  display: block;
  .board-box {
    float: left;
    position: relative;
    width: 33.33%;
    border: 0.5px solid #fff;
    height: 100%;
    padding-bottom: 33.33% !important;
    background: #000;
    .content {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
}
</style>