<template>
  <li :class="classNames">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'ListCell',
  computed: {
    classNames() {
      return `list-cell`
    }
  }
}
</script>

<style lang="scss" scoped>
.list-cell {
  width: 100%;
  list-style-type: none;
}
</style>
