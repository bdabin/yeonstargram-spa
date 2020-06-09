<template>
  <Box direction="column">
    <RoundBox v-if="this.pageCheck">
      <template v-if="!isFollowing">
        <Button @click="$emit('follow')">팔로우</Button>
      </template>
      <template v-else>
        <Button @click="$emit('unfollow')">팔로잉</Button>
      </template>
    </RoundBox>

    <Box>팔로워 : {{follower}}</Box>
    <Box v-for="(followerI,index) in mypageInfo.Follower" :key="`A-${index}`">{{followerI.username}}</Box>
    <br />
    <Box>팔로우 : {{following}}</Box>
    <Box
      v-for="(followingI,index) in mypageInfo.Following"
      :key="`B-${index}`"
    >{{followingI.username}}</Box>
  </Box>
</template>

<script>
// import Icon from '@/components/common/Icon'
// import Span from '@/components/presentational/atoms/Span'
import Button from '@/components/presentational/atoms/Button'
import Box from '@/components/presentational/molecules/Box'
import RoundBox from '@/components/presentational/molecules/RoundBox'
export default {
  components: {
    Button,
    // Span,
    // Icon,
    Box,
    RoundBox
  },
  props: {
    mypageInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    pageCheck: {
      type: Boolean,
      default: false
    },
    isFollowing: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    follower() {
      if (this.mypageInfo.Follower) {
        return this.mypageInfo.Follower.length
      }
      return 0
    },
    following() {
      if (this.mypageInfo.Following) {
        return this.mypageInfo.Following.length
      }
      return 0
    }
  }
}
</script>

<style>
</style>