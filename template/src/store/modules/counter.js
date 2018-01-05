const state = {
  count: 0,
}

const mutations = {
  INCREMENT(state) {
    state.count += 1
  },
  DECREMENT(state) {
    state.count -= 1
  },
}

const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
