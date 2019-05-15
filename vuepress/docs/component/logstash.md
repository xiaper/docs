# LogStash

::: tip
可选组件
:::

TODO: 部署、配置

- [下载](https://www.elastic.co/downloads/logstash)

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
# 前台运行（测试）
./bin/logstash -f config/logstash.conf
# 后台运行（生产）
nohup ./bin/logstash -f config/logstash.conf &
# 后台运行，并且输出log文件
nohup ./bin/logstash -f config/logstash.conf > mylogstash.log 2>&1 &
```

默认端口5044

## 参考
