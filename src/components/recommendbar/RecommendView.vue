<template>
  <div class="recommend-view">
    <div v-for="(item,index) in recommendList" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommendList:{
      type:Array
    }
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.recommend-view{
  display: flex;
  justify-content: center;
}
.recommend-item{
  flex: 1;
  text-align: center;
}

.recommend-item img{
  width: 40%;
  height: 40%;
}
.title{
  font-size: 10px;
}

</style>
