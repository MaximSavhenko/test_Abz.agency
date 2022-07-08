import axios from 'axios'
export const usersModule = {
  state: () => ({
    users: [],
    page: 1,
    count: 6,
    links: '',
    isUserLoading: false,
  }),
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setLoading(state, bool) {
      state.isUserLoading = bool
    },
    setPage(state, page) {
      state.page = page
    },
    setLinks(state, links) {
      state.links = links
    },
  },
  actions: {
    async fetchUsers({ state, commit }) {
      try {     
        commit('setLoading', true)
        const response = await axios.get(
          'https://frontend-test-assignment-api.abz.agency/api/v1/users',
          {
            params: {
              page: state.page,
              count: state.count,
            },
          }
        )
        commit('setUsers', response.data.users)
      } catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false)
      }
    },
    async loadMoreUsers({ state, commit }) {
      try {
        commit('setPage', state.page + 1)
        const response = await axios.get(
          'https://frontend-test-assignment-api.abz.agency/api/v1/users',
          {
            params: {
              page: state.page,
              count: state.count,
            },
          }
        )
        commit('setUsers', [...state.users, ...response.data.users])
        commit('setLinks', response.data.links.next_url)
      } catch (e) {
        console.log(e)
      }
    },
  },
  namespaced: true,
}
