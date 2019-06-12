<template>
  <div class="container">
    <my-header title="口语练习" isBack></my-header>
    <div style="height:50px;"></div>
    <div @click="gotoPath('新概念第1课')">
      <mt-cell value="未完成 >">
        <span slot="title">
          <div class="cell-title">新概念第1课</div>
          <div class="cell-label">三年级</div>
        </span>
      </mt-cell>
    </div>
    <div @click="gotoPath('6.4号预习作业')">
      <mt-cell value="未完成 >">
        <span slot="title">
          <div class="cell-title">6.4号预习作业</div>
          <div class="cell-label">三年级</div>
        </span>
      </mt-cell>
    </div>
    <div @click="gotoPath('第五单元预习作业')">
      <mt-cell value="未完成 >">
        <span slot="title">
          <div class="cell-title">第五单元预习作业</div>
          <div class="cell-label">三年级</div>
        </span>
      </mt-cell>
    </div>
    <div @click="gotoPath('85课预习作业')">
      <mt-cell value="未完成 >">
        <span slot="title">
          <div class="cell-title">85课预习作业</div>
          <div class="cell-label">三年级</div>
        </span>
      </mt-cell>
    </div>
    <div @click="gotoPath('新概念第1课')">
      <mt-cell value="未完成 >">
        <span slot="title">
          <div class="cell-title">新概念第1课</div>
          <div class="cell-label">三年级</div>
        </span>
      </mt-cell>
    </div>
    <div @click="gotoPath('6.4号预习作业')">
      <mt-cell value="未完成 >">
        <span slot="title">
          <div class="cell-title">6.4号预习作业</div>
          <div class="cell-label">三年级</div>
        </span>
      </mt-cell>
    </div>
    <div @click="gotoPath('第五单元预习作业')">
      <mt-cell value="未完成 >">
        <span slot="title">
          <div class="cell-title">第五单元预习作业</div>
          <div class="cell-label">三年级</div>
        </span>
      </mt-cell>
    </div>
    <div @click="gotoPath('85课预习作业')">
      <mt-cell value="未完成 >">
        <span slot="title">
          <div class="cell-title">85课预习作业</div>
          <div class="cell-label">三年级</div>
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
  methods: {
    gotoPath(value) {
      this.$router.push({ path: "/speak/speakList", query: { title: value } });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
}
.cell-title {
  height: 10vw;
  line-height: 10vw;
}
.cell-label {
  height: 5vw;
  line-height: 5vw;
  color: #666;
  font-size: 14px;
  margin-bottom: 5px;
}
</style>
