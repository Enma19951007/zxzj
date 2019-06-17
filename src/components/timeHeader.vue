<template>
  <div class="head-container">
    <div class="head-left">待完成：</div>
    <div class="head-left-sp">{{questionNumber}}</div>
    <div class="head-right">{{time}}</div>
  </div>
</template>

<script>
export default {
  name: "myStar",
  props: {
    number: {
      type: Number,
      default: 0
    }
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
</style>