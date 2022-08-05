//home的网络请求
import {require} from "./require";

export function getHomeData(){
  return require({
    url:'/home/multidata'
  })
}
export function getHomeGoodsData(type,page){
  return require({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
