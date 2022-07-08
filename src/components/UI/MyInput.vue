<template>
  <div class="input-default">
    <input
      :value="modelValue"
      @input="updateInput"
      :id="id"
      required
      :type="tupeInput"
    />
    <label class="input-label" :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
    id: {
      type: String,
      required: true,
    },
    tupeInput: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>

<style scoped lang="scss">
.input-default {
  position: relative;
  height: 100%;
  input {
    position: relative;
    z-index: 2;
    border: 1px solid #d0cfcf;
    border-radius: 4px;
    height: 54px;
    width: 100%;
    background-color: #e5e5e5;
    padding: 0 16px;
    color: rgba(0, 0, 0, 0.87);

    &:focus ~ .input-label,
    &:not(:focus):valid ~ .input-label {
      top: 0px;
      z-index: 5;
      font-size: 12px;
      font-weight: 500;
      background-color: #e5e5e5;
      color: #7e7e7e;
      padding: 0 4px;
    }

    &:focus-visible {
      outline: none;
    }

    &::placeholder {
      opacity: 0;
    }

    &:focus {
      &::placeholder {
        opacity: 1;
      }
    }
  }
}

.input-label {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  z-index: 5;
  color: #7e7e7e;
  transition: all 0.2s;
  font-weight: 400;
}
</style>
