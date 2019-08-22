import { Loading,Message } from 'element-ui'
import axios from 'axios'
let loadCount = 0
const instance = axios.create({
  baseURL: '/',
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
  loadCount++
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
  return new Promise(function(resolve, reject) {
    /*
  option参数定义
  必选：
    url:接口请求路径
  可选：
    method:请求类型(get/post/delete/put)默认get
    showLoading:是否开启loading，默认开启
    errorTips:是否开启错误提示，默认开启
  */
    let config = {
      method: (options.method || 'get').toUpperCase(),
      showLoading: options.showLoading===false ? false : true,
      errorTips: options.errorTips===false ? false : true,
      url: options.url  
    } 
    console.log('config')
    console.log(config)
    if (config.method === 'post'|| config.method === 'delete') {
      config.data = options.data
    } else {
      config.params = options.data
    }
    if (config.showLoading) {
      Loading.service()
    }
    instance(config).then((res)=>{
      loadCount--
      if (!loadCount) {
        Loading.service().close()
      }
      if (!res.success && config.errorTips) { //success为false时，自动提示错误信息，可通过errorTips：false关闭
        Message.error(res.message || res.errorMsg)
      }
      resolve(res)
    }).catch((err)=>{
      loadCount--
      if (!loadCount) {
        Loading.service().close()
      }
      Message.error('额，额……网络请求出问题了，请稍后再试')
      reject(err)
    })
  })
}

export default ajax

