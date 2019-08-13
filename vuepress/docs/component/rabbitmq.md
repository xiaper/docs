# RabbitMQ

::: tip 提示
消息队列中间件（简称消息中间件）是指利用高效可靠的消息传递机制进行与平台无关的数据交流，并基于数据通信来进行分布式系统的集成。通过提供消息传递和消息排队模型，它可以在分布式环境下提供应用解耦、弹性伸缩、冗余存储、流量削峰、异步通信、数据同步等等功能，其作为分布式系统架构中的一个重要组件，有着举足轻重的地位。
:::

## 配置

源码编译安装[Erlang](http://www.erlang.org/downloads)

``` bash
# 下载 http://www.erlang.org/downloads
tar -xzvf otp_src_21.2.tar.gz
cd otp_src_21.2
sudo apt-get install libncurses5-dev
./configure && make  
sudo make install  
```

安装[RabbitMQ](https://github.com/rabbitmq/rabbitmq-server/releases)

``` bash
- 查看最新版本：https://github.com/rabbitmq/rabbitmq-server/releases
- 注意：下载 rabbitmq-server-generic-unix-***.tar.xz 版本
- 下载：wget https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.7.8/rabbitmq-server-generic-unix-3.7.8.tar.xz
- 解压：1. xz -d ***.tar.xz; 2. tar -xvf  ***.tar
- 前台启动： ./sbin/rabbitmq-server
- 后台启动： ./sbin/rabbitmq-server -detached
- 停止运行： ./sbin/rabbitmqctl stop
- 查看状态： ./sbin/rabbitmqctl status

- 启用管理后台:
    ./sbin/rabbitmq-plugins enable rabbitmq_management
    ./sbin/rabbitmq-plugins enable rabbitmq_shovel rabbitmq_shovel_management
# - 禁用：
#     ./sbin/rabbitmq-plugins disable rabbitmq_management
- 启用mqtt：  
    ./sbin/rabbitmq-plugins enable rabbitmq_mqtt
    ./sbin/rabbitmq-plugins enable rabbitmq_web_mqtt
    # ./sbin/rabbitmq-plugins enable rabbitmq_web_mqtt_examples
# -禁用：
#     ./sbin/rabbitmq-plugins disable rabbitmq_mqtt
#     https://www.rabbitmq.com/mqtt.html
- 启用stomp:
    ./sbin/rabbitmq-plugins enable rabbitmq_web_stomp
    # ./sbin/rabbitmq-plugins enable rabbitmq_web_stomp_examples
    # https://www.rabbitmq.com/web-stomp.html
    # 测试实例： http://127.0.0.1:15670/

- 登录管理后台: http://localhost:15672, guest/guest
- 其他：https://www.rabbitmq.com/man/rabbitmqctl.8.html#set_user_tags

- 添加管理员账号：
- ./sbin/rabbitmqctl add_user 用户名 密码
- ./sbin/rabbitmqctl set_user_tags 用户名 administrator
- ./sbin/rabbitmqctl set_permissions -p "/" 用户名 ".*" ".*" ".*"

- 添加访客： ./sbin/rabbitmqctl add_user visitor visitor
- 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" visitor ".*" ".*" ".*"
- 添加ios端授权用户：./sbin/rabbitmqctl add_user mqtt_ios mqtt_ios
- 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" mqtt_ios ".*" ".*" ".*"
- 添加android端授权用户：./sbin/rabbitmqctl add_user mqtt_android mqtt_android
- 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" mqtt_android ".*" ".*" ".*"
- 添加web端授权用户：./sbin/rabbitmqctl add_user stomp_web stomp_web
- 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" stomp_web ".*" ".*" ".*"
- 添加windows端授权用户：./sbin/rabbitmqctl add_user mqtt_windows mqtt_windows
- 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" mqtt_windows ".*" ".*" ".*"
- 添加mac端授权用户：./sbin/rabbitmqctl add_user mqtt_mac mqtt_mac
- 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" mqtt_mac ".*" ".*" ".*"

- 查看：./sbin/rabbitmqctl list_permissions -p /

```

开放外网访问端口号：1883

## Spring Boot 配置文件

``` bash
#
spring.rabbitmq.host=127.0.0.1
spring.rabbitmq.port=5672
spring.rabbitmq.username=你的用户名
spring.rabbitmq.password=你的密码
#
spring.rabbitmq.stomp.port=61613
spring.rabbitmq.stomp.login=stomp_web
spring.rabbitmq.stomp.passcode=stomp_web
```

## 集群

``` bash
spring.rabbitmq.addresses=127.0.0.1:5672,127.0.0.2:5672,127.0.0.3:5672
```

<!-- TODO:如何搭建rabitmq集群 -->

## rabbitmq集群

RabbitMQ Cluster是根据Erlang的实现的。必须满足一下几个要求：

- 所有机器上，必须Erlang运行时和RabbitMQ的版本相同。（否则会不能连接到一起）
- 所有机器上，的Erlang的Cookie都相同。

``` bash
# 集群中所有机器的/etc/hosts文件中必须同时包含集群中所有机器 ip hostname
# 同步hosts, hostname可以自行修改
vi /etc/hosts
192.168.0.1 mq-master
192.168.0.2 mq-slave-01
192.168.0.3 mq-slave-02
```

``` bash
# 将任意一台服务器的~/.erlang.cookie文件同步到其他所有服务器（所有服务器必须一致，文件内容相同）
# 同步.erlang.cookie
```

``` bash
# 192.168.0.1
# 让当前rabbitmq-server的进程后台运行
./sbin/rabbitmq-server -detached
# # 启动集群
# ./sbin/rabbitmqctl start_app
 # 获得集群配置信息
./sbin/rabbitmqctl cluster_status
```

``` bash
# 192.168.0.2 && 192.168.0.3
./sbin/rabbitmq-server –detached
# ./sbin/rabbitmqctl start_app
./sbin/rabbitmqctl stop_app  #停止rabbitmq运行
./sbin/rabbitmqctl join_cluster --ram rabbit@mq-master  #加入到rabbit节点中，使用内存模式。
./sbin/rabbitmqctl start_app  #启动rabbitmq
./sbin/rabbitmqctl cluster_status  #查看状态
```

``` bash
# 在所有三台机器运行
# ["^"匹配所有]
./sbin/rabbitmqctl set_policy ha-all "^" '{"ha-mode":"all"}'
```

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

- [Distributed RabbitMQ brokers](https://www.rabbitmq.com/distributed.html)
- [Clustering Guide](https://www.rabbitmq.com/clustering.html)
- [Highly Available (Mirrored) Queues](https://www.rabbitmq.com/ha.html)
- [HAProxy](http://www.haproxy.org/)
- [KeepAlived](https://www.keepalived.org/)
- [用 HAproxy 搭建 RabbitMQ 集群](https://www.cnblogs.com/tiantiandas/p/rabbitmq_haproxy.html)
- [基于 Keepalived + HAproxy 的 RabbitMQ 高可用配置实践](https://hoxis.github.io/keepalived-haproxy-rabbitmq.html)
- [RabbitMQ分布式集群架构](https://blog.csdn.net/WoogeYu/article/details/51119101)
