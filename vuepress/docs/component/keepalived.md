# KeepAlived

::: tip 提示
可选组件
:::

仅供参考，如果使用阿里云/腾讯云等云服务，建议直接购买其负载均衡服务即可

## 安装

- [下载](https://www.keepalived.org/download.html)

``` bash
tar -zxvf keepalived-2.0.15.tar.gz
cd keepalived-2.0.15
mkdir -p /usr/local/keepalived
./configure --prefix=/usr/local/keepalived
make && make install
```

``` bash
# keepalived启动脚本变量引用文件，默认文件路径是/etc/sysconfig/，也可以不做软链接，直接修改启动脚本中文件路径即可（安装目录下）
mkdir /etc/sysconfig
cp /usr/local/keepalived/etc/sysconfig/keepalived  /etc/sysconfig/keepalived
# 将keepalived主程序加入到环境变量（安装目录下）
cp /usr/local/keepalived/sbin/keepalived /usr/sbin/keepalived
# keepalived启动脚本（源码目录下），放到/etc/init.d/目录下就可以使用service命令便捷调用
cp /usr/local/keepalived/sbin/keepalived  /etc/init.d/keepalived
# 将配置文件放到默认路径下
mkdir /etc/keepalived
cp /usr/local/keepalived/etc/keepalived/keepalived.conf /etc/keepalived/keepalived.conf
```

## 配置

<!-- ![架构图](./img/keepalived.png) -->
<img :src="$withBase('/image/keepalived.png')" style="width:250px;"/>

如图所示，两台Keepalived服务器之间通过VRRP进行交互，对外部虚拟出一个VIP为192.168.0.10。Keepalived与HAProxy部署在同一台机器上，两个Keepalived服务实例匹配两个HAProxy服务实例，这样通过Keeaplived实现HAProxy的双机热备。所以在上一小节的192.168.0.9的基础之上，还要再部署一台HAProxy服务，IP地址为192.168.0.8。整条调用链路为：客户端通过VIP建立通信链路；通信链路通过Keeaplived的Master节点路由到对应的HAProxy之上；HAProxy通过负载均衡算法将负载分发到集群中的各个节点之上。正常情况下客户端的连接通过图中左侧部分进行负载分发。当Keepalived的Master节点挂掉或者HAProxy挂掉无法恢复，那么Backup提升为Master，客户端的连接通过图中右侧部分进行负载分发。如果你追求要更高的可靠性，可以加入多个Backup角色的Keepalived节点来实现一主多从的多机热备。当然这样会提升硬件资源的成本，该如何抉择需要更细致的考恒，一般情况下双机热备的配备已足够满足应用需求。

接下来我们要修改/etc/keepalived/keepalived.conf文件. 在两台机器上，分别配置主备。Keepalived MASTER 配置文件

``` bash
#全局定义块
global_defs {
  # 用于服务有故障时发送邮件报警，可选项，不建议用. 需要系统开启sendmail服务，建议用第三独立监控服务，如用nagios全面监控代替
  # notification_email {
  #   270580156@qq.com
  #   2939499399@qq.com
  # }
  # notification_email_from bytedesk@163.com
  # smtp_server smtp.163.com
  # smtp_connect_timeout 10000
  # lvs负载均衡器标识，在一个网络内，它的值应该是唯一的
  # lvs_id string
  # 标识本节点的字条串,通常为hostname
  # 此为主服务器配置，从服务器上面需要修改为 BYTEDESK_SLAVE 或其他
  router_id BYTEDESK_MASTER
}

#Haproxy服务启动, 监测haproxy进程状态，健康检查，每2秒执行一次
vrrp_script chk_haproxy {
  #监控haproxy进程的脚本, 根据自己的实际路径放置
  script "/etc/keepalived/check_haproxy.sh"
  #每两秒进行一次
  interval 2
  #如果script中的指令执行失败，vrrp_instance的优先级会减少4个点
  weight -4
}

vrrp_instance VI_1 {
  # 实例状态，只有MASTER 和 BACKUP两种状态，并且需要全部大写
  #主机为MASTER，备机为BACKUP
  state MASTER
  #主备机必须相同
  #取值在0-255之间，用来区分多个instance的VRRP组播，同一网段中virtual_router_id的值不能重复，否则会出错。
  virtual_router_id 51
  # 对外提供服务的网卡接口，即VIP绑定的网卡接口
  # 监测网络端口，用ipconfig查看, 服务器固有IP（非VIP）的网卡
  interface eth0
  # 本机IP地址, MASTER服务器IP,从服务器写从服务器的IP
  # mcast_src_ip @IP
  # 节点优先级，取值范围0～254，MASTER要比BACKUP高
  #主备机取不同的优先级，主机要大。从服务器上改为50
  #用来选举master的，要成为master，那么这个选项的值最好高于其他机器50个点。此时，从服务器要低于100；
  priority 100
  #VRRP Multicast广播周期秒数
  # MASTER与BACKUP节点间同步检查的时间间隔，单位为秒
  advert_int 1
  # 禁止抢占服务
  # nopreempt
  # 有故障时是否激活邮件通知
  # smtp_alert
  # lvs_sync_daemon_interface string
  #认证区域
  authentication {
    #VRRP认证方式, 推荐使用PASS（密码只识别前8位）
    auth_type PASS
    #VRRP口令 主备机密码必须相同
    auth_pass 12345678
  }
  #调用haproxy进程检测脚本
  track_script {
    chk_haproxy
  }
   #VIP 漂移地址 即集群IP地址, 可以设置多个
  virtual_ipaddress {
    192.168.0.10
    # 172.16.0.222/16 dev eth0 label eth0:1
  }
  # unicast_src_ip 172.16.0.224
  # unicast_peer {
  #   172.16.0.225
  # }
}
```

Keepalived BACKUP 配置文件

``` bash
#全局定义块
global_defs {
  router_id BYTEDESK_BACKUP
}

#Haproxy服务启动, 监测haproxy进程状态，健康检查，每2秒执行一次
vrrp_script chk_haproxy {
  #监控haproxy进程的脚本, 根据自己的实际路径放置
  script "/etc/keepalived/check_haproxy.sh"
  #每两秒进行一次
  interval 2
  #如果script中的指令执行失败，vrrp_instance的优先级会减少4个点
  weight -4
}

vrrp_instance VI_1 {
  state BACKUP
  #主备机必须相同
  virtual_router_id 51
  interface eth0
  priority 50
  advert_int 1
  #认证区域
  authentication {
    #VRRP认证方式, 推荐使用PASS（密码只识别前8位）
    auth_type PASS
    #VRRP口令 主备机密码必须相同
    auth_pass 12345678
  }
  #调用haproxy进程检测脚本
  track_script {
    chk_haproxy
  }
   #VIP 漂移地址 即集群IP地址, 可以设置多个
  virtual_ipaddress {
    192.168.0.10
    # 172.16.0.222/16 dev eth0 label eth0:1
  }
  # unicast_src_ip 172.16.0.225
  # unicast_peer {
  #   172.16.0.224
  # }
}
```

为了防止HAProxy服务挂了，但是Keepalived却还在正常工作而没有切换到Backup上，所以这里需要编写一个脚本来检测HAProxy服务的状态。当HAProxy服务挂掉之后该脚本会自动重启HAProxy的服务，如果不成功则关闭Keepalived服务，如此便可以切换到Backup继续工作。

``` bash
# 编辑文件check_haproxy.sh
vi /etc/keepalived/check_haproxy.sh
```

``` bash
# check_haproxy.sh文件内容
#!/bin/bash
if [ $(ps -C haproxy --no-header | wc -l) -eq 0 ]; then
   /usr/local/haproxy/sbin/haproxy -f /usr/local/haproxy/conf/haproxy.cfg
   sleep 3

   if [ $(ps -C haproxy --no-header | wc -l) -eq 0 ]; then
      /etc/init.d/keepalived stop
   fi
fi
```

``` bash
# 此文件root组读写权限,并且允许程序执行此文件
chmod 777 /etc/keepalived/check_haproxy.sh
```

``` bash
# 查看keepalived状况
service keepalived status
# 启动、关闭、重启
service keepalived start
service keepalived stop
service keepalived restart
# 查看Keepalived生成的VIP是否与主服务器绑定
ip addr
# 查看log消息:
tail -f /var/log/messages
# 停止
killall keepalived
```

``` bash
# 可选部分，可忽略
# 加为系统服务
# chkconfig –-add keepalived
# 开机启动
# chkconfig keepalived on
# 查看开机启动的服务
# chkconfig –list
#
# ubuntu: chkconfig: command not found 解决方案：
# ubuntu中chkconfig已经被sysv-rc-conf替代，具体如下操作如下
# sudo apt install sysv-rc-conf
# sudo cp /usr/sbin/sysv-rc-conf /usr/sbin/chkconfig
# sysv-rc-conf keepalived on
```

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>


## 参考

- [KeepAlived](https://www.keepalived.org/)
- [Linux下Keepalived安装与配置](https://blog.csdn.net/bbwangj/article/details/80346428)
- [RabbitMQ负载均衡（3）——Keepalived+HAProxy实现高可用的负载均衡](https://blog.csdn.net/u013256816/article/details/77171017)
- [在阿里云VPC环境中利用keepalived实现主备双机高可用](https://yq.aliyun.com/articles/438705)
