<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h1>我是App页面</h1>
    <router-link to="/home">HOME页面</router-link>
    <router-link to="/about">About页面</router-link>
    <router-link :to="'/User/'+userId">User页面</router-link>
    <router-link :to="{
      path:'/profile/'+123,
      query:{name:'jzp',age:18}
    }">profile页面</router-link>

    <router-view class="content"></router-view>
  </div>
</template>

<script>
// import Home from './components/home'
// import About from './components/about'
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {},
  data(){
    return {
      userId:'10010'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
div {
  border: 1px solid #f00;
  margin: 4px;
}
.content{
  background-color: #f3f3f3;
}
</style>
