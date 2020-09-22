# LogStash

::: tip
可选组件
用途：

* 日志管理
:::

<!-- * [下载](https://www.elastic.co/downloads/logstash) -->
* [下载v7.6.2](https://www.elastic.co/cn/downloads/past-releases/logstash-7-6-2)
* [推荐-国内镜像](https://www.newbe.pro/Mirrors/Mirrors-Logstash/)

```bash
unzip logstash-7.6.2.zip
cd logstash-7.6.2/
```

```bash
vi config/logstash.yml
# 修改
#http.host: "127.0.0.1"
# 为
http.host: "0.0.0.0"
```

创建logstash.conf文件

```bash
# cp config/logstash-sample.conf config/logstash.conf
vi config/logstash.conf
```

编辑logstash.conf内容，设置访问elasticsearch用户名密码

```bash
input {
#  beats {
#    port => 5044
#  }
  tcp {
    mode => "server"
    host => "0.0.0.0"
    port => 5044
    codec => json_lines
  }
}

output {
  elasticsearch {
    hosts => ["http://localhost:9200"]
    # index => "%{[@metadata][beat]}-%{[@metadata][version]}-%{+YYYY.MM.dd}"
    #user => "elastic"
    #password => "changeme"
  }
}
```

用户授权

```bash
# 配置远程访问用户名/密码
```

运行

```bash
# 前台运行（测试）
./bin/logstash -f config/logstash.conf
# 后台运行（生产）
nohup ./bin/logstash -f config/logstash.conf &
# 后台运行，并且输出log文件
nohup ./bin/logstash -f config/logstash.conf > mylogstash.log 2>&1 &
```

## 项目中配置

项目pom.xml中添加

```bash
<dependency>
  <groupId>net.logstash.logback</groupId>
  <artifactId>logstash-logback-encoder</artifactId>
  <version>6.1</version>
</dependency>
```

在resources文件夹下面创建logback-spring.xml文件

```bash
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <include resource="org/springframework/boot/logging/logback/base.xml" />

  <springProperty scope="context" name="springAppName" source="spring.application.name"/>

  <!-- Example for logging into the build folder of your project -->
  <property name="LOG_FILE" value="${BUILD_FOLDER:-build}/${springAppName}"/>​

  <!-- You can override this to have a custom pattern -->
  <property name="CONSOLE_LOG_PATTERN"
            value="%clr(%d{yyyy-MM-dd HH:mm:ss.SSS}){faint} %clr(${LOG_LEVEL_PATTERN:-%5p}) %clr(${PID:- }){magenta} %clr(---){faint} %clr([%15.15t]){faint} %clr(%-40.40logger{39}){cyan} %clr(:){faint} %m%n${LOG_EXCEPTION_CONVERSION_WORD:-%wEx}"/>

  <!-- Appender to log to console -->
  <appender name="console" class="ch.qos.logback.core.ConsoleAppender">
      <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
          <!-- Minimum logging level to be presented in the console logs-->
          <level>DEBUG</level>
      </filter>
      <encoder>
          <pattern>${CONSOLE_LOG_PATTERN}</pattern>
          <charset>utf8</charset>
      </encoder>
  </appender>

  <!-- Appender to log to file -->​
  <appender name="flatfile" class="ch.qos.logback.core.rolling.RollingFileAppender">
      <file>${LOG_FILE}</file>
      <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
          <fileNamePattern>${LOG_FILE}.%d{yyyy-MM-dd}.gz</fileNamePattern>
          <maxHistory>7</maxHistory>
      </rollingPolicy>
      <encoder>
          <pattern>${CONSOLE_LOG_PATTERN}</pattern>
          <charset>utf8</charset>
      </encoder>
  </appender>

  <appender name="logstash" class="net.logstash.logback.appender.LogstashTcpSocketAppender">
      <destination>47.98.192.171:5044</destination>
      <!-- 日志输出编码 -->
      <encoder charset="UTF-8" class="net.logstash.logback.encoder.LoggingEventCompositeJsonEncoder">
          <providers>
              <timestamp>
                  <timeZone>UTC</timeZone>
              </timestamp>
              <pattern>
                  <pattern>
                      {
                      "logLevel": "%level",
                      "service": "${springAppName:-}",
                      "trace": "%X{X-B3-TraceId:-}",
                      "span": "%X{X-B3-SpanId:-}",
                      "parent": "%X{X-B3-ParentSpanId:-}",
                      "exportable": "%X{X-Span-Export:-}",
                      "pid": "${PID:-}",
                      "thread": "%thread",
                      "class": "%logger{40}",
                      "rest": "%message"
                      }
                  </pattern>
              </pattern>
          </providers>
      </encoder>
  </appender>
  <root level="INFO">
      <!--<appender-ref ref="console"/>-->
      <!-- uncomment this to have also JSON logs -->
      <appender-ref ref="logstash"/>
      <!--<appender-ref ref="flatfile"/>-->
  </root>
</configuration>
```

## 参考
