<template>
  <div class="header-container">
    <span class="title-CSS">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: "myHeader",
  props: ["title"]
};
</script>

<style lang="scss" scoped>
.header-container {
  position: fixed;
  top:0;
  left:0;
  height: 50px;
  line-height: 50px;
  width: 100%;
  background: rgb(0, 173, 173);
  color: #fff;
  font-size: 20px;
  z-index: 1000;
}
.title-CSS {
  margin-left: 25px;
}
</style>