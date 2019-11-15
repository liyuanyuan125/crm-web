<template>
  <div class="baseNavbar-scoped">
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft">
      <template slot="right">
        <div class="menustyle">
          <img @click="search" src="@/assets/image/common/search.svg"/>
          <img @click="addCustom" src="@/assets/image/common/add.svg">
        </div>
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

    search() {
      this.$router.push({name: 'custom-search'})
    }

    onClickLeft() {
      this.$router.go(-1)
    }

    addCustom() {
      this.$toast('我是测试二')
    }

  }
</script>

<style lang="less" scoped>
  .baseNavbar-scoped {
    width: 100%;
  }
  .menustyle {
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    & > img {
      width: 22px;
      height: 22px;
      &:last-child {
        margin-left: 30px;
      }
    }
  }
</style>

