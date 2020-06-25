<template>
  <Box>
    <!-- #TODO : 트랜지션 구현 -->

    <transition name="fade">
      <div class="back" v-if="isMoreBtn"></div>
    </transition>

    <transition name="slide-up">
      <Box class="more-bar" direction="column" padding="10px" v-if="isMoreBtn">
        <Box class="edit-box" direction="column">
          <Box direction="column" class="boxWrap">
            <Box class="box2">
              <Button class="editBtn e2" @click="$emit('deleteExecution')">삭제</Button>
            </Box>
            <Box class="box2">
              <Button class="editBtn" @click="$emit('edit')">수정</Button>
            </Box>
          </Box>
          <Box class="box2 cancelW">
            <Button class="cancel" @click="$emit('closeBtn')">취소</Button>
          </Box>
        </Box>
      </Box>
    </transition>
  </Box>
</template>

<script>
import Button from '@/components/presentational/atoms/Button'
import Box from '@/components/presentational/molecules/Box'
export default {
  components: {
    Box,
    Button
  },
  props: {
    isMoreBtn: {
      type: Boolean,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.more-bar {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  .edit-box {
    width: 90%;
    position: fixed;
    bottom: 20px;

    z-index: 999;
    left: 50%;
    transform: translateX(-50%);
    .boxWrap {
      width: 100%;
      border-radius: 5px;
      overflow: hidden;
    }
    .cancel {
      background: #fff;
      color: #333;
      display: block;
      height: 50px;
      line-height: 50px;
      text-align: center;
      width: 100%;
      font-size: 15px;
      border-radius: 5px;
      margin-top: 10px;
    }
    .box2 {
      width: 100%;
      border-top: 1px solid #dedede;
    }
    .box2.cancelW {
      border-top: none;
    }
    .editBtn {
      background: #fff;
      color: #333;
      display: block;
      height: 50px;
      line-height: 50px;
      text-align: center;
      width: 100%;
      font-size: 15px;
    }
  }
}
.closeBtn {
  width: 100%;
  color: rgb(230, 72, 72);
  font-size: 15px;
  display: block;
}
.slide-up {
  transition: all 0.25s;
}
.slide-up-enter-active {
  transition: all 0.25s ease;
}
.slide-up-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-up-enter,
.slide-up-leave-active {
  opacity: 0;
  transform: translateY(100%);
}
.back {
  background: rgba(0, 0, 0, 0.411);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>