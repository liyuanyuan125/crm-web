<template>
    <div>
      <router-view />
      <van-tabbar 
        v-model="barindex"
        active-color="#648CE5"
        inactive-color="#333333">
          <van-tabbar-item
              v-for='(item, index) in tabbars'
              :key='index'
              :to='item.name'
          >
          <span>{{item.title}}</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? item.active : item.inactive"
          >
          </van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script lang='ts'>
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import { Tabbar, TabbarItem } from 'vant'
  import { BaseTabbarData } from './types'

  @Component({
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    }
  })
  export default class BaseTabbar extends Vue {
    // prop
    @Prop({ required: false, default: ''}) barindex!: number

    tabbars: BaseTabbarData[] = [
      {
          name: '/',
          title: '客户管理',
          active: require('@/assets/image/common/customon.svg'),
          inactive: require('@/assets/image/common/custom.svg')
      },
      {
          name: '/sale',
          title: '销售业绩',
          active: require('@/assets/image/common/saleon.svg'),
          inactive: require('@/assets/image/common/sale.svg')
      },
      {
          name: '/intermediary',
          title: '媒介资源',
          active: require('@/assets/image/common/movieon.svg'),
          inactive: require('@/assets/image/common/movie.svg')
      },
      {
          name: '/my',
          title: '我的信息',
          active: require('@/assets/image/common/myon.svg'),
          inactive: require('@/assets/image/common/my.svg')
      }
    ]

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

<style lang='less' scoped>
 
</style>

