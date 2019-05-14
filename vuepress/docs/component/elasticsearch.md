# ElasticSearch

::: tip
可选组件
:::

TODO: 部署、配置

- [下载](https://www.elastic.co/downloads/elasticsearch)

默认elasticsearch禁止root运行，需要修改如下, 注:解压文件夹/alidata/elastic/elasticsearch-6.3.0

- 默认端口：9200, 浏览器打开：http://39.108.244.244:9200
- [参考](https://blog.csdn.net/lahand/article/details/78954112)
- 创建elsearch用户组及elsearch用户

```shell
groupadd elsearch
useradd elsearch -g elsearch -p elasticsearch
```

- 更改elastic文件夹及内部文件的所属用户及组为elsearch:elsearch

```shell
cd /alidata/
chown -R elsearch:elsearch elastic
```

- 切换到elsearch用户再启动

```shell
cd /alidata/elastic/elasticsearch-6.3.0
su elsearch 
./bin/elasticsearch
```

### 常用命令

- 切换用户：su elsearch 
- 启动： ./bin/elasticsearch 
- 后台启动： ./bin/elasticsearch -d

### 修改 max file descriptors 和 max_map_count

- su root
- vi /etc/security/limits.conf 
- 添加

```shell
elsearch soft nofile 65536
elsearch hard nofile 65536
```

- vi /etc/sysctl.conf
- 添加下面配置：

```shell
vm.max_map_count=655360
```

- 并执行命令：

```shell
sysctl -p
```

### 开启远程访问

- In config/elasticsearch.yml put

```shell
network.host: 0.0.0.0
```

## 参考
