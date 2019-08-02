# War

::: tip 提示
虾婆支持打成war包，放到tomcat、weblogic等web容器
:::

## 打包

需要修改三处，首先给ClusterWebMvcApplication添加继承SpringBootServletInitializer，并重写configure函数，如下：

``` java
@SpringBootApplication
public class ClusterWebMvcApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }
  
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

其次，修改pom.xml打包格式为war

``` java
<packaging>war</packaging>
```

最后，添加 spring-boot-starter-tomcat 依赖，特别注意 scope 为 provided

``` java
<dependencies>
  <!-- … -->
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-tomcat</artifactId>
    <scope>provided</scope>
  </dependency>
  <!-- … -->
</dependencies>
```

## 部署到WebLogic

在上一步的基础之上，ClusterWebMvcApplication 实现接口 WebApplicationInitializer

``` java
public class ClusterWebMvcApplication extends SpringBootServletInitializer implements WebApplicationInitializer {

  @Bean
  public BCryptPasswordEncoder bCryptPasswordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Override
  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
    return application.sources(ClusterWebMvcApplication.class);
  }

  public static void main(String[] args) {
    SpringApplication.run(ClusterWebMvcApplication.class, args);
  }
}
```

## 注意

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

- [Create a Deployable War File](https://docs.spring.io/spring-boot/docs/current/reference/html/howto-traditional-deployment.html)
- [Deploying a WAR to WebLogic](https://docs.spring.io/spring-boot/docs/current/reference/html/howto-traditional-deployment.html#howto-weblogic)
- [Spring Boot on Oracle WebLogic Server 12](http://www.virtual7.de/blog/2016/07/oracle-weblogic-server-spring-boot/)
- [WebLogic 12.1.3 and Spring Boot 2.x](https://medium.com/@agrawal.tushar/weblogic-12-1-3-and-spring-boot-2-x-ea0461bab47c)
