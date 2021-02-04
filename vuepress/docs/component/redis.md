# Redis

## 安装

``` bash
apt-get update
# 命令安装redis：
sudo apt-get install redis-server
# 查看运行状态
sudo systemctl status redis-server
# 查看版本
redis-server --version
redis-server -v
# 
redis-cli --version
redis-cli -v
# 修改密码：
vi /etc/redis/redis.conf
# 取消注释：requirepass foobared，修改密码： requirepass 你的密码
# 远程访问：添加注释 bind 127.0.0.1 ::1
# 重启: service redis restart
# 停止: service redis stop
```

``` bash
# 源码安装
wget https://download.redis.io/releases/redis-6.0.9.tar.gz
tar xzf redis-6.0.9.tar.gz
cd redis-6.0.9
make
# 如果找不到make命令，则执行：sudo apt install make 或 sudo apt install build-essential
# 修改密码：
vi ./redis.conf
取消注释：requirepass foobared，修改密码： requirepass 你的密码
远程访问：添加注释 bind 127.0.0.1 ::1
修改 daemonize no 为 daemonize yes
# 启动
./src/redis-server ./redis.conf
# 停止
./src/redis-server stop
# 命令行
./src/redis-cli
# 检查状态
# ./src/redis-cli ping
# 其他命令
# /etc/init.d/redis-server stop
# /etc/init.d/redis-server start
```

## 集群

### 架构

<img :src="$withBase('/image/redis-structure.png')" style="width:400px;"/>

### 说明

- redis支持集群最小的单位为6个实例，3个主节点，3个从节点
- redis使用源码安装方式，安装目录redis-6.0.9

### 机器

| 机器名称 | IP | 端口 |
| :----------: | :----------: | :----------: |
| master 1 | 127.0.0.1 | 7000 |
| master 2 | 127.0.0.1 | 7001 |
| master 3 | 127.0.0.1 | 7002 |
| slave 1  | 127.0.0.1 | 7003 |
| slave 2  | 127.0.0.1 | 7004 |
| slave 3  | 127.0.0.1 | 7005 |

### 配置

```bash
# 跟redis-6.0.9同级目录创建文件夹redis-cluster
mkdir redis-cluster
cd redis-cluster
# 
mkdir 7000
mkdir 7001
mkdir 7002
mkdir 7003
mkdir 7004
mkdir 7005
# 
cd 7000
vi redis.conf
# 粘贴以下内容，其余端口请修改文件中相应端口号
```

```bash
# 端口
port 7000
# 开启集群
cluster-enabled  yes
# 配置集群模式下的配置文件名称和位置,nodes.conf这个文件是集群启动后自动生成的，不需要手动配置
cluster-config-file /绝对路径/7000/nodes.conf
# 请求超时, 设置5秒够了
cluster-node-timeout 5000
# aof日志开启, 有需要就开启, 它会每次写操作都记录一条日志
appendonly yes
# redis后台运行
daemonize yes
# 密码
masterauth 密码
requirepass 密码
# 下面几项可选
# pidfile文件
pidfile /绝对路径/7000/pidfile.pid
# 本地数据库存放目录
dir /绝对路径/7000/
# 默认ip为127.0.0.1 需要改为其他节点机器可访问的ip 否则创建集群时无法访问对应的端口，无法创建集群  
# bind 192.168.0.1
#日志输出的路径及文件名称
logfile /绝对路径/7000/redis.log
```

### 启动

#### 手动启动

``` bash
cd redis-6.0.9
# 启动
./src/redis-server ../redis-cluster/7000/redis.conf
./src/redis-server ../redis-cluster/7001/redis.conf
./src/redis-server ../redis-cluster/7002/redis.conf
./src/redis-server ../redis-cluster/7003/redis.conf
./src/redis-server ../redis-cluster/7004/redis.conf
./src/redis-server ../redis-cluster/7005/redis.conf
# 停止集群中某结点
./src/redis-cli -h 127.0.0.1 -p 7000 -a 密码 shutdown
./src/redis-cli -h 127.0.0.1 -p 7001 -a 密码 shutdown
./src/redis-cli -h 127.0.0.1 -p 7002 -a 密码 shutdown
./src/redis-cli -h 127.0.0.1 -p 7003 -a 密码 shutdown
./src/redis-cli -h 127.0.0.1 -p 7004 -a 密码 shutdown
./src/redis-cli -h 127.0.0.1 -p 7005 -a 密码 shutdown
```

#### 脚本启动

创建启动脚本文件startAll.sh，内容如下：

```bash
#!/bin/bash

cd /绝对路径/redis-6.0.9
# 启动
./src/redis-server ../redis-cluster/7000/redis.conf
./src/redis-server ../redis-cluster/7001/redis.conf
./src/redis-server ../redis-cluster/7002/redis.conf
./src/redis-server ../redis-cluster/7003/redis.conf
./src/redis-server ../redis-cluster/7004/redis.conf
./src/redis-server ../redis-cluster/7005/redis.conf
```

```bash
# 增加可执行权限
chmod 777 startAll.sh
# 启动
./startAll.sh
```

创建结束脚本stopAll.sh，内容如下：

```bash
#!/bin/bash

cd /绝对路径/redis-6.0.9
# mac上停止集群中某结点
./src/redis-cli -h 127.0.0.1 -p 7000 -a 密码 shutdown
./src/redis-cli -h 127.0.0.1 -p 7001 -a 密码 shutdown
./src/redis-cli -h 127.0.0.1 -p 7002 -a 密码 shutdown
./src/redis-cli -h 127.0.0.1 -p 7003 -a 密码 shutdown
./src/redis-cli -h 127.0.0.1 -p 7004 -a 密码 shutdown
./src/redis-cli -h 127.0.0.1 -p 7005 -a 密码 shutdown
```

```bash
# 增加可执行权限
chmod 777 stopAll.sh
# 停止
./stopAll.sh
```

### 创建

#### 手动分配主从

```bash
# redis 5 及以上版本，redis3/4要使用redis-trib.rb
# 首先创建不含slaver 的集群
./src/redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 --cluster-replicas 0 -a 密码
# 手动添加slaver
# 使用创建时的cluster-master-id 或执行 `./src/redis-cli -a 密码 --cluster check 127.0.0.1:7000` 查看运行状态
# 挂载slaver
./src/redis-cli --cluster add-node 127.0.0.1:7003 127.0.0.1:7000 --cluster-slave --cluster-master-id `<cluster-master-id>` -a 密码
./src/redis-cli --cluster add-node 127.0.0.1:7004 127.0.0.1:7000 --cluster-slave --cluster-master-id `<cluster-master-id>` -a 密码
./src/redis-cli --cluster add-node 127.0.0.1:7005 127.0.0.1:7000 --cluster-slave --cluster-master-id `<cluster-master-id>` -a 密码
```

#### 自动分配主从

```bash
# redis 5 及以上版本，redis3/4要使用redis-trib.rb
./src/redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 --cluster-replicas 1 -a 密码
# 添加结点
./src/redis-cli --cluster add-node 127.0.0.1:7006 127.0.0.1:7000
# 删除结点
./src/redis-cli --cluster del-node 127.0.0.1:7000 `<node-id>`
```

### 测试

```bash
# 查看当前redis进程
ps -ef | grep redis-server
# 健康检查
./src/redis-cli -a 密码 --cluster check 127.0.0.1:7000
# 
./src/redis-cli -c -p 7000 -a 密码
# 查看相关命令
127.0.0.1:7000> cluster help
# 集群信息
127.0.0.1:7000> cluster info
# 查看结点信息
127.0.0.1:7000> cluster nodes
# 停止集群运行
127.0.0.1:7000> SHUTDOWN
# 测试存储数据
127.0.0.1:7000> set foo bar
# 测试读取数据
127.0.0.1:7000> get foo
```

## SpringBoot

``` bash
# redis缓存
spring.cache.type=Redis
```

### 单点

``` bash
# 可自选，1~16
spring.redis.database=2
# Redis服务器地址
spring.redis.host=127.0.0.1
# Redis服务器连接端口
spring.redis.port=6379
# Redis服务器连接密码（默认为空）
spring.redis.password=
# 连接池最大连接数（使用负值表示没有限制）
#spring.redis.pool.max-active=8
# 连接池最大阻塞等待时间（使用负值表示没有限制）
#spring.redis.pool.max-wait=-1
# 连接池中的最大空闲连接
#spring.redis.pool.max-idle=8
# 连接池中的最小空闲连接
#spring.redis.pool.min-idle=0
# 连接超时时间（毫秒）
#spring.redis.timeout=0
```

### Cluster

``` bash
#逗号分隔
spring.redis.cluster.nodes=127.0.0.1:7000,127.0.0.1:7001,127.0.0.1:7002,127.0.0.1:7003,127.0.0.1:7004,127.0.0.1:7005
```

## redis-shake数据迁移

```shell
# 1. 下载安装包,这个可以github的release页面找到:
wget https://github.com/alibaba/RedisShake/releases/download/release-v2.0.3-20200724/redis-shake-v2.0.3.tar.gz
# 2. 解压文件:
tar -xvf redis-shake.tar.gz
# 3. 编辑 redis-shake.conf 配置文件, 主要是更改 source, target 选项:
vim redis-shake.conf    # 注意按照普通的redis连接来更改即可;
# 4. 运行 redis-shake 同步脚本:
./redis-shake.linux64 -type=rump -conf=redis-shake.conf
# 或
./start.sh redis-shake.conf rump
```

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

- [Redis cluster tutorial-官方](https://redis.io/topics/cluster-tutorial)
- [Redis Cluster Specification-详情](https://redis.io/topics/cluster-spec)
- [Spring Boot Redis Cluster](https://docs.spring.io/spring-data/data-redis/docs/current/reference/html/#cluster)
- [redis 系列之——高可用（主从、哨兵、集群）](https://xie.infoq.cn/article/6c3500c66c3cdee3d72b88780)
- [phpRedisAdmin](https://github.com/erikdubbelboer/phpRedisAdmin)
- [RedisDesktopManager Windows](https://www.daxiblog.com/redis%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7redisdesktopmanager-0-9-9-%E5%AE%89%E8%A3%85%E5%8C%85%E4%B8%8B%E8%BD%BD/)
- [RedisDesktopManager Mac](https://github.com/onewe/RedisDesktopManager-Mac/releases/tag/0.9.9)
- [Redis cluster tutorial](https://redis.io/topics/cluster-tutorial)
- [redis 4.0 集群部署](https://www.jianshu.com/p/c8a957413284)
- [Redis 5集群](https://www.cnblogs.com/zhoujinyi/p/11606935.html)
- [CentOS7安装Redis4.0.10与集群搭建](https://www.cnblogs.com/frankdeng/p/9332618.html)
- [CentOS6.5搭建Redis-v4.0.8集群](https://www.liutf.com/posts/1419646468.html)
- [RedisShake-0](https://github.com/alibaba/RedisShake)
- [RedisShake-1](https://www.cnblogs.com/yougewe/articles/11003725.html)
