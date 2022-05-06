<template>
  <div>
    <h2>HOME页面</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      path:'/home/news'
    }
  },
  beforeRouteUpdate(to,from,next){
    console.log('路由被复用');
    next()
  },
  beforeRouteLeave(to,from,next){
    console.log("home路由离开前")//离开了keepalive缓存中的路由以后
    // console.log(this.$route.path)
    this.path = this.$route.path
    console.log("this.path="+this.path)
    next()
  },
  activated(){
    console.log("home/news路由激活")
    this.$router.push(this.path)
  },
  deactivated(){
    console.log("home/news路由取消激活")
  }
}
</script>

<style>

</style>
