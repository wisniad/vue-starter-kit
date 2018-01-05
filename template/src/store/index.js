import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import counter from './modules/counter'

Vue.use(Vuex)

const isDebug = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'testing'
const modules = {
  counter,
}

export default new Vuex.Store({
  plugins: isDebug
    ? [createLogger()]
    : [],
  strict: isDebug,
  modules,
})
