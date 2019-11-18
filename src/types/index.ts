/**
 * ajax 调用结果
 */
export interface AjaxResult {
  code: number
  data: any
  msg: string
  handled?: boolean
}

/**
 * @description router meta config
 * @author zhangbing
 * @date 2019-11-18
 * barindex 底部导航索引
 * title 顶部导航标题  默认 鲸鱼CRM
 * showLeft 顶部导航是否显示返回 默认true 显示
 * barTemplate 顶部导航右侧功能区使用哪个模板，目前仅含有基础跳转模板，特殊功能建议单独引入
 */
export interface MetaConfig {
  icon?: string
  barindex?: number
  title?: string
  showLeft?: boolean
  barTemplate?: string
}
