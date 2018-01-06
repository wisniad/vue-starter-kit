import './polyfills'
/* eslint-disable import/first */
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { sync } from 'vuex-router-sync'
/* eslint-enable import/first */
import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuelidate)

sync(store, router)

Vue.config.productionTip = false

// http://varun.ca/icon-component/
const files = require.context('!svg-sprite-loader!./assets/icons', false, /.*\.svg$/)
files.keys().forEach(files)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
