# MySQL

## Spring Boot 配置

```text
# mysql 8
#spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
#spring.datasource.url=jdbc:mysql://ip:3306/bytedesk?serverTimezone=GMT%2B8&useUnicode=true&autoReconnect=true&characterEncoding=utf8&useSSL=true
# mysql 5.7
#spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/bytedesk?autoReconnect=true&characterEncoding=utf8&useSSL=true
spring.datasource.username=root
spring.datasource.password=你的密码
```