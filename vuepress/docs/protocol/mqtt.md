# MQTT

::: tip 提示

虾婆移动端(安卓/iOS)使用的是基于mqtt协议的自定义版本
:::

- [前言](/protocol/mqtt/00-Preface.md)
- [目录](/protocol/mqtt/00-Contents.md)
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
- [MQTT Essentials](https://www.hivemq.com/mqtt-essentials/)
- [MQTT v3.1.1 协议中文版](https://github.com/mcxiaoke/mqtt)
