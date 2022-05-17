<template>
  <div class="Good">
    <GoodsListItem v-for="(item,index) in goods" :key="index" :goodsItem="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
  export default {
    name:'GoodsList',
    props:{
      goods:{
        type:Array,
        default(){
          return ['您请求的数据为空']
        }
      }
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style scoped>
.Good{
  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
  padding:2px;
}
</style>
