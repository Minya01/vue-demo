import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/user/login'
import CashIndex from '@/pages/cash/index'
import CashBorrow from '@/pages/cash/borrow'
import Apply from '@/pages/info/apply'
import Personal from '@/pages/info/personal'
import My from '@/pages/user/my'

Vue.use(Router)

// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point

export default new Router({
  mode: 'history',//路由模式
  routes: [
    {
      path: '/',
      name: '登录页',
      component: Login
    },
    {
      path: '/borrow',
      name: 'borrow',
      component: CashBorrow
    },
    {
      path: '/apply',
      name: '申请页面',
      component: Apply
    },
    {
      path: '/my',
      name: '我的',
      component: My
    },
    {
      path: '/personal',
      name: '个人信息',
      component: Personal
    }
  ]
})
