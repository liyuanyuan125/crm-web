<template>
    <div class="customer-scoped">
      {{data.componentName}}
    </div>
  </template>

  <script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator'
    // import {  } from '@/service/api/customer' // API 请求

    @Component({})
    export default class Customer extends Vue {
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
    .customer-scoped {
      width: 100%;
    }
  </style>

  