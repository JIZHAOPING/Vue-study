<template>
  <div>
    <h2>{{$store.state.a.title}}</h2>
    <p>商品展览</p>
    <p v-for="item in commodity" :key="item.id+'0'">商品名称：{{item.name}}---价格：{{item.price}}---库存{{item.stock}}</p>
    <p>包邮的商品包括：</p>
    <li v-for="item in commoditydeliveryes" :key="item.id">{{item.name}}</li>
    <button @click="changestock">点击修改库存+1</button>
    <button @click="changeprice">点击修改价格</button>
  </div>
</template>

<script>
  export default {
    name:'Hello',
    computed:{
      commodity(){
        return this.$store.state.a.commodities
      },
      commoditydeliveryes(){
        return this.$store.getters.getComdelivery
      }
    },
    methods:{
      changestock(){
        this.$store.commit('addStock')
      },
      changeprice(){
        this.$store.dispatch('aupdateprice')
      }
    }
  }
</script>

<style scoped>

</style>
