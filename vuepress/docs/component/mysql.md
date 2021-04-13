# MySQL

::: tip 提示
MySQL 和 Oracle 二选其一
:::

主服务器：内网ip：127.0.0.1
从服务器：内网ip：127.0.0.2

## 安装配置

- [下载mysql-apt-config_0.8.16-1_all.deb](https://dev.mysql.com/downloads/repo/apt/)

``` bash
- sudo dpkg -i mysql-apt-config_0.8.16-1_all.deb
- 弹出配置界面，选择mysql-8.0, 选择ok
- sudo apt-get update
- sudo apt-get install mysql-server
# 注：安装过程中需要设置密码，选择最新密码加密方式

# 下载Sequel Ace客户端远程连接MySQL
# 开启root远程访问，登录服务器
- mysql -u root -p # 按提示输入密码
- mysql> use mysql; # 进入mysql库
- mysql> update user set host='%' where user ='root'; # 更新域属性，'%'表示允许外部访问
- mysql> FLUSH PRIVILEGES;
- mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION; # 执行授权语句。执行完此句，外部已经可以通过账户密码访问了
# - mysql> exit;
# 其他：
# FLUSH PRIVILEGES; 命令本质上的作用是：
# 将当前user和privilige表中的用户信息/权限设置从mysql库(MySQL数据库的内置库)中提取到内存里。
# MySQL用户数据和权限有修改后，希望在"不重启MySQL服务"的情况下直接生效，那么就需要执行这个命令。
# 
# - service mysql restart
# 如果远程连接报错：Authentication plugin 'caching_sha2_password' cannot be loaded，则修改如下
# mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
```

创建数据库

``` bash
# 或者 使用SequalAce客户端创建数据库
# 命令创建数据库
mysql>CREATE DATABASE bytedesk CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
# 使用数据库
mysql>use bytedesk;
# 导入.sql文件
# mysql>source /var/local/bytedesk_20190329.sql;
```

## 主从复制

首先在主、从服务器上分别安装MySQL

首先，在主服务器执行

``` bash
# master
vi /etc/mysql/mysql.conf.d/mysqld.cnf
# 注释掉bind-address = 127.0.0.1
#需要备份的数据库
# binlog-do-db=bytedesk
#不需要备份的数据库
# binlog-ignore-db=mysql
# 开启二进制日志功能，可以随便取，最好有含义（关键就是这里了）
log-bin=mysql-bin
# 设置server_id，一般设置为IP,注意要唯一
server_id=1
# 进入命令console
mysql -u root -p
# 创建数据同步用户，并赋予权限
mysql> CREATE USER 'bytedesk'@'%' IDENTIFIED BY 'password';
mysql> GRANT REPLICATION SLAVE ON *.* TO 'bytedesk'@'%';
mysql> flush privileges;
mysql> exit;
# 重启Mysqld服务
service mysql restart
```

其次，在从服务器执行

``` bash
# slave
vi /etc/mysql/mysql.conf.d/mysqld.cnf
# log-bin=mysql-bin   #[可选]启用二进制日志
# 设置server_id，一般设置为IP,注意要唯一
server_id=2
# 重启
service mysql restart
```

第三步，在主服务器执行

``` bash
# 登录 master console
mysql -u root -p
# 查看状态
mysql> show master status;
```

第四步，在从服务器执行

``` bash
# 主服务器将RSA公钥发送给从服务器，后者使用它来加密密码并将结果返回给服务器
mysql --ssl-mode=DISABLED -h 127.0.0.1 -ubytedesk -ppassword --get-server-public-key
mysql> exit;
# 注意：必须首先执行上面语句，否则会报错：
# Last_IO_Error: error connecting to master 'bytedesk@127.0.0.1:3306' - retry-time: 30 retries: 1 message: Authentication plugin 'caching_sha2_password' reported error: Authentication requires secure connection.
# https://blog.csdn.net/wawa8899/article/details/86689618
# https://www.modb.pro/db/29919
# https://www.cnblogs.com/summertime-wu/p/11637520.html
# 登录 slave console
mysql -u root -p
# 根据第三步中的信息，修改下面命令
mysql> change master to master_host='127.0.0.1', master_user='bytedesk', master_password='password', master_port=3306, master_log_file='mysql-bin.000001', master_log_pos=0, master_connect_retry=30;
# 启动 slave 从库
mysql> start slave;
# 查看 slave 从库
mysql> show slave status\G; # 注意：末尾的\G用来格式化显示，增加易读性
#停止主从复制
#清空之前的主从复制配置信息
# mysql> stop slave;
# mysql> reset slave;
mysql> exit;
# 若Slave_IO_Running和Slave_SQL_Running均为Yes，则表示连接正常。
```

第五步

``` bash
# 测试
在master执行插入、更新、删除等操作，在slave查看是否同步
```

常用命令

``` bash
# 查看主服务器的运行状态
mysql> show master status;
# 查看从服务器主机列表
mysql> show slave hosts;
# 获取binlog文件列表
mysql> show binary logs;
# 只查看第一个binlog文件的内容
mysql> show binlog events;
# 查看指定binlog文件的内容
mysql> show binlog events in 'mysql-bin.000001';
# 启动从库复制线程
mysql> START SLAVE;
# 停止从库复制线程
mysql> STOP SLAVE;
```

## 读写分离

- TODO: sharding-jdbc

## 支持JNDI数据源

如果想使用Tomcat或者WebLogic的数据源，则不需要配置`spring.datasource.url`等参数，只需要配置`spring.datasource.jndi-name`为JNDI的name即可，如：

``` bash
spring.datasource.jndi-name=java:jdbc/mysql
```

<!-- TODO: 多数据源 -->
<!-- TODO: 分表、分库 -->

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

* [Docker](https://hub.docker.com/_/mysql)
* [官方指南](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)
* [下载](https://dev.mysql.com/downloads/repo/apt/)
* [Connection to a JNDI DataSource](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-sql.html#boot-features-connecting-to-a-jndi-datasource)
