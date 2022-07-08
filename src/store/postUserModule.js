import axios from 'axios'
export const postUserModule = {
  state: () => ({
    token: '',
  }),
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUserToken(state, token) {
      state.token = token
    },
  },
  actions: {
    async updateUser({ state, dispatch }, user) {
      try {
        console.log(user)

        await dispatch('getUserToken')
        await axios.post(
          'https://frontend-test-assignment-api.abz.agency/api/v1/users/',
          user,
          {
            headers: {
              Token: state.token,
              'Content-Type': 'multipart/form-data',
            },
          }
        )
      } catch (e) {
        console.log(e)
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
