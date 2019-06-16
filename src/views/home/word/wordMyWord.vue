<template>
  <div class="container">
    <my-header title="单词详情" isBack></my-header>
    <div style="height:50px;"></div>
    <div class="english-container">{{wordDetail.name}}</div>
    <div class="word-container">
      <span>{{wordDetail.detail}}</span>
    </div>
    <div class="text-container">
      <div class="en-text">{{wordDetail.enText}}</div>
      <div class="ch-text">{{wordDetail.cnText}}</div>
      <div class="button-item" @click="getNextWord(wordDetail.id)">
        <van-icon class="button-text" name="arrow"/>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header";
export default {
  name: "wordMyWord",
  components: {
    myHeader
  },
  data() {
    return {
      wordDetail: {}
    };
  },
  mounted() {
    let wordName = this.$router.currentRoute.query.query;
    this.wordDetail = this.getWord(wordName, this.$store.state.myWord.wordList);
    this.addStar(this.wordDetail.id);
  },
  methods: {
    getWord(wordName, wordList) {
      for (let index in wordList) {
        if (wordList[index].name == wordName) {
          return wordList[index];
        }
      }
    },
    getNextWord(id) {
      // 算出下一个要使用的id
      let nextWordIndex = parseInt(id + 1);
      // 确保长度在全部单词之内
      if (nextWordIndex < this.$store.state.myWord.wordList.length) {
        // 判断拿到的单词是否是已学习的,如果不是已学习的,就再次调用这个方法,查找下下个单词.
        if (!this.$store.state.myWord.wordList[nextWordIndex].isLearn) {
          // 为什么不用 nextWordIndex  可能有问题 所以没有用
          this.getNextWord(parseInt(id + 1));
          return;
        }
        this.wordDetail = this.$store.state.myWord.wordList[nextWordIndex];
        this.addStar(nextWordIndex);
      } else {
        this.$toast("已经是最后一个单词");
      }
    },
    addStar(index) {
      this.$store.commit("changeStar", index);
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
.english-container {
  height: 30vh;
  line-height: 30vh;
  text-align: center;
  font-size: 15vw;
  font-weight: 600;
}
.word-container {
  height: 10vh;
  color: #707070;
  text-align: center;
  font-size: 6vw;
  div {
    font-weight: 600;
    font-size: 6.5vw;
    padding-top: 10px;
  }
}
.text-container {
  height: calc(60vh - 50px);
  background: #fafafa;
  .en-text {
    // height: 10vw;
    line-height: 13vw;
    font-size: 23px;
    font-weight: 550;
    margin-left: 5vw;
    width: 90vw;
    font-style: oblique;
  }
  .ch-text {
    // height: 10vw;
    line-height: 10vw;
    font-size: 20px;
    margin-left: 5vw;
    width: 90vw;
    color: #707070;
  }

  .button-title {
    color: #bdbdbd;
    text-align: center;
    margin-top: 5vh;
    height: 10vh;
    line-height: 10vh;
    font-size: 20px;
    transition: background-color 0.3s;
  }
  .button-item {
    float: right;
    margin-right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #4356b2;
    text-align: center;
    box-shadow: 0px 0px 5px #999;
    transition: background-color 0.3s;
    .button-text {
      color: #fff;
      font-size: 20px;
      font-weight: 400;
      height: 60px;
      line-height: 60px;
    }
  }
}
</style>
