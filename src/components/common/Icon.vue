<template>
  <img v-if="name" :src="src" :srcset="srcsets" :width="width" :height="height" class="icon" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '28px'
    },
    height: {
      type: String,
      default: '28px'
    },
    srcset: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    srcsets() {
      if (!this.srcset) {
        return ''
      }
      const x2 = `${this.name}@2x`
      const x3 = `${this.name}@3x`
      return `${this.image[x2]}, ${this.image[x3]}`
    },
    src() {
      return this.image[this.name]
    },
    image() {
      return {
        logo: require('@/assets/logo.png')
      }
    }
  }
}
</script>
