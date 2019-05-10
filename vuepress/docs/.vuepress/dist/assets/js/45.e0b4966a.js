(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{329:function(a,s,e){"use strict";e.r(s);var t=e(6),r=Object(t.a)({},function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"ios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ios","aria-hidden":"true"}},[a._v("#")]),a._v(" iOS")]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("默认读者已经熟悉XCode开发工具的基本使用方法，以及具有一定的编程知识基础等。\n")])]),a._v(" "),e("h2",{attrs:{id:"下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/xiaper/ios",target:"_blank",rel:"noopener noreferrer"}},[a._v("Github"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"im实战"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#im实战","aria-hidden":"true"}},[a._v("#")]),a._v(" IM实战")]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("为了更好的将IM运用到自己已有的业务系统中，我们可以将IM仅视为"),e("strong",[a._v("消息通道")]),a._v("，也即：IM的用途仅仅是将消息从A用户发送给B用户，跟用户个人资料，如：头像、昵称和个人签名等没有必然的联系，甚至IM可以不存储任何聊天记录。"),e("em",[a._v("当然，虾婆默认为开发者提供完整的用户体系和聊天记录存储机制。")])])]),a._v(" "),e("h3",{attrs:{id:"效果图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#效果图","aria-hidden":"true"}},[a._v("#")]),a._v(" 效果图")]),a._v(" "),e("h3",{attrs:{id:"集成pod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集成pod","aria-hidden":"true"}},[a._v("#")]),a._v(" 集成pod")]),a._v(" "),e("ul",[e("li",[a._v("修改Podfile，并添加 "),e("code",[a._v("pod 'bytedesk-ui'")]),a._v(" 和 "),e("code",[a._v("pod 'bytedesk-core'")])])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("pod "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'bytedesk-ui'")]),a._v("\npod "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'bytedesk-core'")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("ul",[e("li",[a._v("Terminal中执行 "),e("code",[a._v("pod install")])])]),a._v(" "),e("h3",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),e("p",[a._v("服务器参数配置")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("h3",{attrs:{id:"注册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册","aria-hidden":"true"}},[a._v("#")]),a._v(" 注册")]),a._v(" "),e("ul",[e("li",[a._v("普通用户注册")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("/**\n 普通用户注册\n\n @param username 用户名\n @param nickname 昵称\n @param password 密码\n @param success 成功回调\n @param failed 失败回调\n */\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("BDCoreApis registerUser:@"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"username"')]),a._v(" \n            withNickname:@"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"nickname"')]),a._v(" \n            withPassword:@"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"password"')]),a._v(" \n  resultSuccess:^"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("NSDictionary *dict"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    // 提示内容\n    NSString *message "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" dict"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("@"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"message"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    NSNumber *status_code "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" dict"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("@"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"status_code"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    // 状态码 200 代表成功\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("status_code isEqualToNumber:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("NSNumber numberWithInt:200"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      // 注册成功\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      // 注册失败\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" resultFailed:^"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("NSError *error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    NSLog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("@"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%s, %@"')]),a._v(", __PRETTY_FUNCTION__, error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br")])]),e("ul",[e("li",[a._v("自定义UID用户注册")])]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("默认IM后台会为每个新注册的用户分配一个UID作为用户的唯一标识。绝大部分接口都是基于UID进行的，比如：收、发消息、建群、踢人等。为更好的跟开发者已有的用户系统做对接，特开放此接口参数。")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("h3",{attrs:{id:"登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登录","aria-hidden":"true"}},[a._v("#")]),a._v(" 登录")]),a._v(" "),e("ul",[e("li",[a._v("匿名登录")])]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("当App处于未登录状态的时候，开发者需要首先调用匿名登录接口，然后才能够调用后续接口")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("用户名登录")])]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("当App处于登录状态的时候，开发者需要首先调用用户名登录接口，然后才能够调用后续接口")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("建立长连接")])]),a._v(" "),e("p",[a._v("后台切换前台")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("监听长连接状态")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),a._v(" "),e("h3",{attrs:{id:"初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化","aria-hidden":"true"}},[a._v("#")]),a._v(" 初始化")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("h3",{attrs:{id:"会话"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#会话","aria-hidden":"true"}},[a._v("#")]),a._v(" 会话")]),a._v(" "),e("p",[a._v("单聊、群聊、客服会话")]),a._v(" "),e("ul",[e("li",[a._v("加载")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("置顶")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("免打扰")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("删除")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("h3",{attrs:{id:"通讯录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通讯录","aria-hidden":"true"}},[a._v("#")]),a._v(" 通讯录")]),a._v(" "),e("p",[a._v("好友、群组")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("好友详情")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("群详情")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("h3",{attrs:{id:"单聊"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单聊","aria-hidden":"true"}},[a._v("#")]),a._v(" 单聊")]),a._v(" "),e("ul",[e("li",[a._v("加载历史消息")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("文本消息")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("图片消息")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("删除消息")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),a._v(" "),e("h3",{attrs:{id:"群聊"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#群聊","aria-hidden":"true"}},[a._v("#")]),a._v(" 群聊")]),a._v(" "),e("ul",[e("li",[a._v("加载历史消息")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("文本消息")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("图片消息")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("删除消息")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("h3",{attrs:{id:"好友"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#好友","aria-hidden":"true"}},[a._v("#")]),a._v(" 好友")]),a._v(" "),e("ul",[e("li",[a._v("关注")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("粉丝")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("好友")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("黑名单")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("h3",{attrs:{id:"群组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#群组","aria-hidden":"true"}},[a._v("#")]),a._v(" 群组")]),a._v(" "),e("ul",[e("li",[a._v("建群")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("邀请入群")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("踢人")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("禁言")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("群公告")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("群昵称")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("免打扰")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("会话置顶")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("清空聊天记录")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("退群")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("h3",{attrs:{id:"客服"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客服","aria-hidden":"true"}},[a._v("#")]),a._v(" 客服")]),a._v(" "),e("ul",[e("li",[a._v("请求工作组会话")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("请求指定坐席会话")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("加载历史消息")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("文本消息")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("图片消息")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("删除消息")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("h3",{attrs:{id:"设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 设置")]),a._v(" "),e("ul",[e("li",[a._v("加载个人资料")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("头像")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("ul",[e("li",[a._v("昵称")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("h3",{attrs:{id:"退出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#退出","aria-hidden":"true"}},[a._v("#")]),a._v(" 退出")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("h3",{attrs:{id:"微信公众号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号","aria-hidden":"true"}},[a._v("#")]),a._v(" 微信公众号")]),a._v(" "),e("img",{staticStyle:{width:"250px"},attrs:{src:a.$withBase("/image/qrcode_xiaperio_430.jpg")}}),a._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/xiaper/ios",target:"_blank",rel:"noopener noreferrer"}},[a._v("虾婆 iOS Demo"),e("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=r.exports}}]);