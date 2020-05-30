<template>
  <Box direction="column" horizontal="center" padding="16px" vertical="center">
    <form @submit.prevent>
      <table>
        <tr>
          <td>
            <input type="text" placeholder="제목" v-model="board.title" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" placeholder="내용" v-model="board.description" />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <Button @click="$emit('boardwrite')">
              <RoundBox>+</RoundBox>
            </Button>
          </td>
        </tr>
      </table>
    </form>
  </Box>
</template>

<script>
// import Span from '@/components/presentational/atoms/Span'
import Button from '@/components/presentational/atoms/Button'
import RoundBox from '@/components/presentational/molecules/RoundBox'
import Box from '@/components/presentational/molecules/Box'
export default {
  components: {
    Box,
    Button,
    RoundBox
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

<style>
</style>