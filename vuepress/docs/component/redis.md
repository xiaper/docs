# Redis

## 安装

``` bash
# 命令安装redis：
sudo apt-get install redis-server
# 修改密码：
vi /etc/redis/redis.conf
# 取消注释：requirepass foobared，修改密码： requirepass 你的密码
# 远程访问：添加注释 bind 127.0.0.1 ::1
# 重启: service redis restart
# 停止: service redis stop
```

``` bash
# 源码安装
wget http://download.redis.io/releases/redis-4.0.14.tar.gz
tar xzf redis-4.0.14.tar.gz
cd redis-4.0.14
make && make install
```

安装完成后，在redis-4.0.14安装目录下会出现一个bin目录，bin目录下有几个可执行文件

``` bash
# 性能测试工具
redis-benchmark
# AOF文件修复工具
redis-check-aof
# RDB文件检测工具（快照持久化文件）
redis-check-rdb
# 命令行客户端
redis-cli
# redis哨兵
redis-sentinel -> redis-server
# redis服务器启动命令
redis-server
```

## 配置文件

``` bash
# redis缓存
spring.cache.type=Redis
spring.redis.database=2
```

单点

``` bash
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

集群

``` bash
#逗号分隔
spring.redis.cluster.nodes=192.168.0.159:7001,192.168.0.159:7002
```

## Redis集群

## 说明

- redis支持集群最小的单位为6个实例，3个主节点，3个从节点
- 假设两台机器：192.168.0.1， 192.168.0.2, 每台机器安装3个结点
- redis使用源码安装方式，安装目录redis-4.0.14

## 配置

``` bash
# 192.168.0.1
cd redis-4.0.14
mkdir redis_cluster
cd redis_cluster
mkdir 7000 7001 7002
# 在文件夹 7000/7001/7002中分别创建文件redis.conf
```

其中，7000/redis.conf文件如下，7001和7002中redis.conf文件请修改相应端口

``` bash
# redis后台运行
daemonize yes
# pidfile文件对应7000,7002,7003
pidfile /var/run/redis_7000.pid
# 数据文件存放位置对应7000,7001,7002,7003,7004,7005
dir /var/run/redis_cluster/7000/
# 默认ip为127.0.0.1 需要改为其他节点机器可访问的ip 否则创建集群时无法访问对应的端口，无法创建集群  
bind 192.168.0.1
# 端口7000,7002,7003
port 7000
# 开启集群
cluster-enabled  yes
# 集群的配置, 配置文件首次启动自动生成
cluster-config-file nodes.conf
# 请求超时, 设置5秒够了
cluster-node-timeout 5000
# aof日志开启, 有需要就开启, 它会每次写操作都记录一条日志
appendonly yes
```

在 192.168.0.2 机器上重复上述步骤，然后分别在2台服务器上启动redis

``` bash
# 启动
cd redis-4.0.14
./bin/redis-server redis_cluster/7000/redis.conf
./bin/redis-server redis_cluster/7001/redis.conf
./bin/redis-server redis_cluster/7002/redis.conf
```

测试服务是否正常启动

``` bash
# 查看服务是否正常运行
ps -ef | grep redis
# 测试客户端是否可正常连接
./bin/redis-cli -h 192.168.0.1 -p 7000
192.168.0.1:7000> ping
PONG
# 停止redis运行
./bin/redis-cli -h 192.168.0.1 -p 7000 shutdown
```

## 创建集群

``` bash
# redis安装目录src中redis-trib.rb完成集群创建，redis-trib.rb命令需要安装gem redis模块才能运行，gem redis需要Ruby环境
# 安装ruby
yum -y install ruby ruby-devel rubygems rpm-build
# gem 这个命令来安装 redis接口
gem install redis
```

``` bash
cd redis-4.0.14
# 创建新集群命令：命令create
# --replicas 1 表示 自动为每一个master节点分配一个slave节点. 上面有6个节点，程序会按照一定规则生成 3个master（主）3个slave(从)
# 其他参数用于创建新集群的实例的地址列表
./src/redis-trib.rb create --replicas 1 192.168.0.1:7000 192.168.0.1:7001 192.168.0.1:7002 192.168.0.2:7000 192.168.0.2:7001 192.168.0.2:7002
```

## 测试

``` bash
# 集群客户端连接方式 redis-cli  -c
./bin/redis-cli -c -h 192.168.0.1 -p 7000
192.168.0.1:7000> set foo bar
-> Redirected to slot [12182] located at 192.168.0.1:7002
OK
192.168.0.1:7002> get foo
"bar"
192.168.0.1:7002> keys *
1) "foo"
192.168.0.1:7002> exit
[root@node21 redis-cluster]# redis-cli -c -h 192.168.0.1 -p 7000
192.168.0.1:7000> keys *
(empty list or set)
192.168.0.1:7000> get foo
-> Redirected to slot [12182] located at 192.168.0.1:7002
"bar"
192.168.0.1:7002>
```

## 其他常用命令

``` bash
# 查看集群情况
其中，ip代表服务器地址，port为服务器端口号
# 检查集群状态
redis-trib.rb check ip:port
# 使用-c进入集群命令模式
redis-cli -c -h ip -p port
# 重新分配权重
redis-trib.rb rebalance ip:port --auto-weights
# 使用add-node命令将新节点的地址指定为第一个参数，并将集群中随机存在节点的地址指定为第二个参数，redis-trib在运行之前也会检查集群的状态。
redis-trib.rb add-node ip:port（新增节点） ip:port（现有效节点）
 # 删除master节点之前首先要使用reshard移除master的全部slot
redis-trib.rb del-node ip:port id（目标节点的id)
# 重新划分slot
redis-trib.rb reshard ip:port
# 将master转换为salve
cluster replicate master-id # 转换前6380端必须没有slots
```

## 参考

- [phpRedisAdmin](https://github.com/erikdubbelboer/phpRedisAdmin)
- [RedisDesktopManager Windows](https://www.daxiblog.com/redis%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7redisdesktopmanager-0-9-9-%E5%AE%89%E8%A3%85%E5%8C%85%E4%B8%8B%E8%BD%BD/)
- [RedisDesktopManager Mac](https://github.com/onewe/RedisDesktopManager-Mac/releases/tag/0.9.9)
- [Redis cluster tutorial](https://redis.io/topics/cluster-tutorial)
- [redis 4.0 集群部署](https://www.jianshu.com/p/c8a957413284)
- [CentOS7安装Redis4.0.10与集群搭建](https://www.cnblogs.com/frankdeng/p/9332618.html)
- [CentOS6.5搭建Redis-v4.0.8集群](https://www.liutf.com/posts/1419646468.html)
