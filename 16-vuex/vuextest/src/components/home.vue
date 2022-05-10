<template>
  <div>
    <p>{{$store.getters.powerCounter}}</p>
    <p>年龄大于22的学生个数(带参数)：{{$store.getters.moreageStu(22)}}</p>
    <p>年龄大于21的学生个数：{{$store.getters.getageCount}}</p>

    <button @click="addclick">点击添加学生</button>
    <p>个人信息：{{$store.state.info}}</p>
    <button @click="updateclick">点击更新个人信息</button>
  </div>
</template>

<script>
  export default {
    name:'Home',
    methods:{
      addclick(){
        const stu = {id:118,name:'hhh',age:28}
        this.$store.commit('addStu',stu)
      },
      updateclick(){
        this.$store.commit('updateInfo',{height:168})
      }
    }
  }
</script>

<style scoped>

</style>
