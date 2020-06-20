<template>
  <Box direction="column" padding="30px 0" class="profile-box">
    <Box direction="row" class="profile-info" padding="0 20px">
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
    <Box v-if="pageCheck" class="follow-btn-box" padding="10px 20px 0">
      <template v-if="!isFollowing">
        <Button @click="$emit('follow')">
          <RoundBox radius="5px" padding="5px 50px" class="follow-btn">팔로우</RoundBox>
        </Button>
      </template>
      <template v-else>
        <Button @click="$emit('unfollow')">
          <RoundBox radius="5px" padding="5px 50px" class="following-btn">팔로잉</RoundBox>
        </Button>
      </template>
    </Box>
  </Box>
</template>

<script>
import P from '@/components/presentational/atoms/P'
import Button from '@/components/presentational/atoms/Button'
import Box from '@/components/presentational/molecules/Box'
import RoundBox from '@/components/presentational/molecules/RoundBox'
export default {
  components: {
    Button,
    P,
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
      if (this.mypageInfo.follower) {
        return this.mypageInfo.follower
      }
      return 0
    },
    following() {
      if (this.mypageInfo.following) {
        return this.mypageInfo.following
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
  border-bottom: 1px solid #dedede;
  .profile-info {
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
  .follow-btn-box {
    .follow-btn {
      background: #0195f7;
      color: #fff;
      border: none;
    }
  }
}
</style>