/*
This module is needed to distribute and catch errors, for further output to the front
*/

export const errorModule = {
  state: {
    error: null,
  },
  getters: {
    errorGetter: (s) => s.error,
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    },
  },

  namespaced: true,
}
