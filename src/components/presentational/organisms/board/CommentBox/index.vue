<template>
  <Box class="comment-page" direction="column" padding="50px 0 0">
    <Box class="content-box" v-for="(commentI,index) in comment" :key="index">{{commentI.content}}</Box>
    <Box class="input-box" direction="column" padding="15px 0 15px">
      <input type="text" v-model="comment.content" />
      <Button class="btn" @click="$emit('commentwrite')">게시</Button>
    </Box>
  </Box>
</template>

<script>
import Box from '@/components/presentational/molecules/Box'
import Button from '@/components/presentational/atoms/Button'
export default {
  components: {
    Button,
    Box
  },
  props: {
    comment: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    console.log(this.comment)
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

  .content-box {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  .input-box {
    width: 100%;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #dedede;
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