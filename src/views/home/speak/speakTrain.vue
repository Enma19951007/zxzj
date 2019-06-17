<template>
  <div class="container">
    <my-header title="口语跟读" isBack></my-header>
    <div style="height:50px;"></div>
    <div class="head-container">
      <div class="head-left">待完成：</div>
      <div class="head-left-sp">{{questionNumber}}</div>
      <div class="head-right">{{time}}</div>
    </div>
    <div class="img-container">
      <img src="@/assets/speak1.png" alt>
    </div>
    <div class="ward-container">
      <div class="ward-item">What colour's your new dress?</div>
      <div class="tips-item" @click="showValue=!showValue">
        <div v-show="showValue" class="tips-item-value">你的新连衣裙是什么颜色的？</div>
        <van-icon v-show="!showValue" name="arrow-down"/>
        <van-icon v-show="showValue" name="arrow-up"/>
        <span>显示解释</span>
      </div>
    </div>
    <div class="button-container">
      <div class="button-item">
        <div class="sound-item" @click="clickMethod(1)">
          <van-icon name="volume-o" style="margin-top:10px" color="#fff" size="30px"/>
        </div>
        <div class="radio-item" @click="clickMethod(2)">
          <van-icon name="music-o" style="margin-top:20px" color="#fff" size="30px"/>
        </div>
        <div class="go-item" @click="clickMethod(3)">
          <van-icon name="arrow" style="margin-top:10px" color="#fff" size="30px"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header";
export default {
  name: "speak",
  components: {
    myHeader
  },
  data() {
    return {
      questionNumber: 12,
      time: "00:00",
      showValue: false,
      currentTime: null,
      startTime: null
    };
  },
  mounted() {
    this.startTime = new Date();
    this.currentTime = this.getNow();
    setInterval(() => {
      if (this.currentTime != this.getNow()) {
        this.currentTime = this.getNow();
        this.time = this.getNewSecond();
      }
    }, 200);
  },
  methods: {
    clickMethod(value) {
      this.$toast("触发事件"+value);
    },
    getNow() {
      return new Date().getSeconds();
    },
    getNewSecond() {
      let nowTime = new Date();
      let time = new Date(nowTime - this.startTime);
      return this.trimTime(time.getMinutes(), time.getSeconds());
    },
    trimTime(minutes, seconds) {
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds;
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
}
.head-container {
  height: 40px;
  width: 100%;
  &::before {
    content: "";
    display: inline-block;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    right: 16px;
    box-shadow: 0px 0px 5px rgb(175, 175, 175);
  }
  .head-left {
    float: left;
    color: #4555ab;
    height: 40px;
    line-height: 40px;
    font-weight: 600;
    font-size: 18px;
    margin-left: 30px;
  }
  .head-left-sp {
    float: left;
    color: #4555ab;
    height: 40px;
    line-height: 40px;
    font-weight: 600;
    font-size: 23px;
  }
  .head-right {
    margin-right: 33px;
    float: right;
    color: #4555ab;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
  }
}
.img-container {
  height: 30vh;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.ward-container {
  height: calc(40vh - 60px);
  width: 100%;
  .ward-item {
    text-align: center;
    height: 50px;
    line-height: 50px;
    margin-top: 20px;
    width: 100%;
    color: #61d0cc;
    font-size: 6vw;
    font-weight: bold;
  }
  .tips-item {
    text-align: center;
    margin-top: 10px;
    width: 100%;
    color: #a1a1a1;
    font-size: 16px;
    span {
      margin-left: 10px;
    }
  }
  .tips-item-value {
    height: 30px;
    line-height: 30px;
    margin-bottom: 5px;
  }
}
.button-container {
  height: calc(30vh - 60px);
  width: 100%;
  .button-item {
    margin: 0 auto;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    .sound-item {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #9a9a9a;
      float: left;
      text-align: center;
      box-shadow: 0px 0px 5px #999;
    }
    .radio-item {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: #4257b4;
      margin: 0 auto;
      text-align: center;
      box-shadow: 0px 0px 5px #999;
    }
    .go-item {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #9a9a9a;
      float: right;
      text-align: center;
      box-shadow: 0px 0px 5px #999;
    }
  }
}
</style>
