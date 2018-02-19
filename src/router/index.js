import Vue from 'vue'
import Router from 'vue-router'
import VueChartJs from 'vue-chartjs'
import UserProfiles from '@/components/UserProfiles'
import StocksList from '@/components/StocksList'
import LandingPage from '@/components/LandingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/home',
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
