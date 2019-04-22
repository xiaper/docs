# JMeter

::: tip

* 负载测试(Load Testing): 通过改变系统负载方式、增加负载等来发现系统中所存在的性能问题。负载测试是一种测试方法，可以为性能测试、压力测试所采用。负载测试的加载方式也有很多种，可以根据测试需要来选择。
* 性能测试(Performance Testing): 为获取或验证系统性能指标而进行测试。多数情况下，性能测试会在不同负载情况下进行。
* 压力测试(Stress Testing, 又称强度测试): 通常是在高负载情况下来对系统的稳定性进行测试，更有效地发现系统稳定性的隐患和系统在负载峰值的条件下功能隐患等。
* 功能测试: 测试系统各项功能是否正常工作
:::

系统是否具有高性能的运行特征，不仅取决于系统本身的设计和程序算法，而且取决于系统的运行环境。系统的运行环境会依赖于一些关键因素，例如：

* 系统架构，如分布式服务器集群还是集中式主机系统等。
* 硬件配置，如服务器的配置，CPU、内存等配置越高，系统的性能会越好。
* 网络带宽，随着带宽的提高，客户端访问服务器的速度会有较大的改善。
* 支撑软件的选定，如选定不同的数据库管理系统（Oracle、MySQL等）和web应用服务器（Tomcat、GlassFish、Jboss、WebLogic等），对应用系统的性能都有影响。
* 外部负载，同时有多少个用户连接、用户上载文件大小、数据库中的记录数等都会对系统的性能有影响。一般来说，系统负载越大，系统的性能会降低。

## 负载测试

## 性能测试

## 压力测试

## 功能测试

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
./jmeter -g /Users/ningjinpeng/Desktop/JMeterTestPlans/HTTP请求-hello.csv -o /Users/ningjinpeng/Desktop/JMeterTestPlans/HTMLReports
```

## 参考

* [Apache JMeter](https://jmeter.apache.org/)
* [负载测试、压力测试和性能测试的异同](https://blog.csdn.net/KerryZhu/article/details/3515714)
