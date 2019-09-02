# WebSocket

::: tip 提示

虾婆web/h5/小程序端基于Stomp Over WebSocket协议开发
:::

<!-- ## Traditional Polling

The browser keeps sending requests to check for new information and the server responds immediately each time. This fits scenarios where polling can be done at reasonably sparse intervals. For example a mail client can check for new messages every 10 minutes. It's simple and it works. However, the approach becomes inefficient when new information must be shown as soon as possible in which case polling must be very frequent.

## Long Polling

The browser keeps sending requests but the server doesn't respond until it has new information to send. From a client perspective this is identical to traditional polling. From a server perspective this is very similar to a long-running request and can be scaled using the technique discussed in Part 1.

How long can the response remain open? Browsers are set to time out after 5 minutes and network intermediaries such as proxies can time out even sooner. So even if no new information arrives, a long polling request should complete regularly to allow the browser to send a new request. This IETF document recommends using a timeout value between 30 and 120 seconds but the actual value to use will likely depend on how much control you have over network intermediaries that separate the browser from server.

Long polling can dramatically reduce the number of requests required to receive information updates with low latency, especially where new information becomes available at irregular intervals. However, the more frequent the updates are the closer it gets to traditional polling.

## HTTP Streaming

The browser sends a request to the server and the server responds when it has information to send. However, unlike long polling, the server keeps the response open and continues to send more updates as they arrive. The approach removes the need for polling but is also a more significant departure from typical HTTP request-response semantics. For example the client and server need to agree how to interpret the response stream so that the client will know where one update ends and another begins. Furthermore, network intermediaries can cache the response stream which thwarts the intent of the approach. This is why long polling is more commonly used today.

## WebSocket Protocol

The browser sends an HTTP request to the server to switch to the WebSocket protocol and the server responds by confirming the upgrade. Thereafter browser and server can send data frames in both directions over a TCP socket.

The WebSocket protocol was designed to replace the need for polling and is specifically suited for scenarios where messages need to be exchanged between browser and server at a high frequency. The initial handshake over HTTP ensures WebSocket requests can go through firewalls. However, there are also significant challenges since a majority of deployed browsers do not support WebSockets and there are further issues with getting through network intermediaries.

WebSockets revolves around the two way exchange of text or binary messages. It leads to a significantly different approach from a RESTful, HTTP-based architecture. In fact there is a need for some another protocol on top of WebSockets, e.g. XMPP, AMQP, STOMP, or other and which one(s) will become predominant remains to be seen. -->

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSockets_API)
- [The WebSocket Protocol](https://tools.ietf.org/html/rfc6455)
<!-- - [WebSocket中文协议](/protocol/rfc6455.md) -->
- [Spring WebSockets](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html#websocket-intro)
- [Spring WebSocket Support](https://docs.spring.io/spring-framework/docs/5.0.0.BUILD-SNAPSHOT/spring-framework-reference/html/websocket.html)
