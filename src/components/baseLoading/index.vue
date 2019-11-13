<template>
  <div class="baseLoading-scoped">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import { BaseLoadingData } from './types'

  @Component({})
  export default class BaseLoading extends Vue {
    // prop
    @Prop({ required: false, default: ''}) name!: string

    // data
    data: BaseLoadingData = {
      componentName: 'baseLoading'
    }

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
  .baseLoading-scoped {
  width: 60px;
  height: 60px;
 
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
 
.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: @main-color;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
   
  -webkit-animation: bounce 2.0s infinite ease-in-out;
  animation: bounce 2.0s infinite ease-in-out;
}
 
.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
@-webkit-keyframes bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}
 
@keyframes bounce {
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>

