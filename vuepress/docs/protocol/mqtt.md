# MQTT

::: tip 提示

- MQTT(Message Queuing Telemetry Transport, 消息队列遥测传输协议)
- 虾婆移动端(安卓/iOS)使用的是基于mqtt协议的自定义版本
:::

## 摘要 （Abstract）

MQTT是一个CS架构的发布/订阅模式的消息传输协议。它的设计思想是轻巧、开放、简单、规范，因此易于实现。这些特点使得它对很多场景来说都是很好的选择，包括受限的环境如机器与机器的通信（M2M）以及物联网环境（IoT），这些场景要求很小的代码封装或者网络带宽非常昂贵。

本协议运行在TCP/IP，或其它提供了有序、可靠、双向连接的网络连接上。它有以下特点：

- 使用发布/订阅消息模式，提供了一对多的消息分发和应用之间的解耦。
- 消息传输不需要知道负载内容。
- 提供三种等级的服务质量：

	- “最多一次”，尽操作环境所能提供的最大努力分发消息。消息可能会丢失。例如，这个等级可用于环境传感器数据，单次的数据丢失没关系，因为不久之后会再次发送。
	- “至少一次”，保证消息可以到达，但是可能会重复。
	- “仅一次”，保证消息只到达一次。例如，这个等级可用在一个计费系统中，这里如果消息重复或丢失会导致不正确的收费。

- 很小的传输消耗和协议数据交换，最大限度减少网络流量
- 异常连接断开发生时，能通知到相关各方


- [第一章 - MQTT介绍](/protocol/mqtt/01-Introduction.md)
- [第二章 – MQTT控制报文格式](/protocol/mqtt/02-ControlPacketFormat.md)
- [第三章 – MQTT控制报文](/protocol/mqtt/03-ControlPackets.md)
	- [3.1 CONNECT – 连接服务端](/protocol/mqtt/0301-CONNECT.md)
	- [3.2 CONNACK – 确认连接请求](/protocol/mqtt/0302-CONNACK.md)
	- [3.3 PUBLISH – 发布消息](/protocol/mqtt/0303-PUBLISH.md)
	- [3.4 PUBACK –发布确认](/protocol/mqtt/0304-PUBACK.md)
	- [3.5 PUBREC – 发布收到（QoS 2，第一步）](/protocol/mqtt/0305-PUBREC.md)
	- [3.6 PUBREL – 发布释放（QoS 2，第二步）](/protocol/mqtt/0306-PUBREL.md)
	- [3.7 PUBCOMP – 发布完成（QoS 2，第三步）](/protocol/mqtt/0307-PUBCOMP.md)
	- [3.8 SUBSCRIBE - 订阅主题](/protocol/mqtt/0308-SUBSCRIBE.md)
	- [3.9 SUBACK – 订阅确认](/protocol/mqtt/0309-SUBACK.md)
	- [3.10 UNSUBSCRIBE –取消订阅](/protocol/mqtt/0310-UNSUBSCRIBE.md)
	- [3.11 UNSUBACK – 取消订阅确认](/protocol/mqtt/0311-UNSUBACK.md)
	- [3.12 PINGREQ – 心跳请求](/protocol/mqtt/0312-PINGREQ.md)
	- [3.13 PINGRESP – 心跳响应](/protocol/mqtt/0313-PINGRESP.md)
	- [3.14 DISCONNECT –断开连接](/protocol/mqtt/0314-DISCONNECT.md)
- [第四章 – 操作行为](/protocol/mqtt/04-OperationalBehavior.md)
- [第五章 – 安全](/protocol/mqtt/05-Security.md)
- [第六章 – 使用WebSocket](/protocol/mqtt/06-WebSocket.md)
- [第七章 – 一致性目标](/protocol/mqtt/07-Conformance.md)
- [附录B - 强制性规范声明](/protocol/mqtt/08-AppendixB.md)

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

- [mqtt.org](http://mqtt.org/)
- [MQTT Version 3.1.1](http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html)
- [MQTT Version 5.0](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)
- [MQTT Essentials](https://www.hivemq.com/mqtt-essentials/)
- [MQTT v3.1.1 协议中文版](https://github.com/mcxiaoke/mqtt)
- [Summary of new features in MQTT v5.0](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901293)
