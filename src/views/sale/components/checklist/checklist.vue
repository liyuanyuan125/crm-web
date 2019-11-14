<template>
  <div class="sale-scoped">
    <van-pull-refresh v-model="data.isLoading" @refresh="onRefresh">
      <van-list
        v-model="data.loading"
        :finished="data.finished"
        finished-text="没有更多了"
        @load="onLoad">
        <Examinationblock v-for="(item,index) in data.list" :key='index' :listdata='item'></Examinationblock>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop , Watch} from 'vue-property-decorator'
import Examinationblock from './examinationblock.vue'
import { PullRefresh , List } from 'vant'
import {CheaklistData} from './type'
// import {  } from '@/service/api/sale' // API 请求

  @Component({
    components: {
      Examinationblock,
      [PullRefresh.name]: PullRefresh,
      [List.name]: List
    }
  })
  export default class Cheaklist extends Vue {
    data: CheaklistData = {
      isLoading: false,
      list: [],
      loading: false,
      finished: false
    }
    // prop
    @Prop({ required: false, default: ''}) checkid!: string

    @Watch('checkid')
      getCheckData() {

      }


    created() {
      //
    }

    activated() {
      ///
    }

    mounted() {
      //
    }
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.data.isLoading = false
      }, 500)
    }

    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.data.list.push( this.data.list.length + 1)
        }
        // 加载状态结束
        this.data.loading = false

        // 数据全部加载完成
        if (this.data.list.length >= 40) {
          this.data.finished = true
        }
      }, 500)
    }
  }


</script>

  <style lang="less" scoped>
    .sale-scoped {
      width: 100%;
    }
  </style>

  