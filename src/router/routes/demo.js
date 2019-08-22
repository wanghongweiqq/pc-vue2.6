export default {
  path: '/demo',
  component: () => import('@/layout/index'),
  icon: 'el-icon-document',
  meta: {
    title: 'DEMO',
  },
  children: [
    {
      path: 'test01',
      name: 'test01',
      component: () => import('@/views/demo/index.vue'),
      meta: {
        title: '测试页',
        key: 'MENU_HAWK_DEMO',
        crumb: [
          {
            name: 'DEMO',
          },
          {
            name: '测试页',
          },
        ]
      },
    },
    {
      path: 'test01/detail',
      name: 'test01Detail',
      component: () => import('@/views/demo/about.vue'),
      meta: {
        title: '测试详情页',
        key: 'MENU_HAWK_DEMO',
        hidden: true,
        crumb: [
          {
            name: 'DEMO',
          },
          {
            name: '测试页',
            href: 'test01'
          },
          {
            name: '测试详情页'
          },
        ]
      }
    },
    {
      path: 'about',
      name: 'about',
      component: () => import('@/views/demo/about.vue'),
      meta: {
        title: '关于我们',
        key: 'MENU_XXXX',
      }
    },
    {
      path: 'about4',
      name: 'about4',
      component: () => import('@/views/demo/about.vue'),
      meta: {
        title: '关于我们4',
        key: 'MENU_HAWK_DEMO',
      }
    },
    {
      path: '/hawk/dispatch/get_page/home',
      meta: {
        title: '老页面',
        key: 'MENU_HAWK_DEMO',
        notvue: true
      }
    }
  ]
}
