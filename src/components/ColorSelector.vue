<template>
  <span>
    <button
      data-color="option.bgColor"
      :class="[
        option.bgColor,
        option.hoverColor,
        'color-select-option',
        'button',
        'w-6',
        'h-6',
        'font-bold',
        'p-1',
        'rounded'
      ]"
    ></button>
    <br v-if="hasNewLine" />
  </span>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    hasNewLine() {
      return (this.index + 1) % 7 === 0;
    }
  }
};
</script>

<style scoped></style>
