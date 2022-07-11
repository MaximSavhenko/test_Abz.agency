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
@import '@/assets/styles/helpers/toast';
@import '@/assets/styles/helpers/tooltip';
@import './assets/styles/helpers/media';
@font-face {
  font-family: 'Nunito';
  src: url('@/assets/font/Nunito-Regular.woff2') format('woff2'),
    url('@/assets/font/Nunito-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Nunito';
  src: url('@/assets/font/Nunito-Medium.woff2') format('woff2'),
    url('@/assets/font/Nunito-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
button {
  background-color: transparent;
  color: inherit;
  border-width: 0;
  padding: 0;
  cursor: pointer;
}
figure {
  margin: 0;
}
ul,
ol,
dd {
  margin: 0;
  padding: 0;
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}
p,
body {
  margin: 0;
}
cite {
  font-style: normal;
}
fieldset {
  border-width: 0;
  padding: 0;
  margin: 0;
}

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
