<template>
    <span class="info-tips" :style="{background: bgColor}">{{statusTitle}}</span>
  </template>

  <script lang="ts">
    import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
    // import {  } from '@/service/api/customer' // API 请求

    @Component({})
    export default class Tips extends Vue {
      // prop
      @Prop({ required: true, default: ''}) status!: number


      statusTitle = ''

      bgColor = ''

      initStatus(status: number) {
        switch (status) {
          case 1:
            this.statusTitle = '未注册'
            this.bgColor = '#FF8478'
            break
          case 2:
            this.statusTitle = '待激活'
            this.bgColor = '#FF8478'
            break
          case 3:
            this.statusTitle = '禁用'
            this.bgColor = '#8D8DA1'
            break
          case 4:
            this.statusTitle = '已注册'
            this.bgColor = '#93A1DB'
            break
          default:
            break
        }
      }

      @Watch('status', {immediate: true})
      WatchStatus(status: number) {
        this.initStatus(status)
      }

    }
  </script>

  <style lang="less" scoped>
    .info-tips {
      width: 55px;
      height: 20px;
      line-height: 20px;
      border-radius: 50px 0px 0px 50px;
      color: @main-white;
      text-align: center;
      font-size:11px;
      font-family:PingFangSC-Regular,PingFang SC;
      transform: translateX(15px);
    }
  </style>

  