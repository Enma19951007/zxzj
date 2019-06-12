<template>
  <div class="container">
    <my-header title="口语跟读" isBack></my-header>
    <div style="height:50px;"></div>
  </div>
</template>

<script>
import myHeader from "@/components/header";
export default {
  name: "speak",
  components: {
    myHeader
  },
  data() {
    return {
      
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
}
.cell-title {
  height: 10vw;
  line-height: 10vw;
}
.cell-label {
  height: 5vw;
  line-height: 5vw;
  color: #666;
  font-size: 14px;
  margin-bottom: 5px;
}
</style>
