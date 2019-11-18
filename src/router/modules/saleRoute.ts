/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {string} title 页面标题
 */
import { RouteConfig } from 'vue-router'
import asyncLoader from '@/utils/asyncLoader'
import Navbar from '@/components/baseNavbar'
import Tabbar from '@/components/baseTabbar'

const saleRoutes: RouteConfig[] = [
  {
    path: '/sale',
    name: 'sale',
    components: {
      default: asyncLoader('sale/index.vue'),
      tabbar: Tabbar
    },
    meta: {
      barindex: 1,
      title: 'intermediary'
    }
  }
]

export default saleRoutes
