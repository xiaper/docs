# Quartz

分布式定时任务

## 配置

pom.xml添加依赖

``` bash
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-quartz</artifactId>
</dependency>
```

导入[sql](https://github.com/quartz-scheduler/quartz/blob/master/quartz-core/src/main/resources/org/quartz/impl/jdbcjobstore/)数据库表

application.properties添加

``` bash
# https://medium.com/@ChamithKodikara/spring-boot-2-quartz-2-scheduler-integration-a8eaaf850805
# SpringBoot官方说明：https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-quartz.html
# Quartz官方文档：https://www.quartz-scheduler.org/documentation/2.3.1-SNAPSHOT/tutorials/index.html
spring.quartz.job-store-type=jdbc
# 3种模式: ALWAYS、EMBEDDED、NEVER
spring.quartz.jdbc.initialize-schema=never
spring.quartz.properties.org.quartz.jobStore.isClustered=true
spring.quartz.properties.org.quartz.scheduler.instanceName=BytedeskScheduler
spring.quartz.properties.org.quartz.scheduler.instanceId=AUTO
#spring.quartz.properties.org.quartz.scheduler.instanceIdGenerator.class=io.xiaper.schedule.util.CustomQuartzInstanceIdGenerator
spring.quartz.properties.org.quartz.jobStore.tablePrefix=QRTZ_
spring.quartz.properties.org.quartz.jobStore.class=org.quartz.impl.jdbcjobstore.JobStoreTX
spring.quartz.properties.org.quartz.jobStore.driverDelegateClass=org.quartz.impl.jdbcjobstore.StdJDBCDelegate
spring.quartz.properties.org.quartz.jobStore.clusterCheckinInterval=10000
spring.quartz.properties.org.quartz.jobStore.useProperties=false
spring.quartz.properties.org.quartz.threadPool.class=org.quartz.simpl.SimpleThreadPool
spring.quartz.properties.org.quartz.threadPool.threadCount=5
spring.quartz.properties.org.quartz.threadPool.threadPriority=5
spring.quartz.properties.org.quartz.threadPool.threadsInheritContextClassLoaderOfInitializingThread=true
```

## 集群

``` bash
spring.quartz.properties.org.quartz.jobStore.isClustered=true
```

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

- [Quartz Examples](https://github.com/quartz-scheduler/quartz/tree/master/docs/examples)
- [Quartz SQL](https://github.com/quartz-scheduler/quartz/blob/master/quartz-core/src/main/resources/org/quartz/impl/jdbcjobstore/)
