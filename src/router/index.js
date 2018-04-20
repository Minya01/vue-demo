import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/user/login'
import Borrow from '@/pages/cash/borrow'

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
      name: '页面一',
      component: Borrow
    }
  ]
})
