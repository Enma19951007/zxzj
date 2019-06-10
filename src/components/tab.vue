<template>
  <div id="tab-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tab",
  components: {},
  props: ["activeName"],
  watch: {
    activeName() {
     this.getActiveTabName()
    }
  },
  mounted() {
    this.getActiveTabName()
  },
  methods: {
    getActiveTabName() {
      if (this.$children || this.$children.length > 0) {
        for (let index in this.$children) {
          this.$children[index].changeActive(false)
          if (this.$children[index].tabName == this.activeName) {
            this.$children[index].changeActive(true);
          }
        }
      }
    }
  }
};
</script>

<style scoped>
#tab-container {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  background: rgb(0, 173, 173);
  display: flex;
  width: 100%;
}
</style>
