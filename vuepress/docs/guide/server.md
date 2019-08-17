# Server

::: tip 提示

* 编程语言：Java
* 版本：JDK 8
* 框架：Spring Boot 2.x
* 支持分布式集群、跨机房部署
:::

## 下载

* [Github](https://github.com/xiaper/server)

## 准备

<!-- * Linux -->
<!-- * [Nginx](/component/nginx.md) -->
* [MySQL](/component/mysql.md)
<!-- * [Oracle](/component/oracle.md) -->
* [Redis](/component/redis.md)
<!-- * [Mongo](/component/mongo.md) -->
<!-- * [RabbitMQ](/component/rabbitmq.md) -->
<!-- * [ActiveMQ](/component/activemq.md) -->
<!-- * [Zookeeper](/component/zookeeper.md) -->
<!-- * [AliyunOSS](/component/aliyunoss.md) -->
<!-- * [ELK](/other/elk.md) -->

::: tip 提示

* Linux无特殊系统版本要求，Ubuntu或者CentOS均可。建议配置 16核64G内存。
* MySQL/Oracle二选其一，无特殊版本要求，建议最新稳定版，默认支持MySQL
* Redis无特殊版本要求，建议最新稳定版。
<!-- * RabbitMQ/ActiveMQ二选其一，无特殊版本要求，建议最新稳定版，默认支持RabbitMQ -->
:::

<!-- ::: tip 提示
支持多种部署方式，可任选其一

* Jar：支持直接运行jar
* War：支持war包放到Tomcat/WebLogic等容器中
* Maven：支持将虾婆通过maven或gradle方式集成到现有项目中, [maven](https://mvnrepository.com/artifact/io.xiaper)
* Docker：支持docker部署 TODO
::: -->

<!-- TODO: ### 源码 -->
<!-- TODO: War -->
<!-- TODO: ### Docker -->
<!-- TODO:开发vuepress插件：支持客服和聊天 -->

<!-- ### 单体部署 -->

## 配置

### [JDK8安装](/other/java.md)

### [下载虾婆服务器](https://github.com/Bytedesk/bytedesk-server/releases)

### 解压

目录结构

``` bash
.
├─ README.md
├─ config
│  └─ application.properties
├─ start.sh
└─ xiaper-spring-boot-sample-webmvc-2.1.5-SNAPSHOT.jar
```

<!-- ### [Nginx](/component/nginx.md)

需要配置负载均衡以便支持集群配置 和 websocket

### [MySQL](/component/mysql.md)

``` bash
# 支持单体，同时支持多数据源、读写分离配置
# mysql 5.7
#spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/数据库名?autoReconnect=true&characterEncoding=utf8&useSSL=true&serverTimezone=GMT%2B8
spring.datasource.username=root
spring.datasource.password=
```

### [Redis](/component/redis.md)

``` bash
# 支持单体，同时支持集群配置
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

### [RabbitMQ](/component/rabbitmq.md)

``` bash
# 支持单体，同时支持集群配置
# 如果通过HAProxy连接，则此处请配置Haproxy地址
spring.rabbitmq.host=127.0.0.1
spring.rabbitmq.port=5672
spring.rabbitmq.username=用户名
spring.rabbitmq.password=密码
spring.rabbitmq.stomp.port=61613
spring.rabbitmq.stomp.login=stomp_web
spring.rabbitmq.stomp.passcode=stomp_web
```

### 上传文件

支持服务器本地存储、阿里云OSS、腾讯云对象存储三种存储方式，其中本地存储不支持集群

上传腾讯云

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

上传阿里云OSS

``` bash
# 阿里云OSS
upload.type=aliyun

aliyun.access.key.id=
aliyun.access.key.secret=

# 阿里云OSS服务相关配置
# OSS的endpoint,这里是华南地区(也就是深圳)
aliyun.oss.endpoint=
#
aliyun.oss.base.url=
# 这是创建的bucket
aliyun.oss.bucket.name=
# 这里已经把自己的域名映射到bucket地址了。需要设置域名绑定，设置域名CNAME（暂不使用）
aliyun.oss.img.domain=
```

* 上传到服务器
* 修改start.sh权限为可执行权限，如：

``` bash
chmod 777 start.sh
```

### 启动

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

## 前端

### 安卓端

* 参考demo中：自定义服务器
* REST服务器为nginx地址
* 其中消息服务器地址为RabbitMQ服务器地址, 如通过haproxy连接则填写haproxy地址

### iOS端

* 参考demo中：自定义服务器
* REST服务器为nginx地址
* 其中消息服务器地址为RabbitMQ服务器地址, 如通过haproxy连接则填写haproxy地址

### web端

* 修改js/data.js中默认HOST地址为nginx地址 -->

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

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考
