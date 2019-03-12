# 服务器

::: tip 提示

* 编程语言：Java
* 版本：JDK 8
* 框架：Spring Boot 2.1.3.RELEASE, Spring Cloud Greenwich.RELEASE
:::

## 准备

* Linux
* [Nginx](/component/nginx.md)
* [MySQL](/component/mysql.md)
* [Oracle](/component/oracle.md)
* [Redis](/component/redis.md)
* [Mongo](/component/mongo.md)
* [RabbitMQ](/component/rabbitmq.md)
* [ActiveMQ](/component/activemq.md)
* [Zookeeper](/component/zookeeper.md)
* [AliyunOSS](/component/aliyunoss.md)
* [ELK](/other/elk.md)

::: tip 提示

* Linux无特殊系统版本要求，Ubuntu或者CentOS均可。建议配置 16核，64G。
* MySQL/Oracle二选其一，无特殊版本要求，建议最新稳定版。
* Redis无特殊版本要求，建议最新稳定版。
* RabbitMQ/ActiveMQ二选其一，无特殊版本要求，建议最新稳定版
* Zookeeper，无特殊版本要求，建议最新稳定版
:::

## 架构

支持多种架构，可任选其一
<!-- TODO: 高并发、高可用、易伸缩、可扩展、安全 -->

### 单体架构

![单体架构](/xiaper.io/architechture-sole.png)

### 分布式架构

* 中小企业
![分布式架构](/xiaper.io/architechture-cluster.png)

* 大型企业
![分布式架构2](/xiaper.io/architechture-cluster2.png)

### 微服务架构

* 中小企业
![微服务架构](/xiaper.io/architechture-service.png)

* 大型企业
![微服务架构2](/xiaper.io/architechture-service2.png)

## 部署

单体架构不推荐，分布式架构和微服务架构整体类似，我们下文主要以讲解分布式架构为主。

::: tip 提示
支持多种部署方式，可任选其一

* Jar
* War
* Maven
* Docker
:::

<!-- TODO: ### 源码 -->
<!-- TODO: War -->
<!-- TODO: ### Docker -->
<!-- TODO:开发vuepress插件：支持客服和聊天 -->

### 配置

::: tip 提示

* 默认开发工具使用IntelliJ IDEA, 您也可以使用Spring Tool Suite或者Eclipse，根据您的喜好
* 基于Maven作为项目管理工具
:::

<!-- 
首先到[starter](https://start.spring.io/)创建初始化Maven项目, 如图：
![start-spring-project](/xiaper.io/start-spring-project.jpg) 
-->

首先到[Github](https://github.com/xiaper/server)下载Server，然后用IDEA打开。找到application-dev.properties文件，如图：
<img :src="$withBase('/application-dev.jpg')" style="width:350px;"/>

修改配置参数：

数据库：[MySQL](./component/mysql.md)

``` bash
# MySQL 8
#spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
#spring.datasource.url=jdbc:mysql://127.0.0.1:3306/xiaper?serverTimezone=GMT%2B8&useUnicode=true&autoReconnect=true&characterEncoding=utf8&useSSL=true
# MySQL 5.7
#spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/xiaper?autoReconnect=true&characterEncoding=utf8&useSSL=true
spring.datasource.username=root
spring.datasource.password=
```

缓存：[Redis](./component/redis.md)

``` bash
# Redis
# redis缓存
spring.cache.type=Redis
#
spring.redis.database=1
# Redis服务器地址
spring.redis.host=127.0.0.1
# Redis服务器连接端口
spring.redis.port=6379
# Redis服务器连接密码（默认为空）
spring.redis.password=
# 连接池最大连接数（使用负值表示没有限制）
#spring.redis.pool.max-active=8
# 连接池最大阻塞等待时间（使用负值表示没有限制）
#spring.redis.pool.max-wait=-1
# 连接池中的最大空闲连接
#spring.redis.pool.max-idle=8
# 连接池中的最小空闲连接
#spring.redis.pool.min-idle=0
# 连接超时时间（毫秒）
#spring.redis.timeout=0
```

消息队列：[RabbitMQ](./component/rabbitmq.md)

``` bash
# RabbitMQ
spring.rabbitmq.host=127.0.0.1
spring.rabbitmq.port=5672
# 自行创建管理员账号
spring.rabbitmq.username=管理员用户名
spring.rabbitmq.password=管理员密码
spring.rabbitmq.stomp.port=61613
# 自行创建访客账号
spring.rabbitmq.stomp.login=stomp_web
spring.rabbitmq.stomp.passcode=stomp_web
```

分布式锁：[Zookeeper](./component/zookeeper.md)

``` bash
# 注意：修改为真实值
zk.url=127.0.0.1:2181
```

上传图片、语音文件等到阿里云，[AliyunOSS](./component/aliyunoss.md)

``` bash
# AliyunOSS(可选)
aliyun.access.key.id=您的osskeyid
aliyun.access.key.secret=您的osskeysecret
# 阿里云OSS服务相关配置
# OSS的endpoint,这里是华南地区(也就是深圳)
aliyun.oss.endpoint=您的地址，如：https://oss-cn-shenzhen.aliyuncs.com
# 需要保留尾部的"/"
aliyun.oss.base.url=您的地址：https://bytedesk.oss-cn-shenzhen.aliyuncs.com/
# 这是创建的bucket
aliyun.oss.bucket.name=您的bucket,如：bytedesk
# 这里已经把自己的域名映射到bucket地址了。需要设置域名绑定，设置域名CNAME（暂不使用）
aliyun.oss.img.domain=您的bucket域名：oss.bytedesk.com
```

发送邮件通知，[Email](./component/email.md)

``` bash
spring.mail.host=smtp.163.com
#spring.mail.port=25
spring.mail.username=邮箱地址，如：bytedesk@163.com
# 授权码，网易邮箱需要用授权码登录
spring.mail.password=授权码
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.properties.mail.smtp.starttls.required=true
spring.mail.default-encoding=UTF-8
#SSL证书Socket工厂
spring.mail.properties.mail.smtp.socketFactory.class=javax.net.ssl.SSLSocketFactory
#使用SMTPS协议465端口
spring.mail.properties.mail.smtp.socketFactory.port=465
#显示在收件人邮箱里面的发件人名称
spring.mail.self.username=邮箱地址
```

微信开放平台

``` bash
# 微信开放平台：第三方平台(可选)
wechat.open.componentAppId=
wechat.open.componentSecret=
wechat.open.componentToken=
wechat.open.componentAesKey=
```

### 数据库

* 创建数据库，编码选择：utf8mb4_general_cli
![create_database](/xiaper.io/create_database.png)
* 初始化数据库, 导入sql文件：[xiaper_mysql.sql](https://github.com/xiaper/server/blob/master/sql/xiaper_mysql.sql)

### 运行

直接点击IDEA运行


<!-- 
## 其他

### 关于图片、文件、语音、视频消息

### 关于业务系统账号体系与IM账号体系整合 
-->
