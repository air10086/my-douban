import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '@/components/Tabbar'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'mTabbar',
    component: Tabbar
  }]
})
