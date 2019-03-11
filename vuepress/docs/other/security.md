# 通信安全

## 何谓安全？

## 安全的标准是什么？

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

### Signal加密过程

The Signal Protocol is used by WhatsApp, Facebook Messenger, Google Allo and Signal’s own messaging app.

- 向前安全：即使密钥被劫持，仅能够破解被劫持消息的内容，不能破解之前的历史聊天记录
- 向后安全：即使密钥被劫持，仅能够破解被劫持消息的内容，不能破解之后产生的新聊天记录


## 参考

- [Signal Protocol](https://signal.org/docs/)
- [Signal Protocal Wiki](https://en.wikipedia.org/wiki/Signal_Protocol)
- [Signal Github](https://github.com/signalapp)
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
