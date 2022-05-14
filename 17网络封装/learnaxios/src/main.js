import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

import axios from 'axios'
import {request} from "./network/request"

//1.0
// request({
//   url:'/home/multidata'
// },res=>{
//   console.log(res)
// },err=>{
//   console.log(err)
// })
//2.0
// request({
//   baseConfig:{
//     url:"/home/multidata"
//   },
//   success:function(res){
//     console.log(res)
//   },
//   failure:function(err){
//     console.log(err)
//   }
// })
//3.0
// request({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   // method:get
// }).then(res=>{
//   console.log(res)
// })
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'get',
//     page:1
//   }
// }).then(res=>{
//   console.log(res)
// })

//合并写法
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'get',
//     page:1
//   }
// })]).then(res=>{
//   console.log(res)
//   console.log(res[0])
//   console.log(res[1])
// })

//
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'get',
//     page:1
//   }
// })]).then(axios.spread((res1,res2)=>{
//   console.log(res1)
//   console.log(res2)
// }))


// axios实例
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res)
// })
// instance1({
//   url:'./home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res)
// })

// const instance2 = axios.create({
//   baseURL:'http://222.111.33.33:8000',
//   timeout:10000,
//   headers:{}
// })

