import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import asyncRoutes from './modules/asyncRoute'
import { BarModule } from '@/store/modules/bar'

Vue.use(Router)

export const constantRoutes: RouteConfig[] = [
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
      title: 'login'
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/error-page/404.vue'),
    meta: {
      icon: '',
      title: '404'
    }
  },
  {
    path: '/401',
    name: '401',
    component: () => import(/* webpackChunkName: "401" */ '@/views/error-page/401.vue'),
    meta: {
      icon: '',
      title: '401'
    }
  },
 ...asyncRoutes
]

const router = new Router({
  routes: constantRoutes,
  mode: 'history'
})

// 登陆页面路由 name
const LOGIN_PAGE_NAME = 'login'

// 跳转之前
router.beforeEach((to, from, next) => {
  if (to && to.meta && to.meta.barindex) {
    BarModule.setBar(to.meta.barindex)
  }
  const token = localStorage.getItem('accesstoken')
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: '/' // 跳转到 index 页
    })
  } else {
    if (token) {
      next() // 跳转
    } else {
      next({
        name: LOGIN_PAGE_NAME
      })
    }
  }
})


// 跳转之后
router.afterEach(to => {
  //
})

export default router
