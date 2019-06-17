<template>
  <div class="container">
    <my-header title="口语跟读" isBack></my-header>
    <div style="height:50px;"></div>
    <my-time-header></my-time-header>
    <div class="word-container">{{wordDetail.wordName}}</div>
    <div class="choose-container" @click="chooseItem($event,isChecked)">
      <div
        v-for="item in wordDetail.chooseList"
        :key="item.id"
        :ref="'chooseItem'+item.id"
        class="choose-item"
        :chooseId="item.id"
      >{{item.name}}</div>
    </div>
    <div class="button-container">
      <div class="button-item" :class="{'change-item':isChecked}" @click="nextWord(isChecked)">
        <van-icon class="button-text" name="arrow"/>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header";
import myTimeHeader from "@/components/timeHeader";
export default {
  name: "speak",
  components: {
    myHeader,
    myTimeHeader
  },
  data() {
    return {
      wordDetail: {
        wordName: "clothes",
        chooseList: [
          {
            id: 1,
            name: "帽子"
          },
          {
            id: 2,
            name: "连衣裙"
          },
          {
            id: 3,
            name: "短袜"
          },
          {
            id: 4,
            name: "衣服"
          }
        ],
        rightItemId: 4
      },
      isChecked: false
    };
  },
  mounted() {},
  methods: {
    clickMethod(value) {
      this.$toast("触发事件" + value);
    },
    nextWord(isChecked) {
      if (isChecked) {
        console.log("a");
      }
    },
    chooseItem(event,isChecked) {
      // 如果执行过一次,就不会再执行
      if (isChecked) {
        console.log("a");
      } else {
        // 查看元素是否有chooseId 有就拿出来 ,没有就拉到
        if (event.target.attributes.chooseId) {
          // 直接将选项先标记为错误,如果正确再进行覆盖
          let userChoose = event.target.attributes.chooseId.value;
          let chooseItemStr = "chooseItem" + userChoose;
          this.$refs[chooseItemStr][0].style.color = "#dc5f7c";
          this.$refs[chooseItemStr][0].style.borderColor = "#dc5f7c";
          this.$refs[
            "chooseItem" + this.wordDetail.rightItemId
          ][0].style.color = "#63c0b5";
          this.$refs[
            "chooseItem" + this.wordDetail.rightItemId
          ][0].style.borderColor = "#63c0b5";
          this.isChecked = true;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
}
.word-container {
  height: 10vh;
  line-height: 10vh;
  text-align: center;
  font-size: 10vw;
  font-weight: 550;
  color: #2f3f50;
}
.choose-container {
  height: 40vh;
  display: flex;
  flex-direction: column;
  .choose-item {
    width: 80vw;
    height: 6vh;
    line-height: 6vh;
    color: #2f3f50;
    font-size: 5.5vw;
    text-align: center;
    border: 1px solid #d6daf2;
    border-radius: 5px;
    margin: 2vw auto;
  }
}
.button-container {
  height: calc(50vh - 90px);
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
</style>
