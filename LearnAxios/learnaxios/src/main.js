import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


// //123.207.32.32:8000/home/multidata
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res=>{
//   console.log(res);
//   // console.log(JSON.stringify(res));
// })
//
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   //get请求参数拼接
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// })

//并发请求
//1.
// axios.all([
//   axios({
//   url:'http://123.207.32.32:8000/home/multidata',
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// })]).then(result=>{
//   console.log(result);
// })

axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout=5000
//请求前的数据处理  transformRequest:[function(data){}],
//请求后的数据处理规则 transformResponse:[function(data){}]
//自定义请求头 hearders:{'x-Requested-With':'XMLHttpRequest'},
//URL查询对象params:{id:12}



axios.all([
  axios({
  url:'/home/multidata',
}),axios({
  url:'/home/data',
  params:{
    type:'pop',
    page:1
  }
})]).then(axios.spread((res1,res2)=>{
  console.log(res1);
  console.log(res2);
}))
