<template>
  <div class="star-container">
    <div class="star-item">
      <div ref="star1" class="star"></div>
    </div>
    <div class="star-item">
      <div ref="star2" class="star"></div>
    </div>
    <div class="star-item">
      <div ref="star3" class="star"></div>
    </div>
    <div class="star-item">
      <div ref="star4" class="star"></div>
    </div>
    <div class="star-item">
      <div ref="star5" class="star"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myStar",
  props: {
    number: {
      type: Number,
      default: 0
    }
  },
  watch: {
    number() {
      this.getStar();
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.getStar();
  },
  methods: {
    getStar() {
      for (let i = 0; i < this.number; i++) {
        let str = "star" + parseInt(i + 1);
        this.$refs[str].style.backgroundColor = "#3ccecd";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.star-container {
  display: flex;
  align-items: center;
  .star-item {
    flex: 1;
    .star {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background: #e2e2e2;
    }
  }
}
</style>