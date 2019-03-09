# Redis

## 配置(可选)

``` bash
# 安装redis：
sudo apt-get install redis-server
# 修改密码：
vi /etc/redis/redis.conf
# 取消注释：requirepass foobared，修改密码： requirepass 你的密码
# 远程访问：添加注释 bind 127.0.0.1 ::1
# 重启: service redis restart
```

## 客户端

- [phpRedisAdmin](https://github.com/erikdubbelboer/phpRedisAdmin)
- [RedisDesktopManager Windows](https://www.daxiblog.com/redis%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7redisdesktopmanager-0-9-9-%E5%AE%89%E8%A3%85%E5%8C%85%E4%B8%8B%E8%BD%BD/)
- [RedisDesktopManager Mac](https://github.com/onewe/RedisDesktopManager-Mac/releases/tag/0.9.9)
