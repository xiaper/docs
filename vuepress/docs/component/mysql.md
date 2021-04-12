# MySQL

::: tip 提示
MySQL 和 Oracle 二选其一
:::

支持最新8.0以及5.7

## 安装配置

- [下载mysql-apt-config_0.8.16-1_all.deb](https://dev.mysql.com/downloads/repo/apt/)

``` bash
- sudo dpkg -i mysql-apt-config_0.8.16-1_all.deb
- 弹出配置界面，选择mysql-8.0, 选择ok
- sudo apt-get update
- sudo apt-get install mysql-server

# mysql5.7 默认密码为空, 需要设置密码, 暂定为: password
# - mysql -u root
# - use mysql;
# - update user set password=PASSWORD("password") where User='root';
# - flush privileges;

# mysql5.7:开启远程登录//mysql 远程连接
# - GRANT ALL PRIVILEGES ON  *.*  TO  'root'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;
- mysql> CREATE USER 'root'@'%' IDENTIFIED BY 'password';
- mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
- mysql> flush privileges;
- mysql> exit;
# 如果要用sqlyog远程登录, 需要修改/etc/mysql/mysql.conf.d/mysqld.cnf , 注释掉bind-address = 127.0.0.1 (可选)
- service mysql restart
# 如果远程连接报错：Authentication plugin 'caching_sha2_password' cannot be loaded，则修改如下
# mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
```

创建数据库，可自定义数据库名，编码选择：utf8mb4_unicode_cli，例如：
<!-- ![create_database](/xiaper.io/image/create_database.png) -->
初始化数据库, 导入sql文件：[xiaper_mysql.sql](https://github.com/xiaper/server/blob/master/sql/xiaper_mysql.sql)

```bash
# 默认账号
企业号：vip
用户名：2939499399@qq.com
密码：123456
```

命令行创建

``` bash
# 创建数据库
mysql>CREATE DATABASE bytedesk CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
# 使用数据库
mysql>use bytedesk;
# 导入.sql文件
mysql>source /var/local/bytedesk_20190329.sql;
```

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

<!-- TODO: 多数据源 -->
<!-- TODO: 分表、分库 -->

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

* [Docker](https://hub.docker.com/_/mysql)
* [官方指南](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)
* [下载](https://dev.mysql.com/downloads/repo/apt/)
* [Connection to a JNDI DataSource](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-sql.html#boot-features-connecting-to-a-jndi-datasource)
