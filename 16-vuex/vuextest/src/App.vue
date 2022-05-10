<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <h2>-------app组件-------</h2>
    <h3>测试vuex的state</h3>
    <p>{{$store.state.count}}</p>
    <p v-for="item in mstu" :key="item.id">{{item}}</p>
    <button @click="increment(5)">+5</button>
    <button @click="decrement(10)">-10</button>
    
    
    <h2>-------home组件-------</h2>
    <Home />

  </div>
</template>

<script>
import Home from './components/home'
export default {
  name: 'App',
  data(){
    return{
      //学生对象数组
      mstu:this.$store.state.students
    }
  },
  components:{
    Home
  },
  methods:{
    increment:function(n){
      this.$store.commit('increment',n)
    },
    decrement:function(n){
      this.$store.commit({
        type:'decrement',
        n
      })
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
</style>
