<template>
  <Box direction="column" horizontal="center">
    <form @submit.prevent>
      <Box>
        <input type="email" placeholder="email" v-model="user.email" />
      </Box>
      <Box>
        <input type="password" placeholder="password" v-model="user.password" />
      </Box>
      <Box>
        <button @click="$emit('login')">Login</button>
      </Box>
    </form>
  </Box>
</template>

<script>
import Box from '@/components/presentational/molecules/Box'
export default {
  name: 'LoginBox',
  components: {
    Box
  },
  props: {
    user: {
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
