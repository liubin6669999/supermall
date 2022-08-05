import axios from "axios";

export function require(config){
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:10000
  });
  return instance({url:config.url,params:config.params})
}
