<template>
  <section class="hero">
    <div class="hero__content">
      <h1>Test assignment for front-end developer</h1>
      <p>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <my-btn @click="$router.push('/sign-up')">Sign up</my-btn>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.hero {
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/background.jpg');
  margin-bottom: 140px;
  &__content {
    max-width: 380px;
    display: flex;
    flex-direction: column;
    h1 {
      margin-bottom: 21px;
      color: #fff;
    }
    p {
      text-align: center;
      margin-bottom: 32px;
      color: #fff;
    }
    .btn {
      align-self: center;
    }
  }
}
</style>
