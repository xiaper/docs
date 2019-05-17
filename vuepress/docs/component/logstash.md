# LogStash

::: tip
可选组件
用途：

* 日志管理
:::

* [下载](https://www.elastic.co/downloads/logstash)

```bash
unzip logstash-7.0.1.zip
cd logstash-7.0.1/
```

```bash
vi logstash.yml
# 修改
#http.host: "127.0.0.1"
# 为
http.host: "0.0.0.0"
```

```bash
cp config/logstash-sample.conf config/logstash.conf
```

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
    index => "%{[@metadata][beat]}-%{[@metadata][version]}-%{+YYYY.MM.dd}"
    #user => "elastic"
    #password => "changeme"
  }
}
```

用户授权

```bash
```

```bash
# 前台运行（测试）
./bin/logstash -f config/logstash.conf
# 后台运行（生产）
nohup ./bin/logstash -f config/logstash.conf &
# 后台运行，并且输出log文件
nohup ./bin/logstash -f config/logstash.conf > mylogstash.log 2>&1 &
```

## 配置

```bash
```

## 参考
