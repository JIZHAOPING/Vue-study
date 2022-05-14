<template>
  <div id="app"> 
    <router-view/>
    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from 'components/mainTabbar/MainTabBar'
export default {
  name: 'App',
  components:{
    MainTabBar
  }
}
</script>

<style>

</style>
