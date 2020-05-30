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
        logo: require('@/assets/logo.png'),
        back: require('@/assets/icons/back.svg'),
        comment: require('@/assets/icons/comment.svg'),
        heart: require('@/assets/icons/heart.svg'),
        heart2: require('@/assets/icons/heart2.svg'),
        menu: require('@/assets/icons/menu.svg'),
        right: require('@/assets/icons/right.svg'),
        more: require('@/assets/icons/more.svg'),
        home: require('@/assets/icons/home.svg'),
        home2: require('@/assets/icons/home2.svg'),
        plus: require('@/assets/icons/plus.svg'),
        user: require('@/assets/icons/user.svg'),
        user2: require('@/assets/icons/user2.svg')
      }
    }
  }
}
</script>
