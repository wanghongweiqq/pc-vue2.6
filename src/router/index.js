import Vue from 'vue'
import Router from 'vue-router'
import common from './routes/common'
import demo from './routes/demo'
import demo1 from './routes/demo1'
// 重写路由的push方法，fix在路由中添加了相同的路由
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    common,
    demo,
    demo1
  ]
})

router.beforeEach((to,from,next) => {
  if (to.meta.title) {
    document.title = `${ to.meta.title }-京东汽配管家`
  }
  if (!to.name || to.name && to.matched.length === 0) { // 错误路由。
    next({ name: '404' })
  }
  // 需要设置权限。并且权限未开通。
  if (to.meta.key) {
    let listMenu = window.BSGlobal && window.BSGlobal.listMenu ? window.BSGlobal.listMenu : {}
    listMenu.MENU_HAWK_OPEN = true
    if (!listMenu[to.meta.key]) {
      next({ name: '403' })
    }
  }
  next()
})
export default router
