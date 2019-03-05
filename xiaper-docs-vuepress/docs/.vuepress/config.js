module.exports = {
  title: 'Hello Xiaper',
  description: 'Just playing around',
  plugins: ['@vuepress/back-to-top'] ,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
          {
            text: 'APIs',
            items: [
              { text: 'web', link: 'http://www.xiaper.io/apis/web' },
              { text: '安卓', link: 'http://www.xiaper.io/apis/android' }
            ]
          }
        ],
        sidebar: [
          '/',
          '/guide/',
          '/guide/server',
          '/guide/ios',
          '/guide/android',
          '/guide/web',
          '/faq/'
        ]
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
          '/',
          '/en/guide/',
          '/en/guide/server',
          '/en/guide/ios',
          '/en/guide/android',
          '/en/guide/web',
          '/en/faq/'
        ]
      }
    }
    
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: '虾婆',
      description: '企业级开源即时通讯解决方案'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Xiaper',
      description: 'Enterprise IM solution'
    }
  }
}
