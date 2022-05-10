<template>
  <div>
    <h3 class="title">{{message}}</h3>
    <button @click="btnClick">按钮</button>
    <h3>{{name}}</h3>
    <Cpn></Cpn>
  </div>
</template>

<script>
  // 引入组件
  import Cpn from './Cpn'
  export default {
    name: "App",
    // 注册Cpn组件
    components: {
      Cpn
    },
    data(){
      return {
        message: 'hello webpack!!!!',
        name: 'guardwhy'
      }
    },
    methods: {
      btnClick(){

      }
    }
  }
</script>

<style scoped>
  .title {
    color: green;
  }
</style>