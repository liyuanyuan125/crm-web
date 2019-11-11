<template>
  <div class="login-wrap">
        <LoginHeader></LoginHeader>
        <van-button size="large" type="info" @click="userLogin">登录</van-button>
  </div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator'
    import { LoginData } from './types'
    import { UserModule } from '@/store/modules/user'
    import LoginHeader from './components/login-header.vue'
    import { Button } from 'vant'

    @Component({
        components: {
            LoginHeader,
            [Button.name]: Button
        }
    })
    export default class Main extends Vue {

    // data
    data: LoginData = {
        pageName: 'login'
    }

    async userLogin() {
        // await UserModule.Login({
        //     username: 'bingbing',
        //     password: '123456'
        // })
        // this.$router.push('/')
        localStorage.setItem('accesstoken', '123123')
        this.$router.push('/')
    }

    created() {
        //
    }

    activated() {
        //
    }

    mounted() {

    }

    // 初始化函数
    init() {
        //
    }

}
</script>

<style lang='less'>
@import "~@/assets/style/index.less";

.login-wrap {
  width: 100%;
  margin: 60px auto;
  text-align: center;
}
</style>
