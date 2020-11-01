<template>
  <div class="result">
    <div class="score">
      <div class="number">40分！</div>
      <div class="tip">还不错，但还需要继续加油哦！</div>
    </div>

    <div class="btn">
      <img class="pic" src="../assets/images/shareBtn.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {};
  },
  methods: {}
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
      font-size: 50px;
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
