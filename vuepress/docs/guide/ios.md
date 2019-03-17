# iOS

::: tip 提示
默认读者已经熟悉XCode开发工具的基本使用方法，以及具有一定的编程知识基础等。
<!-- 示例基于两个用户 [Alice And Bob](https://en.wikipedia.org/wiki/Alice_and_Bob) -->
:::

## IM实战

::: tip 提示
为了更好的将IM运用到自己已有的业务系统中，我们可以将IM仅视为**消息通道**，也即：IM的用途仅仅是将消息从A用户发送给B用户，跟用户个人资料，如：头像、昵称和个人签名等没有必然的联系，甚至IM可以不存储任何聊天记录。*当然，虾婆默认为开发者提供完整的用户体系和聊天记录存储机制。*
:::

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

### 配置

服务器参数配置

``` bash
```

### 注册

* 普通用户注册

``` bash
/**
 普通用户注册

 @param username 用户名
 @param nickname 昵称
 @param password 密码
 @param success 成功回调
 @param failed 失败回调
 */
[BDCoreApis registerUser:@"username" 
            withNickname:@"nickname" 
            withPassword:@"password" 
  resultSuccess:^(NSDictionary *dict) {
    // 提示内容
    NSString *message = dict[@"message"];
    NSNumber *status_code = dict[@"status_code"];
    // 状态码 200 代表成功
    if ([status_code isEqualToNumber:[NSNumber numberWithInt:200]]) {
      // 注册成功
    } else {
      // 注册失败
    }
  } resultFailed:^(NSError *error) {
    NSLog(@"%s, %@", __PRETTY_FUNCTION__, error);
}];
```

* 自定义UID用户注册

::: tip 提示
默认IM后台会为每个新注册的用户分配一个UID作为用户的唯一标识。绝大部分接口都是基于UID进行的，比如：收、发消息、建群、踢人等。为更好的跟开发者已有的用户系统做对接，特开放此接口参数。
:::

``` bash
```

* 多租户用户注册

::: tip 提示
如果开发者想基于虾婆开发一套平台级IM和在线客服系统，支持多租户功能。系统会为每一个租户分配一个唯一企业号：`subDomain`，通过此参数开发者可以注册基于租户唯一的用户名。比如：企业A注册了管理员`subDomain = 1`, 企业B注册了管理员`subDomain = 2`，通过此注册接口企业A和企业B均可以注册用户名为`zhangsan`的用户名且互不干扰。
:::

``` bash
```

* 注册管理员

注册管理员账号之后系统会为默认为每个管理员分配唯一的企业号：`subDomain`，可用于多租户平台系统

``` bash
```

### 登录

* 匿名登录

::: tip 提示
当App处于未登录状态的时候，开发者需要首先调用匿名登录接口，然后才能够调用后续接口
:::

``` bash
```

* 用户名登录

::: tip 提示
当App处于登录状态的时候，开发者需要首先调用用户名登录接口，然后才能够调用后续接口
:::

``` bash
```

* 建立长连接

后台切换前台

``` bash
```

* 监听长连接状态

``` bash
```

<!-- * TODO:集成微信登录 -->

### 初始化

``` bash
```

### 会话

单聊、群聊、客服会话

* 加载

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

* [虾婆 iOS Demo](https://github.com/xiaper/ios)
