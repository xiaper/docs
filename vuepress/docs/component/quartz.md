# Quartz

定时任务

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
spring.quartz.job-store-type=jdbc
# 3种模式: ALWAYS、EMBEDDED、NEVER
spring.quartz.jdbc.initialize-schema=always
#spring.quartz.properties.org.quartz.threadPool.threadCount=5
spring.quartz.properties.org.quartz.scheduler.instanceId=AUTO
#spring.quartz.properties.org.quartz.jobStore.tablePrefix=MYAPP_
#spring.quartz.properties.org.quartz.jobStore.driverDelegateClass=org.quartz.impl.jdbcjobstore.PostgreSQLDelegate
```

## 集群

``` bash
spring.quartz.properties.org.quartz.jobStore.isClustered=true
```

## 参考

- [Quartz Examples](https://github.com/quartz-scheduler/quartz/tree/master/docs/examples)
- [Quartz SQL](https://github.com/quartz-scheduler/quartz/blob/master/quartz-core/src/main/resources/org/quartz/impl/jdbcjobstore/)
