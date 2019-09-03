# XMPP

::: tip 提示

虾婆未基于XMPP协议开发，老版[微客服](http://www.appkefu.com)基于XMPP
:::

## 优点

- 协议成熟, 从出现到现在大概有十几年了
- 生态完善, 各种语言实现基本都有
- 社区活跃, 多数问题均可以通过Google快速解决
- 支持自定义协议扩展

## 缺点

- 协议冗余
- 自定义协议扩展不是很方便

因为在虾婆中使用了大量的自定义协议，需要扩展更加灵活，所以没有继续使用XMPP。如果开发者没有太多定制需求，使用XMPP快速实现自己的需求，无疑也是一个不错的选择。

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

- [xmpp](http://xmpp.org/)
- [xmpp core: rfc3920](https://www.ietf.org/rfc/rfc3920.txt)
- [xmpp message and presence: rfc3921](https://www.ietf.org/rfc/rfc3921.txt)
