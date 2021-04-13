(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{313:function(s,a,n){"use strict";n.r(a);var t=n(6),e=Object(t.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"keepalived"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keepalived","aria-hidden":"true"}},[s._v("#")]),s._v(" KeepAlived")]),s._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("可选组件")])]),s._v(" "),n("p",[s._v("仅供参考，如果使用阿里云/腾讯云等云服务，建议直接购买其负载均衡服务即可")]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.keepalived.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载"),n("OutboundLink")],1)])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf keepalived-2.0.15.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" keepalived-2.0.15\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/keepalived\n./configure --prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/keepalived\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# keepalived启动脚本变量引用文件，默认文件路径是/etc/sysconfig/，也可以不做软链接，直接修改启动脚本中文件路径即可（安装目录下）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/sysconfig\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/keepalived/etc/sysconfig/keepalived  /etc/sysconfig/keepalived\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将keepalived主程序加入到环境变量（安装目录下）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/keepalived/sbin/keepalived /usr/sbin/keepalived\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# keepalived启动脚本（源码目录下），放到/etc/init.d/目录下就可以使用service命令便捷调用")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/keepalived/sbin/keepalived  /etc/init.d/keepalived\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将配置文件放到默认路径下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/keepalived\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/keepalived/etc/keepalived/keepalived.conf /etc/keepalived/keepalived.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),n("img",{staticStyle:{width:"250px"},attrs:{src:s.$withBase("/image/keepalived.png")}}),s._v(" "),n("p",[s._v("如图所示，两台Keepalived服务器之间通过VRRP进行交互，对外部虚拟出一个VIP为192.168.0.10。Keepalived与HAProxy部署在同一台机器上，两个Keepalived服务实例匹配两个HAProxy服务实例，这样通过Keeaplived实现HAProxy的双机热备。所以在上一小节的192.168.0.9的基础之上，还要再部署一台HAProxy服务，IP地址为192.168.0.8。整条调用链路为：客户端通过VIP建立通信链路；通信链路通过Keeaplived的Master节点路由到对应的HAProxy之上；HAProxy通过负载均衡算法将负载分发到集群中的各个节点之上。正常情况下客户端的连接通过图中左侧部分进行负载分发。当Keepalived的Master节点挂掉或者HAProxy挂掉无法恢复，那么Backup提升为Master，客户端的连接通过图中右侧部分进行负载分发。如果你追求要更高的可靠性，可以加入多个Backup角色的Keepalived节点来实现一主多从的多机热备。当然这样会提升硬件资源的成本，该如何抉择需要更细致的考恒，一般情况下双机热备的配备已足够满足应用需求。")]),s._v(" "),n("p",[s._v("接下来我们要修改/etc/keepalived/keepalived.conf文件. 在两台机器上，分别配置主备。Keepalived MASTER 配置文件")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#全局定义块")]),s._v("\nglobal_defs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于服务有故障时发送邮件报警，可选项，不建议用. 需要系统开启sendmail服务，建议用第三独立监控服务，如用nagios全面监控代替")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# notification_email {")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   270580156@qq.com")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   2939499399@qq.com")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# }")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# notification_email_from bytedesk@163.com")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# smtp_server smtp.163.com")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# smtp_connect_timeout 10000")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lvs负载均衡器标识，在一个网络内，它的值应该是唯一的")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lvs_id string")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 标识本节点的字条串,通常为hostname")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此为主服务器配置，从服务器上面需要修改为 BYTEDESK_SLAVE 或其他")]),s._v("\n  router_id BYTEDESK_MASTER\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Haproxy服务启动, 监测haproxy进程状态，健康检查，每2秒执行一次")]),s._v("\nvrrp_script chk_haproxy "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#监控haproxy进程的脚本, 根据自己的实际路径放置")]),s._v("\n  script "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/keepalived/check_haproxy.sh"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#每两秒进行一次")]),s._v("\n  interval 2\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果script中的指令执行失败，vrrp_instance的优先级会减少4个点")]),s._v("\n  weight -4\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nvrrp_instance VI_1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实例状态，只有MASTER 和 BACKUP两种状态，并且需要全部大写")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#主机为MASTER，备机为BACKUP")]),s._v("\n  state MASTER\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#主备机必须相同")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#取值在0-255之间，用来区分多个instance的VRRP组播，同一网段中virtual_router_id的值不能重复，否则会出错。")]),s._v("\n  virtual_router_id 51\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对外提供服务的网卡接口，即VIP绑定的网卡接口")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监测网络端口，用ipconfig查看, 服务器固有IP（非VIP）的网卡")]),s._v("\n  interface eth0\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本机IP地址, MASTER服务器IP,从服务器写从服务器的IP")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mcast_src_ip @IP")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 节点优先级，取值范围0～254，MASTER要比BACKUP高")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#主备机取不同的优先级，主机要大。从服务器上改为50")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用来选举master的，要成为master，那么这个选项的值最好高于其他机器50个点。此时，从服务器要低于100；")]),s._v("\n  priority 100\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#VRRP Multicast广播周期秒数")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MASTER与BACKUP节点间同步检查的时间间隔，单位为秒")]),s._v("\n  advert_int 1\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止抢占服务")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nopreempt")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有故障时是否激活邮件通知")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# smtp_alert")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lvs_sync_daemon_interface string")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#认证区域")]),s._v("\n  authentication "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#VRRP认证方式, 推荐使用PASS（密码只识别前8位）")]),s._v("\n    auth_type PASS\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#VRRP口令 主备机密码必须相同")]),s._v("\n    auth_pass 12345678\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#调用haproxy进程检测脚本")]),s._v("\n  track_script "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    chk_haproxy\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#VIP 漂移地址 即集群IP地址, 可以设置多个")]),s._v("\n  virtual_ipaddress "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    192.168.0.10\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 172.16.0.222/16 dev eth0 label eth0:1")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# unicast_src_ip 172.16.0.224")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# unicast_peer {")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   172.16.0.225")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# }")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br")])]),n("p",[s._v("Keepalived BACKUP 配置文件")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#全局定义块")]),s._v("\nglobal_defs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  router_id BYTEDESK_BACKUP\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Haproxy服务启动, 监测haproxy进程状态，健康检查，每2秒执行一次")]),s._v("\nvrrp_script chk_haproxy "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#监控haproxy进程的脚本, 根据自己的实际路径放置")]),s._v("\n  script "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/keepalived/check_haproxy.sh"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#每两秒进行一次")]),s._v("\n  interval 2\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果script中的指令执行失败，vrrp_instance的优先级会减少4个点")]),s._v("\n  weight -4\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nvrrp_instance VI_1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  state BACKUP\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#主备机必须相同")]),s._v("\n  virtual_router_id 51\n  interface eth0\n  priority 50\n  advert_int 1\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#认证区域")]),s._v("\n  authentication "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#VRRP认证方式, 推荐使用PASS（密码只识别前8位）")]),s._v("\n    auth_type PASS\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#VRRP口令 主备机密码必须相同")]),s._v("\n    auth_pass 12345678\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#调用haproxy进程检测脚本")]),s._v("\n  track_script "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    chk_haproxy\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#VIP 漂移地址 即集群IP地址, 可以设置多个")]),s._v("\n  virtual_ipaddress "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    192.168.0.10\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 172.16.0.222/16 dev eth0 label eth0:1")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# unicast_src_ip 172.16.0.225")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# unicast_peer {")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   172.16.0.224")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# }")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br")])]),n("p",[s._v("为了防止HAProxy服务挂了，但是Keepalived却还在正常工作而没有切换到Backup上，所以这里需要编写一个脚本来检测HAProxy服务的状态。当HAProxy服务挂掉之后该脚本会自动重启HAProxy的服务，如果不成功则关闭Keepalived服务，如此便可以切换到Backup继续工作。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑文件check_haproxy.sh")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/keepalived/check_haproxy.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# check_haproxy.sh文件内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -C haproxy --no-header "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" -eq 0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n   /usr/local/haproxy/sbin/haproxy -f /usr/local/haproxy/conf/haproxy.cfg\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" 3\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -C haproxy --no-header "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" -eq 0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      /etc/init.d/keepalived stop\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此文件root组读写权限,并且允许程序执行此文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 777 /etc/keepalived/check_haproxy.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看keepalived状况")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" keepalived status\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动、关闭、重启")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" keepalived start\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" keepalived stop\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" keepalived restart\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看Keepalived生成的VIP是否与主服务器绑定")]),s._v("\nip addr\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看log消息:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f /var/log/messages\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" keepalived\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选部分，可忽略")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加为系统服务")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chkconfig –-add keepalived")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机启动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chkconfig keepalived on")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看开机启动的服务")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chkconfig –list")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ubuntu: chkconfig: command not found 解决方案：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ubuntu中chkconfig已经被sysv-rc-conf替代，具体如下操作如下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo apt install sysv-rc-conf")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo cp /usr/sbin/sysv-rc-conf /usr/sbin/chkconfig")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sysv-rc-conf keepalived on")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h2",{attrs:{id:"微信公众号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号","aria-hidden":"true"}},[s._v("#")]),s._v(" 微信公众号")]),s._v(" "),n("img",{staticStyle:{width:"250px"},attrs:{src:s.$withBase("/image/qrcode_xiaperio_430.jpg")}}),s._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.keepalived.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("KeepAlived"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/bbwangj/article/details/80346428",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux下Keepalived安装与配置"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/u013256816/article/details/77171017",target:"_blank",rel:"noopener noreferrer"}},[s._v("RabbitMQ负载均衡（3）——Keepalived+HAProxy实现高可用的负载均衡"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://yq.aliyun.com/articles/438705",target:"_blank",rel:"noopener noreferrer"}},[s._v("在阿里云VPC环境中利用keepalived实现主备双机高可用"),n("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);