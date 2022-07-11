<template>
  <div class="card">
    <div class="card__inner">
      <div class="card__img">
        <img :src="user.photo" alt="user" />
      </div>
      <span class="card__title" v-tooltip="user.name">
        {{ user.name }}
      </span>
      <div class="card__body">
        <span class="card__body-title text-hide" v-tooltip="user.position">{{ user.position }}</span>
        <a :href="`mailto:${user.email}`" class="text-hide" v-tooltip="user.email">{{ user.email }}</a>
        <a :href="`tel:${user.phone}`">{{ numberValueReduced(user.phone) }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {
    numberValueReduced(phone) {
      return phone.replace(
        /(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/,
        '$1 ($2) $3 $4 $5'
      )
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/helpers/media';

.card {
  width: 33.3333%;
  padding: 0 14.5px;
  @include b(tablet) {
    width: 50%;
    padding: 0 8px;
  }
  @include b(mobile-l) {
    width: 100%;
    padding: 0;
  }
  .text-hide {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__inner {
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
  }
  &__img {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    img {
      border-radius: 50%;
      max-width: 70px;
    }
  }
  &__title {
    text-align: center;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 20px;
  }
  &__body {
    a {
      text-align: center;
      display: block;
    }
    &-title {
      text-align: center;
    }
  }
}
</style>
