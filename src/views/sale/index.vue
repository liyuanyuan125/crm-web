<template>
    <div class="sale-wrap">
        <van-nav-bar title="标题" fixed></van-nav-bar>
        <div class="sale-view-main">
            <div class="sale-view-nav">
                <span>业绩考核</span>
                <router-link :to="editRoute('analysis')">销售分析</router-link>
            </div>
            
            <van-dropdown-menu>
                <van-dropdown-item v-model="data.checkid" :options="data.optionlist" />
            </van-dropdown-menu>
            <div class="sale-view-information">
                累计执行额{{data.executionamount}}万元，累计提成￥{{data.royalty}}
            </div>
            <Cheaklist :checkid='data.checkid'></Cheaklist>
        </div>
    
    </div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator'
    import { Getter, Action } from 'vuex-class'
    import { SaleData } from './types'
    import { NavBar , DropdownMenu , DropdownItem } from 'vant'
    import Cheaklist from './components/checklist'

    // import {  } from '@/service/api/sale'
    // import {  } from '@/components' // 全局公共组件
    // import { Index } from './components' // 业务组件

    @Component({
        components: {
            Cheaklist,
            [NavBar.name]: NavBar,
            [DropdownMenu.name]: DropdownMenu,
            [DropdownItem.name]: DropdownItem
        }
    })
    export default class Main extends Vue {

    // data
    data: SaleData = {
        optionlist: [
            { text: '月度考核指标', value: 'monthly' },
            { text: '季度考核指标', value: 'quarter' },
            { text: '年度考核指标', value: 'year' }
        ],
        checkid: 'monthly',
        executionamount: 0,
        royalty: 0

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

    editRoute(action: string, id = 0) {
        return {
        name: action,
        params: id > 0 ? { action, id: String(id) } : { action }
        }
    }

}
</script>

<style lang='less'>

.sale-wrap {
    width: 100%;
    background: #f8f8f8
}

.sale-view-main{
    margin-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding:0 10px 1.5rem;
    background-color: #ffffff
}

.sale-view-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
}
.sale-view-information{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    color: #999999;
    font-size: 14px;
}

</style>
