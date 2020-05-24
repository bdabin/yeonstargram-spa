<template>
  <Box
    :class="classNames"
    :style="styles"
    :padding="padding"
    :direction="direction"
    :vertical="vertical"
    :horizontal="horizontal"
    :radius="radius"
  >
    <Box v-if="header" class="header" direction="column" vertical="center">
      <slot name="header" />
    </Box>
    <slot />
  </Box>
</template>

<script>
import Box from '../Box'

export default {
  name: 'RoundBox',
  components: {
    Box
  },
  props: {
    radius: {
      type: String,
      default: '17px'
    },
    padding: {
      type: String,
      default: '16px'
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
    header: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classNames() {
      return `round-box ${this.direction}`
    },
    styles() {
      return {
        borderRadius: this.radius
      }
    }
  }
}
</script>

<style scoped lang="scss">
.round-box {
  display: flex;
  height: auto;
  background-color: white;
  border: 1px solid #eee;
}

.header {
  width: 100%;
  height: auto;

  hr {
    width: 100%;
    margin-bottom: 16px;
  }
}

.row {
  flex-direction: row;
}

.column {
  flex-direction: column;
}
</style>
