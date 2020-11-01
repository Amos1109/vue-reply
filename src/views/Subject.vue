<template>
  <div class="home">
    <div class="numberTip">
      <div class="tip">第一题</div>
    </div>

    <div class="subject">
      <div class="title">{{ subjects[index].title }}</div>
      <div class="options">
        <van-radio-group v-model="radio" checked-color="#07c160">
          <template v-for="option of subjects[index].options">
            <van-radio class="option" :name="option.id" :key="option.id">
              <span class="text">{{ option.value }}</span>
            </van-radio>
          </template>
        </van-radio-group>
      </div>
    </div>

    <div class="btn">
      <img class="pic" src="../assets/images/nextBtn.png" />
    </div>
  </div>
</template>

<script>
import { subjects } from "@/utils/config.js";
export default {
  name: "Subject",
  data() {
    return {
      index: 0,
      radio: 0,
      subjects: null
    };
  },
  created() {
    this.subjects = subjects;
  },
  methods: {}
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

  .subject {
    color: #fff;
    padding: 20px 80px;
    text-align: left;
    line-height: 40px;
    font-size: 30px;
    .title {
      margin-bottom: 40px;
    }

    .option {
      margin-top: 20px;
      .text {
        color: #fff;
      }
    }
  }
}
</style>
