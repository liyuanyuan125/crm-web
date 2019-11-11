/**
 * @description createPage
 * @author zhangbing
 * @date 2019-10-25
 */
function _getTpl(dirName, capPirName) {
  console.log('ffffff', dirName, capPirName)
  return TPL = {
    VueTep: 
    `<template>
  <div class="${dirName}-wrap">
      {{data.pageName}}
  </div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator'
    import { Getter, Action } from 'vuex-class'
    import { ${capPirName}Data } from './types'
    // import {  } from '@/service/api/${dirName}'
    // import {  } from '@/components' // 全局公共组件
    // import { Index } from './components' // 业务组件

    @Component({})
    export default class Main extends Vue {

    // data
    data: ${capPirName}Data = {
        pageName: '${dirName}'
    }

    created() {
        //
    }

    activated() {
        //
    }

    mounted() {
        //
    }

    // 初始化函数
    init() {
        //
    }

}
</script>

<style lang='less'>
@import "~@/assets/style/index.less";

.${dirName}-wrap {
  width: 100%;
}
</style>
`,
    interfaceTep: 
    `// ${dirName}.Data 参数类型
export interface ${capPirName}Data {
  pageName: string
}

// VUEX ${dirName}.State 参数类型
// export interface ${capPirName}State {
//   data?: any
// }

`,
    controlerTep:
    `// 需要特殊处理的数据结构
import Api from '@/utils/request'
`,
    apiTep: 
    `import Api from '@/utils/request'

export const getData = (query: any) => {
  return Api.getData('POST', query)
}
`,
    vuexTep:
    `import { ${capPirName}State } from '@/types/views/${dirName}.interface'
    import { GetterTree, MutationTree, ActionTree } from 'vuex'
    import * as ${capPirName}Api from '@/service/api/${dirName}'

    const state: ${capPirName}State = {
      ${dirName}: {
        author: undefined
      }
    }

    // 强制使用getter获取state
    const getters: GetterTree<${capPirName}State, any> = {
      author: (state: ${capPirName}State) => state.${dirName}.author
    }

    // 更改state
    const mutations: MutationTree<${capPirName}State> = {
    // 更新state都用该方法
    UPDATE_STATE(state: ${capPirName}State, data: ${capPirName}State) {
        for (const key in data) {
        if (!data.hasOwnProperty(key)) { return }
        state[key] = data[key]
        }
      }
    }

    const actions: ActionTree<${capPirName}State, any> = {
    UPDATE_STATE_ASYN({ commit, state: ${capPirName}State }, data: ${capPirName}State) {
        commit('UPDATE_STATE', data)
    },
    // GET_DATA_ASYN({ commit, state: LoginState }) {
    //   ${capPirName}.getData()
    // }
    }

    export default {
      state,
      getters,
      mutations,
      actions
    }

    `,
    pageComponent:
    `<template>
    <div class="${dirName}-scoped">
      {{data.componentName}}
    </div>
  </template>

  <script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator'
    // import {  } from '@/service/api/${dirName}' // API 请求

    @Component({})
    export default class ${capPirName} extends Vue {
      // prop
      @Prop({ required: false, default: ''}) name!: string

      created() {
        //
      }

      activated() {
        //
      }

      mounted() {
        //
      }

    }
  </script>

  <style lang="less" scoped>
    .${dirName}-scoped {
      width: 100%;
    }
  </style>

  `
  }
}

exports._getTpl = _getTpl

