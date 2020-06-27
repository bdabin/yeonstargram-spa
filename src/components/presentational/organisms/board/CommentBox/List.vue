<template>
  <Box class="comment-page" direction="column" padding="50px 0 40px">
    <Box class="content-boxW" direction="column" v-for="(comment,index) in comments" :key="index">
      <div
        class="box-wrap"
        @click="$emit('moveCoordinates', comment.id)"
        @mousedown="$emit('nowCoordinates', comment.id)"
      >
        <Box
          class="content-box"
          :class="{right:comment.swipe}"
        >{{comment.User.username}} : {{comment.content}} 날짜 : {{$moment(comment.createdAt).format('YYYY.MM.DD')}}</Box>
      </div>
      <Box class="closeBox" horizontal="center" vertical="center">
        <Button>삭제</Button>
      </Box>
    </Box>
  </Box>
</template>

<script>
import Box from '@/components/presentational/molecules/Box'
import Button from '@/components/presentational/atoms/Button'
export default {
  components: {
    Box,
    Button
  },
  props: {
    comments: {
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
  .box-wrap {
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
  .content-box.right {
    right: 50px;
  }
  .closeBox {
    width: 50px;
    height: 40px;
    line-height: 40px;
    position: absolute;
    right: 0;
    background: red;
    top: 0;
    button {
      color: #fff;
      font-size: 13px;
    }
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