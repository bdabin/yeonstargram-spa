<template>
  <Box wrap vertical="center" horizontal="center">
    <Box v-for="(menu, index) in menuItems" :key="index" @click.native="menu.action">
      <Icon :name="menu.text" />
    </Box>
  </Box>
</template>

<script>
import Icon from '@/components/common/Icon'
import Box from '@/components/presentational/molecules/Box'

export default {
  props: {
    menuItems: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Icon,
    Box
  }
}
</script>

<style lang="scss" scoped>
</style>
