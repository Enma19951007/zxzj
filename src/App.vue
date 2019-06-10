<template>
  <div id="app">
    <!-- 放置容器 -->
    <div class="view-container">
      <keep-alive>
        <div v-if="activeName=='首页'">
          1
          <img v-if="activeName=='首页'" alt="Vue logo" src="./assets/logo.png">
          <img v-if="activeName=='首页'" alt="Vue logo" src="./assets/logo.png">
          <img v-if="activeName=='首页'" alt="Vue logo" src="./assets/logo.png">
          <img v-if="activeName=='首页'" alt="Vue logo" src="./assets/logo.png">
          <img v-if="activeName=='首页'" alt="Vue logo" src="./assets/logo.png">
        </div>
      </keep-alive>
      <keep-alive>
        <div v-if="activeName=='图书馆'">2</div>
      </keep-alive>
      <keep-alive>
        <div v-if="activeName=='班级'">3</div>
      </keep-alive>
      <keep-alive>
        <div v-if="activeName=='个人中心'">4</div>
      </keep-alive>
    </div>
    <tab :activeName="activeName">
      <tab-item @changeTab="changeTab" tabName="首页" :imgUrl="homeImg" :activeUrl="homeImgActive"></tab-item>
      <tab-item @changeTab="changeTab" tabName="图书馆" :imgUrl="labImg" :activeUrl="labImgActive"></tab-item>
      <tab-item @changeTab="changeTab" tabName="班级" :imgUrl="classImg" :activeUrl="classImgActive"></tab-item>
      <tab-item @changeTab="changeTab" tabName="个人中心" :imgUrl="userImg" :activeUrl="userImgActive"></tab-item>
    </tab>
  </div>
</template>
<script>
import tab from "./components/tab";
import tabItem from "./components/tabItem";
import homeImg from "./assets/base/eps1@1.png";
import labImg from "./assets/base/eps2@1.png";
import classImg from "./assets/base/eps3@1.png";
import userImg from "./assets/base/eps4@1.png";
import homeImgActive from "./assets/base/eps1.png";
import labImgActive from "./assets/base/eps2.png";
import classImgActive from "./assets/base/eps3.png";
import userImgActive from "./assets/base/eps4.png";
export default {
  name: "app",
  components: {
    tab,
    tabItem
  },
  data: function() {
    return {
      homeImg: homeImg,
      labImg: labImg,
      classImg: classImg,
      userImg: userImg,
      homeImgActive: homeImgActive,
      labImgActive: labImgActive,
      classImgActive: classImgActive,
      userImgActive: userImgActive,
      activeName: "首页"
    };
  },
  methods: {
    changeTab(value) {
      this.activeName = value;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
}
.view-container {
  width: 100%;
  height: cale(100vh -80px);
  background: #2c3e50;
}
</style>
