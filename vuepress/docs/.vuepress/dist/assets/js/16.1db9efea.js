(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{301:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"coturn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coturn","aria-hidden":"true"}},[s._v("#")]),s._v(" Coturn")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("for WebRTC")])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/coturn/coturn/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖","aria-hidden":"true"}},[s._v("#")]),s._v(" 依赖")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y libssl-dev libevent-dev libpq-dev mysql-client libmysqlclient-dev libhiredis-dev openssl\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y gdebi-core\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y sqlite libsqlite3-dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf turnserver-4.5.1.1.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" turnserver-4.5.11\n./configure\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/etc/turnserver.conf.default  /usr/local/etc/turnserver.conf\nturnadmin -a –u jackning -r bytedesk -p 123456\nturnadmin -A –u jackning -r bytedesk -p 123456\nturnadmin -k -u jackning -r bytedesk -p 123456\n0xc35c1783903fb35c8471f45bba6aa19f\nopenssl req -x509 -newkey rsa:2048 -keyout /usr/local/etc/turn_server_pkey.pem -out /usr/local/etc/turn_server_cert.pem -days 99999 -nodes\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("编辑turnserver.conf内容")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("listening-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("3478\nexternal-ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("47.99.38.99\nuser"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jackning:123456\nrealm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("stun.bytedesk.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("阿里云云服务器安全组开放端口号")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("3478\n3479\n5349\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同时支持 TCP/UDP")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后台启动:")]),s._v("\nturnserver -o -a -f -r bytedesk\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" turnserver "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 前台启动:")]),s._v("\nturnserver 或\nturnserver -a -f -r bytedesk\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试 STUN")]),s._v("\nturnutils_stunclient 47.99.38.99\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[t("a",{attrs:{href:"https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/",target:"_blank",rel:"noopener noreferrer"}},[s._v("网页测试"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入：")]),s._v("\nSTUN or TURN URI: stun:47.99.38.99:3478\nTURN username: jackning\nTURN password: 123456\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://syaka-yin.github.io/2018/08/01/coturn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("coturn 服务搭建"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://webrtc.org.cn/webrtc-tutorial-2-signaling-stun-turn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("WebRTC信令控制与STUN/TURN服务器搭建"),t("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);