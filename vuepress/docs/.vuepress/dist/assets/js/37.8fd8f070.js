(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{326:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rabbitmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq","aria-hidden":"true"}},[s._v("#")]),s._v(" RabbitMQ")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("消息队列中间件（简称消息中间件）是指利用高效可靠的消息传递机制进行与平台无关的数据交流，并基于数据通信来进行分布式系统的集成。通过提供消息传递和消息排队模型，它可以在分布式环境下提供应用解耦、弹性伸缩、冗余存储、流量削峰、异步通信、数据同步等等功能，其作为分布式系统架构中的一个重要组件，有着举足轻重的地位。")])]),s._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("p",[s._v("Linux编译安装"),a("a",{attrs:{href:"http://www.erlang.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("Erlang"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载 http://www.erlang.org/downloads")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf otp_src_23.1.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" otp_src_23.1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 openssl")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ubuntu")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libncurses5-dev libssl-dev openssl\n./configure "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("Mac \b安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssl\nbrew upgrade erlang\nbrew upgrade rabbitmq\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后台启动")]),s._v("\nbrew services start rabbitmq\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或 前台启动")]),s._v("\nrabbitmq-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入 erl")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示")]),s._v("\nErlang/OTP 23 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("erts-11.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("64-bit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("smp:2:2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ds:2:2:10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("async-threads:1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hipe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 说明安装成功")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("安装"),a("a",{attrs:{href:"https://github.com/rabbitmq/rabbitmq-server/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("RabbitMQ"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("- 查看最新版本：https://github.com/rabbitmq/rabbitmq-server/releases\n- 注意：下载 rabbitmq-server-generic-unix-***.tar.xz 版本\n- 下载：wget https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.8.9/rabbitmq-server-generic-unix-3.8.9.tar.xz\n- 解压：1. xz -d ***.tar.xz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 2. "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf  ***.tar\n- 前台启动： ./sbin/rabbitmq-server\n- 后台启动： ./sbin/rabbitmq-server -detached\n- 停止运行： ./sbin/rabbitmqctl stop\n- 查看状态： ./sbin/rabbitmqctl status\n\n- 启用管理后台:\n    ./sbin/rabbitmq-plugins "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable")]),s._v(" rabbitmq_management\n    ./sbin/rabbitmq-plugins "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable")]),s._v(" rabbitmq_shovel rabbitmq_shovel_management\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - 禁用：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     ./sbin/rabbitmq-plugins disable rabbitmq_management")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - 启用mqtt：  ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./sbin/rabbitmq-plugins enable rabbitmq_mqtt")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./sbin/rabbitmq-plugins enable rabbitmq_web_mqtt")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./sbin/rabbitmq-plugins enable rabbitmq_web_mqtt_examples")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -禁用：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     ./sbin/rabbitmq-plugins disable rabbitmq_mqtt")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     https://www.rabbitmq.com/mqtt.html")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - 启用stomp:")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./sbin/rabbitmq-plugins enable rabbitmq_web_stomp")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./sbin/rabbitmq-plugins enable rabbitmq_web_stomp_examples")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://www.rabbitmq.com/web-stomp.html")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试实例： http://127.0.0.1:15670/")]),s._v("\n\n- 登录管理后台: http://localhost:15672, guest/guest\n- 其他：https://www.rabbitmq.com/man/rabbitmqctl.8.html"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#set_user_tags")]),s._v("\n\n- 添加管理员账号：\n- ./sbin/rabbitmqctl add_user 用户名 密码\n- ./sbin/rabbitmqctl set_user_tags 用户名 administrator\n- ./sbin/rabbitmqctl set_permissions -p "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v(" 用户名 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v("\n\n- 添加访客： ./sbin/rabbitmqctl add_user visitor visitor\n- 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v(" visitor "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - 添加ios端授权用户：./sbin/rabbitmqctl add_user mqtt_ios mqtt_ios")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# - 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" mqtt_ios ".*" ".*" ".*"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - 添加android端授权用户：./sbin/rabbitmqctl add_user mqtt_android mqtt_android")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# - 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" mqtt_android ".*" ".*" ".*"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - 添加web端授权用户：./sbin/rabbitmqctl add_user stomp_web stomp_web")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# - 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" stomp_web ".*" ".*" ".*"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - 添加windows端授权用户：./sbin/rabbitmqctl add_user mqtt_windows mqtt_windows")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# - 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" mqtt_windows ".*" ".*" ".*"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - 添加mac端授权用户：./sbin/rabbitmqctl add_user mqtt_mac mqtt_mac")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# - 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" mqtt_mac ".*" ".*" ".*"')]),s._v("\n\n- 查看：./sbin/rabbitmqctl list_permissions -p /\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br")])]),s._v(" "),a("h2",{attrs:{id:"spring-boot-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-配置文件","aria-hidden":"true"}},[s._v("#")]),s._v(" Spring Boot 配置文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nspring.rabbitmq.host"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("127.0.0.1\nspring.rabbitmq.port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("5672\nspring.rabbitmq.username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("你的用户名\nspring.rabbitmq.password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("你的密码\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# spring.rabbitmq.stomp.port=61613")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# spring.rabbitmq.stomp.login=stomp_web")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# spring.rabbitmq.stomp.passcode=stomp_web")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群","aria-hidden":"true"}},[s._v("#")]),s._v(" 集群")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("spring.rabbitmq.addresses"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("127.0.0.1:5672,127.0.0.2:5672,127.0.0.3:5672\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"rabbitmq集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq集群","aria-hidden":"true"}},[s._v("#")]),s._v(" rabbitmq集群")]),s._v(" "),a("p",[s._v("RabbitMQ Cluster是根据Erlang的实现的。必须满足一下几个要求：")]),s._v(" "),a("ul",[a("li",[s._v("所有机器上，必须Erlang运行时和RabbitMQ的版本相同。（否则会不能连接到一起）")]),s._v(" "),a("li",[s._v("所有机器上，的Erlang的Cookie都相同。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 集群中所有机器的/etc/hosts文件中必须同时包含集群中所有机器 ip hostname")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同步hosts, hostname可以自行修改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/hosts\n192.168.0.1 mq-master\n192.168.0.2 mq-slave-01\n192.168.0.3 mq-slave-02\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将任意一台服务器的~/.erlang.cookie文件同步到其他所有服务器（所有服务器必须一致，文件内容相同）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同步.erlang.cookie")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 192.168.0.1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 让当前rabbitmq-server的进程后台运行")]),s._v("\n./sbin/rabbitmq-server -detached\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# # 启动集群")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./sbin/rabbitmqctl start_app")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获得集群配置信息")]),s._v("\n./sbin/rabbitmqctl cluster_status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 192.168.0.2 && 192.168.0.3")]),s._v("\n./sbin/rabbitmq-server –detached\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./sbin/rabbitmqctl start_app")]),s._v("\n./sbin/rabbitmqctl stop_app  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止rabbitmq运行")]),s._v("\n./sbin/rabbitmqctl join_cluster --ram rabbit@mq-master  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加入到rabbit节点中，使用内存模式。")]),s._v("\n./sbin/rabbitmqctl start_app  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动rabbitmq")]),s._v("\n./sbin/rabbitmqctl cluster_status  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看状态")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在所有三台机器运行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# ["^"匹配所有]')]),s._v("\n./sbin/rabbitmqctl set_policy ha-all "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"ha-mode":"all"}\'')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"微信公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号","aria-hidden":"true"}},[s._v("#")]),s._v(" 微信公众号")]),s._v(" "),a("img",{staticStyle:{width:"250px"},attrs:{src:s.$withBase("/image/qrcode_xiaperio_430.jpg")}}),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.rabbitmq.com/distributed.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Distributed RabbitMQ brokers"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.rabbitmq.com/clustering.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Clustering Guide"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.rabbitmq.com/ha.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Highly Available (Mirrored) Queues"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://www.haproxy.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("HAProxy"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.keepalived.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("KeepAlived"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/tiantiandas/p/rabbitmq_haproxy.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("用 HAproxy 搭建 RabbitMQ 集群"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://hoxis.github.io/keepalived-haproxy-rabbitmq.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("基于 Keepalived + HAproxy 的 RabbitMQ 高可用配置实践"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/WoogeYu/article/details/51119101",target:"_blank",rel:"noopener noreferrer"}},[s._v("RabbitMQ分布式集群架构"),a("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=e.exports}}]);