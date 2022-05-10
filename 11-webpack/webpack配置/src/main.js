// 1. 使用commonjs的模块化导入
const{add, sub} = require("./js/mathutil.js");
require('./css/normal.css');

console.log(add(10, 20))
console.log(sub(20, 10))

// 2.使用es6的模块化规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 依赖less文件
require("./less/common.less")
document.write('<h3>kobe是mvp!!!</h3>')


//Vue组件化开发
// import Vue from 'vue'
// const cpn = {
//   template:`
//     <div>
//       <img src="img/cpnimg.jpg" width="300px">
//     </div>
//   `,
//   data(){
//     return {
//       name:'ERIC',
//       message:'hello Vue.js!!!',
//     }
//   },
//   methods:{
//     btnClick(){
//       console.log("I LOVE ERIC SO MUCH!")
//     }
//   }
// }
// new Vue({
//     el:'#app',
//     template:'<cpn/>',
//     components:{
//       cpn
//     }
// })


//组件化终极写法
import Vue from 'vue'
import App from './vue/App'

new Vue({
  el:'#app',
  template:'<App/>',
  components:{
    App
  }
})