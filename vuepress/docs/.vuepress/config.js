module.exports = {
  title: 'Hello Xiaper',
  description: 'Enterprise IM Solution',
  plugins: [
    '@vuepress/back-to-top',
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-26153580-2' // UA-00000000-0
      }
    ],
    '@vuepress/blog',
    '@vuepress/medium-zoom',
    '@vuepress/active-header-links'
  ] ,
  base: '/xiaper.io/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'xiaper/docs',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: '查看源码',
    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'xiaper/docs',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'vuepress/docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
          { text: '关于', link: '/other/about' },
          {
            text: 'APIs',
            items: [
              { text: 'iOS core-sdk-api', link: 'http://www.xiaper.io/docs/ios/core-api/html/index.html' },
              { text: 'iOS ui-sdk-api', link: 'http://www.xiaper.io/docs/ios/ui-api/html/index.html' },
              { text: 'Android core-sdk-api', link: 'http://www.xiaper.io/docs/android/core-api' },
              { text: 'Android ui-sdk-api', link: 'http://www.xiaper.io/docs/android/ui-api' },
              { text: 'Web im-sdk-api', link: 'http://www.xiaper.io/docs/web/im-api' },
              { text: 'Web kefu-sdk-api', link: 'http://www.xiaper.io/docs/web/kf-api' },
            ]
          },
          { text: '虾婆云', link: 'http://www.xiaper.com' },
          {
            text: '其他',
            items: [
              { text: '微客服', link: 'http://www.weikefu.net' },
              { text: '萝卜丝', link: 'http://www.bytedesk.com' },
              { text: '虾信', link: 'http://www.xiaper.im' },
              { text: '虾群', link: 'http://www.xiaqun.im' }
            ]
          },
        ],
        sidebarDepth: 3,
        sidebar: {
          '/': [{
            title: '',
            collapsable: false,
            children: [
              '/guide/',
              '/guide/server',
              '/guide/ios',
              '/guide/android',
              '/guide/web',
              '/guide/pc',
              '/guide/mp',
              '/guide/mini',
              '/guide/webrtc',
              '/guide/flutter',
              '/guide/tensorflow',
              '/guide/callcenter',
              '/guide/ticket',
              '/guide/feedback',
              '/guide/knowledgebase',
              '/guide/community',
              '/guide/jmeter',
              '/guide/admin'
            ]
          },{
            title: '第三方组件',
            children: [ 
              '/component/activemq',
              '/component/mysql',
              '/component/nginx',
              '/component/oracle',
              '/component/rabbitmq',
              '/component/redis',
              '/component/haproxy',
              '/component/keepalived',
              '/component/quartz',
              '/component/freeswitch',
              '/component/activiti',
              '/component/elasticsearch',
              '/component/kibana',
              '/component/logstash',
              '/component/coturn'
            ]
          },{
            title: '通信协议',
            children: [ 
              '/protocol/http',
              '/protocol/mqtt',
              '/protocol/websocket',
              '/protocol/stomp',
              '/protocol/sockjs',
              '/protocol/socketio',
              '/protocol/xmpp'
            ]
          },{
            title: '其他',
            children: [ 
              '/other/java',
              '/other/netty',
              '/other/microservice',
              '/other/manual',
              '/other/friend',
              '/other/elk',
              '/other/docker',
              '/other/protobuf',
              '/other/war',
              '/other/security',
              '/other/push',
              '/other/taboo',
              '/other/p2p',
              '/other/telegram',
              '/other/compare',
              '/other/support',
              '/other/about',
              '/faq/'
            ]
          }]
          // '/api/': [
          //   '/api/ios',
          //   '/api/android'
          // ]
        },
        serviceWorker: {
          updatePopup: true // Boolean | Object, 默认值是 undefined.
          // 如果设置为 true, 默认的文本配置将是: 
          // updatePopup: { 
          //    message: "New content is available.", 
          //    buttonText: "Refresh" 
          // }
        }
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
          { text: 'XiaperCloud', link: 'http://www.xiaper.com' }
        ],
        sidebarDepth: 3,
        sidebar: [
          '/',
          '/en/guide/',
          '/en/guide/server',
          '/en/guide/ios',
          '/en/guide/android',
          '/en/guide/web',
          '/en/faq/'
        ],
        serviceWorker: {
          updatePopup: true // Boolean | Object, 默认值是 undefined.
          // 如果设置为 true, 默认的文本配置将是: 
          // updatePopup: { 
          //    message: "New content is available.", 
          //    buttonText: "Refresh" 
          // }
        }
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
