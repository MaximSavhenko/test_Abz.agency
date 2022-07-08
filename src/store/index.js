import { createStore } from 'vuex'
import { usersModule } from './usersModule'
import { positionsModule } from './positionsModule'
import { postUserModule } from './postUserModule'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user: usersModule,
    position: positionsModule,
    postUser: postUserModule,
  },
})
