<template>
  <span :class="classNames" :style="styles">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Span',
  props: {
    align: {
      type: String,
      default: 'left'
    },
    type: {
      type: String,
      default: ''
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
span {
  display: inline-block;
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
  white-space: nowrap;
  text-overflow: ellipsis;
}

.title1 {
  line-height: 25px;
  font-weight: normal;
  font-size: 18px;
  display: block;
}
.title2 {
  line-height: 25px;
  font-weight: bold;
  font-size: 18px;
  display: block;
}
</style>
