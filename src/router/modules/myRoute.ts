/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {string} title 页面标题
 */
import { RouteConfig } from 'vue-router'
import asyncLoader from '@/utils/asyncLoader'
import Navbar from '@/components/baseNavbar'
import Tabbar from '@/components/baseTabbar'

const customRoutes: RouteConfig[] = [
  {
    path: '/my',
    name: 'my',
    components: {
      default: asyncLoader('my/index.vue'),
      tabbar: Tabbar
    },
    meta: {
      barindex: 3,
      title: 'my'
    }
  }
]

export default customRoutes
