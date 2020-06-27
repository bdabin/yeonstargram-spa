<template>
  <div>
    <NavigationBar>
      <template #centerTitle>
        <Icon name="logo" />
      </template>
    </NavigationBar>
    <mypage
      :mypageInfo="mypageInfo"
      :loading="loading"
      :pageCheck="pageCheck"
      @follow="follow"
      @unfollow="unfollow"
      :isFollowing="isFollowing"
      @followerlist="followerlist"
      @followinglist="followinglist"
      @profile-edit="profileEdit"
    ></mypage>
    <mypageboardlist :boards="boards" @detail="detail" />
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
      profileImg: '',
      loading: false,
      boards: []
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
      this.loading = true
      const response = await axios.get(`/api/account/mypage/${this.userId}`)
      if (response.status === 200) {
        this.mypageInfo = response.data
        const result = this.mypageInfo.checkFollower.length
        if (result == 1) {
          this.isFollowing = true
        }

        this.boards = response.data.BoardList.sort((a, b) => {
          if (a.id > b.id) {
            return -1
          } else if (a.id < b.id) {
            return 1
          } else {
            return 0
          }
        }).map(board => {
          if (board.Photo) {
            const url = board.Photo.url.split('/')
            board.image = `/api/image/${url[url.length - 1]}`
            board.filter = board.Photo.filter
          }
          return board
        })
      }
      //프로필 이미지
      const url = this.mypageInfo.Profile.url.split('/')
      this.mypageInfo.Profile.url = `/api/image/${url[url.length - 1]}`

      this.loading = false
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
    },
    profileEdit() {
      this.$router.push(`/mypage/${this.userId}/profile`)
    },
    detail(id) {
      this.$router.push(`/detail?user=${this.userId}&id=${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
