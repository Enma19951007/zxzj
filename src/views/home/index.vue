<template>
  <div class="container">
    <my-header title="在线助教"></my-header>
    <div class="main-container">
      <div style="height:50px;"></div>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <div class="carousel-item-css">
            <img src="./../../assets/swp1.png" style="height:100%;width:100%">
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="carousel-item-css">
            <img src="./../../assets/swp2.png" style="height:100%;width:100%">
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="carousel-item-css">
            <img src="./../../assets/swp3.png" style="height:100%;width:100%">
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="app-container">
        <div class="app-item-container">
          <div class="app-item" style="background:#4cbfff" @click="gotoRouter('/speak')"></div>
        </div>
        <div class="app-item-container">
          <div class="app-item" style="background:#609afe" @click="gotoRouter('/word')"></div>
        </div>
        <div class="app-item-container">
          <div class="app-item" style="background:#9b98ff"></div>
        </div>
        <div class="app-item-container">
          <div class="app-item" style="background:#cd99fd"></div>
        </div>
        <div class="app-item-container">
          <div class="app-item" style="background:#01cafe"></div>
        </div>
      </div>

      <div class="book-container">
        <div class="book-title">
          <span style="float:left;margin-left:20px;">推荐</span>
          <span style="float:right;margin-right:20px;">查看更多></span>
        </div>
        <div class="book-content">
          <div class="book-item">
            <div class="img-container">
              <img src="./../../assets/list1.png">
              <div class="book-name">Please</div>
            </div>
          </div>
          <div class="book-item">
            <div class="img-container">
              <img src="./../../assets/list2.png">
              <div class="book-name">Nice bike</div>
            </div>
          </div>
          <div class="book-item">
            <div class="img-container">
              <img src="./../../assets/list3.png">
              <div class="book-name">New plains</div>
            </div>
          </div>
        </div>
      </div>
      <div class="book-container">
        <div class="book-title">
          <span style="float:left;margin-left:20px;">我的阅读</span>
          <span style="float:right;margin-right:20px;">查看更多></span>
        </div>
        <div class="book-content">
          <div class="book-item">
            <div class="img-container">
              <img src="./../../assets/list4.png">
              <div class="book-name">Hello World</div>
            </div>
          </div>
          <div class="book-item">
            <div class="img-container">
              <img src="./../../assets/list5.png">
              <div class="book-name">Please</div>
            </div>
          </div>
          <div class="book-item">
            <div class="img-container">
              <img src="./../../assets/list6.png">
              <div class="book-name">Nice bike</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header";
export default {
  name: "home",
  components: {
    myHeader
  },
  data() {
    return {};
  },
  methods: {
    gotoRouter(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  // display: flex;
  // flex-direction: column;
}
.main-container {
  height: calc(100% - 50px);
  width: 100%;
  overflow-y: scroll;
}
.carousel-item-css {
  height: 180px;
}
.app-container {
  height: 80px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  .app-item-container {
    height: 80px;
    flex: 1;
    .app-item {
      position: relative;
      top: 50%;
      margin: -25px auto 0;
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background: red;
    }
  }
}
.book-container {
  height: 200px;
  background: #ffffff;
  .book-title {
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: #585858;
    font-size: 14px;
    background: #fafafa;
  }
  .book-content {
    display: flex;
    flex-direction: row;
    height: 170px;

    .book-item {
      flex: 1;
      .img-container {
        width: 27vw;
        height: 32vw;
        margin: 20px auto 0px;
        border: 1px solid #999;
        img {
          height: 100%;
          width: 100%;
          padding: 10px;
        }
        .book-name {
          position: relative;
          top: -25px;
          left: -1px;
          width: 102%;
          text-align: center;
          height: 20px;
          line-height: 20px;
          background: #a199edc5;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
