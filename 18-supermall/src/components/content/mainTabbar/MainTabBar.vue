<template>
  <tab-bar>     
    <tab-bar-item path="/home">
      <img slot="item-pic" src="~assets/img/tabBar/syn.png">
      <img slot="item-pic-active" src="~assets/img/tabBar/syy.png">
      <div slot="item-name">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-pic" src="~assets/img/tabBar/fln.png">
      <img slot="item-pic-active" src="~assets/img/tabBar/fly.png">
      <div slot="item-name">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-pic" src="~assets/img/tabBar/gwn.png">
      <img slot="item-pic-active" src="~assets/img/tabBar/gwy.png">
      <div slot="item-name">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-pic" src="~assets/img/tabBar/men.png">
      <img slot="item-pic-active" src="~assets/img/tabBar/mey.png">
      <div slot="item-name">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from 'components/common/tabbar/tabBar'
import tabBarItem from 'components/common/tabbar/tabBarItem'
export default {
  name: 'MainTabBar',
  components:{
    tabBar,
    tabBarItem
  }
}
</script>

<style>
/* @import url(../../assets/css/base.css); */

</style>
