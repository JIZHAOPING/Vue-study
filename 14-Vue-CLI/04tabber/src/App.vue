<template>
  <div id="app"> 
    <router-view/>
    <tab-bar>     
      <tab-bar-item path="/home">
        <img slot="item-pic" src="./assets/img/tabBar/syn.png">
        <img slot="item-pic-active" src="./assets/img/tabBar/syy.png">
        <div slot="item-name">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-pic" src="./assets/img/tabBar/fln.png">
        <img slot="item-pic-active" src="./assets/img/tabBar/fly.png">
        <div slot="item-name">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-pic" src="./assets/img/tabBar/gwn.png">
        <img slot="item-pic-active" src="./assets/img/tabBar/gwy.png">
        <div slot="item-name">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-pic" src="./assets/img/tabBar/men.png">
        <img slot="item-pic-active" src="./assets/img/tabBar/mey.png">
        <div slot="item-name">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from './components/tabBar'
import tabBarItem from './components/tabBarItem'
export default {
  name: 'App',
  components:{
    tabBar,
    tabBarItem
  }
}
</script>

<style>
@import url(./assets/css/base.css);

</style>
