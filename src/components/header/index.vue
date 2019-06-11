<template>
    <div class="header-container">
      <span class="title-back" v-if="isBack" @click="goBack()">Back</span>
      <span class="title-CSS">{{title}}</span>
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
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
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
  margin-left: 10px;
  font-size: 14px;
  height: 48px;
  line-height: 48px;
}
.title-CSS {
  margin-left: 25px;
}
</style>