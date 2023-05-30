<template>
  <el-card>
    <div class="box">
      <div class="bottom">
        <h3 class="title">{{ userInfo.username }}</h3>
      </div>
    </div>
  </el-card>
  <div class="bottoms">
    <svg-icon name="welcome" width="600px" height="300px"></svg-icon>
  </div>
</template>
<script lang="ts">
import { Component, Prop } from 'vue-facing-decorator';

import { userStore } from '../store/store.js';
import { ViewBase } from './base/viewBase.js';

@Component
export default class PageHome extends ViewBase {

  //membor
  text = 'Example code'
  @Prop
  msg = "";

  userInfo: any;

  // method
  method() {
    console.log(this.text)
  }

  // life cycle
  mounted() {
    this.userInfo = userStore();
    console.log(this.userInfo)
    this.method()
  }
}
</script>
<style scoped lang="scss">
.box {
  display: flex;

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .bottom {
    margin-left: 20px;

    .title {
      font-size: 30px;
      font-weight: 900;
      margin-bottom: 30px;
    }

    .subtitle {
      font-style: italic;
      color: skyblue;
    }
  }
}

.bottoms {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>