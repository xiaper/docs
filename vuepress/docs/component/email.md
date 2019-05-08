# Email

## 配置

25端口被阿里云封，故使用465端口，[Spring Boot 使用465端口发送邮件](https://blog.csdn.net/LDY1016/article/details/78365072)

``` bash
spring.mail.host=smtp.163.com
#spring.mail.port=25
spring.mail.username=邮箱地址，如：bytedesk@163.com
# 授权码，网易邮箱需要用授权码登录
spring.mail.password=授权码
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.properties.mail.smtp.starttls.required=true
spring.mail.default-encoding=UTF-8
#SSL证书Socket工厂
spring.mail.properties.mail.smtp.socketFactory.class=javax.net.ssl.SSLSocketFactory
#使用SMTPS协议465端口
spring.mail.properties.mail.smtp.socketFactory.port=465
#显示在收件人邮箱里面的发件人名称
spring.mail.self.username=邮箱地址
```

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>
