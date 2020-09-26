(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{343:function(e,t,r){"use strict";r.r(t);var a=r(6),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"性能数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能数据","aria-hidden":"true"}},[e._v("#")]),e._v(" 性能数据")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("ul",[r("li",[e._v("负载测试(Load Testing): 在一定软硬件环境下，通过不断加大负载（不同虚拟用户数）来确定在满足性能指标情况下能够承受的最大用户数。简单说，可以帮我们对系统进行定容定量，找出系统性能的拐点。指标包括：TPS（Transaction Per Second, 每秒事务数）、RT（Response Time/average Response Time, 平均响应时间）、CPU Using（CPU 利用率）、Mem Using（内存使用情况）等。")]),e._v(" "),r("li",[e._v("性能测试(Performance Testing): 模拟用户负载来测试系统在负载情况下, 系统的响应时间、吞吐量等指标是否满足性能要求。")]),e._v(" "),r("li",[e._v("压力测试(Stress Testing, 又称强度测试): 模拟极限状态，就是在高负载的情况下，把系统搞坏，收集系统中的隐藏问题。\n")])])]),e._v(" "),r("p",[e._v("系统是否具有高性能的运行特征，不仅取决于系统本身的设计和程序算法，而且取决于系统的运行环境。系统的运行环境会依赖于一些关键因素，例如：")]),e._v(" "),r("ul",[r("li",[e._v("系统架构，如分布式服务器集群还是集中式主机系统等。")]),e._v(" "),r("li",[e._v("硬件配置，如服务器的配置，CPU、内存等配置越高，系统的性能会越好。")]),e._v(" "),r("li",[e._v("网络带宽，随着带宽的提高，客户端访问服务器的速度会有较大的改善。")]),e._v(" "),r("li",[e._v("支撑软件的选定，如选定不同的数据库管理系统（Oracle、MySQL等）和web应用服务器（Tomcat、GlassFish、Jboss、WebLogic等），对应用系统的性能都有影响。")]),e._v(" "),r("li",[e._v("外部负载，同时有多少个用户连接、用户上载文件大小、数据库中的记录数等都会对系统的性能有影响。一般来说，系统负载越大，系统的性能会降低。")])]),e._v(" "),r("h2",{attrs:{id:"性能标准"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能标准","aria-hidden":"true"}},[e._v("#")]),e._v(" 性能标准")]),e._v(" "),r("h2",{attrs:{id:"准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[e._v("#")]),e._v(" 准备")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://jmeter.apache.org/download_jmeter.cgi",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("解压")])]),e._v(" "),r("li",[r("p",[e._v("打开apache-jmeter-5.1.1/bin/ApacheJMeter.jar")])]),e._v(" "),r("li",[r("p",[e._v("创建测试计划")])]),e._v(" "),r("li",[r("p",[e._v("创建线程组")])]),e._v(" "),r("li",[r("p",[e._v("添加")])]),e._v(" "),r("li",[r("p",[e._v("测试Hello World")])]),e._v(" "),r("li",[r("p",[e._v("测试登录")])]),e._v(" "),r("li",[r("p",[e._v("测试发送消息")])])]),e._v(" "),r("h2",{attrs:{id:"生成测试报告-jmeter-report-dashboard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生成测试报告-jmeter-report-dashboard","aria-hidden":"true"}},[e._v("#")]),e._v(" 生成测试报告 Jmeter Report Dashboard")]),e._v(" "),r("ul",[r("li",[e._v("拷贝 bin/reportgenerator.properties 内容到 bin/user.properties 中")]),e._v(" "),r("li",[e._v("重启 ApacheJMeter.jar")])]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("./jmeter -g /Users/ningjinpeng/Desktop/JMeterTestPlans/HTTP请求-hello.csv -o /Users/ningjinpeng/Desktop/JMeterTestPlans/HTMLReports-hello\n./jmeter -g /Users/ningjinpeng/Desktop/JMeterTestPlans/HTTP请求-oauth.csv -o /Users/ningjinpeng/Desktop/JMeterTestPlans/HTMLReports-oauth\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("h2",{attrs:{id:"负载测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#负载测试","aria-hidden":"true"}},[e._v("#")]),e._v(" 负载测试")]),e._v(" "),r("h2",{attrs:{id:"性能测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能测试","aria-hidden":"true"}},[e._v("#")]),e._v(" 性能测试")]),e._v(" "),r("h2",{attrs:{id:"压力测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压力测试","aria-hidden":"true"}},[e._v("#")]),e._v(" 压力测试")]),e._v(" "),r("h2",{attrs:{id:"监控系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#监控系统","aria-hidden":"true"}},[e._v("#")]),e._v(" 监控系统")]),e._v(" "),r("p",[e._v("nmon")]),e._v(" "),r("h2",{attrs:{id:"微信公众号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号","aria-hidden":"true"}},[e._v("#")]),e._v(" 微信公众号")]),e._v(" "),r("img",{staticStyle:{width:"250px"},attrs:{src:e.$withBase("/image/qrcode_xiaperio_430.jpg")}}),e._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://jmeter.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache JMeter"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("全栈性能测试修理宝典 J\b\bMeter实战")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/KerryZhu/article/details/3515714",target:"_blank",rel:"noopener noreferrer"}},[e._v("负载测试、压力测试和性能测试的异同"),r("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=s.exports}}]);