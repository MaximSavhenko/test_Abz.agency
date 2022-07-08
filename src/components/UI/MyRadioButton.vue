<template>
  <input
    class="input-radio"
    type="radio"
    :value="modelValue"
    @input="updateInput"
  />
</template>

<script>
export default {
  name: 'my-radio-button',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>

<style scoped lang="scss">
.input-radio {
  width: 20px;
  height: 20px;
  margin: 0 12px 0 0;
}
</style>
