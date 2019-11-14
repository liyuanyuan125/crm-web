<template>
    <div>
      <router-view />
      <van-tabbar v-model="active">
          <van-tabbar-item
              v-for='(item, index) in tabbars'
              :key='index'
              :to='item.name'
              :icon='item.icon'
          >
          {{item.title}}
          </van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script lang='ts'>
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import { Tabbar, TabbarItem } from 'vant'
  import { BaseTabbarData } from './types'
  import { BarModule } from '@/store/modules/bar'

  @Component({
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    }
  })
  export default class BaseTabbar extends Vue {
    // prop
    @Prop({ required: false, default: ''}) name!: string

    active = BarModule.barIndex

    tabbars: BaseTabbarData[] = [
      {
          name: '/',
          title: '客户管理',
          normal: '',
          active: '',
          icon: 'friends-o'
      },
      {
          name: '/sale',
          title: '销售业绩',
          normal: '',
          active: '',
          icon: 'balance-list-o'
      },
      {
          name: '/intermediary',
          title: '媒介资源',
          normal: '',
          active: '',
          icon: 'smile-comment-o'
      },
      {
          name: '/my',
          title: '我的信息',
          normal: '',
          active: '',
          icon: 'contact'
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
