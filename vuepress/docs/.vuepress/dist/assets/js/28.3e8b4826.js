(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{315:function(s,a,t){"use strict";t.r(a);var r=t(6),e=Object(r.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"logstash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logstash","aria-hidden":"true"}},[s._v("#")]),s._v(" LogStash")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("可选组件\n用途：")]),s._v(" "),t("ul",[t("li",[s._v("日志管理")])])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.elastic.co/cn/downloads/past-releases/logstash-7-6-2",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载v7.6.2"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.newbe.pro/Mirrors/Mirrors-Logstash/",target:"_blank",rel:"noopener noreferrer"}},[s._v("推荐-国内镜像"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("unzip logstash-7.6.2.zip\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" logstash-7.6.2/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" config/logstash.yml\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#http.host: "127.0.0.1"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为")]),s._v("\nhttp.host: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("创建logstash.conf文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp config/logstash-sample.conf config/logstash.conf")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" config/logstash.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("编辑logstash.conf内容，设置访问elasticsearch用户名密码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("input "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  beats {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    port => 5044")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  }")]),s._v("\n  tcp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    mode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server"')]),s._v("\n    host "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),s._v("\n    port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 5044\n    codec "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" json_lines\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\noutput "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  elasticsearch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    hosts "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:9200"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# index => "%{[@metadata][beat]}-%{[@metadata][version]}-%{+YYYY.MM.dd}"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#user => "elastic"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#password => "changeme"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("用户授权")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置远程访问用户名/密码")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("运行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 前台运行（测试）")]),s._v("\n./bin/logstash -f config/logstash.conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后台运行（生产）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./bin/logstash -f config/logstash.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后台运行，并且输出log文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./bin/logstash -f config/logstash.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mylogstash.log 2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"项目中配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目中配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 项目中配置")]),s._v(" "),t("p",[s._v("项目pom.xml中添加")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("dependency"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("net.logstash.logback"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("logstash-logback-encoder"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("6.1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/dependency"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("在resources文件夹下面创建logback-spring.xml文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?xml version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),s._v("?"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("configuration"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("include resource"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org/springframework/boot/logging/logback/base.xml"')]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("springProperty scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"context"')]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"springAppName"')]),s._v(" source"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spring.application.name"')]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- Example "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" logging into the build folder of your project --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"LOG_FILE"')]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BUILD_FOLDER:-build}")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${springAppName}")]),s._v('"')]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("​\n\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- You can override this to have a custom pattern --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONSOLE_LOG_PATTERN"')]),s._v("\n            value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%clr(%d{yyyy-MM-dd HH:mm:ss.SSS}){faint} %clr('),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${LOG_LEVEL_PATTERN:-%5p}")]),s._v(") %clr("),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PID:- }")]),s._v("){magenta} %clr(---){faint} %clr([%15.15t]){faint} %clr(%-40.40logger{39}){cyan} %clr(:){faint} %m%n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${LOG_EXCEPTION_CONVERSION_WORD:-%wEx}")]),s._v('"')]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- Appender to log to console --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("appender name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"console"')]),s._v(" class"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ch.qos.logback.core.ConsoleAppender"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("filter class"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ch.qos.logback.classic.filter.ThresholdFilter"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- Minimum logging level to be presented "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the console logs--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("level"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("DEBUG"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/level"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/filter"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("encoder"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pattern"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CONSOLE_LOG_PATTERN}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/pattern"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("charset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("utf8"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/charset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/encoder"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/appender"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- Appender to log to "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("​\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("appender name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"flatfile"')]),s._v(" class"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ch.qos.logback.core.rolling.RollingFileAppender"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${LOG_FILE}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("rollingPolicy class"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ch.qos.logback.core.rolling.TimeBasedRollingPolicy"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("fileNamePattern"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${LOG_FILE}")]),s._v(".%d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("yyyy-MM-dd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(".gz"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/fileNamePattern"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("maxHistory"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("7"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/maxHistory"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/rollingPolicy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("encoder"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pattern"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CONSOLE_LOG_PATTERN}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/pattern"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("charset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("utf8"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/charset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/encoder"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/appender"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("appender name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logstash"')]),s._v(" class"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"net.logstash.logback.appender.LogstashTcpSocketAppender"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("destination"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("47.98.192.171:5044"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/destination"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- 日志输出编码 --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("encoder charset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),s._v(" class"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"net.logstash.logback.encoder.LoggingEventCompositeJsonEncoder"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("providers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("timestamp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("timeZone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("UTC"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/timeZone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/timestamp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pattern"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pattern"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logLevel"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%level"')]),s._v(",\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"service"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${springAppName:-}")]),s._v('"')]),s._v(",\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"trace"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%X{X-B3-TraceId:-}"')]),s._v(",\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"span"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%X{X-B3-SpanId:-}"')]),s._v(",\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"parent"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%X{X-B3-ParentSpanId:-}"')]),s._v(",\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exportable"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%X{X-Span-Export:-}"')]),s._v(",\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pid"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PID:-}")]),s._v('"')]),s._v(",\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"thread"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%thread"')]),s._v(",\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%logger{40}"')]),s._v(",\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rest"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%message"')]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/pattern"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/pattern"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/providers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/encoder"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/appender"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("root level"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"INFO"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("appender-ref ref"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"console"')]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- uncomment this to have also JSON logs --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("appender-ref ref"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logstash"')]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("appender-ref ref"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"flatfile"')]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/configuration"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")])])},[],!1,null,null,null);a.default=e.exports}}]);