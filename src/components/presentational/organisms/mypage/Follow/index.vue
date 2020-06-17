<template>
  <Box direction="column">
    <Box class="following-box" v-if="this.$route.query.type == 'following'">
      <Box
        v-for="(followingI,index) in followInfo.Following"
        :key="`A-${index}`"
      >{{followingI.username}}</Box>
    </Box>
    <Box class="follower-box" v-if="this.$route.query.type =='follower'" direction="column">
      <Button v-for="(followerI,index) in followInfo.Follower" :key="`A-${index}`">
        <Box direction="row">
          <RoundBox radius="50px" class="profile-img"></RoundBox>
          <Box>{{followerI.username}}</Box>
        </Box>
      </Button>
    </Box>
  </Box>
</template>

<script>
import Box from '@/components/presentational/molecules/Box'
import Button from '@/components/presentational/atoms/Button'
import RoundBox from '@/components/presentational/molecules/RoundBox'
export default {
  components: {
    Box,
    Button,
    RoundBox
  },
  props: {
    followInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    console.log(this.$route.query.type)
  }
}
</script>

<style lang="scss" scoped>
.following-box {
  width: 100%;
  height: 100%;
}
.profile-img {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border: 2px solid #dedede;
  margin: 0 auto;
}
</style>