/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {string} title 页面标题
 */
import { RouteConfig } from 'vue-router'
import asyncLoader from '@/utils/asyncLoader'
import Navbar from '@/components/baseNavbar'
import Tabbar from '@/components/baseTabbar'

const intermediaryRoutes: RouteConfig[] = [
  {
    path: '/intermediary',
    name: 'intermediary',
    components: {
      default: asyncLoader('intermediary/index.vue'),
      tabbar: Tabbar
    },
    meta: {
      barindex: 2,
      title: 'intermediary'
    }
  }
]

export default intermediaryRoutes
