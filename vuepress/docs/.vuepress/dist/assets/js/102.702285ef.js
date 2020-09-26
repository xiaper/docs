(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{387:function(t,r,v){"use strict";v.r(r);var _=v(6),o=Object(_.a)({},function(){var t=this,r=t.$createElement,v=t._self._c||r;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"sockjs"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sockjs","aria-hidden":"true"}},[t._v("#")]),t._v(" SockJS")]),t._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("虾婆web端底层通信协议借鉴于sockjs，首先判断浏览器是否支持websocket，如果支持则建立连接，否则进行服务降级通过xhr-streaming或者xhr-polling进行通信。尽最大程度兼容各种浏览器")])]),t._v(" "),v("p",[t._v("WebSocket is not supported in all browsers yet and may be precluded by restrictive network proxies. This is why Spring provides fallback options that emulate the WebSocket API as close as possible based on the "),v("a",{attrs:{href:"http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SockJS Protocol"),v("OutboundLink")],1),t._v(" (version 0.3.3).")]),t._v(" "),v("h2",{attrs:{id:"浏览器兼容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器兼容")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("em",[t._v("Browser")])]),t._v(" "),v("th",[v("em",[t._v("Websockets")])]),t._v(" "),v("th",[v("em",[t._v("Streaming")])]),t._v(" "),v("th",[v("em",[t._v("Polling")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("IE 6, 7")]),t._v(" "),v("td",[t._v("no")]),t._v(" "),v("td",[t._v("no")]),t._v(" "),v("td",[t._v("jsonp-polling")])]),t._v(" "),v("tr",[v("td",[t._v("IE 8, 9 (cookies=no)")]),t._v(" "),v("td",[t._v("no")]),t._v(" "),v("td",[t._v("xdr-streaming †")]),t._v(" "),v("td",[t._v("xdr-polling †")])]),t._v(" "),v("tr",[v("td",[t._v("IE 8, 9 (cookies=yes)")]),t._v(" "),v("td",[t._v("no")]),t._v(" "),v("td",[t._v("iframe-htmlfile")]),t._v(" "),v("td",[t._v("iframe-xhr-polling")])]),t._v(" "),v("tr",[v("td",[t._v("IE 10")]),t._v(" "),v("td",[t._v("rfc6455")]),t._v(" "),v("td",[t._v("xhr-streaming")]),t._v(" "),v("td",[t._v("xhr-polling")])]),t._v(" "),v("tr",[v("td",[t._v("Chrome 6-13")]),t._v(" "),v("td",[t._v("hixie-76")]),t._v(" "),v("td",[t._v("xhr-streaming")]),t._v(" "),v("td",[t._v("xhr-polling")])]),t._v(" "),v("tr",[v("td",[t._v("Chrome 14+")]),t._v(" "),v("td",[t._v("hybi-10 / rfc6455")]),t._v(" "),v("td",[t._v("xhr-streaming")]),t._v(" "),v("td",[t._v("xhr-polling")])]),t._v(" "),v("tr",[v("td",[t._v("Firefox <10")]),t._v(" "),v("td",[t._v("no ‡")]),t._v(" "),v("td",[t._v("xhr-streaming")]),t._v(" "),v("td",[t._v("xhr-polling")])]),t._v(" "),v("tr",[v("td",[t._v("Firefox 10+")]),t._v(" "),v("td",[t._v("hybi-10 / rfc6455")]),t._v(" "),v("td",[t._v("xhr-streaming")]),t._v(" "),v("td",[t._v("xhr-polling")])]),t._v(" "),v("tr",[v("td",[t._v("Safari 5.x")]),t._v(" "),v("td",[t._v("hixie-76")]),t._v(" "),v("td",[t._v("xhr-streaming")]),t._v(" "),v("td",[t._v("xhr-polling")])]),t._v(" "),v("tr",[v("td",[t._v("Safari 6+")]),t._v(" "),v("td",[t._v("rfc6455")]),t._v(" "),v("td",[t._v("xhr-streaming")]),t._v(" "),v("td",[t._v("xhr-polling")])]),t._v(" "),v("tr",[v("td",[t._v("Opera 10.70+")]),t._v(" "),v("td",[t._v("no ‡")]),t._v(" "),v("td",[t._v("iframe-eventsource")]),t._v(" "),v("td",[t._v("iframe-xhr-polling")])]),t._v(" "),v("tr",[v("td",[t._v("Opera 12.10+")]),t._v(" "),v("td",[t._v("rfc6455")]),t._v(" "),v("td",[t._v("xhr-streaming")]),t._v(" "),v("td",[t._v("xhr-polling")])]),t._v(" "),v("tr",[v("td",[t._v("Konqueror")]),t._v(" "),v("td",[t._v("no")]),t._v(" "),v("td",[t._v("no")]),t._v(" "),v("td",[t._v("jsonp-polling")])])])]),t._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SockJS Protocol"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/sockjs/sockjs-client/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SockJS Client"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/sockjs/sockjs-protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("SockJS Github"),v("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=o.exports}}]);