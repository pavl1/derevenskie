import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
window.Event = new Vue()

window.vue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
