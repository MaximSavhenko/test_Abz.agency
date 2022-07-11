<template>
  <section class="sign-up">
    <h1 class="sign-up__title" v-if="successfully">
      User successfully registered
    </h1>
    <h1 class="sign-up__title" v-else>Working with POST request</h1>
    <div v-if="successfully" class="sign-up__successfully">
      <img src="@/assets/images/icons/success-image.svg" alt="success">
    </div>
    <form
      @submit.prevent="submitHandler"
      novalidate="true"
      class="sign-up__form"
      v-else
    >
      <div class="sign-up__form-inputs">
        <div class="sign-up__form-input">
          <my-input
            tupeInput="text"
            v-model="name"
            id="name"
            :class="{ error: typeof this.error.invalidName !== 'undefined' }"
          >
            Your name
          </my-input>
          <small v-for="nameVal in error.invalidName" :key="nameVal">{{
            nameVal
          }}</small>
        </div>
        <div class="sign-up__form-input">
          <my-input
            tupeInput="email"
            v-model="email"
            id="email"
            :class="{ error: typeof this.error.invalidEmail !== 'undefined' }"
            >Email</my-input
          >
          <div v-if="typeof this.error.invalidEmail !== 'undefined'">
            <small v-for="emailVal in error.invalidEmail" :key="emailVal">{{
              emailVal
            }}</small>
          </div>
        </div>
        <div class="input-help sign-up__form-input">
          <my-input
            tupeInput="tel"
            v-model="phone"
            id="phone"
            :class="{ error: typeof this.error.invalidPhone !== 'undefined' }"
            >Phone</my-input
          >
          <small v-for="phoneVal in error.invalidPhone" :key="phoneVal">{{
            phoneVal
          }}</small>
          <span v-if="typeof this.error.invalidPhone === 'undefined'"
            >+38 (XXX) XXX - XX - XX</span
          >
        </div>
      </div>
      <div class="sign-up__form-radio sign-up__form-input">
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
        <small
          v-for="positionVal in error.invalidPositionId"
          :key="positionVal"
          >{{ positionVal }}</small
        >
      </div>
      <div class="sign-up__form-file">
        <div class="sign-up__form-input">
          <my-file-upload
            v-model="img"
            :class="{ error: typeof this.error.invalidPhoto !== 'undefined' }"
          />
          <small v-for="photoVal in error.invalidPhoto" :key="photoVal">{{
            photoVal
          }}</small>
        </div>
      </div>
      <my-btn
        type="submit"
        :disabled="name.length < 1"
        :class="{ disabled: name.length < 1 }"
        >Sign up</my-btn
      >
    </form>
  </section>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import MyBtn from '../UI/MyBtn.vue'
export default {
  components: {MyBtn},
  props: {},
  data: () => ({
    name: '',
    email: '',
    phone: '',
    position_id: null,
    nameFile: '',
    img: {},
  }),
  mounted() {
    this.fetchPositions()
  },
  computed: {
    ...mapState({
      positions: (state) => state.position.positions,
      error: (state) => state.postUser.error,
      successfully: (state) => state.postUser.successfully,
    }),
    checkTypeError(error) {
      error !== 'undefined'
    },
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
    &-inputs {
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;
    }
    &-input {
      margin-bottom: 50px;
      &:last-child {
        margin-bottom: 0;
      }
      small {
        color: #cb3d40;
        font-size: 12px;
        margin-top: 4px;
        margin-left: 14px;
      }
      &.input-help {
        span {
          font-size: 12px;
          margin-top: 4px;
          margin-left: 14px;
          color: #7e7e7e;
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

  &__successfully {
    display: flex;
    flex-direction: column;
    width: 100%;
    img {
    max-height: 290px;
    margin-bottom: 25px;
    }
  }
}
</style>
