<template>
  <Box class="nav-bar">
    <Box class="nav-content" padding="0 16px" vertical="center">
      <Button @click="$emit('leftBtn')">
        <Box>
          <slot name="leftBtn"></slot>
        </Box>
      </Button>

      <Box class="centerTitle">
        <slot name="centerTitle"></slot>
      </Box>

      <Box>
        <Button @click="$emit('rightBtn')">
          <Box>
            <slot name="rightBtn"></slot>
          </Box>
        </Button>
      </Box>
    </Box>
  </Box>
</template>

<script>
// import Icon from '@/components/common/Icon'
// import Span from '@/components/presentational/atoms/Span'
import Button from '@/components/presentational/atoms/Button'
import Box from '@/components/presentational/molecules/Box'

export default {
  components: {
    Box,
    Button
    // Span,
    // Icon
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 50px;

  .nav-content {
    height: 50px;
    justify-content: space-between !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 2;
    background-color: #fff;
  }
  img {
    width: 24px;
  }
}
</style>
