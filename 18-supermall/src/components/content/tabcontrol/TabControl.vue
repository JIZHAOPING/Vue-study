<template>
  <div class="tabcontrol">
    <div 
    v-for="(item,index) in titles" 
    :key="index" 
    class="tabcontrolitem"
    :class="{action:index === currentindex}"
    @click="itemclick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TabControl',
    data(){
      return{
        currentindex:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      itemclick(index){
        this.currentindex = index
      }
    }
  }
</script>

<style scoped>
.tabcontrol{
  display: flex;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  background-color: #fff;
}
.tabcontrolitem{
  flex: 1;
}
.tabcontrolitem span{
  padding:5px
}
.action{
  color: #f5b503;
}
.action span{
  border-bottom:3px solid #f5b503;
}
</style>
