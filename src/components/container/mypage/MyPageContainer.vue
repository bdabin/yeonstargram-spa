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
      @followerlist="followerlist"
      @followinglist="followinglist"
    ></mypage>
    <!-- <label>
      <input
        type="file"
        id="file"
        name="url"
        class="profile-input"
        v-on:change="profileUpload($event.target.name,$event.target.files)"
      />
    </label>-->
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
        if (this.mypageInfo.Follower.length > 0) {
          const result = this.mypageInfo.Follower.find(user => user.id === this.$store.state.user.id)
          this.isFollowing = Boolean(result)
        }
      }
    },

    // #TODO : followOn,unfollowOn name 변경
    async followOn() {
      const response = await axios.post(`/api/account/follow`, {
        from: this.$store.state.user.id,
        to: this.userId
      })
      if (response.status === 200) {
        alert('팔로우가 완료됐습니다 !')
        this.loadData()
      }
    },
    async unfollowOn() {
      const response = await axios.delete(`/api/account/follow`, {
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
    // 이미지 업로드 테스트
    // async profileUpload(name, files) {
    //   const formData = await new FormData()
    //   await formData.append(name, files[0], files[0].name)
    //   const response = await axios.post(`/api/account/mypage/${this.$store.state.user.id}`, formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   })
    //   if (response.status === 200) {
    //     console.log(response)
    //   }
    //   console.log('a')
    // },

    followerlist() {
      this.$router.push(`/mypage/follow/${this.userId}?type=follower`)
    },
    followinglist() {
      console.log('aaa')
      this.$router.push(`/mypage/follow/${this.userId}?type=following`)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
