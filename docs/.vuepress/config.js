module.exports = {
  base: '/alen/',
  title: '阿轮 UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'github', link: 'https://github.com/qinggge/alen' },
    ],
    sidebar: [
      {
        title: '入门',
        children: ['/install/', '/get-started/']
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/collapse',
          '/components/grid',
          '/components/input',
          '/components/layout',
          '/components/popover',
          '/components/tabs',
          '/components/toast',
        ],
      },
    ]
  },
}