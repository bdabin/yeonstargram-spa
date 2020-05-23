<template>
  <Box padding="20px">
    <Box>
      <input type="text" :value="text" @input="e => text = e.target.value" />
    </Box>
    <Box>
      <Button @click="$emit('setTodo')">등록</Button>
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
  model: {
    prop: 'title',
    event: 'change'
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    text: {
      get() {
        return this.title
      },
      set(value) {
        this.$emit('change', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
