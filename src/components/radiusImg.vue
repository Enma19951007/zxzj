<template>
  <div class="img-container">
    <img :src="src">
  </div>
</template>

<script>
export default {
  name: "myImg",
  props: {
    src: String
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.img-container {
  display: inline-block;
  height: 50px;
  width: 50px;
  background: #666;
  border-radius: 50%;
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
}
</style>