<template>
  <Box class="input-box" direction="column" padding="0 20px">
    <Box class="box2" padding="15px 0 15px">
      <input type="text" :value="text" @input="e => text =  e.target.value" />
      <Button class="btn" @click="$emit('commentwrite')">게시</Button>
    </Box>
  </Box>
</template>

<script>
import Box from '@/components/presentational/molecules/Box'
import Button from '@/components/presentational/atoms/Button'
export default {
  components: {
    Button,
    Box
  },
  model: {
    prop: 'description',
    event: 'change'
  },
  props: {
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    text: {
      get() {
        return this.description
      },
      set(value) {
        this.$emit('change', value)
      }
    }
  }
}
</script>

<style  lang="scss" scoped>
.content-box {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.input-box {
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #dedede;
  background: #fff;
  .box2 {
    height: 70px;
    width: 100%;
    position: relative;
  }
  input {
    width: 100%;
    height: 40px;
    border-radius: 40px;
    border: 1px solid #dedede;
    margin: 0 auto;
    padding-left: 10px;
  }
  .btn {
    position: absolute;
    right: 20px;
    height: 40px;
    line-height: 40px;
    color: rgb(69, 141, 223);
    font-size: 15px;
  }
}
</style>