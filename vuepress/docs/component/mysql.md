# MySQL

::: tip 提示
MySQL 和 Oracle 二选其一
:::

支持最新8.0以及5.7

## 配置(可选)

``` bash
- sudo dpkg -i mysql-apt-config_0.8.10-1_all.deb
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
![create_database](/xiaper.io/create_database.png)
* 初始化数据库, 导入sql文件：[xiaper_mysql.sql](https://github.com/xiaper/server/blob/master/sql/xiaper_mysql.sql)

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

## 参考

* [Docker](https://hub.docker.com/_/mysql)
* [官方指南](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)
* [下载](https://dev.mysql.com/downloads/repo/apt/)
* [Connection to a JNDI DataSource](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-sql.html#boot-features-connecting-to-a-jndi-datasource)
