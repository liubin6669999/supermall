import Vue from 'vue'
import Router from 'vue-router'
import Home from "../view/home/Home";
import Sort from "../view/sort/Sort";
import Car from "../view/car/Car";
import Me from "../view/me/Me";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/Home'
    },
    {
      path:'/Home',
      component:Home
    },
    {
      path:'/Sort',
      component:Sort
    },
    {
      path:'/Car',
      component:Car
    },
    {
      path:'/Me',
      component:Me
    }
  ],
  mode:'history'
})
