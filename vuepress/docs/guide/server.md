# 服务器

::: tip 提示

* 编程语言：Java
* 版本：JDK 8
* 框架：Spring Boot 2.1.3.RELEASE, Spring Cloud Greenwich.RELEASE
:::

## 准备

* Linux
* [Nginx](./other/nginx.md)
* [MySQL](./other/mysql.md)
* [Oracle](./other/oracle.md)
* [Redis](./other/redis.md)
* [RabbitMQ](./other/rabbitmq.md)
* [ActiveMQ](./other/activemq.md)
* [Zookeeper](./other/zookeeper.md)

::: tip 提示

* Linux无特殊系统版本要求，Ubuntu或者CentOS均可。建议配置 16核，64G。
* MySQL/Oracle二选其一，无特殊版本要求，建议最新稳定版。
* Redis无特殊版本要求，建议最新稳定版。
* RabbitMQ/ActiveMQ二选其一，无特殊版本要求，建议最新稳定版
* Zookeeper，无特殊版本要求，建议最新稳定版
:::

## 架构

支持多种架构，可任选其一

### 单体架构

![单体架构](/architechture-sole.png)

### 分布式架构

![分布式架构](/architechture-cluster.png)

![分布式架构2](/architechture-cluster2.png)

### 微服务架构

![微服务架构](/architechture-service.png)

![微服务架构2](/architechture-service2.png)

## 部署

单体架构不推荐，分布式架构和微服务架构整体类似，我们下文主要以讲解分布式架构为主。支持多种部署方式，可任选其一

### Jar/War

TODO

### Maven

TODO

### Docker

TODO
<!-- TODO:开发vuepress插件：支持客服和聊天 -->
