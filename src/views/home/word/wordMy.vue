<template>
  <div class="container">
    <my-header title="我的单词" isBack></my-header>
    <div style="height:50px;"></div>
    <div class="title-container">
      <div style="float:left">
        <div class="title-number">{{learnWordCount}}</div>
        <div class="title-tips">点击单词可查看详情</div>
      </div>
      <div class="title-right">已学轮次</div>
    </div>
    <div class="list-container">
      <div
        class="list-item"
        v-for="item in wordList"
        :key="item.name"
        v-show="item.isLearn"
        @click="gotoPath('/word/wordMyWord',item.name)"
      >
        <div class="list-text">{{item.name}}</div>
        <my-star class="list-number" :number="item.star"></my-star>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header";
import myStar from "@/components/recordStar";
export default {
  name: "wordMy",
  components: {
    myHeader,
    myStar
  },
  data() {
    return {
      wordList: this.$store.state.myWord.wordList,
      learnWordCount: "总数:" + 0
    };
  },
  mounted() {
    this.learnWordCount =
      "总数:" + this.getCount(this.$store.state.myWord.wordList);
  },
  methods: {
    gotoPath(path, value) {
      this.$router.push({ path: path, query: { query: value } });
    },
    getCount(wordList) {
      let count = 0;
      for (let index in wordList) {
        if (wordList[index].isLearn) {
          count = count + 1;
        }
      }
      return count;
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
.title-container {
  height: 14vw;
  line-height: 14vw;
  border-bottom: 1px solid #858585;
  .title-number {
    display: inline-block;
    font-size: 4.5vw;
    font-weight: 600;
    margin-left: 20px;
  }
  .title-tips {
    display: inline-block;
    font-size: 4.5vw;
    margin-left: 10px;
    color: #959595;
  }
  .title-right {
    float: right;
    font-size: 4.5vw;
    margin-right: 15px;
  }
}
.list-container {
  height: calc(100vh - 50px - 14vw);
  width: 100%;
  overflow-y: scroll;
  .list-item {
    width: 100%;
    height: 14vw;
    border-bottom: 1px solid #e0e0e0;
    .list-text {
      float: left;
      height: 14vw;
      line-height: 14vw;
      font-size: 4.5vw;
      font-weight: 550;
      margin-left: 20px;
    }
    .list-number {
      float: right;
      height: 14vw;
      width: 30vw;
      margin-right: 20px;
    }
  }
}
</style>
