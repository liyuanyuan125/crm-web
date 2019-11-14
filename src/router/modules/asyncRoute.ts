/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {string} title 页面标题
 */
import { RouteConfig } from 'vue-router'
import Tabbar from '@/components/baseTabbar'
// const Tabbar = () => import(/* webpackChunkName: "tabbar" */ '@/components/baseTabbar')
const asyncRoutes: RouteConfig[] = [
  {
    path: '/sale',
    name: 'sale',
    components: {
      default: () => import(/* webpackChunkName: "sale" */ '@/views/sale/index.vue'),
      tabbar: Tabbar
    },
    meta: {
      barindex: 1,
      title: 'intermediary'
    }
  }, {
    path: '/executionAmount',
    name: 'executionAmount',
    components: {
      default: () => import(/* webpackChunkName: "executionAmount" */ '@/views/sale/executionAmount.vue')
    }
  }, {
    path: '/royalty',
    name: 'royalty',
    components: {
      default: () => import(/* webpackChunkName: "royalty" */ '@/views/sale/royalty.vue')
    }
  }, {
    path: '/analysis',
    name: 'analysis',
    components: {
      default: () => import(/* webpackChunkName: "analysis" */ '@/views/sale/analysis.vue')
    }
  },
  {
    path: '/intermediary',
    name: 'intermediary',
    components: {
      default: () => import(/* webpackChunkName: "intermediary" */ '@/views/intermediary/index.vue'),
      tabbar: Tabbar
    },
    meta: {
      barindex: 2,
      title: 'intermediary'
    }
  },
  {
    path: '/my',
    name: 'my',
    components: {
      default: () => import(/* webpackChunkName: "my" */ '@/views/my/index.vue'),
      tabbar: Tabbar
    },
    meta: {
      barindex: 3,
      title: 'my'
    }
  }
]

export default asyncRoutes
