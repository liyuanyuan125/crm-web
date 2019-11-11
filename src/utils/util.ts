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
