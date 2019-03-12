# Redis

## 安装

``` bash
# 安装redis：
sudo apt-get install redis-server
# 修改密码：
vi /etc/redis/redis.conf
# 取消注释：requirepass foobared，修改密码： requirepass 你的密码
# 远程访问：添加注释 bind 127.0.0.1 ::1
# 重启: service redis restart
```

## 配置

``` bash
# Spring Boot自带缓存
#spring.cache.type=Simple
# 禁用缓存
#spring.cache.type=None
# redis缓存
spring.cache.type=Redis
#
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

## 集群

``` bash
#最大等待时间
spring.redis.jedis.pool.max-wait=1000ms
#最小空闲数量
spring.redis.jedis.pool.min-idle=1
#最大空闲数量
spring.redis.jedis.pool.max-idle=10
#最大连接数量
spring.redis.jedis.pool.max-active=1000
#逗号分隔
spring.redis.cluster.nodes=192.168.0.159:7001,192.168.0.159:7002
```

<!-- TODO:如何搭建redis集群 -->

## 参考

- [phpRedisAdmin](https://github.com/erikdubbelboer/phpRedisAdmin)
- [RedisDesktopManager Windows](https://www.daxiblog.com/redis%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7redisdesktopmanager-0-9-9-%E5%AE%89%E8%A3%85%E5%8C%85%E4%B8%8B%E8%BD%BD/)
- [RedisDesktopManager Mac](https://github.com/onewe/RedisDesktopManager-Mac/releases/tag/0.9.9)
- [Redis cluster tutorial](https://redis.io/topics/cluster-tutorial)
