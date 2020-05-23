<template>
  <p :class="classNames" :style="styles">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'P',
  props: {
    align: {
      type: String,
      default: 'left'
    },
    type: {
      type: String,
      default: undefined
    },
    color: {
      type: String,
      default: undefined
    },
    bgColor: {
      type: String,
      default: undefined
    },
    ellipsis: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classNames() {
      const ellipsis = this.ellipsis ? 'ellipsis' : ''
      return `${this.align} ${this.type} ${ellipsis}`
    },
    styles() {
      return {
        color: this.color,
        backgroundColor: this.bgColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}

.right {
  text-align: right;
}

.center {
  text-align: center;
}

.left {
  text-align: left;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
