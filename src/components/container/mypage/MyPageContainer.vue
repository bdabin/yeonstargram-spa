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
      @follow="follow"
      @unfollow="unfollow"
      :isFollowing="isFollowing"
      @followerlist="followerlist"
      @followinglist="followinglist"
    ></mypage>
    <mypageboardlist :mypageInfo="mypageInfo" />
    <TabBar />
  </div>
</template>

<script>
import axios from 'axios'
import mypage from '@/components/presentational/organisms/mypage/index.vue'
import mypageboardlist from '@/components/presentational/organisms/mypage/BoardListBox.vue'
import NavigationBar from '@/components/presentational/organisms/NavigationBar/index.vue'
import TabBar from '@/components/presentational/organisms/TabBar/index.vue'

import Icon from '@/components/common/Icon'

export default {
  components: {
    NavigationBar,
    TabBar,
    Icon,
    mypage,
    mypageboardlist
  },
  data() {
    return {
      userId: this.$route.params.id || null,

      // #TODO : name 보기 쉽게 변경
      pageCheck: false,

      mypageInfo: {},
      isFollowing: false,
      profileImg: ''
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
        const result = this.mypageInfo.checkFollower.length
        if (result == 1) {
          this.isFollowing = true
        }
      }
    },

    // #TODO : followOn,unfollowOn name 변경
    async follow() {
      const response = await axios.post(`/api/account/follow/${this.$store.state.user.id}`, {
        from: this.$store.state.user.id,
        to: this.userId
      })
      if (response.status === 200) {
        alert('팔로우가 완료됐습니다 !')
        this.loadData()
      }
    },
    async unfollow() {
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
    },

    followerlist() {
      this.$router.push(`/mypage/follow/${this.userId}?type=follower`)
    },
    followinglist() {
      this.$router.push(`/mypage/follow/${this.userId}?type=following`)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
