//setTimeout是windows对象方法
//箭头函数中的this是如何查找的
//答案: 向外层作用域中, 一层层查找this, 直到有this的定义.

// setTimeout(function(){
//   console.log(this)   //window
// },1000)

// setTimeout(()=>{
//   console.log(this);  //window
// },1000)


// const obj = {
//   aaa(){
//     setTimeout(function(){
//       console.log(this);    //window
//     })

//     setTimeout(()=>{
//       console.log(this);    //aaa:f
//     })
//   }
// }
// obj.aaa()


const obj = {
  aaa(){
    setTimeout(function(){
      setTimeout(function(){
        console.log(this);    //window
      })

      setTimeout(()=>{
        console.log(this);    //window
      })
    })

    setTimeout(()=>{
      setTimeout(function(){
        console.log(this);    //window
      })
      setTimeout(()=>{
        console.log(this);    //aaa:f
      })
    })
  }
}
obj.aaa();