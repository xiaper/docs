# HAProxy

::: tip 提示
可选组件
:::

仅供参考，如果使用阿里云/腾讯云等云服务，建议直接购买其负载均衡服务即可

## 安装

- [下载](http://www.haproxy.org/#down)

``` bash
tar -xzvf haproxy-1.9.7.tar.gz
cd haproxy-1.9.7/
# 查看系统内核版本号
uname -r
mkdir -p /usr/local/haproxy
make TARGET=generic ARCH=x86_64 PREFIX=/usr/local/haproxy
make install PREFIX=/usr/local/haproxy
# 安装成功后，查看haproxy版本
cd /usr/local/haproxy
./sbin/haproxy -v
```

```bash
# 添加haproxy组
groupadd haproxy
# 创建nginx运行账户haproxy并加入到haproxy组，不允许haproxy
# useradd -g haproxy haproxy -s /sbin/nologin
# useradd -g haproxy haproxy -s /bin/false
useradd -g haproxy haproxy
```

## 配置

创建 && 编辑配置文件

``` bash
mkdir -p /usr/local/haproxy/conf
vi /usr/local/haproxy/conf/haproxy.cfg
```

配置文件内容, 注意：其中192.168.0.1、192.168.0.2、192.168.0.3需要替换为真实ip地址
5672、1883、15672 端口为rabbitmq相应端口号

``` bash
# 全局配置
global
  # 日志输出配置，所有日志都记录在本机，通过local0输出, 默认是info级别，可配置两条
  log 127.0.0.1 local0 info
  # 最大连接数
  maxconn 4096
  # 改变当前的工作目录
  chroot /usr/local/haproxy
  # 以守护进程方式运行haproxy #debug #quiet
  daemon
  # 调试级别, 一般只在开启单进程时调试, 且生产环境禁用.
  #debug
  # 当前进程pid文件
  pidfile /usr/local/haproxy/conf/haproxy.pid
  # 运行haproxy 用户, 或者使用关键字uid
  user haproxy
  # 运行haproxy 用户组, 或者使用关键字gid
  group haproxy
  # haproxy启动后不会显示任何相关信息, 这与在命令行启动haproxy时加上参数“-q”相同
  #quiet
  #定义统计信息保存位置
  stats socket /usr/local/haproxy/stats

#默认配置
defaults
  #继承全局的日志定义输出
  log global
  #默认的模式mode{tcp|http|health}
  #tcp是4层，http是7层，health只返回OK
  mode tcp
  #日志类别tcplog[httplog、tcplog]
  option tcplog
  #不记录健康检查日志信息
  option dontlognull
  # 当与后端服务器的会话失败(服务器故障或其他原因)时, 把会话重新分发到其他健康的服务器上;
  # 当故障服务器恢复时, 会话又被定向到已恢复的服务器上;
  option redispatch
  #当haproxy负载很高时, 自动结束掉当前队列处理比较久的链接.
  option abortonclose
  #3次失败则认为服务不可用
  retries 3
  #每个进程可用的最大连接数
  maxconn 32000
  #haproxy与后端服务器连接超时时间.
  timeout connect 5s
  #客户端与haproxy连接后, 数据传输完毕, 不再有数据传输, 即非活动连接的超时时间.
  timeout client 120s
  #haproxy与后端服务器非活动连接的超时时间.
  timeout server 120s
  #设置默认的负载均衡方式
  #balance source
  #balnace leastconn

#绑定配置 rabbitmq amqp协议
listen rabbitmq_cluster_amqp
  #配置TCP模式
  mode tcp
  option tcplog
  #负载均衡算法, 简单的轮询
  balance roundrobin
  #配置访问端口
  bind 0.0.0.0:5672
  #RabbitMQ集群节点配置
  # server <name>：定义RabbitMQ服务的内部标示，注意这里的“rmq_node”是指包含有含义的字符串名称，不是指RabbitMQ的节点名称。
  # <ip>:<port>：定义RabbitMQ服务的连接的IP地址和端口号。
  # check inter <value>：定义了每隔多少毫秒检查RabbitMQ服务是否可用。
  # rise <value>：定义了RabbitMQ服务在发生故障之后，需要多少次健康检查才能被再次确认可用。
  # fall <value>：定义需要经历多少次失败的健康检查之后，HAProxy才会停止使用此RabbitMQ服务。
  # weight <value>：定义了当前RabbitMQ服务的权重。
  # server rmq_node1 47.106.239.170:5672 check inter 5000 rise 2 fall 3 weight 1
  server rmq_node1 192.168.0.1:5672 check inter 5000 rise 2 fall 3 weight 1
  server rmq_node2 192.168.0.2:5672 check inter 5000 rise 2 fall 3 weight 1
  server rmq_node3 192.168.0.3:5672 check inter 5000 rise 2 fall 3 weight 1

#绑定配置rabbitmq mqtt协议
listen rabbitmq_cluster_mqtt
  #配置TCP模式
  mode tcp
  option tcplog
  #负载均衡算法, 简单的轮询
  balance roundrobin
  #配置访问端口
  bind 0.0.0.0:1883
  #RabbitMQ集群节点配置
  # server <name>：定义RabbitMQ服务的内部标示，注意这里的“rmq_node”是指包含有含义的字符串名称，不是指RabbitMQ的节点名称。
  # <ip>:<port>：定义RabbitMQ服务的连接的IP地址和端口号。
  # maxconn <value>: 表示该服务器的最大连接数
  # check inter <value>：定义了每隔多少毫秒检查RabbitMQ服务是否可用。
  # rise <value>：定义了RabbitMQ服务在发生故障之后，需要多少次健康检查才能被再次确认可用。
  # fall <value>：定义需要经历多少次失败的健康检查之后，HAProxy才会停止使用此RabbitMQ服务。
  # weight <value>：定义了当前RabbitMQ服务的权重。默认1，最大为265，0则表示不参与负载均衡
  # server rmq_node1 47.106.239.170:1883 check inter 5000 rise 2 fall 3 weight 1
  server rmq_node1 192.168.0.1:1883 check inter 5000 rise 2 fall 3 weight 1
  server rmq_node2 192.168.0.2:1883 check inter 5000 rise 2 fall 3 weight 1
  server rmq_node3 192.168.0.3:1883 check inter 5000 rise 2 fall 3 weight 1

#绑定配置rabbitmq管理后台
listen rabbitmq_cluster_admin
  #配置TCP模式
  mode http
  option httplog
  #负载均衡算法, 简单的轮询
  balance roundrobin
  #配置访问端口
  bind 0.0.0.0:15672
  #RabbitMQ集群节点配置
  # server <name>：定义RabbitMQ服务的内部标示，注意这里的“rmq_node”是指包含有含义的字符串名称，不是指RabbitMQ的节点名称。
  # <ip>:<port>：定义RabbitMQ服务的连接的IP地址和端口号。
  # check inter <value>：定义了每隔多少毫秒检查RabbitMQ服务是否可用。
  # rise <value>：定义了RabbitMQ服务在发生故障之后，需要多少次健康检查才能被再次确认可用。
  # fall <value>：定义需要经历多少次失败的健康检查之后，HAProxy才会停止使用此RabbitMQ服务。
  # weight <value>：定义了当前RabbitMQ服务的权重。
  # server rmq_node1 47.106.239.170:15672 check inter 5000 rise 2 fall 3 weight 1
  server rmq_node1 192.168.0.1:15672 check inter 5000 rise 2 fall 3 weight 1
  server rmq_node2 192.168.0.2:15672 check inter 5000 rise 2 fall 3 weight 1
  server rmq_node3 192.168.0.3:15672 check inter 5000 rise 2 fall 3 weight 1

#haproxy监控页面地址
listen monitor
  mode http
  option httplog
  #配置访问端口
  bind 0.0.0.0:8100
  # maxconn 10
  # timeout client 100s
  # timeout server 100s
  # timeout connect 100s
  # timeout queue 100s
  #开启统计
  stats enable
  #统计页面访问url
  stats uri /stats
  #监控页面自动刷新时间
  stats refresh 5s
  #统计页面密码框提示文本
  # stats realm Haproxy
  #隐藏统计页面上的haproxy版本信息
  # stats hide-version
  # stats show-node
  #监控页面的用户和密码, 可设置多个用户名
  # stats auth admin:password
  #手工启动/禁用后端服务器, 可通过web管理节点
  # stats admin if TRUE
  #设置haproxy错误页面
  # errorfile 400 /usr/local/haproxy/errorfiles/400.http
  # errorfile 403 /usr/local/haproxy/errorfiles/403.http
  # errorfile 408 /usr/local/haproxy/errorfiles/408.http
  # errorfile 500 /usr/local/haproxy/errorfiles/500.http
  # errorfile 502 /usr/local/haproxy/errorfiles/502.http
  # errorfile 503 /usr/local/haproxy/errorfiles/503.http
  # errorfile 504 /usr/local/haproxy/errorfiles/504.http
```

```bash
# 启动
cd /usr/local/haproxy
./sbin/haproxy -f ./conf/haproxy.cfg
# 浏览器打开，其中ip为服务器地址，如：http://47.98.54.86:8100/stats
http://ip:8100/stats
# 停止
killall haproxy
# 查看HAproxy状况
ps -aux|grep haproxy
```

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

- [HAProxy](http://www.haproxy.org/)
- [RabbitMQ负载均衡（2）——HAProxy](https://blog.csdn.net/u013256816/article/details/77150922)
