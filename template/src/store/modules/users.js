import api from 'services/api'

const state = {
  users: [],
}

const getters = {
  users: state => state.users,
}

const mutations = {
  ADD(state, users) {
    users.forEach(user => state.users.push(user))
  },
}

const actions = {
  async fetch({ commit }) {
    const resp = await api.get('/users')
    commit('ADD', resp.data)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
