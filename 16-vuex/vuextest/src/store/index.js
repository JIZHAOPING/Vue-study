import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const moduleA = {
  state:{
    title:'hello组件你好',
    commodities:[
      {id:101,name:'scooter',price:70,delivery:true,stock:9},
      {id:102,name:'skateboard',price:200,delivery:false,stock:28},
      {id:103,name:'swedish goggles',price:35,delivery:true,stock:43},
      {id:104,name:'tent',price:98,delivery:false,stock:67},
    ]
  },
  getters:{
    //返回包邮的货品
    getComdelivery(state){
      return state.commodities.filter(c=>c.delivery==true)
    },
  },
  mutations:{
    addStock(state){
      state.commodities.filter(c=>{
        return c.stock++
      })
    },
    updateprice(state){
      state.commodities.filter(c=>{
        return c.price--
      })
    }
  },
  actions:{
    aupdateprice(context){
      console.log(context)
      setTimeout(() => {
        context.commit('updateprice')
      }, 1000);
    }
  }
}

const store = new Vuex.Store({
  state:{
   count:1000,
   students:[
     {id:110,name:'jzp',age:20},
     {id:111,name:'jz1',age:21},
     {id:112,name:'jz2',age:22},
     {id:113,name:'jz3',age:23},
     {id:115,name:'jz5',age:25},
   ],
   info:{
     name:'fbb',
     age:19
   }
  },
  modules:{
    a:moduleA
  },
  mutations:{
    increment(state,n){
      state.count+=n
    },
    decrement(state,payload){
      state.count-=payload.n
    },
    //参数时对象
    addStu(state,stu){
      state.students.push(stu)
    },
    updateInfo(state,payload){
      //更新姓名
      state.info.name = '范冰冰'
      // state.info['height'] = payload.height//不起作用
      //添加height属性
      // Vue.set(state.info,'height',payload.height)
      //删除
      // Vue.delete(state.info,age)
    } 
  },
  actions:{
    aupdateInfo(context,payload){
      // setTimeout(() => {
      //   context.commit('updateInfo')
      //   console.log(payload)
      //   payload.success()
      // }, 1000);
      return new Promise((resolve)=>{
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)
          resolve('good')
        }, 1000);
      })
    }
  },
  getters:{
    powerCounter(state){
      return state.count*state.count
    },
    // 获取年龄大于21的学生信息
    getageStu:state=>{
      return state.students.filter(s=>s.age>21)
    },
    // 获取年龄大于21的学生信息的个数
    getageCount:(state,getters)=>{
      return getters.getageStu.length
    },
    moreageStu(state){
      return age=>{
        return state.students.filter(s=>s.age>age).length
      }
    }
    
  }
})
export default store