# JMeter

::: tip

* 负载测试: 这类测试使系统或者应用程序在预先设计好的极端场景下测试运行。这类测试用来评估系统或者程序在极端条件下的行为。
* 性能测试: 这种测试被用来检测系统的性能表现，包括特定情况下，系统的响应能力和稳定性。
* 压力测试: 这类测试通过载入更多的外部资源，并使系统组件超越其所设定的能力范围，试图使系统挂掉。
* 功能测试: 测试系统各项功能是否正常工作
:::

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
