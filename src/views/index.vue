<template>
  <div>
    <!-- 放置容器 -->
    <div class="view-container">
      <home-tag v-if="activeName=='首页'">1</home-tag>
      <lab-tag v-if="activeName=='图书馆'">1</lab-tag>
      <class-tag v-if="activeName=='班级'">1</class-tag>
      <user-tag v-if="activeName=='个人中心'">1</user-tag>
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
import homeImg from "@/assets/base/eps1@1.png";
import labImg from "@/assets/base/eps2@1.png";
import classImg from "@/assets/base/eps3@1.png";
import userImg from "@/assets/base/eps4@1.png";
import homeImgActive from "@/assets/base/eps1.png";
import labImgActive from "@/assets/base/eps2.png";
import classImgActive from "@/assets/base/eps3.png";
import userImgActive from "@/assets/base/eps4.png";

import tab from "@/components/footer/tab";
import tabItem from "@/components/footer/tabItem";
import homeTag from "./home";
import labTag from "./lab";
import classTag from "./class";
import userTag from "./user";
export default {
  name: "app",
  components: {
    tab,
    tabItem,
    homeTag,
    labTag,
    classTag,
    userTag
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
.view-container {
  width: 100vw;
  height: 100vh;
  background: #2c3e50;
}
</style>
