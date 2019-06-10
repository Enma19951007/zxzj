<template>
  <div class="home-container">
      <my-header title="图书馆"></my-header>
  </div>
</template>

<script>
import myHeader from '@/components/header'
export default {
    name:'home',
    components:{
        myHeader
    }
};
</script>
<style lang="scss" scoped>
.home-container {
  height: 100%;
  width: 100%;
}
</style>
