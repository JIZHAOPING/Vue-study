<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to="/home">HELLO WORLD!</router-link>
    <router-link to="/about">About页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/home'
// import About from './components/about'
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    // Home,
    // About
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
</style>
