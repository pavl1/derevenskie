import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from 'components/Main'
import Farmer from 'components/Farmer'
import Investor from 'components/Investor'
import Company from 'components/Company'
import Contacts from 'components/Contacts'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/farmer',
      name: 'Farmer',
      component: Farmer
    }, {
      path: '/investor',
      name: 'Investor',
      component: Investor
    }, {
      path: '/company',
      name: 'Company',
      component: Company
    }, {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
