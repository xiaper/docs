# SockJS

::: tip 提示

虾婆web端底层通信协议借鉴于sockjs，首先判断浏览器是否支持websocket，如果支持则建立连接，否则进行服务降级通过xhr-streaming或者xhr-polling进行通信。尽最大程度兼容各种浏览器
:::

WebSocket is not supported in all browsers yet and may be precluded by restrictive network proxies. This is why Spring provides fallback options that emulate the WebSocket API as close as possible based on the [SockJS Protocol](http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html) (version 0.3.3).

## 浏览器兼容

_Browser_       | _Websockets_     | _Streaming_ | _Polling_
----------------|------------------|-------------|-------------------
IE 6, 7         | no               | no          | jsonp-polling
IE 8, 9 (cookies=no) |    no       | xdr-streaming &dagger; | xdr-polling &dagger;
IE 8, 9 (cookies=yes)|    no       | iframe-htmlfile | iframe-xhr-polling
IE 10           | rfc6455          | xhr-streaming   | xhr-polling
Chrome 6-13     | hixie-76         | xhr-streaming   | xhr-polling
Chrome 14+      | hybi-10 / rfc6455| xhr-streaming   | xhr-polling
Firefox <10     | no &Dagger;      | xhr-streaming   | xhr-polling
Firefox 10+     | hybi-10 / rfc6455| xhr-streaming   | xhr-polling
Safari 5.x      | hixie-76         | xhr-streaming   | xhr-polling
Safari 6+       | rfc6455          | xhr-streaming   | xhr-polling
Opera 10.70+    | no &Dagger;      | iframe-eventsource | iframe-xhr-polling
Opera 12.10+    | rfc6455          | xhr-streaming | xhr-polling
Konqueror       | no               | no          | jsonp-polling



## 参考

- [SockJS Protocol](http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html)
- [SockJS Client](https://github.com/sockjs/sockjs-client/)
- [SockJS Github](https://github.com/sockjs/sockjs-protocol)
