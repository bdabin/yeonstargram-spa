<template>
  <div>
    <NavigationBar>
      <template #centerTitle>
        <Icon name="logo" />
      </template>
    </NavigationBar>
    <mypage></mypage>
    <TabBar />
  </div>
</template>

<script>
// import axios from 'axios'
import mypage from '@/components/presentational/organisms/mypage/index.vue'
import NavigationBar from '@/components/presentational/organisms/NavigationBar/index.vue'
import TabBar from '@/components/presentational/organisms/TabBar/index.vue'

import Icon from '@/components/common/Icon'

export default {
  components: {
    NavigationBar,
    TabBar,
    Icon,
    mypage
  },
  data() {
    return {
      myId: NaN
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      this.myId = this.$store.state.user.id
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
