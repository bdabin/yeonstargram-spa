<template>
  <ul :class="classNames">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    wrap: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'column'
    }
  },
  computed: {
    classNames() {
      const wrap = this.wrap ? 'wrap' : 'nowrap'
      return `list ${wrap} ${this.direction}`
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  width: 100%;
  padding: 0;

  &.nowrap {
    white-space: nowrap;
  }

  &.wrap {
    white-space: normal;
  }

  &.row {
    overflow-x: auto;
    overflow-y: hidden;
    flex-direction: row;
  }

  &.column {
    overflow-x: hidden;
    overflow-y: auto;
    flex-direction: column;
  }
}
</style>
