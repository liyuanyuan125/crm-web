/**
 * @description Request
 * @author zhangbing
 * @date 2019-10-26
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { Toast } from 'vant'
import requestConfig, { conmomPrams } from '@/service/urlconfig'
import router from '../router'
import { AjaxResult } from '../types'

declare type Methods = 'GET' | 'OPTIONS' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
declare interface Datas {
  method?: Methods
  [key: string]: any
}

// 确保最终的数据，始终有值
const perfectData = ({ code, data, msg }: any = {}) => {
  return {
    code,
    data: data || {},
    msg: msg || '',
  } as AjaxResult
}

const baseURL = process.env.NODE_ENV === 'production'
? process.env.VUE_APP_BASE_API
: (process.env.VUE_APP_ISMOCK === 'true' ? location.origin : process.env.VUE_APP_BASE_API)
class HttpRequest {
  public queue: any // 请求的url集合
  public constructor() {
    this.queue = {}
  }
  destroy(url: string) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // hide loading
    }
  }
  interceptors(instance: any, url?: string) {
    // 请求拦截
    instance.interceptors.request.use((config: AxiosRequestConfig) => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // show loading
      }
      if (url) {
        this.queue[url] = true
      }
      return config
    }, (error: any) => {
      Toast(error)
    })
    // 响应拦截
    instance.interceptors.response.use((res: AxiosResponse) => {
      if (url) {
        this.destroy(url)
      }
      const { data, status } = res
      if (status === 200 && data && data.code === 0) { return perfectData(data) } // 请求成功
      return requestFail(res) // 失败回调
    }, (error: any) => {
      if (url) {
        this.destroy(url)
      }
      switch (error.response.status) {
        case 400: error.message = '请求错误(400)' ; break
        case 403: error.message = '拒绝访问(403)'; break
        case 404: error.message = '请求出错(404)'; break
        case 500: error.message = '服务器错误(500)'; break
        case 502: error.message = '网络错误(502)'; break
        case 503: error.message = '服务不可用(503)'; break
        case 504: error.message = '网络超时(504)'; break
        default: error.message = `连接出错(${error.response.status})!`
      }
      Toast(error.message)
    })
  }
  async request(options: AxiosRequestConfig) {
    const instance = axios.create()
    await this.interceptors(instance, options.url)
    return instance(options)
  }
}

// 请求失败
const requestFail = (res: AxiosResponse) => {
  let errStr = '网络繁忙！'
  // token失效重新登录
  if (res.data.code === 401) {
    Toast('token失效重新登录')
    return router.replace({ name: 'login' })
  }
  Toast(res.data.msg || errStr)
  return perfectData(res.data)
}

// 匹配restful接口
const replaceParams = (params: any, opts: any) => {
  Object.keys(params).forEach(async item => {
    let reg = new RegExp(`\\{(${item}+?)\\}`)
      if (reg.test(opts.url)) {
        opts.url = await opts.url.replace(reg, params[item])
      }
  })
  return opts
}

// 合并axios参数
const conbineOptions = (_opts: any, data: Datas, method: Methods): AxiosRequestConfig => {
  let opts = _opts
  if (typeof opts === 'string') {
    opts = { url: opts }
  }

  const _data = { ...opts.data, ...data }

  const options = {
    ...conmomPrams,
    method: opts.method || data.method || method || 'GET',
    url: `${process.env.VUE_APP_ISMOCK === 'true' ? '/dev-api/' : ''}${opts.url}`,
    baseURL
  }
  return options.method !== 'GET' ? Object.assign(options, { data: _data }) : Object.assign(options, { params: _data })
}

const HTTP = new HttpRequest()

/**
 * 抛出整个项目的api方法
 */
const API = (() => {
  const apiObj: any = {}
  const fun = (opts: AxiosRequestConfig | string) => {
    return async ( data = {params: {}}, constructor = '', method: Methods = 'GET' ) => {
      // 接口是否含有restful接口
      let originOpts: AxiosRequestConfig | string
      if (constructor) {
        let cloneRequestConfig = JSON.parse(JSON.stringify(requestConfig))
        originOpts = cloneRequestConfig[constructor]
        opts = await replaceParams(data.params, originOpts)
        delete data.params
      }

      const newOpts = conbineOptions(opts, data, method)
      const res = await HTTP.request(newOpts)
      return res
    }
  }

  Object.keys(requestConfig).forEach(key => {
    apiObj[key] = fun((requestConfig as any)[key])
  })
  return apiObj
})()

export default API as any
