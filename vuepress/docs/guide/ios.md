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


### 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

* [虾婆 iOS Demo](https://github.com/xiaper/ios)
