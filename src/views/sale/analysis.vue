<template>
    <div class="sale-wrap">
        <van-nav-bar title="业绩分析" left-arrow  @click-left="onClickLeft"  fixed></van-nav-bar>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator'
    import { Getter, Action } from 'vuex-class'
    import { SaleData } from './types'
    import { NavBar } from 'vant'
    // import {  } from '@/service/api/sale'
    // import {  } from '@/components' // 全局公共组件
    // import { Index } from './components' // 业务组件

    @Component({
        components: {
            [NavBar.name]: NavBar
        }
    })
    export default class Analysis extends Vue {

    // data


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

    onClickLeft() {
        this.$router.go(-1)
    }

}
</script>

<style lang='less'>
@import "~@/assets/style/index.less";

.sale-wrap {
    width: 100%;
}
</style>
