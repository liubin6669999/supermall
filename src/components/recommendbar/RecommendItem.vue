<template>
  <div class="item">
    <div class="img">
      <slot name="img"></slot>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendItem",
  props:{
    recommendUrl:''
  }
}
</script>

<style scoped>
  .item{
    flex: 1;
  }
  .img text{
    text-align: center;
  }
  .img img{
    width: 50%;
    height: 50%;
  }
</style>
