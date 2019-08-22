export default {
  path: '/demo1',
  component: () => import('@/layout/index'),
  icon: 'el-icon-mobile',
  meta: {
    title: 'DEMO1',
  },
  children: [
    {
      path: '/',
      name: 'demo',
      component: () => import('@/views/demo/index.vue'),
      meta: {
        title: '首页',
        key: 'MENU_HAWK_DEMO'
      },
    },
    {
      path: 'detail',
      name: 'demoDetail1',
      component: () => import('@/views/demo/about.vue'),
      meta: {
        title: '首页详情',
      }
    },
    {
      path: 'about',
      name: 'about1',
      component: () => import('@/views/demo/about.vue'),
      meta: {
        title: '关于我们',
        key: 'MENU_HAWK_DEMO'
      }
    }
  ]
}
