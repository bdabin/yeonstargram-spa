<template>
  <div>
    <NavigationBar>
      <template #centerTitle>
        <Icon name="logo" />
      </template>
    </NavigationBar>
    <mypage
      :mypageInfo="mypageInfo"
      :pageCheck="pageCheck"
      @follow="followOn"
      @unfollow="unfollowOn"
      :isFollowing="isFollowing"
    ></mypage>
    <TabBar />
  </div>
</template>

<script>
import axios from 'axios'
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
      userId: this.$route.params.id || null,
      pageCheck: false,
      mypageInfo: {},
      isFollowing: false
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      if (this.$store.state.user.id == this.userId) {
        this.pageCheck = false
      } else {
        this.pageCheck = true
      }

      const response = await axios.get(`/api/account/mypage/${this.userId}`)
      if (response.status === 200) {
        this.mypageInfo = response.data
        if (this.mypageInfo.Follower.length > 0) {
          const result = this.mypageInfo.Follower.find(user => user.id === this.$store.state.user.id)
          this.isFollowing = Boolean(result)
        }
      }
    },
    async followOn() {
      const response = await axios.post(`/api/account/follow/${this.$store.state.user.id}`, {
        from: this.$store.state.user.id,
        to: this.userId
      })
      if (response.status === 200) {
        alert('팔로우가 완료됐습니다 !')
        this.loadData()
      }
    },
    async unfollowOn() {
      const response = await axios.delete(`/api/account/follow/${this.$store.state.user.id}`, {
        data: {
          from: this.$store.state.user.id,
          to: this.userId
        }
      })
      if (response.status === 200) {
        alert('팔로우를 취소했습니다!')
        this.loadData()
        this.isFollowing = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
