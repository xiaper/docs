# ElasticSearch

::: tip 提示
可选组件, 基于spring boot 2.3.x
用途：

* 日志管理
:::

## 安装

<!-- * [下载](https://www.elastic.co/downloads/elasticsearch) -->
<!-- * [下载v6.2](https://www.elastic.co/guide/en/elasticsearch/reference/6.2/zip-targz.html) -->
* [下载v7.6.2](https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.6.2-linux-x86_64.tar.gz)
* [推荐-国内镜像](https://www.newbe.pro/Mirrors/Mirrors-Elasticsearch/)

解压

```bash
unzip elasticsearch-7.6.2.zip
```

默认elasticsearch禁止root运行, 所有需要添加用户

```bash
groupadd elsearch
useradd elsearch -g elsearch -p elasticsearch
```

更改文件夹及内部文件的所属用户及组为elsearch:elsearch

```bash
chown -R elsearch:elsearch elasticsearch-7.6.2
```

如果默认目录为/root/elasticsearch-7.6.2/, 需要迁移到/home/elasticsearch-7.6.2/

```bash
cd /home
mv /root/elasticsearch-7.6.2/ .
cd elasticsearch-7.6.2/
```

修改 max file descriptors

```bash
su root
vi /etc/security/limits.conf
# 文件末尾添加
elsearch soft nofile 65536
elsearch hard nofile 65536
```

修改 max_map_count

```bash
vi /etc/sysctl.conf
# 添加下面配置：
vm.max_map_count=655360
# 并执行命令：
sysctl -p
```

开启远程访问

```bash
vi config/elasticsearch.yml
# 修改为
cluster.name: elasticsearch
network.host: 0.0.0.0
# 防止默认使用阿里云内网ip
network.publish_host: 外网ip
# 添加配置
node.name: "node-1"
discovery.seed_hosts: ["127.0.0.1", "[::1]"]
cluster.initial_master_nodes: ["node-1"]
# 开启跨域访问支持，默认为false（可选）
http.cors.enabled: true
# 跨域访问允许的域名地址，(允许所有域名)以上使用正则（可选）
http.cors.allow-origin: /.*/
http.cors.allow-headers: Authorization
xpack.security.enabled: true
xpack.security.transport.ssl.enabled: true
```

中文分词(可选)

* [ik帮助文档](https://github.com/medcl/elasticsearch-analysis-ik)
* [下载中文分词v7.6.2](https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.6.2/elasticsearch-analysis-ik-7.6.2.zip)

```bash
# 安装方法一
cd /home/elasticsearch-7.6.2/plugins
mkdir ik
cd ik
# 上传elasticsearch-analysis-ik-7.6.2.zip到ik目录，并解压
unzip elasticsearch-analysis-ik-7.6.2.zip
# 或 安装方法二
cd /home/elasticsearch-7.6.2
./bin/elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.6.2/elasticsearch-analysis-ik-7.6.2.zip
# 重启elasticsearch
```

切换到elsearch用户，并启动

```bash
su elsearch
# 前台启动：
./bin/elasticsearch
# 后台启动：
./bin/elasticsearch -d
# 退出
exit
```

用户授权

```bash
# 设置用户名/密码
./bin/elasticsearch-setup-passwords interactive
# 按提示设置密码
```

浏览器中打开

```bash
# 其中：127.0.0.1替换为真实服务器ip
http://127.0.0.1:9200/
# 端口9200用于rest api接口，9300用于集群结点之间通信
```

## 项目中配置

项目pom.xml中添加

```bash
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-elasticsearch</artifactId>
</dependency>
```

项目application.properties中添加

```bash
spring.data.elasticsearch.cluster-name=elasticsearch
spring.data.elasticsearch.repositories.enabled=true
spring.data.elasticsearch.cluster-nodes=127.0.0.1:9300
#
spring.elasticsearch.rest.uris=127.0.0.1:9200
spring.elasticsearch.rest.read-timeout=10000
spring.elasticsearch.rest.username=
spring.elasticsearch.rest.password=
```

## 常见问题

本地测试报错

```shell
flood stage disk watermark [95%] exceeded on [nCxquc7PTxKvs6hLkfonvg][nCxquc7][/usr/local/var/lib/elasticsearch/nodes/0] free: 15.3gb[4.1%], all indices on this node will be marked read-only
```

解决方法

```shell
curl -XPUT -H "Content-Type: application/json" http://localhost:9200/_cluster/settings -d '{ "transient": { "cluster.routing.allocation.disk.threshold_enabled": false } }'
curl -XPUT -H "Content-Type: application/json" http://localhost:9200/_all/_settings -d '{"index.blocks.read_only_allow_delete": null}'
```

## 参考
