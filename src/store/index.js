import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    kittenName: '',
    kittenUrl: '',
    kittens: [
      'https://placekitten.com/300/301',
      'https://placekitten.com/301/301',
      'https://placekitten.com/302/303'
    ]
  },
  mutations: {
    updateKittenInfo (state, { field, value }) {
      state[field] = value
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
