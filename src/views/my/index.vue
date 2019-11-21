<template>
  <div class="my-wrap">
    <div class="my-header">
      <img :src="data.img || defaultAvatar" width="50px"/>
      <p class="name">{{data.name}}</p>
      <p class="identity">{{data.identity}}</p>
    </div>
    <div class="my-content">
      <ul>
        <li class="flex-box">
          <em>部门</em>
          <span>广告销售中心-销售一组</span>
        </li>
        <li class="flex-box">
          <em>负责区域 (14个城市)</em>
          <span class="details flex-box" @click="$router.push({name: 'my-detail'})">查看 <i class="iconfont iconarrow-right"></i></span>
        </li>
        <li class="flex-box">
          <em>手机号码</em>
          <span>广告销售中心-销售一组</span>
        </li>
        <li class="flex-box">
          <em>折扣权限</em>
          <span>广告销售中心-销售一组</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/info'
import { Icon } from 'vant'

@Component({
  components: {
    [Icon.name]: Icon
  }
})
export default class Main extends Vue {
  data = {
    img: '',
    name: 'yuanyuan.li',
    identity: '经理',
  }

  get defaultAvatar() {
    return UserModule.defaultAvatar
  }
}
</script>

<style lang='less' scoped>
.flex-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.iconarrow-right:before {
  font-size: 20px;
}
.my-header {
  background-color: @main-background;
  text-align: center;
  color: @blod-text;
  font-size: 18px;
  padding-bottom: 15px;
  .name {
    font-size: 21px;
  }
}
.my-content {
  padding: 0 15px;
  font-size: 15px;
  color: @main-gray;
  li {
    height: 55px;
    border-bottom: solid 1px rgba(216, 216, 216, .5);
    span {
      color: #777777;
    }
  }
}
</style>
