import { defineConfig } from 'dumi';


export default defineConfig({
  themeConfig: {
    name: 'site',

    nav: {
      'zh-CN': [
        { title: '组件', link: '/components' },
        { title: 'Hooks', link: '/hooks' },
      ],
      'en-US': [
        { title: 'Docs', link: '/en-US/docs' },
      ],
    },
    sidebar: {
      '/en-US/components': [
        {
          title: 'Architecture Design',
          children: [
            {
              title: 'Component Design',
              link: '/en-US/components',
            },
            {
              title: 'General Schema',
              link: '/en-US/components/schema',
            },
          ],
        },
        {
          title: 'Layout',
          children: [
            {
              title: 'ProLayout',
              link: '/en-US/components/layout',
            },
            {
              title: 'PageContainer',
              link: '/en-US/components/page-container',
            },
            {
              title: 'ProCard',
              link: '/en-US/components/card',
            },
            {
              title: 'WaterMark',
              link: '/en-US/components/water-mark',
            },
            {
              title: 'StatisticCard',
              link: '/en-US/components/statistic-card',
            },
            {
              title: 'CheckCard',
              link: '/en-US/components/check-card',
            },
          ],
        },
        {
          title: 'Data Entry',
          children: [
            {
              title: 'ProForm',
              link: '/en-US/components/form',
            },
            {
              title: 'ProFormFields',
              link: '/en-US/components/field-set',
            },
            {
              title: 'ProFormList',
              link: '/en-US/components/group',
            },
            {
              title: 'ProFormDependency',
              link: '/en-US/components/dependency',
            },
            {
              title: 'Schema Form',
              link: '/en-US/components/schema-form',
            },
            {
              title: 'Query/LightFilter',
              link: '/en-US/components/query-filter',
            },
            {
              title: 'StepsForm',
              link: '/en-US/components/steps-form',
            },
            {
              title: 'Modal/Drawer Form',
              link: '/en-US/components/modal-form',
            },
            {
              title: 'LoginForm/LoginPageForm',
              link: '/en-US/components/login-form',
            },
          ],
        },
        {
          title: 'Data Display',
          children: [
            {
              title: 'ProTable',
              link: '/en-US/components/table',
            },
            {
              title: 'EditableProTable',
              link: '/en-US/components/editable-table',
            },
            {
              title: 'DragSortTable',
              link: '/en-US/components/drag-sort-table',
            },
            {
              title: 'ProList',
              link: '/en-US/components/list',
            },
            {
              title: 'ProDescriptions',
              link: '/en-US/components/descriptions',
            },
          ],
        },
        {
          title: 'Universal',
          children: [
            {
              title: 'ProSkeleton',
              link: '/en-US/components/skeleton',
            },
            {
              title: 'ProField',
              link: '/en-US/components/field',
            },
          ],
        },
      ],
      '/components': [
        {
          title: '架构设计',
          children: [
            {
              title: 'Components - 组件设计',
              link: '/components',
            },
            {
              title: 'Schema - 通用配置',
              link: '/components/schema',
            },
          ],
        },
        {
          title: '布局',
          children: [
            {
              title: 'ProLayout - 高级布局',
              link: '/components/layout',
            },
            {
              title: 'PageContainer - 页容器',
              link: '/components/page-container',
            },
            {
              title: 'ProCard - 高级卡片',
              link: '/components/card',
            },
            {
              title: 'WaterMark - 水印组件',
              link: '/components/water-mark',
            },
            {
              title: 'StatisticCard - 指标卡',
              link: '/components/statistic-card',
            },
            {
              title: 'CheckCard - 多选卡片',
              link: '/components/check-card',
            },
          ],
        },
        {
          title: '数据录入',
          children: [
            {
              title: 'ProForm - 高级表单',
              link: '/components/form',
            },
            {
              title: 'ProFormFields - 表单项',
              link: '/components/field-set',
            },
            {
              title: 'ProFormList - 数据结构化',
              link: '/components/group',
            },
            {
              title: 'ProFormDependency - 数据联动',
              link: '/components/dependency',
            },
            {
              title: 'Schema Form - JSON 表单',
              link: '/components/schema-form',
            },
            {
              title: ' Query/LightFilter - 筛选表单',
              link: '/components/query-filter',
            },
            {
              title: 'StepsForm - 分步表单',
              link: '/components/steps-form',
            },
            {
              title: 'Modal/Drawer - 浮层表单',
              link: '/components/modal-form',
            },
            {
              title: 'LoginForm/Page - 登录表单',
              link: '/components/login-form',
            },
          ],
        },
        {
          title: '数据展示',
          children: [
            {
              title: 'ProTable - 高级表格',
              link: '/components/table',
            },
            {
              title: 'EditableProTable - 可编辑表格',
              link: '/components/editable-table',
            },
            {
              title: ' DragSortTable - 拖动排序表格',
              link: '/components/drag-sort-table',
            },
            {
              title: 'ProList - 高级列表',
              link: '/components/list',
            },
            {
              title: 'ProDescriptions - 定义列表',
              link: '/components/descriptions',
            },
          ],
        },
        {
          title: '通用',
          children: [
            {
              title: 'ProSkeleton - 骨架屏',
              link: '/components/skeleton',
            },
            {
              title: 'ProField - 原子组件',
              link: '/components/field',
            },
          ],
        },
      ],
      '/hooks': [
        {
          title: '架构设计',
          children: [
            {
              title: 'Components - 组件设计',
              link: '/hooks',
            },
            {
              title: 'useBoolean',
              link: '/hooks/use-boolean',
            },
          ],
        },
      ]
    },
    navs: {
      'en-US': [
        null,
        {
          title: 'GitHub',
          path: 'https://github.com/ant-design/pro-components',
        },
      ],
      'zh-CN': [
        null,
        {
          title: 'GitHub',
          path: 'https://github.com/ant-design/pro-components',
        },
      ],
    },
    apiHeader: {
      // 组件库包名，可以从 package.json 中引入名称
      pkg: '@curry_fe/pro-components',
      // 匹配路由，默认为 /api 或 /components
      match: ['/api', '/components'],
    },
  },
});
