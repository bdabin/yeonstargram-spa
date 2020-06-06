<template>
  <Box>
    <RoundBox>
      <Button @click="$emit('follow')">팔로우</Button>
    </RoundBox>
  </Box>
</template>

<script>
// import Icon from '@/components/common/Icon'
// import Span from '@/components/presentational/atoms/Span'
import Button from '@/components/presentational/atoms/Button'
import Box from '@/components/presentational/molecules/Box'
import RoundBox from '@/components/presentational/molecules/RoundBox'
export default {
  components: {
    Button,
    // Span,
    // Icon,
    Box,
    RoundBox
  },
  props: {},
  created() {}
}
</script>

<style>
</style>