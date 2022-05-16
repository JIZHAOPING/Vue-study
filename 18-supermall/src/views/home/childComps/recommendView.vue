<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'RecommendView.vue',
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    /* 水平分布 */
    display: flex;
    /* 每个item都居中 */
    text-align: center;
    padding:10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item img{
    width:70px;
    /* height:70px; */
  }
  .recommend-item{
    /* 按照屏幕宽度平均分布 */
    flex:1
  }
</style>
