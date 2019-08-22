import { Loading,Message } from 'element-ui'
import axios from 'axios'

let env = process.env.NODE_ENV
const instance = axios.create({
  baseURL: env === 'development' ? process.env.VUE_APP_BASEURL : '/',
  timeout: 10000, 
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-jd-ajax': '1.0',
    'X-jd-ts': new Date().getTime(),
  },
  withCredentials: true
})

// 添加一个请求拦截器
instance.interceptors.request.use((config) => {
  debugger
  // if (env === 'development') {
  //   document.cookie = 'JSESSIONID=E9C8C1C0C8F93193702E2F6979AD3D00'
  // }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加一个响应拦截器
instance.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})


function ajax (options) {
  /*
  option参数定义
  必选：
    url:接口请求路径
  可选：
    type:请求类型(get/post/delete/put)
    showLoading:是否开启loading，默认开启
    errorTips:是否开启错误提示，默认开启
    success:接口请求成功的回调
    error:接口请求失败的回调
  */
  let data = options.data || {},config = {} 
  config.method = (options.type || 'get').toLowerCase()
  config.showLoading = options.showLoading===false ? false : true
  config.errorTips = options.errorTips===false ? false : true
  config.url = options.url  
  if (config.method === 'post'|| config.method === 'delete') {
    config.data = data
  } else {
    config.params = data
  }
  if (config.showLoading) {
    Loading.service()
  }
  instance(config).then((res)=>{
    if (config.showLoading) {
      Loading.service().close()
    }
    if (!res.success && config.errorTips) { //success为false时，自动提示错误信息，可通过errorTips：false关闭
      Message.error(res.message || res.errorMsg)
    }
    options.success && options.success(res)
  }).catch((err)=>{
    if (config.showLoading) {
      Loading.service().close()
    }
    if(options.error) {
      options.error(err)
    }else{
      Message.error('额，额……网络请求出问题了，请稍后再试')
    }
  })
}

export default ajax

