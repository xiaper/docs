# iOS

::: tip 提示

:::

## 准备工作

* 私有部署成功之后，注册管理员账号，并登录管理后台。
* 到 所有设置->应用管理->App 添加应用，填写相关信息之后点击确定，在生成记录中可见appkey，后面会用到。
* 到 所有设置->客服管理->客服账号 添加客服账号。注意：生成记录中有一列 ‘唯一ID(uid)’ 会在指定客服接口中使用
* 到 所有设置->客服管理->技能组 添加技能组，并可将客服账号添加到相关技能组。注意：生成记录中有一列 ‘唯一ID（wId）’ 会在工作组会话中用到

## 开始集成

### 第一步：添加pod库

```md
# 集成萝卜丝核心协议库core
pod 'bytedesk-core'
# 集成萝卜丝UI库
pod 'bytedesk-ui'
```

### 第二步：在AppDelegate.m文件中添加头文件

```c
#import <bytedesk-core/bdcore.h>
```

### 第三步：在AppDelegate.m建立萝卜丝长连接

```c
// 1. 在 - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions中添加
// 2. 在 - (void)applicationWillEnterForeground:(UIApplication *)application中添加
// anonymouseLogin函数代码请查看AppDelegate.m文件
[self anonymouseLogin];
```

### 第四步：在ViewController.m中添加头文件

```c
#import <bytedesk-ui/bdui.h>
```

### 第五步：在ViewController.m打开在线客服会话窗口

```c
[BDUIApis pushWorkGroupChat:self.navigationController withWorkGroupWid:DEFAULT_TEST_WID withTitle:kDefaultTitle];
```

### 第六步：在Info.plist添加 相册 + 拍照 权限，可参考demo

## 集成完毕

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

* [虾婆 iOS Demo](https://github.com/xiaper/ios)
* [5分钟集成在线客服](https://github.com/xiaper/ios/tree/master/kefu)
* [5分钟集成工单](https://github.com/xiaper/ios/tree/master/ticket)
* [5分钟集成帮助中心](https://github.com/xiaper/ios/tree/master/helpcenter)
* [5分钟集成意见反馈](https://github.com/xiaper/ios/tree/master/feedback)
* [5分钟集成自定义UI](https://github.com/xiaper/ios/tree/master/myui)
