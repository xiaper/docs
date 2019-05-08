# iOS

::: tip 提示
默认读者已经熟悉XCode开发工具的基本使用方法，以及具有一定的编程知识基础等。
<!-- 示例基于两个用户 [Alice And Bob](https://en.wikipedia.org/wiki/Alice_and_Bob) -->
:::

## 下载

* [Github](https://github.com/xiaper/ios)

## IM实战

::: tip 提示
为了更好的将IM运用到自己已有的业务系统中，我们可以将IM仅视为**消息通道**，也即：IM的用途仅仅是将消息从A用户发送给B用户，跟用户个人资料，如：头像、昵称和个人签名等没有必然的联系，甚至IM可以不存储任何聊天记录。*当然，虾婆默认为开发者提供完整的用户体系和聊天记录存储机制。*
:::

### 效果图

### 集成pod

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

### 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

* [虾婆 iOS Demo](https://github.com/xiaper/ios)
