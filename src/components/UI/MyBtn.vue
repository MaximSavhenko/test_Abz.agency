<template>
  <button type="button" class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-btn',
}
</script>

<style scoped lang="scss">
.btn {
  background: #f4e041;
  border-radius: 80px;
  min-width: 100px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
}
</style>
