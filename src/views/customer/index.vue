<template>
  <div class="customer-wrap">
      <div class="customer-card">
          <div class="card-header">
              <img src="@/assets/image/common/logo.png" alt="">
              <div class="card-custom-info">
                  <p>
                      <span class="info-title">美菜食堂</span>
                      <Tips :status="status"></Tips>
                  </p>
                  <p>
                      <span>最新动态：<span class="info-status">下单</span></span>
                      <span>2019.11.15 12:00</span>
                  </p>
              </div>
          </div>
          <div class="card-body">
              <div>
                  <p class="body-bold">10</p>
                  <p>累计拜访次数</p>
              </div>
              <p class="hairline"></p>
              <div>
                  <p class="body-bold">2</p>
                  <p>累计下单量</p>
              </div>
              <p class="hairline"></p>
              <div>
                  <p class="body-bold">20<span  class="body-unit">万</span></p>
                  <p>累计执行额</p>
              </div>
          </div>
          <div class="card-footer">
              <a href="javascript: void(0)" v-if="status === 1">二维码</a>
              <a href="javascript: void(0)">更新客户信息</a>
              <a href="javascript: void(0)" @click="demo">拜访登记</a>
          </div>
      </div>
  </div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator'
    import { ManageType } from './types'
    import { Tabs, Tab } from 'vant'
    import Tips from './components/tips.vue'
    import { getCustomList } from '@/service/api/customer'

    @Component({
        components: {
            [Tabs.name]: Tabs,
            [Tab.name]: Tab,
            Tips
        }
    })
    export default class Main extends Vue {

    status = 2


    async demo() {
        let data = await getCustomList({})
    }

}
</script>

<style lang='less'>

.customer-wrap {
  width: 100%;
  height: 100vh;
  background: @main-background;
  overflow: hidden;
}
.customer-card {
    width: 345px;
    height: 230px;
    background: @main-white;
    border-radius: 10px;
    margin: 15px auto 0;
    .card-header, .card-body {
        width: 100%;
        height: 80px;
    }
    .card-header {
        display: flex;
        box-sizing: border-box;
        padding: 15px 15px 0 15px;
        & > img {
            background: #27ABF5;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }
        .card-custom-info {
            & > p {
                width: 255px;
                font-size: 13px;
                font-family: SanFranciscoText-Light,SanFranciscoText;
                font-weight: 300;
                color: @light-text;
                display: flex;
                justify-content: space-between;
                .info-title {
                    font-family:SanFranciscoDisplay-Medium,SanFranciscoDisplay;
                    font-weight:500;
                    color: @medium-text;
                    font-size: 16px;
                }
                
                .info-status {
                    font-family:PingFangSC-Medium,PingFang SC;
                    font-weight:500;
                    color: @medium-text;
                }
                &:first-child {
                    margin-bottom : 5px;
                }
            }
        }
    }
    .card-body {
        background: #FBFBFC;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 15px 24px;
        font-size: 11px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: @light-text;
        & > div {
            text-align: center;
        }
        .body-bold {
            font-size: 28px;
            font-family: DINAlternate-Bold,DINAlternate;
            font-weight: bold;
            color: @blod-text;
            .body-unit {
                font-size: 12px;
                font-family: PingFangSC-Regular,PingFang SC;
                font-weight: 400;
            }
        }
        .hairline {
            width: 1px;
            height: 20px;
            background-color: @light-text;
            margin-top: 15px;
            .hairline();
        }
    }
    .card-footer {
        width: 100%;
        height: 70px;
        text-align: right;
        box-sizing: border-box;
        padding: 20px 24px 0 0;
        & > a {
            display: inline-block;
            font-size:13px;
            color: @regular-text;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            margin-left: 15px;
            padding: 4px 14px;
            border-radius: 15px;
            opacity: 0.4;
            border: 1px solid rgba(137,154,179,1);
            &:last-child {
                color: @select-text-color;
                border: 1px solid @select-text-color;
            }
        }
    }
}
</style>
