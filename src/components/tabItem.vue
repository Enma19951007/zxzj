<template>
  <div id="item-container" @click="submitActiveTabName()">
    <img class="baseImg" :src="imgUrl" v-show="!isActive">
    <img class="baseImg" :src="activeUrl" v-show="isActive">
    <span class="baseStr">{{tabName}}</span>
  </div>
</template>
<script>
export default {
  name: "tabitem",
  components: {},
  props: {
    tabName: String,
    imgUrl: String,
    activeUrl: String
  },
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    changeActive(value) {
      this.isActive = value;
    },
    submitActiveTabName() {
      this.$emit("changeTab", this.tabName);
    }
  }
};
</script>

<style scoped>
#item-container {
  flex: 1;
  position: relative;
  display: block;
  text-align: center;
}
.baseImg {
  display: block;
  width: 26px;
  height: 26px;
  margin: 4px auto 2px;
}
.baseStr {
  height: 18px;
  line-height: 18px;
  color: azure;
  font-size: 12px;
}
</style>
