<template>
  <div class="container">
    <nav-bar />
  </div>
  <router-view />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import messages from '@/utils/messages'
import { mapGetters } from 'vuex'

export default {
  components: { NavBar },
  computed: {
    ...mapGetters({
      errorGetter: 'error/errorGetter',
    }),
    error() {
      return this.errorGetter
    },
  },
  watch: {
    error(fdError) {
      this.$error(messages[fdError.message] || 'Something went wrong')
    },
  },
}
</script>

<style lang="scss">
//Styles for toast, tooltip , Media queries , reset styles, fonts
@import '@/assets/styles/helpers/toast';
@import '@/assets/styles/helpers/tooltip';
@import '@/assets/styles/helpers/media';
@import '@/assets/styles/helpers/fonts';
@import '@/assets/styles/helpers/reset';

// Basic style for tags
body {
  font-family: 'Nunito', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  background: #e5e5e5;
  color: #000;
}
h1 {
  font-size: 40px;
  line-height: 1;
  text-align: center;
}
.container {
  max-width: 1170px;
  margin: 0 auto;
  @include b(laptop) {
    padding: 0 60px;
  }
  @include b(tablet) {
    padding: 0 32px;
  }
  @include b(mobile) {
    padding: 0 16px;
  }
}
</style>
