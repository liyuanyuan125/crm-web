<template>
    <div class="examinationblock-view">
        {{listdata}}
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

    }
</script>

<style lang="less" scoped>
    .examinationblock-view {
        width: 100%;
        height: 200px;
    }
</style>
