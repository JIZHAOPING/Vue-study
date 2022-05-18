<template>
  <div class="home">
    <NavBar class="homenav">
      <div slot="center">购物商城</div>
    </NavBar>
    <Scroll class="wrapper" ref="scroll" 
      @scroll="contentScroll" 
      :probeYype="3"
      :pullUpLoad="true" 
      @pullingUp="loadmore" 
    >
      <HomeSwiper :banners="banners" />
      <RecommendView :recommends="recommends" />
      <FeatureView/>
      <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick" class="tabcontrol" />
      <GoodsList :goods="showGoods"/>
    </Scroll>
    <BackTop @click.native="backclick" v-show="isShowbacktop"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'

// import {Swiper,SwiperItem} from 'components/common/swiper/index'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/recommendView'
import FeatureView from './childComps/FeatureView'

import {getHomedata,getHomeGoods} from 'network/home'

  export default {
    name:'Home',
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentgoodtype:'pop',
        isShowbacktop:false
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created(){
      this.getHomedata()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

      this.$bus.$on('imageload',()=>{
        // console.log('事件总线')
        this.$refs.scroll.refresh()
      })
    },
    computed:{
      showGoods(){
        return this.goods[this.currentgoodtype].list
      }
    },
    methods:{
      tabClick(index){
        // console.log(index)
        switch(index){
          case 0:
            this.currentgoodtype = 'pop'
            break
          case 1:
            this.currentgoodtype = 'new'
            break
          case 2:
            this.currentgoodtype = 'sell'
            break
        }
      },
      backclick(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      contentScroll(position){
        this.isShowbacktop = -position.y>1000
      },
      loadmore(){
        console.log('上拉加载更多')
        this.getHomeGoods(this.currentgoodtype)
      },
      /**
       * 网络请求
       */
      getHomedata(){
        getHomedata().then(res=>{
          // console.log(res)
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
.home{
  /* padding-top:44px; */
  position: relative;
  height: 100vh;
}
.homenav{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
.tabcontrol{
  position: sticky;
  /* display:sticky; */
  top:43px;
  z-index: 98;
}
.wrapper{
  /* height: 400px; */
  /* 第一种 */
  /* height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px; */
  /* 第二种 */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
