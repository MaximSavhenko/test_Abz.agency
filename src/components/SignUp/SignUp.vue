<template>
  <section class="sign-up">
    <h1 class="sign-up__title">Working with POST request</h1>
    <form @submit.prevent="submitHandler" class="sign-up__form">
      <div class="sign-up__form-input">
        <my-input tupeInput="text" v-model="name" id="name">Your name</my-input>
        <my-input tupeInput="email" v-model="email" id="email">Email</my-input>
        <my-input tupeInput="tel" v-model="phone" id="phone">Phone</my-input>
      </div>
      <div class="sign-up__form-radio">
        <span class="sign-up__form-radio-title">Select your position</span>
        <label v-for="position in positions" :key="position.id">
          <my-radio-button
            v-model="position_id"
            :id="position.id"
            :value="position.id"
            name="position"
          />
          {{ position.name }}
        </label>
      </div>
      <div class="sign-up__form-file">
        <my-file-upload v-model="img" />
      </div>
      <my-btn type="btn">Sign up</my-btn>
    </form>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  components: {},
  props: {},
  data: () => ({
    name: '',
    email: '',
    phone: '',
    position_id: null,
    nameFile: '',
    img: null,
  }),
  mounted() {
    this.fetchPositions()
  },
  computed: {
    ...mapState({
      positions: (state) => state.position.positions,
    }),
  },
  methods: {
    ...mapActions({
      fetchPositions: 'position/fetchPositions',
      fetchUsers: 'user/fetchUsers',
    }),
    submitHandler() {
      this.$store.dispatch('postUser/updateUser', {
        registration_timestamp: Date.now(),
        name: this.name,
        email: this.email,
        phone: this.phone,
        position_id: this.position_id,
        photo: this.img,
      })
      this.fetchUsers()
    },
  },
}
</script>

<style scoped lang="scss">
.sign-up {
  margin-bottom: 100px;

  &__title {
    margin-bottom: 50px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 380px;
    &-input {
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;
      .input-default {
        margin-bottom: 50px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    &-radio {
      display: flex;
      flex-direction: column;
      margin-bottom: 47px;
      label {
        display: flex;
        align-items: center;
        margin-bottom: 7px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      &-title {
        margin-bottom: 11px;
        display: block;
      }
    }
    &-file {
      margin-bottom: 50px;
    }
    .btn {
      align-self: center;
    }
  }
}
</style>
