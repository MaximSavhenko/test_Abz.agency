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
  transition: all 0.2s;

  &:hover {
    background-color: #ffe302;
  }

  &.disabled {
    background-color: #b4b4b4;
    color: rgba(255, 255, 255, 0.87);
    cursor: default;
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>
