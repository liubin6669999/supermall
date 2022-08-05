<template>
  <div class="goods-bar">
    <goods-item v-for="(item,index) in getInputList" :key="index" :goods-list-item="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  name: "GoodsBar",
  components:{
    GoodsItem
  },
  props:{
    goodsList:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    getInputList(){
      return this.goodsList.list
    }
  }
}
</script>

<style scoped>
  .goods-bar{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 6px;
  }
</style>
