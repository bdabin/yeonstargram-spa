<template>
  <Box direction="column" padding="0 20px">
    <Box direction="row" class="profile-box" padding="30px 0px">
      <Box direction="column" class="conBox" horizontal="center">
        <RoundBox radius="50px" direction="row" class="profile-img"></RoundBox>
      </Box>
      <Box direction="column" class="conBox">
        <P>{{boardList}}</P>
        <P>게시물</P>
      </Box>
      <Button direction="column" class="conBox" @click="$emit('followerlist')">
        <P>{{follower}}</P>
        <P>팔로워</P>
      </Button>
      <Button direction="column" class="conBox" @click="$emit('followinglist')">
        <P>{{following}}</P>
        <P>팔로잉</P>
      </Button>
    </Box>
    <Box v-if="pageCheck">
      <template v-if="!isFollowing">
        <Button @click="$emit('follow')">
          <RoundBox radius="5px" padding="5px 50px">팔로우</RoundBox>
        </Button>
      </template>
      <template v-else>
        <Button @click="$emit('unfollow')">
          <RoundBox radius="5px" padding="5px 50px" class="following-btn">팔로잉</RoundBox>
        </Button>
      </template>
    </Box>

    <!-- <Box>팔로워 : {{follower}}</Box>
    <Box v-for="(followerI,index) in mypageInfo.Follower" :key="`A-${index}`">{{followerI.username}}</Box>
    <br />
    <Box>팔로우 : {{following}}</Box>
    <Box
      v-for="(followingI,index) in mypageInfo.Following"
      :key="`B-${index}`"
    >{{followingI.username}}</Box>-->
  </Box>
</template>

<script>
// import Icon from '@/components/common/Icon'
// import Span from '@/components/presentational/atoms/Span'
import P from '@/components/presentational/atoms/P'
import Button from '@/components/presentational/atoms/Button'
import Box from '@/components/presentational/molecules/Box'
import RoundBox from '@/components/presentational/molecules/RoundBox'
export default {
  components: {
    Button,
    P,
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
    },
    boardList() {
      if (this.mypageInfo.BoardList) {
        return this.mypageInfo.BoardList.length
      }
      return 0
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-box {
  width: 100%;
  .conBox {
    width: 25%;
    font-size: 16px;
    cursor: pointer;
    .profile-img {
      cursor: pointer;
      width: 50px;
      height: 50px;
      border: 2px solid #dedede;
      margin: 0 auto;
    }
    p,
    button {
      width: 100%;
      text-align: center;
    }
    .profile-input {
      display: none;
    }
  }
}
.following-btn {
  background: #0195f7;
  border: none;
  color: #fff;
}
</style>