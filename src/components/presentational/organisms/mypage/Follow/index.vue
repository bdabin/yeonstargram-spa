<template>
  <Box direction="column" padding="20px">
    <Box class="follow-boxs" v-if="this.$route.query.type == 'following'">
      <Button v-for="(followingI,index) in followInfo.Following" :key="`A-${index}`">
        <Box direction="row" class="follow-box" horizontal="left">
          <RoundBox radius="50px" class="profile-img"></RoundBox>
          <Box class="username" padding="0 20px">{{followingI.username}}</Box>
        </Box>
      </Button>
    </Box>
    <Box class="follow-boxs" v-if="this.$route.query.type =='follower'" direction="column">
      <Button v-for="(followerI,index) in followInfo.Follower" :key="`A-${index}`">
        <Box direction="row" horizontal="left" class="follow-box" vertical="center">
          <RoundBox radius="50px" class="profile-img"></RoundBox>
          <Box class="username" padding="0 20px">{{followerI.username}}</Box>
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
.follow-boxs {
  width: 100%;
  height: 100%;
  .follow-box {
    width: 100%;
    margin-bottom: 10px;
    .username {
      height: 100%;
    }
  }
}
.profile-img {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border: 2px solid #dedede;
  margin: 0 auto;
}
</style>