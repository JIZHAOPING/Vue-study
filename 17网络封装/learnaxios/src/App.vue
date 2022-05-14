<template>
  <div id="app">
    <h2>Hello World!</h2>
    <Home/>
  </div>
</template>

<script>
import Home from './components/home'

export default {
  name: 'App',
  components: {
    Home
  },
  // created(){
  //   axios.defaults.baseURL = 'http://123.207.32.32:8000'
  //   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencodes'
  //   axios.defaults.timeout = 5000
  //   axios.all([
  //     axios.get('/category'),
  //     axios.get(
  //       '/home/data',
  //       {params:{
  //         type:'sell',
  //         page:1
  //       }}
  //     )
  //   ]).then(axios.spread((res1,res2)=>{
  //     console.log(res1)
  //     console.log(res2)
  //   }))
  // }
}
</script>

<style>

</style>
