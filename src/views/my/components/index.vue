<template>
    <div class="my-scoped">
      {{data.componentName}}
    </div>
  </template>

  <script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator'
    // import {  } from '@/service/api/my' // API 请求

    @Component({})
    export default class My extends Vue {
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
    .my-scoped {
      width: 100%;
    }
  </style>

  