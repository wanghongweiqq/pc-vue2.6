import Vue from 'vue'
import store from '@/store'
import ajax from '@/assets/js/axios'

import Router from 'vue-router'
import demo from './routes/demo'
import common from './routes/common'
import demo1 from './routes/demo1'

Vue.use(Router)

const router = new Router({
  routes: [
    demo,
    common,
    demo1
  ]
})

router.beforeEach((to,from,next) => {
  if (to.meta.title) {
    document.title = `${ to.meta.title }-XXX系统`
  }
  if (!to.name||to.name&&to.matched.length===0) { // 错误路由。
    next({ name: '404' })
  }
  // 需要设置权限。并且权限未开通。
  if (to.meta.key) {
    if (!Object.keys(store.state.User.listPermission).length) {
      ajax({
        url: '/hawk/pvg/role/listMenu',
        showLoading: false,
        success: res => {
          if (res.success&&res.data) {
            res.data.MENU_HAWK_OPEN= true 
            store.dispatch('_ationsListPermission',res.data)
            if (!store.state.User.listPermission[to.meta.key]) {
              next({ name: '403' })
            } 
          }
        }
      })
    } else {
      if (!store.state.User.listPermission[to.meta.key]) {
        next({ name: '403' })
      }
    }
  } 
  next()

})
export default router
