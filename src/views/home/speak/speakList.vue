<template>
  <div class="container">
    <my-header :title="title" isBack></my-header>
    <div style="height:50px;"></div>
    <div @click="gotoPath()">
      <mt-cell value="未完成 >">
        <span slot="title">
          <div class="cell-title">
            <div class="cell-icon">口语跟读</div>
            <span>共12题 未完成</span>
          </div>
          <div class="cell-label">新概念英语第一册 Lesson13 (引用1)</div>
        </span>
      </mt-cell>
    </div>
    <div @click="gotoPath()">
      <mt-cell value="未完成 >">
        <span slot="title">
          <div class="cell-title">
            <div class="cell-icon">口语跟读</div>
            <span>共12题 未完成</span>
          </div>
          <div class="cell-label">新概念英语第一册 Lesson13 (引用1)</div>
        </span>
      </mt-cell>
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
      title: null
    };
  },
  mounted() {
    this.title = this.$router.currentRoute.query.title;
  },
  methods: {
    gotoPath() {
      this.$router.push({ path: "/speak/speakTrain"});
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
}
.cell-icon {
  display: inline-block;
  // width: 20vw;
  // height:8vw;
  padding: 0 5px;
  margin: 0 7px 0 0;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  border: 1px solid #2c3e50;
  border-radius: 4px;
}
.cell-title {
  margin-top: 5px;
  height: 7vw;
  line-height: 7vw;
  color: #666;
  font-size: 14px;
}
.cell-label {
  height: 10vw;
  line-height: 10vw;
}
</style>
