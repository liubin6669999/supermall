<template>
  <div :class="{tab_control:true,tab_sticky:isSticky}">
    <div class="item" v-for="(item,index) in titles" :key="index" @click="titleClick(index)">
      <p :class="{item_active:index == currentIndex}">{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default:''
    },
    isSticky:{
      type:Boolean,
      default: true
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    titleClick(index){
    this.currentIndex = index
    }
  }
}
</script>

<style scoped>
  .tab_control{
    display: flex;
    font-size: 40px;
    justify-content: center;
    height: 44px;
    background: #FFFFFF;
  }
  .item{
    flex: 1;
    text-align: center;
    font-size: 20px;
  }
  .item_active{
    color: var(--color-high-text);
    text-decoration:orange underline solid 4px ;
  }
  .tab_sticky{
    position: sticky;
    top: 44px;
  }
</style>
