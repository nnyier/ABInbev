import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/routercontent/home'
import Pay from '../components/routercontent/pay'
import Undotask from '../components/routercontent/undotask'
import Approve from '../components/routercontent/approve'
import Notice from '../components/routercontent/notice'
import Sidelist1 from '../components/sidelist/sidelist1'
import Sidelist2 from '../components/sidelist/sidelist2'
import Sidelist3 from '../components/sidelist/sidelist3'
import Sidelist4 from '../components/sidelist/sidelist4'
import Sidelist5 from '../components/sidelist/sidelist5'
import Sidelist6 from '../components/sidelist/sidelist6'
import Sidelist7 from '../components/sidelist/sidelist7'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/undotask',
      component: Undotask
    },
    {
      path: '/approve',
      component: Approve
    },
    {
      path: '/notice',
      component: Notice
    },
    {
      path: '/sidelist1',
      component: Sidelist1
    },
    {
      path: '/sidelist2',
      component: Sidelist2
    },
    {
      path: '/sidelist3',
      component: Sidelist3
    },
    {
      path: '/sidelist4',
      component: Sidelist4
    },
    {
      path: '/sidelist5',
      component: Sidelist5
    },
    {
      path: '/sidelist6',
      component: Sidelist6
    },
    {
      path: '/sidelist7',
      component: Sidelist7
    }
  ]
})
