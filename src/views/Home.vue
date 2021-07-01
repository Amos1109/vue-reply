<template>
  <div class="home">
    <div style="float: right;padding-top: 20px">
      <img src="../assets/images/gcd.png" style="height: 100px;width: 250px;">
    </div>

    <div class="title">
      <div style="width: 100%;height: 50px"></div>
      <img src="../assets/images/logo.png" style="height: 80px;width: 210px;">
    </div>
    <div style="width: 100%;height: 50px"></div>
    <van-row gutter="20">
      <van-col span="6"></van-col>
      <van-col span="12">
        <span style="font-weight: bold">题目数量选择：</span>
        <van-stepper v-model="num" step="5" min="5" max="50" theme="round" button-size="22" disable-input style="padding-top: 10px"/>
        <div style="width: 100%;height: 20px"></div>
        <div class="btn" @click="goSubject">
          <img class="pic" src="../assets/images/startBtn.png" />
        </div>
      </van-col>
      <van-col span="6"></van-col>
    </van-row>
    <div style="width: 100%;height: 80px"></div>
    <img src="../assets/images/usx.jpg" style="height: 40px;width: 150px"><br/><br/>
    <div style="font-weight: bold">计算机系 洪宇庭出品</div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Stepper } from 'vant';
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);
Vue.use(Stepper);
export default {
  name: "Home",
  data() {
    return {
      num:5
    };
  },
  methods: {
    goSubject() {
      this.$router.push({name:"Subject",params: { num: this.num }});
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/bg.jpg");
  background-size: 100% 100%;


  .btn {
    .pic {
      width: 173px;
      height: 84px;
    }
  }
}
</style>
