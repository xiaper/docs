# War

## 打包

``` java
@SpringBootApplication
public class Application extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }
  
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

``` java
<packaging>war</packaging>
```

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

## 参考

- [Create a Deployable War File](https://docs.spring.io/spring-boot/docs/current/reference/html/howto-traditional-deployment.html)
- [Deploying a WAR to WebLogic](https://docs.spring.io/spring-boot/docs/current/reference/html/howto-traditional-deployment.html#howto-weblogic)
- [Spring Boot on Oracle WebLogic Server 12](http://www.virtual7.de/blog/2016/07/oracle-weblogic-server-spring-boot/)
