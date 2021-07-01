<template>
  <div class="result">
    <div class="title" style="padding-top: 40px">
      <img src="../assets/images/usx.jpg" style="height: 40px;width: 150px"><br/>
      <img src="../assets/images/logo.png" style="height: 80px;width: 210px;">
    </div>
    <div class="score">
      <div class="number">您答对了{{ score }}题！</div>
      <div class="tip">您选择了{{num}}题，答对了{{score}}题，正确率{{ towNumber(score/num)*100}}%。</div>
    </div>
    <div style="margin-top: 20px;">
      <van-button type="warning" @click="goHome">再来一局</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Result",
  created() {
    if (this.$route.params.score == null) {
      this.$router.replace({ name: "Home" });
    } else {
      this.score = this.$route.params.score;
      this.num=this.$route.params.num;
    }
  },
  data() {
    return {
      score: null,
      num:null
    };
  },
  methods: {
    goHome() {
      this.$router.push("Home");
    },
    towNumber(val) {
      return val.toFixed(2)
    }
  }
};
</script>

<style lang="scss" scoped>
.result {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/resultBg.jpg");
  background-size: 100% 100%;

  .score {
    background-image: url("../assets/images/scoreBg.png");
    background-size: 388px 364px;
    background-repeat: no-repeat;
    background-position-y: 300px;
    padding-top: 300px;
    width: 388px;
    height: 364px;
    margin: auto;
    text-align: center;

    .number {
      margin-left: 60px;
      margin-top: 200px;
      color: #a51d31;
      font-size: 40px;
      font-weight: bold;
    }
    .tip {
      width: 340px;
      margin-left: 40px;
      margin-top: 20px;
      color: #3e2415;
    }
  }

  .btn {
    position: absolute;
    bottom: 36vh;
    left: 50%;
    transform: translateX(-50%);
    .pic {
      width: 233px;
      height: 96px;
    }
  }
}
</style>
