import Vue from 'vue'
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
    let listMenu = window.BSGlobal && window.BSGlobal.listMenu ? window.BSGlobal.listMenu :{}
    listMenu.MENU_HAWK_OPEN= true 
    if (!listMenu[to.meta.key]) {
      next({ name: '403' })
    }
  } 
  next()

})
export default router
