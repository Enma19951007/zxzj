<template>
  <div class="container">
      <my-header title="班级"></my-header>
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
  height: 100%;
  width: 100%;
}
</style>
