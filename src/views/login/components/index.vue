<template>
	<div class="store_header">
		<div class="store_avatar">
			<img src="@/assets/image/common/logo.png" alt="logo" width="55" height="55">
		</div>
	</div>
</template>

  <script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator'
    // import {  } from '@/service/api/login' // API 请求

    @Component({})
    export default class Login extends Vue {
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
    .store_header {
      text-align: center;
      padding: 30px 0;
    .store_avatar img {
      border-radius: 50%;
    }
    .store_name {
      padding-top: 5px;
      font-size: 16px;
    }
  }
  </style>

  