# Artemis

::: tip 提示
单机版基于ArtemisMQ
:::

## 配置

``` bash
# https://activemq.apache.org/components/artemis/documentation/latest/logging.html
# https://codeaches.com/spring-boot/embedded-activemq-artemis-jms-broker
logging.level.org.apache.activemq.artemis.core.server=WARN
logging.level.org.apache.activemq.artemis.utils=WARN
logging.level.org.apache.activemq.artemis.jms=WARN
logging.level.org.apache.activemq.audit.base=WARN
logging.level.org.apache.activemq.audit.message=WARN
# ===============================
# = spring-boot-starter-artemis, 内嵌版，需要在pom中添加artemis-server
# ===============================
spring.artemis.mode=embedded

```

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考
