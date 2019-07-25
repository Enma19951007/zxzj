<template>
  <div class="container">
    <my-header title="连连看" isBack></my-header>
    <div style="height:50px;"></div>
    <my-time-header></my-time-header>
    <div class="card-container">
      <div
        @click="chooseCard(item)"
        :class="{chooseCSS:item.isChoose,matchedCSS:item.matched}"
        class="card-item"
        v-for="item in cardList"
        :key="item.id"
      >{{item.word}}</div>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header";
import myTimeHeader from "@/components/timeHeader";
import { setTimeout } from "timers";
export default {
  name: "wordLink",
  components: {
    myHeader,
    myTimeHeader
  },
  data() {
    return {
      cardList: [
        { word: "卡片", match: 1, id: 2, isChoose: false, matched: false },
        { word: "Panda", match: 3, id: 5, isChoose: false, matched: false },
        { word: "Think", match: 4, id: 7, isChoose: false, matched: false },
        { word: "Candy", match: 2, id: 3, isChoose: false, matched: false },
        { word: "Card", match: 1, id: 1, isChoose: false, matched: false },
        { word: "联想", match: 4, id: 8, isChoose: false, matched: false },
        { word: "熊猫", match: 3, id: 6, isChoose: false, matched: false },
        { word: "糖果", match: 2, id: 4, isChoose: false, matched: false },
      ],
      chooseList: []
    };
  },
  mounted() {},
  methods: {
    chooseCard(item) {
      // let waitting = false;
      if (!item.isChoose && !item.matched) {
        item.isChoose = true;
        // waitting = true;
        setTimeout(() => {
          if (this.chooseList.indexOf(item) === -1) {
            this.chooseList.push(item);
          }
          if (this.chooseList.length >= 2) {
            this.check(this.chooseList);
          }
          // waitting = false;
        }, 200);
      }
    },
    check(chooseList) {
      if (chooseList[0].match === chooseList[1].match) {
        for (let key in this.cardList) {
          if (this.cardList[key].id == chooseList[0].id) {
            this.cardList[key].matched = true;
          }
          if (this.cardList[key].id == chooseList[1].id) {
            this.cardList[key].matched = true;
          }
        }
      } else {
        for (let key in this.cardList) {
          this.cardList[key].isChoose = false;
        }
      }
      this.chooseList = [];
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
}
.card-container {
  height: 60vh;
  width: 90vw;
  margin: 0 auto;
  .card-item {
    width: 46%;
    margin: 2%;
    height: 100px;
    background: #e4e7ed;
    float: left;
    text-align: center;
    line-height: 100px;
    font-size: 25px;
    transition: all 0.3s;
    border-radius: 5px;
  }
  .chooseCSS {
    background: #E6A23C;
  }
  .matchedCSS {
    background: #67C23A !important;
  }
}
</style>
