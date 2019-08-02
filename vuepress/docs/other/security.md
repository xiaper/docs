# 通信安全

即时通讯（包括IM和消息推送服务）是互联网的重要应用形态之一，安全性一直是开发者需要优先考虑的基础问题，然而一款成功的应用到底要加密什么东西、怎么加密等都是需要在性能、体验和真正的安全性上做好权衡和规划，那么如何正确地理解即时通讯中的加密技术则是重中之中。

## 安全的标准是什么？

评估应用安全性的基本原则：

- 网络上传递的数据是不安全的，属于黑客公共场所，能被截取；
- 客户端的代码是不安全的，属于黑客本地范畴，能被逆向工程，任何客户端与服务端提前约定好的算法与密钥都是不安全的；
- 用户客户端内存是安全的，属于黑客远端范畴，不能被破解。

加密技术的使用深度决定了最终的安全性：

- 零级安全：明文消息传递如同裸奔，不安全；
- 初始安全：客户端和服务端提前约定加密算法和密钥，不安全（好多公司都是这么实现的=_=）；
- 中级安全：服务端随机生成密钥，发送给客户端，不安全；
- 高级安全：一人一密，客户端使用“具备用户特性的东西”作为加密密钥，弱安全；
- 终级安全：一次一密，三次握手建立安全信道，安全。

### seven criteria to assess how secure a chat app is. They are

- communication encrypted in transit;
- no provider access to the key communication encrypted with;
- independent verification of a correspondent's identity;
- secure past communications if the keys are stolen;
- code open to independent review;
- well-documented crypto design;
- an independent security audit

core characteristic of good encryption: even the people who design and deploy it cannot themselves break it.[EE2E](https://ssd.eff.org/en/module/communicating-others)

- [TIPS, TOOLS AND HOW-TOS FOR SAFER ONLINE COMMUNICATIONS](https://ssd.eff.org/)
- [Which apps and tools actually keep your messages safe?](https://www.eff.org/node/82654)

## 端到端加密(End To End Encryption, EE2E)

 You can use end-to-end encryption for any kind of communication — including voice and video calls, messaging and chat, and email.

- [How Does End-to-End Encryption Work?](https://ssd.eff.org/en/module/communicating-others)

## 为什么选Signal Protocol？

&emsp;Signal Protocol 是真正的端到端的通讯加密协议，号称是世界上最安全的通讯协议，任何第三方包括服务器都无法查看通讯内容，热门应用facebook messenger，whatsapp，singal app都采用的此协议。而我们所熟知的telegram的默认会话模式并不是端到端加密，服务器是可以获取用户私钥并解密聊天内容的，虽然目前报道表明telegram向任何机构出售用户聊天内容，但是用户的隐私安全由一家公司的职业操守来保障，总是不太稳妥。

&emsp;Signal Protocol 可应用在双方通讯，群组通讯中，能保证传输的消息，图片，音频，视频等文件的加密传输。即使某个消息的密钥泄露，黑客也无法解密以前的消息和之后的消息，所以signal protocol能提供前向安全和后向安全。

- 向前安全：即使密钥被劫持，仅能够破解被劫持消息的内容，不能破解之前的历史聊天记录
- 向后安全：即使密钥被劫持，仅能够破解被劫持消息的内容，不能破解之后产生的新聊天记录

## 原理

TODO

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

- [Signal Protocol](https://signal.org/docs/)
- [Signal Protocal Wiki](https://en.wikipedia.org/wiki/Signal_Protocol)
- [Signal Github](https://github.com/signalapp)
- [Signal Protocol library for Java/Android](https://github.com/signalapp/libsignal-protocol-java)
- [移动端安全通信的利器——端到端加密（E2EE）技术详解](http://www.52im.net/thread-764-1-1.html)
- [Facebook Messenger deploys Signal Protocol for end-to-end encryption](https://signal.org/blog/facebook-messenger/)
- [WhatsApp's Signal Protocol integration is now complete](https://signal.org/blog/whatsapp-complete/)
- [WhatsApp's White Paper](https://www.whatsapp.com/security/WhatsApp-Security-Whitepaper.pdf)
- [Open Whisper Systems partners with Google on end-to-end encryption for Allo](https://signal.org/blog/allo/)
- [Signal protocol 开源协议理解](https://www.jianshu.com/p/e1f6f01c65f8)
- [Curve25519](https://en.wikipedia.org/wiki/Curve25519)
- [Advanced Encryption Standard (AES)](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)
- [HMAC](https://en.wikipedia.org/wiki/HMAC)
- [Tox](https://tox.chat/)
- [Tox Wiki](https://zh.wikipedia.org/wiki/Tox)
- [Tox Clients](https://tox.chat/clients.html#qtox)
- [安全的即时通讯——基于分布式系统的Tox](https://zhuanlan.zhihu.com/p/34477792)
- [Telegram MTProto](https://core.telegram.org/mtproto)
- [Using The Signal Protocol Library](https://open-whisper-systems.readme.io/docs/textsecure-java-library)
- [Signal: A Quick and Dirty demo](https://medium.com/@lvijay/signal-a-quick-and-dirty-demo-eca47d76d4f3)
- [signal-protocol Javascript npm](https://www.npmjs.com/package/signal-protocol)
- [Advanced cryptographic ratcheting](https://signal.org/blog/advanced-ratcheting/)
- [双棘轮算法](https://signal.org/docs/specifications/doubleratchet/)
