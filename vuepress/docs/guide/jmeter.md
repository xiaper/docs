# 性能数据

<!-- 压测工具：Gatling vs JMeter vs The Grinder -->
<!-- ![软件测试分类](/xiaper.io/image/testing.png) -->

::: tip

* 负载测试(Load Testing): 在一定软硬件环境下，通过不断加大负载（不同虚拟用户数）来确定在满足性能指标情况下能够承受的最大用户数。简单说，可以帮我们对系统进行定容定量，找出系统性能的拐点。指标包括：TPS（Transaction Per Second, 每秒事务数）、RT（Response Time/average Response Time, 平均响应时间）、CPU Using（CPU 利用率）、Mem Using（内存使用情况）等。
* 性能测试(Performance Testing): 模拟用户负载来测试系统在负载情况下, 系统的响应时间、吞吐量等指标是否满足性能要求。
* 压力测试(Stress Testing, 又称强度测试): 模拟极限状态，就是在高负载的情况下，把系统搞坏，收集系统中的隐藏问题。
<!-- * 容量测试(Volume Test): 确定系统可处理同时在线的最大用户数。 -->
<!-- * 功能测试: 测试系统各项功能是否正常工作 -->
:::

系统是否具有高性能的运行特征，不仅取决于系统本身的设计和程序算法，而且取决于系统的运行环境。系统的运行环境会依赖于一些关键因素，例如：

* 系统架构，如分布式服务器集群还是集中式主机系统等。
* 硬件配置，如服务器的配置，CPU、内存等配置越高，系统的性能会越好。
* 网络带宽，随着带宽的提高，客户端访问服务器的速度会有较大的改善。
* 支撑软件的选定，如选定不同的数据库管理系统（Oracle、MySQL等）和web应用服务器（Tomcat、GlassFish、Jboss、WebLogic等），对应用系统的性能都有影响。
* 外部负载，同时有多少个用户连接、用户上载文件大小、数据库中的记录数等都会对系统的性能有影响。一般来说，系统负载越大，系统的性能会降低。

<!-- ## 功能测试 -->
<!-- 
API性能测试链路跟踪，查找慢的原因所在
jvm调优
单机压力测试 
-->

## 性能标准

## 准备

* [下载](https://jmeter.apache.org/download_jmeter.cgi)
* 解压
* 打开apache-jmeter-5.1.1/bin/ApacheJMeter.jar

* 创建测试计划

* 创建线程组

* 添加

* 测试Hello World

* 测试登录

* 测试发送消息

## 生成测试报告 Jmeter Report Dashboard

* 拷贝 bin/reportgenerator.properties 内容到 bin/user.properties 中
* 重启 ApacheJMeter.jar

``` bash
./jmeter -g /Users/ningjinpeng/Desktop/JMeterTestPlans/HTTP请求-hello.csv -o /Users/ningjinpeng/Desktop/JMeterTestPlans/HTMLReports-hello
./jmeter -g /Users/ningjinpeng/Desktop/JMeterTestPlans/HTTP请求-oauth.csv -o /Users/ningjinpeng/Desktop/JMeterTestPlans/HTMLReports-oauth
```

## 负载测试

## 性能测试

## 压力测试

## 监控系统

nmon

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

* [Apache JMeter](https://jmeter.apache.org/)
* 全栈性能测试修理宝典 JMeter实战
* [负载测试、压力测试和性能测试的异同](https://blog.csdn.net/KerryZhu/article/details/3515714)
