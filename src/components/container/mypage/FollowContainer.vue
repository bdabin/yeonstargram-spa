<template>
  <div>
    <NavigationBar>
      <template #centerTitle>
        <Icon name="logo" />
      </template>
    </NavigationBar>
    <Follow :followInfo="followInfo" />
    <TabBar />
  </div>
</template>

<script>
import axios from 'axios'
import NavigationBar from '@/components/presentational/organisms/NavigationBar/index.vue'
import Follow from '@/components/presentational/organisms/mypage/Follow'
import TabBar from '@/components/presentational/organisms/TabBar/index.vue'

import Icon from '@/components/common/Icon'
export default {
  components: {
    NavigationBar,
    TabBar,
    Icon,
    Follow
  },
  data() {
    return {
      userId: this.$route.params.id || null,
      isFollowing: false,
      followInfo: {}
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const response = await axios.get(`/api/account/follow/${this.userId}`)

      if (response.status === 200) {
        this.followInfo = response.data
        if (this.followInfo.Follower.length > 0) {
          const result = this.followInfo.Follower.find(user => user.id === this.$store.state.user.id)
          this.isFollowing = Boolean(result)
        }
      }
    }
  }
}
</script>

<style>
</style>