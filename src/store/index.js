import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import items from '@/data/items'

export default createStore({
  state: {
    kittenName: '',
    kittenUrl: '',
    kittens: [
      'https://placekitten.com/300/301',
      'https://placekitten.com/301/301',
      'https://placekitten.com/302/303'
    ],
    timer: null,
    seconds: 0,
    items,
    purchasedItems: [],
    autoPurrsPerSecond: 0,
    totalPurrs: 0,
    totalSpent: 0,
    user: {
      level: 0
    }
  },
  getters: {
    currentTotal (state) {
      return Math.round(state.totalPurrs) - state.totalSpent
    },
    purchasedItemCount (state) {
      return (item) => {
        return state.purchasedItems.filter((pItem) => {
          return pItem.name === item.name
        }).length
      }
    }
  },
  mutations: {
    updateKittenInfo (state, { field, value }) {
      state[field] = value
    },
    setTimer (state, payload) {
      state.timer = payload
    },
    setSeconds (state, seconds) {
      state.seconds = seconds
    },
    incrementPurrs (state) {
      state.totalPurrs += 1
    },
    autoUpdatePurrs (state) {
      state.totalPurrs += state.autoPurrsPerSecond
    },
    purchaseItem (state, item) {
      state.totalSpent += item.cost
      state.autoPurrsPerSecond += item.purrsPerSecond
      state.purchasedItems.push(item)
    }
  },
  actions: {
    createTimer ({ commit, state }) {
      const timer = setInterval(() => {
        commit('autoUpdatePurrs')
        commit('setSeconds', state.seconds + 1)
      }, 1000)
      commit('setTimer', timer)
    },
    clearTimer ({ state }) {
      clearInterval(state.timer)
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
