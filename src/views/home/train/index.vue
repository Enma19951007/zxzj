<template>
  <div class="container">
    <my-header title="作业" isBack></my-header>
    <div style="height:50px;"></div>
    <div @click="gotoPath('/train/wordChoose')">
      <mt-cell value="未完成" is-link>
        <span slot="title">
          <div class="cell-label">新概念英语第一册 Lesson13 (引用1)</div>
          <div class="cell-title">
            <div class="cell-icon">词汇选择</div>
            <span>未完成</span>
          </div>
        </span>
      </mt-cell>
    </div>
    <div @click="gotoPath()">
      <mt-cell value="未完成" is-link>
        <span slot="title">
          <div class="cell-label">新概念英语第一册 Lesson13 (引用1)</div>
          <div class="cell-title">
            <div class="cell-icon">连连看</div>
            <span>未完成</span>
          </div>
        </span>
      </mt-cell>
    </div>
    <div @click="gotoPath()">
      <mt-cell value="未完成" is-link>
        <span slot="title">
          <div class="cell-label">新概念英语第一册 Lesson13 (引用1)</div>
          <div class="cell-title">
            <div class="cell-icon">听音连句</div>
            <span>未完成</span>
          </div>
        </span>
      </mt-cell>
    </div>
    <div @click="gotoPath()">
      <mt-cell value="未完成" is-link>
        <span slot="title">
          <div class="cell-label">新概念英语第一册 Lesson13 (引用1)</div>
          <div class="cell-title">
            <div class="cell-icon">还原单词</div>
            <span>未完成</span>
          </div>
        </span>
      </mt-cell>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header";
export default {
  name: "train",
  components: {
    myHeader
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    gotoPath(value) {
      this.$router.push({ path: value });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
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
.cell-label {
  margin-top: 10px;
  height: 7vw;
  line-height: 7vw;
}
.cell-title {
  height: 7vw;
  line-height: 7vw;
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
