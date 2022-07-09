<template>
  <section class="users">
    <h1 class="users__title">Working with GET request</h1>
    <my-loader v-if="isUserLoading" />
    <div class="users_card__wrapper" v-else>
      <transition-group name="user-list">
        <CardUser v-for="user in users" :key="user.id" :user="user" />
      </transition-group>
    </div>
    <my-btn @click="loadMoreUsers" v-if="links != null">Show more</my-btn>
    <div v-else style="text-align: center">You have viewed all users</div>
  </section>
</template>

<script>
import CardUser from './CardUser.vue'
import { mapActions, mapState } from 'vuex'
import MyLoader from '@/components/UI/MyLoader.vue'
import MyBtn from '@/components/UI/MyBtn.vue'
export default {
  components: { CardUser, MyLoader, MyBtn },
  mounted() {
    this.fetchUsers()
  },
  computed: {
    ...mapState({
      users: (state) => state.user.users,
      isUserLoading: (state) => state.user.isUserLoading,
      links: (state) => state.user.links,
    }),
  },
  methods: {
    ...mapActions({
      fetchUsers: 'user/fetchUsers',
      loadMoreUsers: 'user/loadMoreUsers',
    }),
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/helpers/media';
.users {
  display: flex;
  flex-direction: column;
  margin-bottom: 140px;
  &__title {
    margin-bottom: 50px;
  }
  &_card__wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -14.5px 50px -14.5px;
    gap: 29px 0;
    @include b(tablet) {
      margin: 0 -8px 50px -8px;
      gap: 16px 0;
    }
    @include b(mobile) {
      margin: 0 0 50px 0;
      gap: 20px 0;
    }
  }
  .btn {
    min-width: 120px;
    align-self: center;
  }

  .user-list-enter-active,
  .user-list-leave-active {
    transition: all 0.4s ease;
  }
  .user-list-enter-from,
  .user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .user-list-move {
    transition: transform 0.4s ease;
  }
}
</style>
