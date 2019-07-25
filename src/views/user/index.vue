<template>
  <div class="container">
    <my-header title="个人中心"></my-header>
    <div style="height:50px;"></div>
    <div class="main-container">
      <div style="height:10px;"></div>
      <div class="button-item">
        <div class="button-text">Enma</div>
      </div>
      <div class="main-title" @click="logout()">退出登陆</div>
    </div>

    <div class="card-container">
      <div class='card-item'>欢迎回来，准备开始学习吧！</div>
    </div>

    <div class="button-container">
      <div class="main-item">
        <div class="item" @click="toastMsg()">
          <div class="item-box" style="background:#FE7250"></div>
          <div class="item-title">按钮FE7250</div>
        </div>
        <div class="item" @click="toastMsg()">
          <div class="item-box" style="background:#F5F0ED"></div>
          <div class="item-title">按钮F5F0ED</div>
        </div>
        <div class="item" @click="toastMsg()">
          <div class="item-box" style="background:#79E0E7"></div>
          <div class="item-title">按钮79E0E7</div>
        </div>
        <div class="item" @click="toastMsg()">
          <div class="item-box" style="background:#45D4DE"></div>
          <div class="item-title">按钮45D4DE</div>
        </div>
      </div>

      <div class="main-item">
        <div class="item" @click="toastMsg()">
          <div class="item-box" style="background:#49C0DC"></div>
          <div class="item-title">按钮49C0DC</div>
        </div>
        <div class="item" @click="toastMsg()">
          <div class="item-box" style="background:#F6F5DF"></div>
          <div class="item-title">按钮F6F5DF</div>
        </div>
        <div class="item" @click="toastMsg()">
          <div class="item-box" style="background:#B4E55C"></div>
          <div class="item-title">按钮B4E55C</div>
        </div>
        <div class="item" @click="toastMsg()">
          <div class="item-box" style="background:#99D815"></div>
          <div class="item-title">按钮99D815</div>
        </div>
      </div>
      <div class="main-item">
        <div class="item" @click="toastMsg()">
          <div class="item-box" style="background:#F6B251"></div>
          <div class="item-title">按钮F6B251</div>
        </div>
        <div class="item" @click="toastMsg()">
          <div class="item-box" style="background:#F0E5D3"></div>
          <div class="item-title">按钮F0E5D3</div>
        </div>
        <div class="item" @click="toastMsg()">
          <div class="item-box" style="background:#E24727"></div>
          <div class="item-title">按钮E24727</div>
        </div>
        <div class="item" @click="toastMsg()">
          <div class="item-box" style="background:#432626"></div>
          <div class="item-title">按钮432626</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header";
export default {
  name: "user",
  components: {
    myHeader
  },
  methods: {
    logout() {
      sessionStorage.clear();
      this.$router.go(0);
    },
    toastMsg() {
      this.$toast("即将上线,敬请期待");
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
  height: calc(30vh - 50px);
  margin-top: -1px;
  .button-item {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #40cdd6;
    margin: 0 auto;
    text-align: center;
    .button-text {
      color: #fff;
      font-size: 20px;
      font-weight: 400;
      height: 70px;
      line-height: 70px;
    }
  }
  .main-title {
    text-align: center;
    font-size: 5vw;
    font-weight: 500;
    height: 10vh;
    line-height: 10vh;
  }
}
.card-container{
  height:10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .card-item{
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 5vw;
    height:50px;
    width:90vw;
    border-radius: 40px;
    background: #2D3440;
    box-shadow:0 0 5px 2px rgb(255, 246, 197)
  }
}
.button-container {
  height: 50vh;
  margin-top: 10px;
  .main-item {
    display: flex;
    flex-direction: row;
    color: #606266;
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
</style>
