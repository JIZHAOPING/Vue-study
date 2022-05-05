<template>
  <div>
    PROFILE页面
    <h4>{{$route.params}}</h4>
    <h4>{{$route.query.name}}</h4>
    <h4>{{$route.query.age}}</h4>
  </div>
</template>

<script>
  export default {
    name:"Profile",
    data(){
      return{
        name:'jzp'
      }
    },
    beforeRouteEnter(to,from,next){
      next((vm)=>{
        console.log(vm)
        console.log(vm.name)
      })
    }
  }
</script>

<style scoped>

</style>
