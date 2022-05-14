import originAxios from 'axios'
//1.0
// export  function request(config,success,failure){
//   const instance = originAxios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000,
//   });

//   instance(config)
//   .then(res=>{
//     success(res)
//   }).catch(err=>{
//     failure(err)
//   }) 
// }
//2.0
// export function request(option){
//   const instance = originAxios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   });
//   instance(option.baseConfig)
//   .then(res=>{
//     option.success(res)
//   }).catch(err=>{
//     option.failure(err)
//   })
// }
//3.0 promise版
// export function request(config){
//   return new Promise((resolve,reject)=>{
//     const instance = originAxios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000
//     });
//     instance(config)
//     .then(res=>{
//       resolve(res)
//     }).catch(err=>{
//       reject(err)
//     })
//   })
// }
//4.0
export function request(config){
  const instance = originAxios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    console.log('来到了request拦截success中')
    return config
  },err=>{
    console.log('来到了request拦截failure中')
    return err
  })
  instance.interceptors.response.use(response=>{
    console.log('来到了response拦截success中')
    return response.data
  },err=>{
    console.log('来到了response拦截failure中')
    console.log(err.response)
    // if(err&&err.response){
    //   switch(err.response.status){
    //     case 400:
    //       err.message = '请求错误'
    //       console.log(err.message)
    //       break
    //     case 401:
    //       err.message = '未授权的访问'
    //       console.log(err.message)
    //       break
    //   }
    // }
    // return err
  })
  return instance(config)
}