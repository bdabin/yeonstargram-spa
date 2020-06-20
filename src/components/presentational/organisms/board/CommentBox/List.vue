<template>
  <Box class="comment-page" direction="column" padding="50px 0 40px">
    <Box class="content-boxW" direction="column" v-for="(commentI,index) in comment" :key="index">
      <div class="www" @touchend="$emit('addcount')" v-on:touchstart="$emit('nows')">
        <Box
          class="content-box"
        >{{commentI.User.username}} : {{commentI.content}} 날짜 : {{$moment(commentI.createdAt).format('YYYY.MM.DD')}}</Box>
      </div>
      <Box class="closeBox">ss</Box>
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
    comment: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style  lang="scss" scoped>
.comment-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  .www {
    width: 100%;
  }
  .content-boxW {
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .content-box {
    position: relative;
    width: 100%;
    height: 40px;
    background: #fff;
    right: 0;
    z-index: 999;
    transition: all 0.5s;
  }
  .closeBox {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0;
    background: red;
    top: 0;
  }
  .input-box {
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #dedede;
    background: #fff;
    input {
      width: 90%;
      height: 40px;
      border-radius: 40px;
      border: 1px solid #dedede;
      margin: 0 auto;
      padding-left: 10px;
    }
    .btn {
      position: absolute;
      top: 15px;
      right: 10px;
      height: 40px;
    }
  }
}
</style>