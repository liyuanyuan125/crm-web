<template>
	<div class="store_header">
		<div class="store_avatar">
			<img src="@/assets/image/common/logo.png" alt="logo">
		</div>
	</div>
</template>

  <script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator'
    // import {  } from '@/service/api/login' // API 请求

    @Component
    export default class LoginHeader extends Vue {}
</script>

  <style lang="less" scoped>
    .store_header {
      text-align: center;
      padding: 20px 0 46px;
    .store_avatar img {
      width: 112px;
    }
    .store_name {
      padding-top: 5px;
      font-size: 16px;
    }
  }
  </style>

  