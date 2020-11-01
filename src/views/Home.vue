<template>
  <div class="home">
    <div class="numberTip">
      <div class="tip">第一周</div>
    </div>

    <div class="btn" @click="goSubject">
      <img class="pic" src="../assets/images/startBtn.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    goSubject() {
      this.$router.push("Subject");
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

  .numberTip {
    background-image: url("../assets/images/tip.png");
    background-size: 160px 320px;
    margin-left: 556px;
    background-repeat: no-repeat;
    width: 160px;
    height: 320px;
    .tip {
      color: #a57c50;
      padding-top: 246px;
      font-size: 26px;
      padding-left: 2px;
      font-weight: bold;
    }
  }

  .btn {
    position: absolute;
    bottom: 36vh;
    left: 50%;
    transform: translateX(-50%);
    .pic {
      width: 173px;
      height: 84px;
    }
  }
}
</style>
