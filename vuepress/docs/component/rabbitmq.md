# RabbitMQ

::: tip 提示
ActiveMQ 和 RabbitMQ 二选其一
:::

## 配置

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
- 禁用：
    ./sbin/rabbitmq-plugins disable rabbitmq_management
- 启用mqtt：  
    ./sbin/rabbitmq-plugins enable rabbitmq_mqtt
    ./sbin/rabbitmq-plugins enable rabbitmq_web_mqtt
    ./sbin/rabbitmq-plugins enable rabbitmq_web_mqtt_examples
-禁用：
    ./sbin/rabbitmq-plugins disable rabbitmq_mqtt
    https://www.rabbitmq.com/mqtt.html
- 启用stomp:
    ./sbin/rabbitmq-plugins enable rabbitmq_web_stomp
    ./sbin/rabbitmq-plugins enable rabbitmq_web_stomp_examples
    https://www.rabbitmq.com/web-stomp.html
    测试实例： http://127.0.0.1:15670/

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

- 查看：./sbin/rabbitmqctl list_permissions -p /

```

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

## 参考
