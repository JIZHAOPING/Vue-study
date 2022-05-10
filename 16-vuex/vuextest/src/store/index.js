import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

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
      // state.info['height'] = payload.height//不起作用
      Vue.set(state.info,'height',payload.height)
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