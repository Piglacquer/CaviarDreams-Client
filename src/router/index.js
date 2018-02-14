import Vue from 'vue'
import Router from 'vue-router'
import UserProfiles from '@/components/UserProfiles'
import StocksList from '@/components/StocksList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserProfiles',
      component: UserProfiles
    },
    {
      path: '/StocksList/:userId',
      name: 'StocksList',
      component: StocksList
    }
  ]
})
