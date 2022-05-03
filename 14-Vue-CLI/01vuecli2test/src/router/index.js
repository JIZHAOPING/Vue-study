import Vue from 'vue'
import VueRouter from 'vue-router'
// import hello from '../components/HelloWorld'
import Home from '../components/home'
import About from '../components/about'

//1.注入插件
Vue.use(VueRouter)
//2.创建路由实例
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/home',
    component:Home
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
})

//导出
export default router