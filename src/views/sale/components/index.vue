<template>
    <div class="sale-scoped">
      {{data.componentName}}
    </div>
  </template>

  <script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator'
    // import {  } from '@/service/api/sale' // API 请求

    @Component({})
    export default class Sale extends Vue {
      // prop
      @Prop({ required: false, default: ''}) name!: string

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

  <style lang="less" scoped>
    .sale-scoped {
      width: 100%;
    }
  </style>

  