(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{317:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" MySQL")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("MySQL 和 Oracle 二选其一")])]),s._v(" "),t("p",[s._v("支持最新8.0以及5.7")]),s._v(" "),t("h2",{attrs:{id:"配置-可选"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-可选","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置(可选)")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://dev.mysql.com/downloads/repo/apt/",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载mysql-apt-config_0.8.12-1_all.deb"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("- "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg -i mysql-apt-config_0.8.10-1_all.deb\n- 弹出配置界面，选择mysql-5.7, 选择ok\n- "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n- "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认密码为空, 需要设置密码, 暂定为: password")]),s._v("\n- mysql -u root\n- use mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n- update user "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PASSWORD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" where User"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n- flush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启远程登录//mysql 远程连接")]),s._v("\n- GRANT ALL PRIVILEGES ON  *.*  TO  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),s._v(" WITH GRANT OPTION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n- flush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果要用sqlyog远程登录, 需要修改/etc/mysql/mysql.conf.d/mysqld.cnf , 注释掉bind-address = 127.0.0.1 (可选)")]),s._v("\n- "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("ul",[t("li",[s._v("创建数据库，可自定义数据库名，编码选择：utf8mb4_unicode_cli，例如：\n"),t("img",{attrs:{src:"/xiaper.io/image/create_database.png",alt:"create_database"}})]),s._v(" "),t("li",[s._v("初始化数据库, 导入sql文件："),t("a",{attrs:{href:"https://github.com/xiaper/server/blob/master/sql/xiaper_mysql.sql",target:"_blank",rel:"noopener noreferrer"}},[s._v("xiaper_mysql.sql"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认账号")]),s._v("\n企业号：vip\n用户名：2939499399@qq.com\n密码：123456\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("命令行创建")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建数据库")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("CREATE DATABASE bytedesk CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用数据库")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("use bytedesk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入.sql文件")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("source /var/local/bytedesk_20190329.sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"spring-boot-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-配置","aria-hidden":"true"}},[s._v("#")]),s._v(" Spring Boot 配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql 8")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#spring.datasource.url=jdbc:mysql://ip:3306/xiaper?serverTimezone=GMT%2B8&useUnicode=true&autoReconnect=true&characterEncoding=utf8&useSSL=true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql 5.7")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#spring.datasource.driver-class-name=com.mysql.jdbc.Driver")]),s._v("\nspring.datasource.url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jdbc:mysql://127.0.0.1:3306/xiaper?autoReconnect"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("characterEncoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("useSSL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\nspring.datasource.username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\nspring.datasource.password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("你的密码\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"支持jndi数据源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持jndi数据源","aria-hidden":"true"}},[s._v("#")]),s._v(" 支持JNDI数据源")]),s._v(" "),t("p",[s._v("如果想使用Tomcat或者WebLogic的数据源，则不需要配置"),t("code",[s._v("spring.datasource.url")]),s._v("等参数，只需要配置"),t("code",[s._v("spring.datasource.jndi-name")]),s._v("为JNDI的name即可，如：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("spring.datasource.jndi-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("java:jdbc/mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"读写分离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读写分离","aria-hidden":"true"}},[s._v("#")]),s._v(" 读写分离")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("dependency"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("com.alibaba"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("druid-spring-boot-starter"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("1.1.16"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/dependency"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("spring.datasource.druid.write.url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jdbc:mysql://localhost:3306/bytedesk?autoReconnect"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("characterEncoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("useSSL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("serverTimezone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("GMT%2B8\nspring.datasource.druid.write.username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\nspring.datasource.druid.write.password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\nspring.datasource.druid.read.url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jdbc:mysql://localhost:3306/bytedesk?autoReconnect"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("characterEncoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("useSSL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("serverTimezone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("GMT%2B8\nspring.datasource.druid.read.username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\nspring.datasource.druid.read.password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 配置读写分离数据源\n * @author bytedesk.com on 2019/4/11\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Configuration")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DruidDataSourceConfig")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * 写数据库连接配置\n   */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Primary")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Bean")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ConfigurationProperties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spring.datasource.druid.write"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" DataSource "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dataSourceWrite")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" DruidDataSourceBuilder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * 读数据库连接配置\n   */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Bean")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ConfigurationProperties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spring.datasource.druid.read"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" DataSource "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dataSourceRead")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" DruidDataSourceBuilder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("h2",{attrs:{id:"mysql高可用架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql高可用架构","aria-hidden":"true"}},[s._v("#")]),s._v(" MySQL高可用架构")]),s._v(" "),t("p",[s._v("主从复制可以使MySQL数据库主服务器的主数据库，复制到一个或多个MySQL从服务器从数据库，默认情况下，复制异步; 根据配置，可以复制数据库中的所有数据库，选定的数据库或甚至选定的表。")]),s._v(" "),t("h2",{attrs:{id:"mysql中主从复制的优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql中主从复制的优点","aria-hidden":"true"}},[s._v("#")]),s._v(" MySQL中主从复制的优点")]),s._v(" "),t("h3",{attrs:{id:"横向扩展解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#横向扩展解决方案","aria-hidden":"true"}},[s._v("#")]),s._v(" 横向扩展解决方案")]),s._v(" "),t("p",[s._v("在多个从库之间扩展负载以提高性能。在这种环境中，所有写入和更新在主库上进行。但是，读取可能发生在一个或多个从库上。该模型可以提高写入的性能（由于主库专用于更新），同时在多个从库上读取，可以大大提高读取速度。")]),s._v(" "),t("h3",{attrs:{id:"数据安全性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据安全性","aria-hidden":"true"}},[s._v("#")]),s._v(" 数据安全性")]),s._v(" "),t("p",[s._v("由于主库数据被复制到从库，从库可以暂停复制过程，可以在从库上运行备份服务，而不会破坏对应的主库数据。")]),s._v(" "),t("h3",{attrs:{id:"分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分析","aria-hidden":"true"}},[s._v("#")]),s._v(" 分析")]),s._v(" "),t("p",[s._v("可以在主库上创建实时数据，而信息分析可以在从库上进行，而不会影响主服务器的性能。")]),s._v(" "),t("h3",{attrs:{id:"长距离数据分发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#长距离数据分发","aria-hidden":"true"}},[s._v("#")]),s._v(" 长距离数据分发")]),s._v(" "),t("p",[s._v("可以使用复制创建远程站点使用的数据的本地副本，而无需永久访问主库。")]),s._v(" "),t("h2",{attrs:{id:"准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),t("ul",[t("li",[s._v("两台Linux服务器(本说明基于Ubuntu16.04)")]),s._v(" "),t("li",[s._v("安装MySQL相同版本")])]),s._v(" "),t("h2",{attrs:{id:"主从复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从复制","aria-hidden":"true"}},[s._v("#")]),s._v(" 主从复制")]),s._v(" "),t("p",[s._v("第一步")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# master: 外网ip: 47.98.54.86 内网ip: 172.16.81.2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/mysql/mysql.conf.d/mysqld.cnf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注释掉bind-address = 127.0.0.1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#需要备份的数据库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# binlog-do-db=bytedesk")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不需要备份的数据库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# binlog-ignore-db=mysql")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启二进制日志功能，可以随便取，最好有含义（关键就是这里了）")]),s._v("\nlog-bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql-bin\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置server_id，一般设置为IP,注意要唯一")]),s._v("\nserver_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入命令console")]),s._v("\nmysql -u root -p\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建数据同步用户，并赋予权限")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CREATE USER "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bytedesk'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" GRANT REPLICATION SLAVE ON *.* TO "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bytedesk'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启Mysqld服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("第二步")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# slave: 外网ip: 47.99.38.99, 内网ip: 172.16.81.1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/mysql/mysql.conf.d/mysqld.cnf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# log-bin=mysql-bin   #[可选]启用二进制日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置server_id，一般设置为IP,注意要唯一")]),s._v("\nserver_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("第三步")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录 master console")]),s._v("\nmysql -u root -p\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show master status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("第四步")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录 slave console")]),s._v("\nmysql -u root -p\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据第三步中的信息，修改下面命令")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" change master to master_host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'172.16.81.2'")]),s._v(", master_user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bytedesk'")]),s._v(", master_password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),s._v(", master_port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("3306, master_log_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql-bin.000001'")]),s._v(", master_log_pos"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0, master_connect_retry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("30"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 slave 从库")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" start slave"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 slave 从库")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show slave status\\G"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若Slave_IO_Running和Slave_SQL_Running均为Yes，则表示连接正常。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("第五步")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试")]),s._v("\n在master执行插入、更新、删除等操作，在slave查看是否同步\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("常用命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看主服务器的运行状态")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show master status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看从服务器主机列表")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show slave hosts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取binlog文件列表")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show binary logs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只查看第一个binlog文件的内容")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show binlog events"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定binlog文件的内容")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show binlog events "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql-bin.000001'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动从库复制线程")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" START SLAVE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止从库复制线程")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" STOP SLAVE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),s._v(" "),t("h2",{attrs:{id:"微信公众号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号","aria-hidden":"true"}},[s._v("#")]),s._v(" 微信公众号")]),s._v(" "),t("img",{staticStyle:{width:"250px"},attrs:{src:s.$withBase("/image/qrcode_xiaperio_430.jpg")}}),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://hub.docker.com/_/mysql",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方指南"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://dev.mysql.com/downloads/repo/apt/",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-sql.html#boot-features-connecting-to-a-jndi-datasource",target:"_blank",rel:"noopener noreferrer"}},[s._v("Connection to a JNDI DataSource"),t("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);