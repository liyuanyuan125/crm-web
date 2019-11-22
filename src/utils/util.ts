import numeral from 'numeral'

const isZero = (n: number | string | null) => {
  const num = parseInt(n as string, 10)
  return isNaN(num) || num == 0
}

/**
 * @description 节流函数
 * @author zhangbing
 * @date 2019-10-30
 */
export function throttle(func: any, wait: number) {
    let timeout: any
    let context: any
    let args: any
    let previous = 0

    let later = () => {
        previous = +new Date()
        timeout = null
        func.apply(context, args)
    }

    let throttled = function(this: any) {
        let now = +new Date()
        let remaining = wait - (now - previous)
        context = this
        args = arguments
         // 超出wait时间
        if (remaining <= 0 ) {
            // 防止setTimeout 一起执行
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            previous = now
            func.apply(context, args)
        } else if (!timeout) { // 只有超出wait或者执行完成setTimeout之后才会生成新的
            // 在wait之内剩余时间执行一次
            timeout = setTimeout(later, remaining)
        }
    }
    return throttled
}

/**
 * 将数字的整数部分格式化成千分位，保留完整的小数部分
 * @param number 数字
 */
export function toThousands(number: number | string) {
  if (isZero(number)) {
    return ''
  }
  const [ , n = '', m = '' ] = String(number).match(/^(\d+)\.?(\d+)?/) || []
  const thousands = numeral(n).format('0,0')
  const result = thousands + (m ? `.${m}` : '')
  return result
}
