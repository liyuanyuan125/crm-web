<template>
  <div class="error-container">
    <div class="router404">
      <div class="pic-404">
        <img
          class="pic-404-img"
          src="@/assets/image/common/404.png"
          alt="404"
        >
      </div>
      <div class="text-404">
        <div class="text-404__oops">
          OOPS!
        </div>
        <div class="text-404__headline">
          {{ message }}
        </div>
        <div class="text-404__info">
          Please check that the URL you entered is correct, or click the button below to return to the homepage.
        </div>
        <button
          @click="goBack"
          class="text-404__return-home"
        >回首页</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Page404'
})
export default class extends Vue {
  private message = '404 Page Not Found'

  goBack() {
    this.$router.push('/')
  }
}
</script>

<style lang="less" scoped>
.error-container {
  transform: translate(-50%,-50%);
  position: absolute;
  top: 40%;
  left: 50%;
}

.router404 {
  position: relative;
  width: 100%;
  overflow: hidden;

  .pic-404 {
    position: relative;
    float: left;
    overflow: hidden;

  &-img {
      width: 100%;
    }
  }

  .text-404 {
    position: relative;
    float: left;
    width: 300px;
    padding: 30px 0;
    overflow: hidden;

    &__oops {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }

    &__headline {
      font-size: 20px;
      line-height: 24px;
      color: #222;
      font-weight: bold;
      opacity: 0;
      margin-bottom: 10px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }

    &__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }

    &__return-home {
      width: 110px;
      height: 36px;
      background: #1482f0;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      font-size: 14px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }

    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
