import Vue from 'vue'
import Axios from 'axios'
import App from './App'
import router from './router'

/* eslint-disable no-new */
window.Event = new Vue()

window.axios = Axios.create({
  baseURL: '/',
  timeout: 1000
});

window.vue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
