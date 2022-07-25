<template>
  <div class="TabBarItem" @click="btnClick">
    <div v-if="!isActive">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="active-img"></slot>
    </div>
    <div :style="textColor">
      <slot name="text"></slot>
    </div>'
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return {

    }
  },
  methods:{
    btnClick(){
      //console.log(this.$props.path);
      this.$router.replace(this.$props.path);
    }
  },
  props:{
    path:{
      type:String
    },
    //由App模板处传递进来颜色
    activeColor:{
      type:String,
      default:'orange'
    }
  },
  computed:{
    isActive(){
      //实现选中时变颜色，未被选中时保持灰色
      //1.$route:当前处于活跃状态的路由对象，自带一个path属性
      //2.indexof方法：表示检索参数内对象是否有与调用者值相同的，若没有，返回-1
      return this.$route.path.indexOf(this.path) !== -1
    },

    textColor(){
      //1.三目运算符
      //2.通过一个两层绑定的方法，把一个外部传入的值绑定到标签的style属性上(记)
      //3.script区域的属性，是无法直接传送到style区域中的
      return this.isActive ? {color:this.activeColor} : {}
    }
  }

}
</script>

<style scoped>
.TabBarItem{
  flex: 1;
  text-align: center;
  font-size: 14px;
  height: 49px;
}

.TabBarItem img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: center;
  margin-bottom: -2px;
}
</style>
