<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    name:'Scroll',
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {
        scroll:null
      }
    },
    methods:{
      //点击回到某个位置
      scrollTo(x,y,time){
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll.refresh()
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.scroll,{
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      })
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
      this.scroll.on('pullingUp',()=>{
        setTimeout(() => {
          this.$emit('pullingUp')
        }, 1000);
      })
    }
  }
</script>

<style scoped>

</style>
