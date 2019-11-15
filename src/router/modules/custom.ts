/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {string} title 页面标题
 */
import { RouteConfig } from 'vue-router'
import Navbar from '@/components/baseNavbar'

const customRoutes: RouteConfig[] = [
  {
    path: '/custom/search',
    name: 'custom-search',
    components: {
      default: () => import(/* webpackChunkName: "my" */ '@/views/customer/search.vue'),
      navbar: Navbar
    },
    meta: {
      title: '筛选'
    }
  },
  {
    path: '/custom/add',
    name: 'custom-add',
    components: {
      default: () => import(/* webpackChunkName: "my" */ '@/views/customer/search.vue'),
      navbar: Navbar
    },
    meta: {
      title: '新建客户'
    }
  }
]

export default customRoutes
