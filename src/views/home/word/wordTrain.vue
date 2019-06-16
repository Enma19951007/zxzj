<template>
  <div class="container">
    <my-header title="单词拼写（复习）" isBack></my-header>
    <div style="height:50px;"></div>
    <transition name="slide-card">
      <div v-if="slideCard">
        <div class="input-container">
          <div class="input-item" :class="{'err-item':checkedFalse,'right-item':checkedTrue}">
            <input v-model="inputText" size="large" placeholder>
          </div>
        </div>
        <div class="word-container">
          <span>{{cnText}}</span>
          <div v-show="checkedFalse">{{enText}}</div>
        </div>
      </div>
    </transition>
    <div class="button-container">
      <div
        class="button-item"
        :class="{'change-item':checkedTrue||checkedFalse}"
        @click="checkWord()"
      >
        <van-icon class="button-text" name="arrow"/>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header";
export default {
  name: "wordTrain",
  components: {
    myHeader
  },
  data() {
    return {
      wordList: [],
      slideCard: true,
      cnText: null,
      enText: null,
      inputText: null,
      checkedFalse: false,
      checkedTrue: false,
      wordListindex: 0
    };
  },
  mounted() {
    this.wordList = this.getWordList(this.$store.state.myWord.wordList);
    this.wordListindex = 0;
    this.changeWord(this.wordListindex);
  },
  methods: {
    changeWord(index) {
      this.inputText = null;
      this.checkedFalse = false;
      this.checkedTrue = false;
      this.cnText = this.wordList[index].detail;
      this.enText = this.wordList[index].name;
    },
    checkWord() {
      // 如果没输入内容,直接退出方法
      if (!this.inputText) {
        return;
      }
      // 判断是否已经答题结束 如果答对,进入一下题目,没答对返回
      if (this.checkedTrue) {
        this.$store.commit("changeLearn", this.wordList[this.wordListindex].id);
        this.changeWord(++this.wordListindex);
        this.slideCard = false;
        this.$nextTick(() => {
          this.slideCard = true;
        });
        return;
      }
      if (this.checkedFalse) {
        this.changeWord(this.wordListindex);
        this.slideCard = false;
        this.$nextTick(() => {
          this.slideCard = true;
        });
        return;
      }
      // 对比单词 如果一致变成绿色 不一致变成红色
      if (this.enText == this.inputText) {
        this.checkedTrue = true;
      } else {
        this.checkedFalse = true;
      }
    },
    getWordList(wordList) {
      let temArr = [];
      for (let index in wordList) {
        if (!wordList[index].isLearn) {
          temArr.push(wordList[index]);
        }
      }
      return temArr;
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
.input-container {
  height: 15vh;
  .input-item {
    margin: 7vh auto 0px;
    width: 80%;
    // height:0px;
    border-bottom: 2px solid black;
    input {
      text-align: center;
      padding: 20px 12px 0px 12px;
      letter-spacing: 10px;
      width: 100%;
      font-size: 7vw;
      font-weight: 600;
      border: 0px;
    }
  }
  .err-item {
    transition: all 0.1s;
    border-bottom: 2px solid red !important;
    input {
      color: red !important;
    }
  }
  .right-item {
    transition: all 0.1s;
    border-bottom: 2px solid rgb(0, 177, 0) !important;
    input {
      color: rgb(0, 177, 0) !important;
    }
  }
}
.word-container {
  height: 20vh;
  color: #3f4d5a;
  text-align: center;
  font-size: 6vw;
  div {
    font-weight: 600;
    font-size: 6.5vw;
    padding-top: 10px;
  }
}
.button-container {
  height: 10vh;
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
    background: #b3b3b3;
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
  .change-item {
    background: #4356b2 !important;
  }
}

.slide-card-enter-active {
  transition: all 0.5s;
}
.slide-card-enter,
.slide-card-leave-to {
  transform: translateX(20px);
  opacity: 0.3;
}
</style>
