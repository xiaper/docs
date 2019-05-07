# MySQL

::: tip 提示
MySQL 和 Oracle 二选其一
:::

支持最新8.0以及5.7

## 配置(可选)

- [下载mysql-apt-config_0.8.12-1_all.deb](https://dev.mysql.com/downloads/repo/apt/)

``` bash
- sudo dpkg -i mysql-apt-config_0.8.10-1_all.deb
- 弹出配置界面，选择mysql-5.7, 选择ok
- sudo apt-get update
- sudo apt-get install mysql-server

# 默认密码为空, 需要设置密码, 暂定为: password
- mysql -u root
- use mysql;
- update user set password=PASSWORD("password") where User='root';
- flush privileges;

# 开启远程登录//mysql 远程连接
- GRANT ALL PRIVILEGES ON  *.*  TO  'root'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;
- flush privileges;
# 如果要用sqlyog远程登录, 需要修改/etc/mysql/mysql.conf.d/mysqld.cnf , 注释掉bind-address = 127.0.0.1 (可选)
- service mysql restart
```

* 创建数据库，可自定义数据库名，编码选择：utf8mb4_unicode_cli，例如：
![create_database](/xiaper.io/image/create_database.png)
* 初始化数据库, 导入sql文件：[xiaper_mysql.sql](https://github.com/xiaper/server/blob/master/sql/xiaper_mysql.sql)

命令行创建

``` bash
# 创建数据库
mysql>CREATE DATABASE bytedesk CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
# 使用数据库
mysql>use bytedesk;
# 导入.sql文件
mysql>source /var/local/bytedesk_20190329.sql;
```

## Spring Boot 配置

``` bash
# mysql 8
#spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
#spring.datasource.url=jdbc:mysql://ip:3306/xiaper?serverTimezone=GMT%2B8&useUnicode=true&autoReconnect=true&characterEncoding=utf8&useSSL=true
# mysql 5.7
#spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/xiaper?autoReconnect=true&characterEncoding=utf8&useSSL=true
spring.datasource.username=root
spring.datasource.password=你的密码
```

## 支持JNDI数据源

如果想使用Tomcat或者WebLogic的数据源，则不需要配置`spring.datasource.url`等参数，只需要配置`spring.datasource.jndi-name`为JNDI的name即可，如：

``` bash
spring.datasource.jndi-name=java:jdbc/mysql
```

## 读写分离

``` bash
<dependency>
  <groupId>com.alibaba</groupId>
  <artifactId>druid-spring-boot-starter</artifactId>
  <version>1.1.16</version>
</dependency>
```

``` bash
spring.datasource.druid.write.url=jdbc:mysql://localhost:3306/bytedesk?autoReconnect=true&characterEncoding=utf8&useSSL=true&serverTimezone=GMT%2B8
spring.datasource.druid.write.username=root
spring.datasource.druid.write.password=

spring.datasource.druid.read.url=jdbc:mysql://localhost:3306/bytedesk?autoReconnect=true&characterEncoding=utf8&useSSL=true&serverTimezone=GMT%2B8
spring.datasource.druid.read.username=root
spring.datasource.druid.read.password=
```

``` java
/**
 * 配置读写分离数据源
 * @author bytedesk.com on 2019/4/11
 */
@Configuration
public class DruidDataSourceConfig {
  /**
   * 写数据库连接配置
   */
  @Primary
  @Bean
  @ConfigurationProperties("spring.datasource.druid.write")
  public DataSource dataSourceWrite(){
      return DruidDataSourceBuilder.create().build();
  }

  /**
   * 读数据库连接配置
   */
  @Bean
  @ConfigurationProperties("spring.datasource.druid.read")
  public DataSource dataSourceRead(){
      return DruidDataSourceBuilder.create().build();
  }
}
```

## MySQL高可用架构

主从复制可以使MySQL数据库主服务器的主数据库，复制到一个或多个MySQL从服务器从数据库，默认情况下，复制异步; 根据配置，可以复制数据库中的所有数据库，选定的数据库或甚至选定的表。

## MySQL中主从复制的优点

### 横向扩展解决方案

在多个从库之间扩展负载以提高性能。在这种环境中，所有写入和更新在主库上进行。但是，读取可能发生在一个或多个从库上。该模型可以提高写入的性能（由于主库专用于更新），同时在多个从库上读取，可以大大提高读取速度。

### 数据安全性

由于主库数据被复制到从库，从库可以暂停复制过程，可以在从库上运行备份服务，而不会破坏对应的主库数据。

### 分析

可以在主库上创建实时数据，而信息分析可以在从库上进行，而不会影响主服务器的性能。

### 长距离数据分发

可以使用复制创建远程站点使用的数据的本地副本，而无需永久访问主库。

## 准备

- 两台Linux服务器(本说明基于Ubuntu16.04)
- 安装MySQL相同版本

## 主从复制

第一步

``` bash
# master: 外网ip: 47.98.54.86 内网ip: 172.16.81.2
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
# 重启Mysqld服务
service mysqld restart
```

第二步

``` bash
# slave: 外网ip: 47.99.38.99, 内网ip: 172.16.81.1
vi /etc/mysql/mysql.conf.d/mysqld.cnf
# log-bin=mysql-bin   #[可选]启用二进制日志
# 设置server_id，一般设置为IP,注意要唯一
server_id=2
# 重启
service mysqld restart
```

第三步

``` bash
# 登录 master console
mysql -u root -p
# 查看状态
mysql> show master status;
```

第四步

``` bash
# 登录 slave console
mysql -u root -p
# 根据第三步中的信息，修改下面命令
mysql> change master to master_host='172.16.81.2', master_user='bytedesk', master_password='password', master_port=3306, master_log_file='mysql-bin.000001', master_log_pos=0, master_connect_retry=30;
# 启动 slave 从库
mysql> start slave;
# 查看 slave 从库
mysql> show slave status\G;
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

<!-- TODO: 多数据源 -->
<!-- TODO: 分表、分库 -->

## 参考

* [Docker](https://hub.docker.com/_/mysql)
* [官方指南](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)
* [下载](https://dev.mysql.com/downloads/repo/apt/)
* [Connection to a JNDI DataSource](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-sql.html#boot-features-connecting-to-a-jndi-datasource)
