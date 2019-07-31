# ActiveMQ

::: tip 提示
ActiveMQ 和 RabbitMQ 二选其一
:::

## 配置

连接单台服务器

``` bash
spring.activemq.broker-url=tcp://ip:61616
spring.activemq.user=admin
spring.activemq.password=admin
spring.activemq.in-memory=true
#true表示使用连接池
spring.activemq.pool.enabled=true
#连接池最大连接数
spring.activemq.pool.max-connections=50
#
spring.activemq.host=ip
spring.activemq.stomp.port=61613
spring.activemq.stomp.login=admin
spring.activemq.stomp.passcode=admin
#默认情况下activemq提供的是queue模式，若要使用topic模式需要配置下面配置
#spring.jms.pub-sub-domain=true
spring.jms.cache.session-cache-size=5
```

## 集群

连接多台服务器

``` bash
spring.activemq.broker-url=failover:(tcp://172.18.1.1:61616,tcp://172.18.1.2:61616,tcp://172.18.1.3:61616)
```

<!-- TODO:如何搭建activemq集群 -->

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考
