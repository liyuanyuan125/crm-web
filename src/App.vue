<template>
  <div id="app">
    <router-view name="navbar" :title="$route.meta.title"></router-view>
    <router-view></router-view>
    <router-view name="tabbar" :barindex="$route.meta.barindex"></router-view>
  </div>
</template>

<style lang="less">
#app {
  position: relative;
  width: 100%;
  height: 100%;
  // background: #000;
  min-height: 100vh;
  font-size: 16px;
}
</style>
