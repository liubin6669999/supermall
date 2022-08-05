<template>
  <div :class="{navigate_bar:true,navigate_sticky:isSticky}" :style={background:bgColor}>
    <div class="left" ><slot name="left"></slot></div>
    <div class="center" ><slot name="center"></slot></div>
    <div class="right" ><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavigateBar",
  props:{
    bgColor:{
      type:String,
      default:'orange'
    },
    isSticky:{
      type:Boolean,
      default: false
    },
  }
}
</script>

<style scoped>
  .navigate_bar{
    display: flex;
    /*height: 44px;*/
    line-height: 30px;
    text-align: center;
    z-index: 1;
  }
  .left right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
  .navigate_sticky{
    position: sticky;
    top: 0px;
  }
</style>
