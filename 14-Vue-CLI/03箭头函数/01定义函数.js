//箭头函数的基本使用
//1.
const aaa = function(){
  console.log('aaafunc');
}
//2.对象字面量中定义函数
const obj = {
  bbb(){
    console.log('bbbfunc - obj');
    
  }
}

//es6中的箭头函数
//const ccc = (参数列表) =>{}
const ccc = () => {
  console.log('->cccfunc');
  
}
aaa();
obj.bbb();
ccc();