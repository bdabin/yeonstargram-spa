<template>
  <Box direction="column">
    <Box direction="column" class="conBox" horizontal="center" padding="20px">
      <label>
        <RoundBox
          radius="50px"
          direction="row"
          class="profile-img"
          :style="`background-image:url(${image})`"
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
    <Box padding="20px" direction="row" class="conBox">
      <Box class="leftBox">소개</Box>
      <Box class="rightBox">
        <input type="text" :value="text" @input="e => text = e.target.value" placeholder="소개" />
      </Box>
    </Box>
  </Box>
</template>

<script>
import Box from '@/components/presentational/molecules/Box'
import RoundBox from '@/components/presentational/molecules/RoundBox'
// import Button from '@/components/presentational/atoms/Button'
export default {
  components: {
    Box,
    RoundBox
    // Button,
  },
  model: {
    prop: 'intro',
    event: 'change'
  },
  props: {
    intro: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  },
  computed: {
    text: {
      get() {
        return this.intro
      },
      set(value) {
        this.$emit('change', value)
      }
    }
  },
  methods: {
    fileUpload(e) {
      this.$store.dispatch('imageUpload', e.target)
      this.$emit('changeImage', e.target)
    }
  }
}
</script>

<style lang="scss" scoped>
.conBox {
  width: 100%;
  border-bottom: 1px solid #dedede;
  .profile-img {
    cursor: pointer;
    width: 100px;
    height: 100px;
    border: 2px solid #dedede;
    margin: 0 auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    input {
      display: none;
    }
  }
  .leftBox {
    width: 30%;
  }
  .rightBox {
    width: 70%;
    color: #999;
    input {
      border: none;
    }
  }
}
</style>