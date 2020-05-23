<template>
  <div :class="classNames" :style="styles">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    padding: {
      type: String,
      default: '0'
    },
    direction: {
      type: String,
      default: 'row'
    },
    vertical: {
      type: String,
      default: 'top'
    },
    horizontal: {
      type: String,
      default: 'left'
    },
    wrap: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classNames() {
      const wrap = this.wrap ? 'wrap' : 'no-wrap'
      return `box ${wrap} ${this.direction} v-${this.vertical} h-${this.horizontal}`
    },
    styles() {
      return {
        padding: this.padding
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
}

.wrap {
  flex-wrap: wrap;
}

.no-wrap {
  flex-wrap: nowrap;
}

.row {
  flex-direction: row;


  &.v-top {
    align-items: flex-start;
  }
  &.v-center {
    align-items: center;
  }
  &.v-bottom {
    align-items: flex-end;
  }

  &.h-left {
    justify-content: flex-start;
  }
  &.h-center {
    justify-content: center;
  }
  &.h-right {
    justify-content: flex-end;
  }
}
.column {
  flex-direction: column;

  &.v-top {
    justify-content: flex-start;
  }
  &.v-center {
    justify-content: center;
  }
  &.v-bottom {
    justify-content: flex-end;
  }

  &.h-left {
    align-items: flex-start;
  }
  &.h-center {
    align-items: center;
  }
  &.h-right {
    align-items: flex-end;
  }
}
</style>
