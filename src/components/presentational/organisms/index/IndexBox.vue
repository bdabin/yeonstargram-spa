<template>
  <Box class="index-wrap" wrap direction="column" horizontal="center">
    <Box padding="15px">
      <Icon name="logo" />
    </Box>

    <Box class="index-title" direction="column" horizontal="center" vertical="center">
      <Span type="title1">Yeonstargram</Span>
    </Box>

    <Box class="index-btn-box" direction="column" padding="16px">
      <Button class="login-btn" @click="$emit('login')">
        <RoundBox horizontal="center" vertical="center" padding="0" radius="10px">
          <Span type="title1">로그인</Span>
        </RoundBox>
      </Button>
      <Button class="join-btn" @click="$emit('join')">
        <RoundBox horizontal="center" vertical="center" padding="0" radius="10px">
          <Span type="title1">회원가입</Span>
        </RoundBox>
      </Button>
    </Box>
  </Box>
</template>

<script>
import Icon from '@/components/common/Icon'
import Button from '@/components/presentational/atoms/Button'
import Span from '@/components/presentational/atoms/Span'
import Box from '@/components/presentational/molecules/Box'
import RoundBox from '@/components/presentational/molecules/RoundBox'
export default {
  components: {
    Span,
    Button,
    Box,
    RoundBox,
    Icon
  }
}
</script>

<style lang="scss" scoped>
.index-wrap {
  height: 100vh;
}

.index-title {
  width: 100%;
  height: calc(100vh - 218px);
  span {
    font-size: 22px;
  }
}
.index-btn-box {
  width: 100%;
  margin-top: auto;
  button {
    width: 100%;
    margin-top: 12px;
    .round-box {
      height: 50px;
    }
    &.login-btn {
      .round-box {
        border: 1px solid rgb(24, 134, 39);
        background-color: rgb(24, 134, 39);
        span {
          color: #fff;
        }
      }
    }

    &.join-btn {
      .round-box {
        border: 1px solid rgb(24, 134, 39);
        // background-color: rgb(11, 55, 97);
        span {
          color: rgb(24, 134, 39);
        }
      }
    }
  }
}
</style>
