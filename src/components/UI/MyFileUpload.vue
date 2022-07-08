<template>
  <label class="input-file">
    <input type="file" @change="updateInput($event)" />
    <span class="input-file__btn">Upload</span>
    <p class="input-file__name" v-if="modelValue">
      <span>{{ modelValue.name }}</span>
    </p>
    <span class="input-file__name title" v-else>Upload your photo</span>
  </label>
</template>

<script>
export default {
  name: 'my-file-upload',
  props: ['modelValue'],
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.files[0])
    },
  },
}
</script>

<style scoped lang="scss">
.input-file {
  width: 100%;
  display: flex;
  height: 54px;
  border-radius: 4px;
  position: relative;

  input {
    display: none;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    width: 100%;
    max-width: 83px;
    border: 1px solid rgba(0, 0, 0, 0.87);
    border-radius: 4px 0px 0px 4px;
  }
  &__name {
    border: 1px solid #d0cfcf;
    border-left: none;
    border-radius: 0px 4px 4px 0px;
    width: calc(100% - 83px);
    padding-left: 16px;
    display: flex;
    align-items: center;

    span {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &.title {
      color: #7e7e7e;
    }
  }
}
</style>
