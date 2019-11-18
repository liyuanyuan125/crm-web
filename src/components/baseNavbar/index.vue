<template>
  <div class="baseNavbar-scoped">
    <van-nav-bar :title="title" :left-arrow="showLeft" @click-left="onClickLeft">
      <template v-if="barTemplate === 'custom'" slot="right">
        <div class="menustyle">
          <router-link :to="{name: 'custom-search'}" class="search" tag="div"></router-link>
          <router-link :to="{name: 'custom-add'}" class="addcustom" tag="div"></router-link>
        </div>
      </template>
      <template v-else-if="barTemplate === 'intermediary'" slot="right">
        <div class="menustyle">
          <router-link :to="{name: 'my'}" class="search" tag="div"></router-link>
          <router-link to="/my" class="constrast" tag="div">对比</router-link>
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

    @Prop({ required: false, default: true}) showLeft!: boolean

    @Prop({ required: false, default: ''}) barTemplate!: string

    // data
    data: BaseNavbarData = {
      componentName: 'baseNavbar'
    }

    onClickLeft() {
      this.$router.go(-1)
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
    .search, .addcustom {
      width: 22px;
      height: 22px;
    }
    .search {
      background: url('~@/assets/image/common/search.svg') no-repeat;
      background-size: 22px 22px;
    }
    .addcustom {
      background: url('~@/assets/image/common/add.svg') no-repeat;
      background-size: 22px 22px;
      margin-left: 30px;
    }
    .constrast {
      margin-left: 22px;
    }
  }
</style>

