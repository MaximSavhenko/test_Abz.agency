<template>
  <main>
    <HeroBlock />
    <GetRequest />
    <SignUp />
  </main>
</template>

<script>
import HeroBlock from '@/components/homePage/HeroBlock.vue'
import GetRequest from '@/components/homePage/GetRequest/GetRequest.vue'
import SignUp from '@/components/SignUp/SignUp.vue'
export default {
  name: 'home-page',
  components: { HeroBlock, GetRequest, SignUp },
}
</script>

<style scoped lang="scss"></style>
