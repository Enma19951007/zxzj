<template>
  <div class="container">
    <my-header title="单词本" isBack></my-header>
    <div style="height:50px;"></div>
    <div class="main-container">
      <div class="main-title">已学单词总数</div>
      <div class="main-number">10</div>
      <div class="main-item">
        <div class="item">
          <div class="item-box"></div>
          <div class="item-title">排行榜</div>
        </div>
        <div class="item">
          <div class="item-box"></div>
          <div class="item-title">我的单词</div>
        </div>
        <div class="item">
          <div class="item-box"></div>
          <div class="item-title">读书进度</div>
        </div>
        <div class="item">
          <div class="item-box"></div>
          <div class="item-title">单词测试</div>
        </div>
      </div>
    </div>
    <div class="button-container">
      <div class="button-title">你准备好了吗?</div>
      <!-- <div class="button-title">欢迎回来!继续上一次的练习吧?</div> -->
      <div class="button-item">
        <div class="button-text" @click="gotoPath('/word/wordTrain')">GO!</div>
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
  methods: {
    gotoPath(value){
      this.$router.push(value)
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.main-container {
  background: #4356b2;
  color: #fff;
  height: calc(70vh - 50px);
  margin-top: -1px;
  .main-title {
    text-align: center;
    font-size: 5vw;
    font-weight: 500;
    height: 20vh;
    line-height: 20vh;
  }
  .main-number {
    text-align: center;
    font-size: 20vw;
    font-weight: 600;
    height: 20vh;
    line-height: 20vh;
  }
  .main-item {
    display: flex;
    flex-direction: row;
    .item {
      flex: 1;
      .item-box {
        margin: 0 auto;
        width: 50px;
        height: 50px;
        background: #fff;
        border-radius: 5px;
      }
      .item-title {
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
    }
  }
}
.button-container {
  height: 30vh;
  .button-title{
    color: #bdbdbd;
    text-align: center;
    margin-top:5vh;
    height:10vh;
    line-height: 10vh;
    font-size: 20px;
  }
  .button-item {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #40cdd6;
    margin: 0 auto;
    text-align: center;
    box-shadow: 0px 0px 5px #999;
    .button-text{
      color: #fff;
      font-size: 20px;
      font-weight: 400;
      height:70px;
      line-height: 70px;
    }
  }
}
</style>
