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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin: 0 12px 0 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 50%;
  border: 1px solid #d0cfcf;
  transition: 0.2s all linear;
  outline: none;
  position: relative;

  &:before {
    content: '';
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #00bdd3;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }

  &:checked {
    border: 1px solid #00bdd3;

    &:before {
      transform: scale(1);
    }
  }
}
</style>
