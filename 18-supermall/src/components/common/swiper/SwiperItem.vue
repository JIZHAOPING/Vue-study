<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'SwiperItem'
  }
</script>

<style scoped>
  .slide{
    /* 倘若给父元素设置了flex布局后，若要其子元素的width有效果，必须给子元素设置flex-shrink为0 */
    width:100%;
    flex-shrink: 0;
  }
  .slide img{
    width:100%
  }
</style>
