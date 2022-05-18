import originAxios from 'axios'

export function request(config){
  const instance = originAxios.create({
    baseURL:'http://localhost:3000',
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    // console.log('来到了request拦截success中')
    return config
  },err=>{
    console.log('来到了request拦截failure中')
    return err
  })
  instance.interceptors.response.use(response=>{
    // console.log('来到了response拦截success中')
    return response.data
  },err=>{
    console.log('来到了response拦截failure中')
    console.log(err.response)
  })
  return instance(config)
}