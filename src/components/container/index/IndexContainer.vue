<template>
  <IndexBox @login="goLogin" @join="goJoin" />
</template>

<script>
import IndexBox from '@/components/presentational/organisms/index/IndexBox'
export default {
  components: {
    IndexBox
  },
  methods: {
    goLogin() {
      this.$router.push('/account/login')
    },
    goJoin() {
      this.$router.push('/account/join')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
