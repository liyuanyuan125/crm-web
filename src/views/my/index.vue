<template>
  <div class="my-wrap">
      {{data.pageName}}
  </div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator'
    import { Getter, Action } from 'vuex-class'
    import { MyData } from './types'
    // import {  } from '@/service/api/my'
    // import {  } from '@/components' // 全局公共组件
    // import { Index } from './components' // 业务组件

    @Component({})
    export default class Main extends Vue {

    // data
    data: MyData = {
        pageName: 'my'
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

.my-wrap {
  width: 100%;
}
</style>
