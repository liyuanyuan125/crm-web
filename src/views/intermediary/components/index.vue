<template>
    <div class="intermediary-scoped">
      {{data.componentName}}
    </div>
  </template>

  <script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator'
    // import {  } from '@/service/api/intermediary' // API 请求

    @Component({})
    export default class Intermediary extends Vue {
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
    .intermediary-scoped {
      width: 100%;
    }
  </style>

  