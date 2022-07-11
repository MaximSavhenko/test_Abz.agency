/*
Here we take the available positions from the server, for further mapping to the front
*/

import axios from 'axios'
export const positionsModule = {
  state: () => ({
    positions: [],
    isPositionsLoading: false,
  }),
  getters: {},
  mutations: {
    setPositions(state, positions) {
      state.positions = positions
    },
    setLoading(state, bool) {
      state.isPositionsLoading = bool
    },
  },
  actions: {
    async fetchPositions({ commit }) {
      try {
        commit('setLoading', true)
        const response = await axios.get(
          'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
        )
        commit('setPositions', response.data.positions)
      } catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false)
      }
    },
  },
  namespaced: true,
}
