// 使用这个会导致组件内部的 router 导航守卫无法使用, 慎用
/**
 * @param  { string } chunkPath views 文件夹下的页面路径
 * @return { function } 返回 promise<component> 的匿名函数
 */
import spinner from '@/components/baseLoading'
import errorpage from '@/views/error-page/404.vue'

export default (chunkPath: string) => {
  const AsyncHandler = () => ({
    component: new Promise(resolve => {
      setTimeout(() => {
        resolve(
          import(/* webpackChunkName: "[request]" */ `@/views/${chunkPath}`)
        )
      }, 1500)
    }),
    loading: spinner,
    error: {
      render(h: any) {
        return h(errorpage, {
          props: {
            componentError: true
          }
        })
      }
    },
    timeout: 10000
  })
  return () =>
    Promise.resolve({
      functional: true,
      render(h: any, { data, children }: any) {
        return h(AsyncHandler, data, children)
      }
    })
}
