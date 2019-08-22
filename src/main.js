import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/'
import '@/assets/css/global.scss'
import ajax from '@/assets/js/axios'
import ElementUI from 'element-ui'
// 覆盖element样式
// import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/element-variables.scss'
import VueJsonp from 'vue-jsonp'

Vue.config.productionTip = false
Vue.prototype.$ajax = ajax
Vue.use(ElementUI)
Vue.use(VueJsonp)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
