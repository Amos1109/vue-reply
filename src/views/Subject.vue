<template>
  <div class="home">
<!--    <div style="padding-top: 5px">-->
<!--    <van-progress :percentage=10*index stroke-width="8" color="#f2826a"/>-->
<!--  </div>-->
    <van-row>
      <van-col span="8"></van-col>
      <van-col span="10"></van-col>
      <van-col span="6">
        <van-count-down :time="time" style="float: left;">
          <template #default="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </van-col>

    </van-row>
<div style="width: 100%;height: 100px"></div>
    <van-row style="height: 330px;">
      <div class="subject">
      <div>
        <img src="../assets/images/usx.jpg" style="height: 40px;width: 150px;">
        <van-circle
            v-model="currentRate"
            :rate=(index+1)*(100/num)
            :color="gradientColor"
            :text="index+1+'题/'+num+'题'"
            size="75px"
            style="float: right"
        />
        <div style="width: 100%;height: 59px"></div>
      </div>
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
    </van-row>
    <div style="width: 100%;height: 80px;"></div>
    <div style="width: 100%;height: 20px;">
      <span v-if="flag" style="font-weight: bold;color:#ff8917"> 正确答案是{{answer}}.{{option}}</span>
    </div>
    <van-row gutter="20">
      <van-col span="8"></van-col>
      <van-col span="8">
        <div class="btn" @click="nextSubject">
          <img class="pic" src="../assets/images/nextBtn.png" />
        </div>
      </van-col>
      <van-col span="8"></van-col>
    </van-row>

  </div>


</template>

<script>
import Vue from "vue";
import { subjects } from "@/config.js";
import { Toast } from "vant";
import { Progress } from 'vant';
import { CountDown } from 'vant';
import { Circle } from 'vant';
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);
Vue.use(Circle);
Vue.use(CountDown);
Vue.use(Progress)
Vue.use(Toast);

function getRandomArrayElements(arr, count) {
  let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}
export default {
  name: "Subject",
  data() {
    return {
      answer:null,
      option:null,
      flag:false,
      num:5,
      index: 0,
      radio: null,
      subjects: null,
      score: 0,
      time: null,
      currentRate: 0,
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6',
      }
    };
  },
  created() {
    if (this.$route.params.num == null) {
      this.$router.replace({ name: "Home" });
    } else {
      this.num = this.$route.params.num;
    }
    this.subjects = getRandomArrayElements(subjects,this.num);
    this.time=this.$route.params.num*60*1000;
  },
  methods: {

    nextSubject() {
      if(this.flag==true){
        if (this.index == this.subjects.length - 1) {
          this.$router.replace({
            name: "Result",
            params: { score: this.score,num:this.num }
          });
        } else {
          this.radio = null;
          this.index++;
          this.flag=false
        }
      }else {
        if (this.radio) {
          let question = this.subjects[this.index];
          // console.log(question.options[question.answerId])
          this.option = question.options[question.answerId - 1].value;
          if (question.answerId == 1) {
            this.answer = "A";
          } else if (question.answerId == 2) {
            this.answer = "B";
          } else if (question.answerId == 3) {
            this.answer = "C";
          } else {
            this.answer = "D";
          }
          // 答对加分
          if (this.radio == question.answerId) {

            this.score = this.score + 1;
            //Toast('答对了！');
            Toast.success({
              message: '回答正确！',
              duration: 400
            })
            // 答题结束，计分
            if (this.index == this.subjects.length - 1) {
              this.$router.replace({
                name: "Result",
                params: {score: this.score, num: this.num}
              });
            } else {
              this.radio = null;
              this.index++;
              this.flag = false
            }
          } else {
            Toast.fail({
              message: '回答错误！',
              duration: 400
            })
            this.flag = true;
          }

        } else {
          this.$toast("请做出选择！");
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 30px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
  font-weight: bold;
  border-radius: 4px;
}
.home {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/bg.jpg");
  background-size: 100% 100%;

  .numberTip {
    //background-image: url("../assets/images/tip.png");
    //background-size: 160px 320px;
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
    //position: absolute;
    //bottom: 30vh;
    //left: 50%;
    //transform: translateX(-50%);
    .pic {
      width: 173px;
      height: 84px;
    }
  }

  .subject {
    color: #261919;
    padding: 10px 80px;
    text-align: left;
    line-height: 50px;
    font-size: 40px;
    font-family:'Microsoft YaHei';
    font-weight:bold;
    .title {
      margin-bottom: 40px;
    }

    .option {
      margin-top: 20px;
      .text {
        color: #261919;
      }
    }
  }
}
</style>
