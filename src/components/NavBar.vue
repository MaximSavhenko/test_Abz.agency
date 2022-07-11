<template>
  <nav class="nav-bar">
    <div class="nav-bar__logo">
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="logo" />
      </router-link>
    </div>
    <div class="nav-bar__btns">
      <my-btn @click="$router.push('/users')">Users</my-btn>
      <my-btn @click="$router.push('/sign_up')">Sign up</my-btn>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  &__logo {
    a {
      display: flex;
    }
  }
  &__btns {
    display: flex;
  }
}
</style>
