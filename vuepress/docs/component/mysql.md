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
![create_database](/xiaper.io/create_database.png)
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

<!-- TODO: 多数据源 -->
<!-- TODO: 分表、分库 -->

## 参考

* [Docker](https://hub.docker.com/_/mysql)
* [官方指南](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)
* [下载](https://dev.mysql.com/downloads/repo/apt/)
* [Connection to a JNDI DataSource](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-sql.html#boot-features-connecting-to-a-jndi-datasource)
