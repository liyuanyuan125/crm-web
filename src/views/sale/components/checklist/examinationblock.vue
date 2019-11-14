<template>
    <div class="examinationblock-view">
        <div class="ex-view-label">
            时间
        </div>
        <div class="ex-view-label">
            <div class="width50">考核指标</div>
            <div  class="width50 nowrap" >指标完成</div>
        </div>
        <div class="ex-view-label">
            <router-link   class="width50" :to="editRoute('executionAmount')">实际执行额</router-link>
            <router-link   class="width50" :to="editRoute('royalty')">提成</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator'
    // import {  } from '@/service/api/sale' // API 请求

    @Component({})
    export default class Examinationblock extends Vue {
      // prop
        @Prop({ required: false, default: ''}) listdata!: string


        created() {
            //
        }

        activated() {
            //
        }

        mounted() {
            //
        }
        editRoute(action: string, id = 0) {
            return {
            name: action,
            params: id > 0 ? { action, id: String(id) } : { action }
            }
        }

    }
</script>

<style lang="less" scoped>
    .width50{
        width: 50%
    }
    .examinationblock-view {
        width: 100%;
        height: 90px;
        border-top: 1px solid #ccc;
        padding: 15px 10px;

    }
    .ex-view-label{
        height: 30px;
        display:flex;
        align-items: center;

    }
    
</style>
