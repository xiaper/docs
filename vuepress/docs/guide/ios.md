# iOS

::: tip 提示
默认读者已经熟悉XCode开发工具的基本使用方法，以及具有一定的编程知识基础等。
<!-- 示例基于两个用户 [Alice And Bob](https://en.wikipedia.org/wiki/Alice_and_Bob) -->
:::

## IM实战

<!-- ### 效果图 -->

### 新建项目集成虾婆

* Xcode创建 `Tabbed App` 项目：`xiaper-tutorial`
* Terminal中切换到项目根目录：`cd xiaper-tutorial`，执行 `pod init`
* 修改Podfile，并添加 `pod 'bytedesk-ui'` 和 `pod 'bytedesk-core'`，如下：

``` bash
# Uncomment the next line to define a global platform for your project
platform :ios, '9.0'
workspace 'xiaper'

target 'xiaper-tutorial' do
  # Uncomment the next line if you're using Swift or would like to use dynamic frameworks
  use_frameworks!

  # Pods for xiaper-tutorial
  pod 'bytedesk-ui'
  pod 'bytedesk-core'

  target 'xiaper-tutorialTests' do
    inherit! :search_paths
    # Pods for testing
  end

end
```

* 关闭`xiaper-tutorial` Xcode工程，然后Terminal执行 `pod install`

### 已有项目集成虾婆

* 修改Podfile，并添加 `pod 'bytedesk-ui'` 和 `pod 'bytedesk-core'`

``` bash
pod 'bytedesk-ui'
pod 'bytedesk-core'
```

* Terminal中执行 `pod install`

### 注册

* 普通用户注册

``` bash
[BDCoreApis registerUser:@"username" 
            withNickname:@"nickname" 
            withPassword:@"password" 
  resultSuccess:^(NSDictionary *dict) {
    //
    NSString *message = dict[@"message"];
    NSNumber *status_code = dict[@"status_code"];
    if ([status_code isEqualToNumber:[NSNumber numberWithInt:200]]) {
      // 注册成功
    } else {
      // 注册失败
    }
  } resultFailed:^(NSError *error) {
    NSLog(@"%s, %@", __PRETTY_FUNCTION__, error);
}];
```

* 多租户用户注册

``` bash
```

* 自定义UID用户注册

``` bash
```

### 登录

* 匿名登录

``` bash
```

* 用户名登录

``` bash
```

* 建立长连接

后台切换前台

``` bash
```

* 监听长连接状态

``` bash
```

### 初始化

``` bash
```

### 会话

单聊、群聊、客服会话

* 加载列表

``` bash
```

* 置顶

``` bash
```

* 免打扰

``` bash
```

* 删除

``` bash
```

### 通讯录

好友、群组

``` bash
```

* 好友详情

``` bash
```

* 群详情

``` bash
```

### 单聊

* 加载历史消息

``` bash
```

* 文本消息

``` bash
```

* 图片消息

``` bash
```

* 删除消息

``` bash
```

<!-- * 阅后即焚TODO -->

### 群聊

* 加载历史消息

``` bash
```

* 文本消息

``` bash
```

* 图片消息

``` bash
```

* 删除消息

``` bash
```

### 好友

* 关注

``` bash
```

* 粉丝

``` bash
```

* 好友

``` bash
```

* 黑名单

``` bash
```

### 群组

* 建群

``` bash
```

* 邀请入群

``` bash
```

* 踢人

``` bash
```

* 禁言

``` bash
```

* 群公告

``` bash
```

* 群昵称

``` bash
```

* 免打扰

``` bash
```

* 会话置顶

``` bash
```

* 清空聊天记录

``` bash
```

* 退群

``` bash
```

### 客服

* 请求工作组会话

``` bash
```

* 请求指定坐席会话

``` bash
```

* 加载历史消息

``` bash
```

* 文本消息

``` bash
```

* 图片消息

``` bash
```

* 删除消息

``` bash
```

### 设置

* 加载个人资料

``` bash
```

* 头像

``` bash
```

* 昵称

``` bash
```

### 退出

``` bash
```

## 参考
