export const staticRoutes: AppRoute.RowRoute[] = [
  {
    name: 'dashboard',
    path: '/dashboard',
    title: '仪表盘',
    requiresAuth: true,
    icon: 'icon-park-outline:analysis',
    menuType: 'dir',
    componentPath: null,
    id: 1,
    pid: null,
  },
  {
    name: 'workbench',
    path: '/dashboard/workbench',
    title: '工作台',
    requiresAuth: true,
    icon: 'icon-park-outline:alarm',
    pinTab: true,
    menuType: 'page',
    componentPath: '/dashboard/workbench/index.vue',
    id: 2,
    pid: 1,
  },
  {
    name: 'monitor',
    path: '/dashboard/monitor',
    title: '监控页',
    requiresAuth: true,
    icon: 'icon-park-outline:anchor',
    menuType: 'page',
    componentPath: '/dashboard/monitor/index.vue',
    id: 3,
    pid: 1,
  },
  {
    name: 'test',
    path: '/test',
    title: '多级菜单演示',
    requiresAuth: true,
    icon: 'icon-park-outline:list',
    menuType: 'dir',
    componentPath: null,
    id: 4,
    pid: null,
  },
  {
    name: 'test2',
    path: '/test/test2',
    title: '多级菜单子页',
    requiresAuth: true,
    icon: 'icon-park-outline:list',
    menuType: 'page',
    componentPath: '/test/test2/index.vue',
    id: 6,
    pid: 4,
  },
  {
    name: 'test2Detail',
    path: '/test/test2/detail',
    title: '多级菜单的详情页',
    requiresAuth: true,
    icon: 'icon-park-outline:list',
    hide: true,
    activeMenu: '/test/test2',
    menuType: 'page',
    componentPath: '/test/test2/detail/index.vue',
    id: 7,
    pid: 4,
  },
  {
    name: 'test3',
    path: '/test/test3',
    title: '多级菜单',
    requiresAuth: true,
    icon: 'icon-park-outline:list',
    menuType: 'dir',
    componentPath: null,
    id: 8,
    pid: 4,
  },
  {
    name: 'test4',
    path: '/test/test3/test4',
    title: '多级菜单3-1',
    requiresAuth: true,
    icon: 'icon-park-outline:list',
    componentPath: '/test/test3/test4/index.vue',
    id: 9,
    pid: 8,
  },
  {
    name: 'list',
    path: '/list',
    title: '列表页',
    requiresAuth: true,
    icon: 'icon-park-outline:list-two',
    menuType: 'dir',
    componentPath: null,
    id: 10,
    pid: null,
  },
  {
    name: 'commonList',
    path: '/list/commonList',
    title: '常用列表',
    requiresAuth: true,
    icon: 'icon-park-outline:list-view',
    componentPath: '/list/commonList/index.vue',
    id: 11,
    pid: 10,
  },
  {
    name: 'cardList',
    path: '/list/cardList',
    title: '卡片列表',
    requiresAuth: true,
    icon: 'icon-park-outline:view-grid-list',
    componentPath: '/list/cardList/index.vue',
    id: 12,
    pid: 10,
  },
  {
    name: 'demo',
    path: '/demo',
    title: '功能示例',
    requiresAuth: true,
    icon: 'icon-park-outline:application-one',
    menuType: 'dir',
    componentPath: null,
    id: 13,
    pid: null,
  },
  {
    name: 'fetch',
    path: '/demo/fetch',
    title: '请求示例',
    requiresAuth: true,
    icon: 'icon-park-outline:international',
    componentPath: '/demo/fetch/index.vue',
    id: 5,
    pid: 13,
  },
  {
    name: 'echarts',
    path: '/demo/echarts',
    title: 'ECharts',
    requiresAuth: true,
    icon: 'icon-park-outline:chart-proportion',
    componentPath: '/demo/echarts/index.vue',
    id: 15,
    pid: 13,
  },
  {
    name: 'map',
    path: '/demo/map',
    title: '地图',
    requiresAuth: true,
    icon: 'carbon:map',
    keepAlive: true,
    componentPath: '/demo/map/index.vue',
    id: 17,
    pid: 13,
  },
  {
    name: 'editor',
    path: '/demo/editor',
    title: '编辑器',
    requiresAuth: true,
    icon: 'icon-park-outline:editor',
    menuType: 'dir',
    componentPath: null,
    id: 18,
    pid: 13,
  },
  {
    name: 'editorMd',
    path: '/demo/editor/md',
    title: 'MarkDown',
    requiresAuth: true,
    icon: 'ri:markdown-line',
    componentPath: '/demo/editor/md/index.vue',
    id: 19,
    pid: 18,
  },
  {
    name: 'editorRich',
    path: '/demo/editor/rich',
    title: '富文本',
    requiresAuth: true,
    icon: 'icon-park-outline:edit-one',
    componentPath: '/demo/editor/rich/index.vue',
    id: 20,
    pid: 18,
  },
  {
    name: 'clipboard',
    path: '/demo/clipboard',
    title: '剪贴板',
    requiresAuth: true,
    icon: 'icon-park-outline:clipboard',
    componentPath: '/demo/clipboard/index.vue',
    id: 21,
    pid: 13,
  },
  {
    name: 'icons',
    path: '/demo/icons',
    title: '图标',
    requiresAuth: true,
    icon: 'local:cool',
    componentPath: '/demo/icons/index.vue',
    id: 22,
    pid: 13,
  },
  {
    name: 'QRCode',
    path: '/demo/QRCode',
    title: '二维码',
    requiresAuth: true,
    icon: 'icon-park-outline:two-dimensional-code',
    componentPath: '/demo/QRCode/index.vue',
    id: 23,
    pid: 13,
  },
  {
    name: 'documents',
    path: '/documents',
    title: '外链文档',
    requiresAuth: true,
    icon: 'icon-park-outline:file-doc',
    menuType: 'dir',
    componentPath: null,
    id: 24,
    pid: null,
  },
  {
    name: 'documentsVue',
    path: '/documents/vue',
    title: 'Vue',
    requiresAuth: true,
    icon: 'logos:vue',
    componentPath: '/documents/vue/index.vue',
    id: 25,
    pid: 24,
  },
  {
    name: 'documentsVite',
    path: '/documents/vite',
    title: 'Vite',
    requiresAuth: true,
    icon: 'logos:vitejs',
    componentPath: '/documents/vite/index.vue',
    id: 26,
    pid: 24,
  },
  {
    name: 'documentsVueuse',
    path: '/documents/vueuse',
    title: 'VueUse（外链）',
    requiresAuth: true,
    icon: 'logos:vueuse',
    href: 'https://vueuse.org/guide/',
    componentPath: 'null',
    id: 27,
    pid: 24,
  },
  {
    name: 'permission',
    path: '/permission',
    title: '权限',
    requiresAuth: true,
    icon: 'icon-park-outline:people-safe',
    menuType: 'dir',
    componentPath: null,
    id: 28,
    pid: null,
  },
  {
    name: 'permissionDemo',
    path: '/permission/permission',
    title: '权限示例',
    requiresAuth: true,
    icon: 'icon-park-outline:right-user',
    componentPath: '/permission/permission/index.vue',
    id: 29,
    pid: 28,
  },
  {
    name: 'justSuper',
    path: '/permission/justSuper',
    title: 'super可见',
    requiresAuth: true,
    roles: [
      'ADMIN',
    ],
    icon: 'icon-park-outline:wrong-user',
    componentPath: '/permission/justSuper/index.vue',
    id: 30,
    pid: 28,
  },
  {
    name: 'error',
    path: '/error',
    title: '异常页',
    requiresAuth: true,
    icon: 'icon-park-outline:error-computer',
    menuType: 'dir',
    componentPath: null,
    id: 31,
    pid: null,
  },
  {
    name: 'demo403',
    path: '/error/403',
    title: '403',
    requiresAuth: true,
    icon: 'carbon:error',
    order: 3,
    componentPath: '/error/403/index.vue',
    id: 32,
    pid: 31,
  },
  {
    name: 'demo404',
    path: '/error/404',
    title: '404',
    requiresAuth: true,
    icon: 'icon-park-outline:error',
    order: 2,
    componentPath: '/error/404/index.vue',
    id: 33,
    pid: 31,
  },
  {
    name: 'demo500',
    path: '/error/500',
    title: '500',
    requiresAuth: true,
    icon: 'carbon:data-error',
    order: 1,
    componentPath: '/error/500/index.vue',
    id: 34,
    pid: 31,
  },
  {
    name: 'setting',
    path: '/setting',
    title: '系统设置',
    requiresAuth: true,
    icon: 'icon-park-outline:setting',
    menuType: 'dir',
    componentPath: null,
    id: 35,
    pid: null,
  },
  {
    name: 'accountSetting',
    path: '/setting/account',
    title: '用户设置',
    requiresAuth: true,
    icon: 'icon-park-outline:every-user',
    componentPath: '/setting/account/index.vue',
    id: 36,
    pid: 35,
    roles: [
      'ADMIN',
    ],
  },
  {
    name: 'dictionarySetting',
    path: '/setting/dictionary',
    title: '字典设置',
    requiresAuth: true,
    icon: 'icon-park-outline:book-one',
    componentPath: '/setting/dictionary/index.vue',
    id: 37,
    pid: 35,
  },
  {
    name: 'menuSetting',
    path: '/setting/menu',
    title: '菜单设置',
    requiresAuth: true,
    icon: 'icon-park-outline:application-menu',
    componentPath: '/setting/menu/index.vue',
    id: 38,
    pid: 35,
  },
  {
    name: 'userCenter',
    path: '/userCenter',
    title: '个人中心',
    requiresAuth: true,
    icon: 'carbon:user-avatar-filled-alt',
    componentPath: '/userCenter/index.vue',
    id: 39,
    pid: null,
  },
  {
    name: 'about',
    path: '/about',
    title: '关于',
    requiresAuth: true,
    icon: 'icon-park-outline:info',
    componentPath: '/about/index.vue',
    id: 40,
    pid: null,
  },
  {
    name: 'cascader',
    path: '/demo/cascader',
    title: '省市区联动',
    requiresAuth: true,
    icon: 'icon-park-outline:add-subset',
    componentPath: '/demo/cascader/index.vue',
    id: 41,
    pid: 13,
  },
  {
    name: 'documentsNova',
    path: '/documents/nova',
    title: 'Nova docs',
    requiresAuth: true,
    icon: 'local:logo',
    href: 'https://nova-admin-docs.netlify.app/',
    componentPath: '2333333',
    id: 42,
    pid: 24,
  },
  {
    name: 'dict',
    path: '/demo/dict',
    title: '字典示例',
    requiresAuth: true,
    icon: 'icon-park-outline:book-one',
    componentPath: '/demo/dict/index.vue',
    id: 43,
    pid: 13,
  },
]
