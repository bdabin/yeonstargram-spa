<template>
  <Box>
    <Box style="width:100%" direction="column" horizontal="center">
      <Box v-for="(todo, index) in todoList" :key="index">
        <Box v-if="!todo.toggle">
          <Span>{{todo.id}} /</Span>
          <Span>{{ todo.title }}</Span>
          <Button @click="$emit('update',todo.id)">수정</Button>
          <Button @click="$emit('delete', todo.id)">삭제</Button>
        </Box>

        <Box v-else>
          <Span>{{todo.id}} /</Span>
          <input
            name="nickname"
            :value="todo.title"
            type="text"
            @input="e => updateText = e.target.value"
          />
          <Button @click="$emit('save',updateText, todo.id )">저장</Button>
        </Box>
      </Box>
    </Box>
  </Box>
</template>

<script>
import Span from '@/components/presentational/atoms/Span'
import Box from '@/components/presentational/molecules/Box'
import Button from '@/components/presentational/atoms/Button'

export default {
  components: {
    Span,
    Box,
    Button
  },
  props: {
    todoList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      updateText: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>