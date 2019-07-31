# Web/H5

::: tip 提示

:::

## 准备工作

* 私有部署成功之后，注册管理员账号，并登录管理后台。
* 到 所有设置->客服管理->客服账号 添加客服账号。注意：生成记录中有一列 ‘唯一ID(uid)’ 会在指定客服接口中使用
* 到 所有设置->客服管理->技能组 添加技能组，并可将客服账号添加到相关技能组。注意：生成记录中有一列 ‘唯一ID（wId）’ 会在工作组会话中用到

## 开始集成

### 第一步： 获取代码片段

打开 所有设置->客服管理->技能组 页面，在技能组右侧，点击 ‘获取代码’ 按钮，获取代码如下：

```javascript
//例如： <a href="https://vip.bytedesk.com/chat?uid=201808221551193&wid=201902241647451&type=workGroup&aid=&ph=ph" target="_blank">在线客服</a>
```

### 第二步：集成到自己网站

## 集成完毕

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

* [虾婆 Web/H5 Demo](https://github.com/xiaper/web)
* [5分钟集成在线客服](https://github.com/xiaper/web/tree/master/kefu)
* [5分钟集成工单](https://github.com/xiaper/web/tree/master/ticket)
* [5分钟集成帮助中心](https://github.com/xiaper/web/tree/master/support)
* [5分钟集成意见反馈](https://github.com/xiaper/web/tree/master/feedback)
