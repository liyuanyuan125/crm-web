<template>
  <van-tabs color="#1989fa" v-model='active' animated>
    <van-tab v-for='item in manageList' :key='item' :title='item'>
    {{item}}
  </van-tab>
</van-tabs>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator'
    import { ManageType } from './types'
    import { Tabs, Tab } from 'vant'

    @Component({
        components: {
            [Tabs.name]: Tabs,
            [Tab.name]: Tab
        }
    })
    export default class Main extends Vue {

    active = 0

    manageList: string[] = ['客户列表', '创建新客']

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

.customer-wrap {
  width: 100%;
}
</style>
