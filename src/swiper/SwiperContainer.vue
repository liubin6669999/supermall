<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <slot></slot>
<!--      <div class="swiper-slide"><slot name="img1"></slot></div>-->
<!--      <div class="swiper-slide"><slot name="img2"></slot></div>-->
<!--      <div class="swiper-slide"><slot name="img3"></slot></div>-->
    </div>
    <!-- 如果需要分页器:下面的点 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
<!--    <div class="swiper-button-prev"></div>-->
<!--    <div class="swiper-button-next"></div>-->

    <!-- 如果需要滚动条 -->
<!--    <div class="swiper-scrollbar"></div>-->
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'
export default {
  name: "SwiperContainer",
  mounted() {
    new Swiper ('.swiper', {
      //direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      //解决v-for问题
      observer:true,
      observeParents:true,

      autoplay:true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  },
}
</script>

<style scoped>
.swiper {
  width: 750px;
  height: 390px;
}

</style>
