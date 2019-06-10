<template>
  <div class="home-container">
    <my-header title="在线助教"></my-header>
    <Carousel v-model="activeIndex" loop autoplay style="margin-top:50px;">
      <CarouselItem>
        <div class="carousel-item-css" style="background:#fff">1</div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel-item-css" style="background:#666">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel-item-css" style="background:#999">3</div>
      </CarouselItem>
    </Carousel>

    <div class="app-container">
      <div class="app-item-container">
        <div class="app-item"></div>
      </div>
      <div class="app-item-container">
        <div class="app-item"></div>
      </div>
      <div class="app-item-container">
        <div class="app-item"></div>
      </div>
      <div class="app-item-container">
        <div class="app-item"></div>
      </div>
      <div class="app-item-container">
        <div class="app-item"></div>
      </div>
    </div>

    <div class="book-container">
      <div class="book-title">
        <span style="float:left;margin-left:20px;">推荐</span>
        <span style="float:right;margin-right:20px;">查看更多</span>
      </div>
      <div class="book-content">
        <div class="book-item">
        </div>
        <div class="book-item">
        </div>
        <div class="book-item">
        </div>
      </div>
    </div>
    <div class="book-container" style="margin-bottom:50px;">
      <div class="book-title">
        <span style="float:left;margin-left:20px;">推荐</span>
        <span style="float:right;margin-right:20px;">查看更多</span>
      </div>
      <div class="book-content">
        <div class="book-item">
        </div>
        <div class="book-item">
        </div>
        <div class="book-item">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header";
export default {
  name: "home",
  components: {
    myHeader
  },
  data: function() {
    return {
      activeIndex: 0
    };
  }
};
</script>
<style lang="scss" scoped>
.home-container {
  height: 100%;
  width: 100%;
  // display: flex;
  // flex-direction: column;
}
.carousel-item-css {
  height: 160px;
}
.app-container {
  height: 80px;
  background: #888;
  display: flex;
  flex-direction: row;
  .app-item-container {
    height: 80px;
    flex: 1;
    .app-item {
      position: relative;
      top: 50%;
      margin: -25px auto 0;
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background: red;
    }
  }
}
.book-container {
  height: 200px;
  background: rgb(36, 155, 0);
  .book-title{
    width: 100%;
    height:30px;
    line-height: 30px;
    color: #fff;
    font-size:14px; 
    background: rgb(156, 2, 2)
  }
  .book-content{
    display: flex;
    flex-direction: row;
    height:170px;
    .book-item{
      flex: 1;
      margin:20px;
      background: rgb(45, 26, 151);
      height:140px;
      width:90px;
    }
  }
}
</style>
