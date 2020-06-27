<template>
  <Box direction="column" padding="30px 0" class="profile-box">
    <Box direction="row" class="profile-info" padding="0 20px" vertical="center">
      <Box direction="column" class="conBox" horizontal="center">
        <label>
          <RoundBox
            radius="50px"
            direction="row"
            class="profile-img"
            :style="`background-image:url(${img})`"
          >
            <input
              type="file"
              name="url"
              ref="uploader"
              class="inputfile"
              id="file"
              @change="fileUpload"
            />
          </RoundBox>
        </label>
      </Box>
      <Box direction="row" class="count-box-wrap" horizontal="right">
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
    </Box>
    <Box class="profile-intro" padding="20px">{{this.mypageInfo.intro}}</Box>
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
    <Box v-else padding="10px 20px" class="profile-edit" horizontal="center">
      <Box class="button-box" horizontal="center" vertical="center">
        <Button @click="$emit('profile-edit')">프로필 수정</Button>
      </Box>
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
    loading: {
      type: Boolean,
      default: false
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
    img() {
      if (this.loading) {
        return ''
      }

      return this.mypageInfo.Profile ? this.mypageInfo.Profile.url : ''
    },
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
  },
  methods: {
    fileUpload(e) {
      this.$store.dispatch('imageUpload', e.target)
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-box {
  border-bottom: 1px solid #dedede;
  .profile-info {
    width: 100%;
    .count-box-wrap {
      width: 100%;
    }
    .conBox {
      width: 25%;
      font-size: 16px;
      cursor: pointer;
      .profile-img {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        cursor: pointer;
        width: 100px;
        height: 100px;
        border: 2px solid #dedede;
        margin: 0 auto;
        input {
          display: none;
        }
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
  .profile-edit {
    width: 100%;
    .button-box {
      height: 26px;
      width: 100%;
      border: 1px solid #dedede;
      border-radius: 3px;
      button {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>