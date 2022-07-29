<template>
  <div>
<!--    顶部标题栏-->
    <navigate-bar :is-sticky="true">
      <h1 slot="center">首页</h1>
    </navigate-bar>

<!--    轮播图-->
    <swiper-container>
      <swiper-item v-for="(item,index) in bannersList" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper-container>
    <br>

<!--  今日推荐-->
    <recommend-view :recommend-list="recommendList"></recommend-view>
    <br>

<!--    本周流行-->
    <navigate-bar bg-color="white">
      <h2 slot="center">本周流行</h2>
    </navigate-bar>
    <div style="text-align: center">
      <img src="../../assets/img/featuview/image1.jpg">
    </div>
    <br>

<!--    推荐列表切换器-->
    <tab-control :titles="titles"></tab-control>
<!--    推荐列表-->
    <div>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
      <h2>111</h2>
    </div>
  </div>
</template>

<script>
import NavigateBar from "../../components/navigatebar/NavigateBar";
import {getHomeData} from "../../network/home";
import SwiperContainer from "../../swiper/SwiperContainer";
import SwiperItem from "../../swiper/SwiperItem";
import RecommendView from "../../components/recommendbar/RecommendView";
import TabControl from "../../components/tabcontrol/TabControl";
export default {
  name: "Home",
  components:{
    SwiperItem, NavigateBar, SwiperContainer,RecommendView,TabControl
  },
  data(){
    return {
      bannersList: [],
      recommendList:[],
      banners:{},
      res:{},
      titles:['热门','精选','人气'],
    }
  },
  created() {
    getHomeData().then((res) => {
      // console.log(res)
      //从服务器获取轮播图数据
      this.res = res.data.data;
      this.bannersList = res.data.data.banner.list;
      this.banners = res.data.data.banner;
      this.recommendList = res.data.data.recommend.list
    })
  },
}
</script>

<style scoped>

</style>
