<template>
    <h1>{{ text }}</h1>
    <h1>{{ msg }}</h1>
</template>
  
<script lang="ts">
import { Component, Prop } from 'vue-facing-decorator';
import { ViewBase } from './base/viewBase.js';
import { userStore } from '../store/store';
@Component
export default class Comp extends ViewBase {

    //membor
    text = 'Example code'
    @Prop
    msg="";

    // method
    method() {
        console.log(this.text)
    }

    // life cycle
    mounted() {
        const userInfo = userStore();
        console.log(userInfo)
        this.method()
    }
}
</script>
<style scoped lang="scss">
</style>
