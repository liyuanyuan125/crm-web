<template>
  <div class="login-wrap">
        <LoginHeader></LoginHeader>
        <div class="login-form">
          <van-field v-model="form.username" placeholder="请输入账号" ref="username" label="账号"
            required  maxlength="30" clearable />
          <van-field v-model="form.password" placeholder="请输入密码" label="密码" 
            required type="password" maxlength="30"/>
           <p class="error-message">{{errorMess}}</p>
          <!-- <van-checkbox class="login-check" shape="square" v-model="form.check">7日免登录</van-checkbox> -->
          <van-button size="large" type="info" class="logi-submit" @click="userLogin">登录</van-button>
        </div>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import { LoginData } from './types'
  import { Button, Cell, CellGroup, Field, Checkbox} from 'vant'
  import { UserModule } from '@/store/modules/user'
  import LoginHeader from './components/login-header.vue'
  import { login } from '@/service/api/login'

  @Component({
    components: {
      LoginHeader,
      [Button.name]: Button,
      [Field.name]: Field,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Checkbox.name]: Checkbox
    }
  })

  export default class Main extends Vue {
    form: any = {
      username: '',
      password: '',
    }

    errorMess = ''

    mounted() {
      (this.$refs.username as any).focus()
    }

    async userLogin() {
      const username = this.form.username
      const password = this.form.password

      if (!username) {
        this.errorMess = '请输入账号'
        return
      } else if (!password) {
        this.errorMess = '请输入密码'
        return
      }

      try {
        const { data } = await login(this.form)

        // 将用户信息存入到store
        UserModule.SET_USER(data)
        // this.$router.push({name: 'customer'})
        this.$router.push('/')
      } catch (ex) {
        this.$toast(ex)
      }
    }

  }
</script>

<style lang='less'>

.van-cell--required::before {
  content: '',
}
.van-cell:not(:last-child)::after {
  left: 0;
  border-bottom: 1px solid #a5bef8;
}

.login-form {
  font-size: 15px;
  padding: 0 46px 0;
  color: #1E386F;
  .van-cell {
    padding: 10px 0px;
    &:first-child {
      margin-bottom: 20px;
    }
  }
  .error-message {
    font-size: 11px;
    color: #ee0a24;
    height: 15px;
    padding-top: 3px;
  }
  .van-field__label {
    width: 50px;
    font-size: 18px;
    font-weight: 0;
  }
  .logi-submit {
    margin: 36px 0;
    font-size: 20px;
    border-radius: 55px;
    color: #1E386F;
    background-color: #A5BEF8;
    border: none;
  }
  // .van-checkbox {
  //   margin-top: 2px;
  //   .van-icon {
  //     width: 18px;
  //     height: 18px;
  //     border-radius: 3px;
  //     border: solid 1px rgba(151, 151, 151, 1);
  //   }
  // }
}
</style>
