<template>
  <div>
<!--    顶部标题栏-->
    <navigate-bar :is-sticky="true">
      <span slot="center">购物街</span>
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
      <span slot="center">本周流行</span>
    </navigate-bar>
    <div style="text-align: center">
      <img src="../../assets/img/featuview/image1.jpg" style="width:100%">
    </div>
    <br>

<!--    商品推荐列表切换器-->
    <tab-control :titles="titles" @titleClick="titleClick"></tab-control>
<!--    商品推荐列表-->
    <div id="goods">
      <goods-bar :goods-list="goods[inputType]"></goods-bar>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
import NavigateBar from "../../components/navigatebar/NavigateBar";
import {getHomeData,getHomeGoodsData} from "../../network/home";
import SwiperContainer from "../../swiper/SwiperContainer";
import SwiperItem from "../../swiper/SwiperItem";
import RecommendView from "../../components/recommendbar/RecommendView";
import TabControl from "../../components/tabcontrol/TabControl";
import GoodsItem from "../../components/goods/GoodsItem";
import GoodsBar from "../../components/goods/GoodsBar";
export default {
  name: "Home",
  components:{
    SwiperItem, NavigateBar, SwiperContainer,RecommendView,TabControl,GoodsItem,GoodsBar
  },
  data(){
    return {
      bannersList: [],
      recommendList:[],
      banners:{},
      res:{},
      //----------------------------------下方商品数据------------------------------//
      titles:['流行','新款','精选'],
      inputType:'pop',
      goods:{
        'pop':{page:1,list:[]},
        'new':{page:1,list:[]},
        'sell':{page:1,list:[]},
      },
      currentPage:1,
      inputGoodsList:[],
    }
  },
  methods:{
    // 界面响应方法
    titleClick(index){
      switch (index) {
        case 0:this.inputType = 'pop';break;
        case 1:this.inputType = 'new';break;
        case 2:this.inputType = 'sell';break;
      }
    },
    // 内部方法
    //1.获取主界面数据
    getBaseData(){
      getHomeData().then((res) => {
        this.res = res.data.data;
        this.bannersList = res.data.data.banner.list;
        this.banners = res.data.data.banner;
        this.recommendList = res.data.data.recommend.list
      })
    },
    //2.获取主界面商品列表数据存入数组
    getGoodsData(type,page){
      getHomeGoodsData(type,page).then((res) =>{
        let currentList = []
        switch (type){
          case 'pop':
            currentList = res.data.data.list;
            this.goods.pop.list = this.goods.pop.list.concat(currentList);
            this.goods.pop.page = page;
            break;
          case 'new':
            currentList = res.data.data.list;
            this.goods.new.list = currentList.concat(this.goods.new.list);
            this.goods.new.page = page;
            break;
          case 'sell':
            currentList = res.data.data.list;
            this.goods.sell.list = currentList.concat(this.goods.sell.list);
            this.goods.sell.page = page;
            break;
        }
      })
    }
  },
  created() {
    this.getBaseData();
    //---------------------从服务器获取下方商品列表数据-----------------------------
    this.getGoodsData('pop',1);
    this.getGoodsData('new',1);
    this.getGoodsData('sell',1);

  },
  mounted() {
    // 设置商品列表滚动、滚动触底刷新事件
    // 监听滚动
    let box = document.querySelector("#goods");
    // let box = document.getElementById('goods');
    box.addEventListener("scroll", function (e) {
      let scrollTop = e.target.scrollTop;
      let clientHeight = e.target.clientHeight;
      let scrollHeight = e.target.scrollHeight;
      console.log('111111111111111111')
      if (scrollTop + clientHeight == scrollHeight)
        console.log('触底了')
    })
  }

}
</script>

<style scoped>
.bottom{
  line-height: 60px;
  height: 60px;
}
</style>
