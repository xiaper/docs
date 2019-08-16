# RocketMQ

::: tip 提示
消息队列中间件（简称消息中间件）是指利用高效可靠的消息传递机制进行与平台无关的数据交流，并基于数据通信来进行分布式系统的集成。通过提供消息传递和消息排队模型，它可以在分布式环境下提供应用解耦、弹性伸缩、冗余存储、流量削峰、异步通信、数据同步等等功能，其作为分布式系统架构中的一个重要组件，有着举足轻重的地位。
:::

## 安装

- [下载](https://rocketmq.apache.org/dowloading/releases/)

```bash
# 解压
cd rocketmq-all-4.5.1-bin-release
# 启动 Name Server
nohup sh bin/mqnamesrv &
# 查看 Name Server 启动log
tail -f ~/logs/rocketmqlogs/namesrv.log
# 启动 Broker
nohup sh bin/mqbroker -n localhost:9876 &
# 查看 Broker log
tail -f ~/logs/rocketmqlogs/broker.log
```

```bash
# 停止 Name Server
sh bin/mqshutdown broker
# 停止 Broker
sh bin/mqshutdown namesrv
```

## 对接

## 参考

- [Apache RocketMQ](https://rocketmq.apache.org/)
