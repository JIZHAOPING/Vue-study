//1.参数问题
//两个参数
const sum = (num1,num2)=>{
  console.log(num1+num2);
}
sum(3,5)
//只有一个参数
const aaa = num =>{
  console.log(num);
}
aaa(10);

//2.代码规模
//函数体有多行代码
const mul = ()=>{
  console.log("hello world");
  console.log("hello vuejs");
}
mul();
//单行代码
const add = (n1,n2) => n1*n2;
console.log(add(8,7));

const single = () => console.log("hello you!");
single();