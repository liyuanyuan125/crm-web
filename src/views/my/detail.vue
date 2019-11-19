<template>
  <ul>
    <li class="flex-box li-title">
      <em class="flex-1">城市</em>
      <span class="flex-3">区域</span>
    </li>
    <li class="flex-box" v-for="item in data" :key="item.id">
      <em class="flex-1">{{item.city}}</em>
      <div class="flex-3">
        <span v-for="(area, index) in item.areas" :key="index">
          {{area}}<i v-if="index < item.areas.length - 1">, </i>
        </span>
      </div>
    </li>
  </ul>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Main extends Vue {
  data = [
    { id: 1, city: '北京', areas: ['朝阳', '大兴', '北京', '昌平', '海淀', '西城', '东城', '大兴', '大兴', '大兴']},
    { id: 2, city: '北京', areas: ['朝阳', '大兴', '北京', '昌平', '海淀', '西城']},
    { id: 3, city: '北京', areas: ['朝阳', '大兴', '北京', '昌平', '海淀', '西城']},
    { id: 4, city: '北京', areas: ['朝阳', '大兴', '北京', '昌平', '海淀', '西城']},
    { id: 5, city: '北京', areas: ['朝阳', '大兴', '北京', '昌平']},
  ]
}

</script>

<style lang='less' scoped>
.flex-box {
  display: flex;
  align-items: center;
}
.flex-1 {
  flex: 1;
}
.flex-3 {
  flex: 3
}
.li-title {
  font-size: 14px;
  font-weight: 500;
}
li {
  height: 50px;
  font-size: 14px;
  color: @main-gray;
  padding: 0 15px;
  &:nth-child(2n-1) {
    background-color: #fafafa;
  }
}
</style>


