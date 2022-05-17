<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'NavBar'
  }
</script>

<style scoped>
.navbar{
  display:flex;
  background-color: #FFD700 ;
  height: 44px;
  text-align: center;
  line-height: 44px;
  /* box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.2); */
}
.left,.right{
  width:60px;
}
.center{
  flex:1;
  background-color: #f5b503;
}
</style>
