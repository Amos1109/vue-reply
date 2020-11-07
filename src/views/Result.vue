<template>
  <div class="result">
    <div class="score">
      <div class="number">{{ score }}分！</div>
      <div class="tip">{{ scoreText[score] }}</div>
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
    }
  },
  data() {
    return {
      score: null,
      scoreText: {
        0: "你好像不太聪明的亚子。",
        20: "太菜了，多念点书吧！",
        40: "在加把劲，快合格了。",
        60: "勉勉强强，总算过关了。",
        80: "还不错，但还需要继续加油哦！",
        100: "全部答对了耶，你真棒！"
      }
    };
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
