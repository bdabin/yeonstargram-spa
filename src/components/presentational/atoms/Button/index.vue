<template>
  <button @click="(event) => $emit('click', event)" :disabled="disabled" type="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    fab: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  transition: opacity 0.2s;

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  &:disabled {
    transition: unset;
    opacity: 0.4;
  }
}
</style>
