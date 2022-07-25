<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/Home">
        <div slot="img">
          <img src="~assets/img/tabbar/icon01.png">
        </div>
        <div slot="active-img">
          <img src="~assets/img/tabbar/icon01_active.png">
        </div>
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/Sort">
        <div slot="img">
          <img src="~assets/img/tabbar/icon02.png">
        </div>
        <div slot="active-img">
          <img src="~assets/img/tabbar/icon02_active.png">
        </div>
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/Car">
        <div slot="img">
          <img src="~assets/img/tabbar/icon03.png">
        </div>
        <div slot="active-img">
          <img src="~assets/img/tabbar/icon03_active.png">
        </div>
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/Me">
        <div slot="img">
          <img src="~assets/img/tabbar/icon04.png">
        </div>
        <div slot="active-img">
          <img src="~assets/img/tabbar/icon04_active.png">
        </div>
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>

</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";
export default {
  name: 'App',
  components:{
    TabBar,TabBarItem
  }
}
</script>

<style>
@import url('./assets/css/reset.css');
</style>
