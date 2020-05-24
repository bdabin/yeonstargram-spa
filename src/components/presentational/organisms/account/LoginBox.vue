<template>
  <Box class="login-input-wrap" direction="column" horizontal="center" vertical="center">
    <Box padding="0 0 30px" direction="column" horizontal="center">
      <Icon name="logo" />
    </Box>

    <Box class="login-input-box" horizontal="center" vertical="center" padding="0 16px">
      <form @submit.prevent>
        <Box>
          <input type="email" placeholder="이메일" v-model="user.email" />
        </Box>
        <Box>
          <input type="password" placeholder="비밀번호" v-model="user.password" />
        </Box>
        <Box>
          <Button @click="$emit('login')">
            <RoundBox horizontal="center" vertical="center" padding="0" radius="10px">
              <Span type="title1">로그인</Span>
            </RoundBox>
          </Button>
        </Box>
      </form>
    </Box>
  </Box>
</template>

<script>
import Icon from '@/components/common/Icon'
import Span from '@/components/presentational/atoms/Span'
import Button from '@/components/presentational/atoms/Button'
import Box from '@/components/presentational/molecules/Box'
import RoundBox from '@/components/presentational/molecules/RoundBox'
export default {
  name: 'LoginBox',
  components: {
    Button,
    Span,
    Box,
    Icon,
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
.login-input-wrap {
  height: 100vh;
}
.login-input-box {
  // height: calc(100vh - 58px);
  width: 100%;
  form {
    width: 100%;
    .box {
      margin-bottom: 12px;
    }
    input {
      width: 100%;
      height: 45px;
      border: 1px solid #eee;
      border-radius: 10px;
      padding: 0 15px;
      font-size: 17px;
      &:focus {
        outline: 0;
      }
    }
    button {
      width: 100%;
      .round-box {
        background-color: rgb(24, 134, 39);
        height: 50px;
        border: 1px solid rgb(24, 134, 39);
        margin-top: 12px;
        span {
          color: #fff;
        }
      }
    }
  }
}
</style>
