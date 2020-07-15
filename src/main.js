import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/global.scss'
import ajax from '@/service/index'
Vue.prototype.$ajax = ajax

// import ElementUI from 'element-ui'
import { Message,MessageBox,Menu,Submenu, MenuItem,Input,Checkbox,Select,Option,Dialog,Popover,Button,Form,FormItem,DatePicker,Autocomplete,Table,TableColumn,Pagination,Link } from 'element-ui'
import '@/assets/css/element-variables.scss'
// Vue.use(ElementUI)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Popover)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(DatePicker)
Vue.use(Autocomplete)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Link)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
