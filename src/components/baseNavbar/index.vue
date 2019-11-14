<template>
  <div class="baseNavbar-scoped">
    <van-nav-bar :title="title" left-text="返回" left-arrow>
      <template slot="right">
        <span @click="test">测试</span>
        <span @click="test2">demo</span>
      </template>
    </van-nav-bar>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import { BaseNavbarData } from './types'
  import { NavBar } from 'vant'

  @Component({
    components: {
      [NavBar.name]: NavBar
    }
  })
  export default class BaseNavbar extends Vue {
    // prop
    @Prop({ required: false, default: '鲸鱼CRM'}) title!: string

    // data
    data: BaseNavbarData = {
      componentName: 'baseNavbar'
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

    test() {
      this.$toast('我是测试一')
    }

    test2() {
      this.$toast('我是测试二')
    }

  }
</script>

<style lang="less" scoped>
  .baseNavbar-scoped {
    width: 100%;
  }
</style>

