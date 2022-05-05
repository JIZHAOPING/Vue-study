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
  beforeRouteUpdate(to,from,next){
    console.log('路由被复用');
    next()
  },
  beforeRouteLeave(to,from,next){
    console.log("路由离开前")
    console.log(this.$route.path)
    next()
  }
}
</script>

<style>

</style>
