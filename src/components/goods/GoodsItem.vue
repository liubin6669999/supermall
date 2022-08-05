<template>
  <div class="goods-list-item">
    <a :href="goodsListItem.link">
      <img :src="goodsListItem.show.img" class="goods-list-img">
      <div class="good-info">
        <span>{{goodsListItem.title}}</span>
        <div class="good-p">
          <p>价格：{{goodsListItem.price}}&nbsp;</p><p>收藏：{{goodsListItem.cfav}}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props:{
    goodsListItem:{
      type:Object,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  /*实现分成两块的效果*/
  width: 49%;
  height: auto;
  padding-top: 6px;
  font-size: 14px;
}
.goods-list-img{
  width: 100%;
  height: auto;
  border-radius: 4px;
}
.good-info{
  font-size: 12px;
  /*文字超行显示...样式*/
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.good-p p{
  display: inline;
}
</style>
