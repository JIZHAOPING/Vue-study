import Vue from 'vue'
import VueRouter from 'vue-router'
// import hello from '../components/HelloWorld'
// import Home from '../components/home'
// import About from '../components/about'
// import User from '../components/user'
const Home = () => import('../components/home')
const About = () => import('../components/about')
const User = () => import('../components/user')
const News = () => import('../components/news')
const Message = () => import('../components/message')
const Profile = () => import('../components/profile')


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
    component:About,
    meta:{
      title:'about'
    },
    beforeEnter:(to,from,next)=>{
      console.log('路由独享的守卫')
    }
  },
  {
    path:'/home',
    component:Home,
    children:[
      {
        path:'',
        redirect:'news'
      },
      {
        path:'news',
        component:News
      },
      {
        path:'message',
        component:Message
      }
    ],
    meta:{
      title:'home'
    }
  },
  {
    path:'/user/:id',
    component:User,
    meta:{
      title:'user'
    }
  },
  {
    path:'/profile/:id',
    component:Profile,
    meta:{
      title:'profile'
    }
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})
router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title;
  // console.log('-----前置钩子');
  next()
})
// router.afterEach((to,from)=>{
//   console.log('-----后置钩子');
// })
//导出
export default router