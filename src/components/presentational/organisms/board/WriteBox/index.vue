<template>
  <Box class="board-write" direction="column" horizontal="center" padding="16px" vertical="center">
    <form @submit.prevent>
      <Box>
        <textarea v-model="board.description" placeholder="내용을 입력하세요"></textarea>
      </Box>
      <Box padding="16px 0 0px">
        <input type="text" placeholder="태그를 입력하세요 ex ) #ootd #셀피" v-model="board.tag" />
      </Box>
    </form>
  </Box>
</template>

<script>
import Box from '@/components/presentational/molecules/Box'
export default {
  components: {
    Box
  },
  props: {
    board: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.board-write {
  form {
    width: 100%;
  }
  .box {
    width: 100%;
  }
  input {
    width: 100%;
    height: 50px;
    border: 1px solid #eee;
    padding: 0 16px;
    border-radius: 10px;
    font-size: 17px;
  }
  textarea {
    width: 100%;
    height: 200px;
    border: 1px solid #eee;
    padding: 16px;
    border-radius: 10px;
    font-size: 17px;
    resize: none;
  }
}
</style>