<template>
  <div class="container">
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
.container {
  height: 100vh;
  width: 100%;
}
</style>
