<template>
  <div class="tabBarItem" v-on:click="clickItem">
    <div v-if="!isActive"><slot name="item-pic"></slot></div>
    <div v-else><slot name="item-pic-active"></slot></div>
    <div v-bind:class="{active:isActive}"><slot name="item-name"></slot></div>
  </div>
</template>

<script>
  export default {
    name:'tabBarItem',
    props:{
      path:String
    },
    // data(){
    //   return{
    //     isActive:true
    //   }
    // },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      }
    },
    methods:{
      clickItem(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
.tabBarItem{
  flex: 1;
  text-align: center;
  height:49px
}
.tabBarItem img{
  width: 24px;
  height:24px
}
.active{
  color:#f5b503
}
</style>
