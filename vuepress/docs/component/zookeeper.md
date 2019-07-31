# ZooKeeper

废弃，系统不再使用zk

## Spring Boot 配置文件

首先到[ZooKeeper](https://zookeeper.apache.org/)下载最新稳定版

``` bash
- 端口：2181、36426、8083(管理后台端口，默认8080)
- 后台启动：./bin/zkServer.sh start
- 前台启动：./bin/zkServer.sh start-foreground
- 客户端连接：./bin/zkCli.sh
- 停止：./bin/zkServer.sh stop
```

``` bash
# spring 配置, 注意：修改为真实值
zk.url=127.0.0.1:2181
```

## 集群

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考
