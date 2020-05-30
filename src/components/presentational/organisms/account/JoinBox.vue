<template>
  <Box class="join-wrap" direction="column" horizontal="center" padding="16px" vertical="center">
    <Box padding="0 0 30px">
      <Span class="join-title" type="title1">회원가입</Span>
    </Box>

    <Box
      class="join-box"
      direction="column"
      horizontal="center"
      vertical="center"
      padding="0 0 50px"
    >
      <input v-model="user.email" type="email" placeholder="이메일" />
      <input v-model="user.password" type="password" placeholder="비밀번호" />
      <input v-model="user.rePassword" type="password" placeholder="비밀번호 확인" />

      <input v-model="user.username" type="text" placeholder="이름" />

      <input v-model="user.phone" type="text" placeholder="휴대폰번호" />

      <Box class="join-btn" direction="column">
        <Button @click="$emit('goJoin')">
          <RoundBox radius="10px" vertical="center" horizontal="center" padding="0">
            <Span type="title1">회원가입</Span>
          </RoundBox>
        </Button>
      </Box>
      <Box class="join-btn" direction="column">
        <Button>
          <RoundBox radius="10px" vertical="center" horizontal="center" padding="0">
            <Span type="title1">
              <a @event.prevent @click="$emit('facebooklink')">페이스북 회원가입</a>
            </Span>
          </RoundBox>
        </Button>
      </Box>
    </Box>
  </Box>
</template>

<script>
import Span from '@/components/presentational/atoms/Span'
import Button from '@/components/presentational/atoms/Button'
import Box from '@/components/presentational/molecules/Box'
import RoundBox from '@/components/presentational/molecules/RoundBox'

export default {
  components: {
    Span,
    Button,
    Box,
    RoundBox
  },
  props: {
    user: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.join-wrap {
  height: 100vh;
}
.join-box {
  width: 100%;
  input {
    width: 100%;
    height: 45px;
    line-height: 45px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 17px;
    padding: 0 15px;
    margin-bottom: 12px;
    &:focus {
      outline: 0;
    }
  }

  .join-btn {
    width: 100%;
    button {
      width: 100%;
      .round-box {
        background-color: rgb(24, 134, 39);
        height: 50px;
        span {
          color: #fff;
        }
      }
    }
  }
}
</style>
