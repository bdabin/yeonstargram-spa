<template>
  <div>
    <NavigationBar>
      <template #centerTitle>
        <Icon name="logo" />
      </template>
    </NavigationBar>
    <div>mypage</div>
    <TabBar />
  </div>
</template>

<script>
import NavigationBar from '@/components/presentational/organisms/NavigationBar/index.vue'
import TabBar from '@/components/presentational/organisms/TabBar/index.vue'

import Icon from '@/components/common/Icon'

export default {
  components: {
    NavigationBar,
    TabBar,
    Icon
  }
}
</script>

<style lang="scss" scoped>
</style>
