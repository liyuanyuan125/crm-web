
/**
 * 请求的公共参数
 */
export const conmomPrams: any = {
  timeout: 6000,
  withCredentials: true
}

/**
 * 请求url配置
 */
export default {
  getCustomList: {url: '/basis/calendars', method: 'GET'},
  login: {url: '/login/login', method: 'POST'}
}



