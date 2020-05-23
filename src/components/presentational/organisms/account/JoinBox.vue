<template>
  <Box direction="column" horizontal="center">
    <Span class="join-title" type="title1">회원가입</Span>

    <Box class="join-box" direction="column" horizontal="center" vertical="center">
      <Box vertical="center">
        <Box>
          <Span>이메일</Span>
        </Box>
        <Box>
          <input v-model="user.email" type="email" />
        </Box>
      </Box>
      <Box vertical="center">
        <Box>
          <Span>비밀번호</Span>
        </Box>
        <Box>
          <input v-model="user.password" type="password" />
        </Box>
      </Box>
      <Box vertical="center">
        <Box>
          <Span>비밀번호 확인</Span>
        </Box>
        <Box>
          <input v-model="user.rePassword" type="password" />
        </Box>
      </Box>
      <Box vertical="center">
        <Box>
          <Span>이름</Span>
        </Box>
        <Box>
          <input v-model="user.username" type="text" />
        </Box>
      </Box>
      <Box vertical="center">
        <Box>
          <Span>휴대폰번호</Span>
        </Box>
        <Box>
          <input v-model="user.phone" type="text" />
        </Box>
      </Box>

      <Box class="join-btn">
        <Button @click="$emit('goJoin')">회원가입</Button>
      </Box>
    </Box>
  </Box>
</template>

<script>
import Span from '@/components/presentational/atoms/Span'
import Button from '@/components/presentational/atoms/Button'
import Box from '@/components/presentational/molecules/Box'

export default {
  components: {
    Span,
    Button,
    Box
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
.join-title {
  font-size: 32px;
  padding: 25px 0 50px;
}
.join-box {
  width: 100%;
  & > .box {
    width: 500px;
    margin-bottom: 10px;
    span {
      width: 100px;
      line-height: 35px;
    }

    input {
      width: 400px;
      height: 35px;
      line-height: 35px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 17px;
      padding: 0 10px;
    }
  }

  .join-btn {
    // width: 100%;
    button {
      width: 100%;
      border-radius: 5px;
      background-color: rgb(228, 175, 30);
      color: #fff;
      text-align: center;
      height: 45px;
      border: 0;
      font-size: 18px;
      line-height: 45px;
    }
  }
}
</style>
