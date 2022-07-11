import axios from 'axios'
export const postUserModule = {
  state: () => ({
    token: '',
    successfully: false,
    error: {
      invalidName: undefined,
      invalidEmail: undefined,
      invalidPhone: undefined,
      invalidPositionId: undefined,
      invalidPhoto: undefined,
    },
  }),
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUserToken(state, token) {
      state.token = token
    },
    setInvalidName(state, nameError) {
      state.error.invalidName = nameError
    },
    setInvalidEmail(state, emailError) {
      state.error.invalidEmail = emailError
    },
    setInvalidPhone(state, phoneError) {
      state.error.invalidPhone = phoneError
    },
    setInvalidPositionId(state, positionError) {
      state.error.invalidPositionId = positionError
    },
    setInvalidPhoto(state, photoError) {
      state.error.invalidPhoto = photoError
    },
    setSuccessfully(state, success) {
      state.successfully = success
    },
  },
  actions: {
    async updateUser({ state, dispatch, commit }, user) {
      try {
        await dispatch('getUserToken')
        const response = await axios.post(
          'https://frontend-test-assignment-api.abz.agency/api/v1/users/',
          user,

          {
            headers: {
              Token: state.token,
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        console.log(response.data)
        commit('setSuccessfully', response.data.success)
      } catch (e) {
        console.log(e.response.status !== '409')
        commit('error/setError', e, { root: true })
        if (e.response.data.fails) {
          commit('setInvalidName', e.response.data.fails.name)
          commit('setInvalidEmail', e.response.data.fails.email)
          commit('setInvalidPhone', e.response.data.fails.phone)
          commit('setInvalidPositionId', e.response.data.fails.position_id)
          commit('setInvalidPhoto', e.response.data.fails.photo)
        }
        throw e
      } finally {
        dispatch('user/fetchUsers', null, { root: true })
      }
    },
    async getUserToken({ commit }) {
      try {
        const response = await axios.get(
          'https://frontend-test-assignment-api.abz.agency/api/v1/token'
        )
        commit('setUserToken', response.data.token)
      } catch (e) {
        console.log(e)
      }
    },
  },
  namespaced: true,
}
