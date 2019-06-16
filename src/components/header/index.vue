<template>
  <div class="header-container">
    <span class="title-back" v-if="isBack" @click="goBack()">
      <van-icon name="arrow-left"/>
    </span>
    <span class="title-CSS" @click="chooseList(isList)">
      {{title}}
      <van-icon v-if="isList" size="20px" name="arrow-down"/>
    </span>

    <van-action-sheet v-model="showList" :actions="actions" @select="onSelect" cancel-text="取消"/>
  </div>
</template>

<script>
export default {
  name: "myHeader",
  props: {
    title: String,
    isBack: {
      type: Boolean,
      default: false
    },
    isList: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      showList: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    chooseList(value) {
      if (value) {
        this.showList = true;
      } else {
        return;
      }
    },
    onSelect(value) {
      this.$emit("chooseItem", value);
      this.showList = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  line-height: 50px;
  width: 100%;
  background: #4356b2;
  color: #fff;
  font-size: 20px;
  z-index: 1000;
}
.title-back {
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  height: 48px;
  line-height: 48px;
}
.title-CSS {
  margin-left: 15px;
}
</style>