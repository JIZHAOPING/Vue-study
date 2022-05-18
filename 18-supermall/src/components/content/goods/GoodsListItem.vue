<template>
  <div class="goodsitem">
    <img :src="goodsItem.show.img" alt="" @load="imageload">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect"> {{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'GoodsListItem',
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imageload(){
        this.$bus.$emit('imageload')
      }
    }
  }
</script>

<style scoped>
.goodsitem{
  padding-bottom: 45px;
  position: relative;
  width: 48%;
}
.goodsitem img{
  width:100%;
  border-radius: 5px;
}
.goods-info{
  font-size: 16px;
  text-align: center;
  position: absolute;
  /* overflow: hidden; */
  bottom: 5px;
  left: 0;
  right: 0;
}
 .goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price{
  margin-right: 20px;
}
.goods-info .collect{
  position: relative;
}
.goods-info .collect::before{
  content: '';
  position: absolute;
  left:-14px ;
  /* top:-3px; */
  width: 16px;
  height: 16px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
} 
</style>
