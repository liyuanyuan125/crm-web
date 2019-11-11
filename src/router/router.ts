/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {string} title 页面标题
 */
import Customer from '../views/customer/index.vue'
import Tabbar from '@/components/baseTabbar'
// const Tabbar = () => import(/* webpackChunkName: "Tabbar" */ '@/components/baseTabbar')
export default [
  {
    path: '/',
    name: 'Customer',
    components: {
      default: () => import(/* webpackChunkName: "Customer" */ '@/views/customer/index.vue'),
      tabbar: () => import(/* webpackChunkName: "Tabbar" */ '@/components/baseTabbar')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'login'
    }
  }
  // {
  //   path: '/main',
  //   name: 'main',
  //   component: () => import(/* webpackChunkName: "main" */ '../views/main/index.vue'),
  //   meta: {
  //     icon: '',
  //     keepAlive: true,
  //     title: 'main'
  //   }
  // }
]
