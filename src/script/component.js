/**
 * @description createComponent
 * @author zhangbing
 * @date 2019-10-25
 */
const fs = require('fs')
const path = require('path')
var colors = require('colors.ts');
const basePath = path.resolve(__dirname, '../')

const dirName = process.argv[2]
if (!dirName) {
    console.log('文件夹名称不能为空！'.red)
    console.log('示例：yarn com your component'.red)
    process.exit(0)
  }
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)


/**
 * @msg: vue页面模版
 */
const VueTep = `<template>
  <div class="${dirName}-scoped">
    {{data.componentName}}
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import { ${capPirName}Data } from './types'

  @Component({})
  export default class ${capPirName} extends Vue {
    // prop
    @Prop({ required: false, default: ''}) name!: string

    // data
    data: ${capPirName}Data = {
      componentName: '${dirName}'
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

  }
</script>

<style lang="less" scoped>
  .${dirName}-scoped {
    width: 100%;
  }
</style>

`

const exportTep = `
  import ${capPirName} from './index.vue'

  export default ${capPirName}

`
// interface 模版
const interfaceTep = `// ${dirName}.Data 参数类型
export interface ${capPirName}Data {
  componentName: string
}

`

fs.mkdirSync(`${basePath}/components/${dirName}`) // mkdir

process.chdir(`${basePath}/components/${dirName}`) // cd views
fs.writeFileSync(`index.vue`, VueTep) // vue 
fs.writeFileSync(`types.ts`, interfaceTep) // types
fs.writeFileSync(`index.ts`, exportTep) // exportFile 

console.log(`组件创建成功！页面路径: src/components/${dirName}/index.vue`.green)
process.exit(0)