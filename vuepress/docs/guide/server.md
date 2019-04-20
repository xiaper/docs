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
* MySQL/Oracle二选其一，无特殊版本要求，建议最新稳定版，默认支持MySQL
* Redis无特殊版本要求，建议最新稳定版。
* RabbitMQ/ActiveMQ二选其一，无特殊版本要求，建议最新稳定版，默认支持RabbitMQ
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

<!-- ## 部署 -->

单体架构不推荐，分布式架构和微服务架构整体类似，我们下文主要以讲解分布式架构为主。

::: tip 提示
支持多种部署方式，可任选其一

* Jar：支持直接运行jar
* War：支持war包放到Tomcat/WebLogic等容器中
* Maven：支持将虾婆通过maven或gradle方式集成到现有项目中, [maven](https://mvnrepository.com/artifact/io.xiaper)
* Docker：支持docker部署 TODO
:::

<!-- TODO: ### 源码 -->
<!-- TODO: War -->
<!-- TODO: ### Docker -->
<!-- TODO:开发vuepress插件：支持客服和聊天 -->

<!-- ### 单体部署 -->

#### 安装[jdk8](https://github.com/Bytedesk/bytedesk-server/wiki/java)

#### [下载](https://github.com/Bytedesk/bytedesk-server/releases)

#### 解压

目录结构

``` bash
.
├─ README.md
├─ config
│  └─ application.properties
├─ start.sh
└─ xiaper-spring-boot-sample-webmvc-2.1.5-SNAPSHOT.jar
```

#### 修改配置config/application.properties，将以下值均修改为自定义服务器配置

* MySQL

``` bash
# mysql 5.7
#spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/数据库名?autoReconnect=true&characterEncoding=utf8&useSSL=true&serverTimezone=GMT%2B8
spring.datasource.username=root
spring.datasource.password=
```

* Redis

``` bash
# redis缓存
spring.cache.type=Redis
spring.redis.database=0
# Redis服务器地址
spring.redis.host=
# Redis服务器连接端口
spring.redis.port=6379
# Redis服务器连接密码（默认为空）
spring.redis.password=
```

* 上传文件

支持服务器本地存储、阿里云OSS、腾讯云对象存储三种存储方式，其中本地存储不支持集群，下面说明以腾讯云为例

``` bash
# 腾讯云cos
upload.type=tencent
# 创建bucket并需要在此bucket下创建文件夹：apns/development(二级文件夹), apns/production(二级文件夹), avatars, images, voices, files
# 存储桶所属地域
tencent.bucket.location=
# 存储桶名称
tencent.bucket.name=
# 访问域名
tencent.bucket.domain=

#API密钥管理获取
tencent.appid=
tencent.secretid=
tencent.secretkey=
```

* RabbitMQ

``` bash
spring.rabbitmq.host=127.0.0.1
spring.rabbitmq.port=5672
spring.rabbitmq.username=用户名
spring.rabbitmq.password=密码
spring.rabbitmq.stomp.port=61613
spring.rabbitmq.stomp.login=stomp_web
spring.rabbitmq.stomp.passcode=stomp_web
```

* ZooKeeper

``` bash
zk.url=127.0.0.1:2181
```

* 上传到服务器
* 修改start.sh权限为可执行权限，如：

``` bash
chmod 777 start.sh
```

* 启动：

``` bash
./start.sh
```

* 查看是否启动成功

``` bash
方法1：
  等待5分钟后，执行 netstat -ntlp, 查看8000端口号是否启动，如有，则启动成功

方法2：
  浏览器中输入 http://ip:8000/hello 查看是否有返回，如有，则启动成功

其中：ip为此台服务器地址
```

#### 修改nginx负载均衡配置，指向此服务器地址

客户端均通过nginx访问rest接口，nginx需要支持https和websocket, 具体可参考[Nginx](/component/nginx.md)

#### 如需配置集群，可在多台机器上重复上述步骤即可

#### 集群扩容，可在新增机器上重复上述步骤即可

#### 后续新版升级步骤

注意：为了不影响集群整体可用性，建议一台一台升级，也即只有第一台升级成功之后，再按照下述步骤升级第二台

``` bash
查看进程：netstat -ntlp，找到8000对应进程号
杀掉进程：kill -9 进程号
上传新版：jar文件
启动：./start.sh
```

### 安卓端

* 参考demo中：自定义服务器
* REST服务器为nginx地址
* 其中消息服务器地址为RabbitMQ服务器地址, 如搭建有haproxy则填写haproxy地址

### iOS端

* 参考demo中：自定义服务器
* REST服务器为nginx地址
* 其中消息服务器地址为RabbitMQ服务器地址, 如搭建有haproxy则填写haproxy地址

### web端

* 修改js/data.js中默认HOST地址为nginx地址

<!-- ### 快速集群部署 -->

<!-- ::: tip 提示

* 默认开发工具使用IntelliJ IDEA, 您也可以使用Spring Tool Suite或者Eclipse，根据您的喜好
* 基于Maven作为项目管理工具
::: -->

<!-- 
## 其他

### 关于图片、文件、语音、视频消息

### 关于业务系统账号体系与IM账号体系整合 
-->
