# Kibana

::: tip
可选组件
用途：

* 日志管理
:::

<!-- * [下载](https://www.elastic.co/downloads/kibana) -->
* [下载v7.6.2](https://www.elastic.co/cn/downloads/past-releases/kibana-7-6-2)
- [推荐-国内镜像](https://www.newbe.pro/Mirrors/Mirrors-Kibana/)

```bash
tar -xzvf kibana-7.6.2-linux-x86_64.tar.gz
cd kibana-7.6.2-linux-x86_64
```

修改配置文件，使其能够外网访问

```bash
vi config/kibana.yml
# 修改
# server.host: "localhost"
# elasticsearch.username: "elastic"
# elasticsearch.password: "pass"
# 为
server.host: "0.0.0.0"
elasticsearch.username: "elastic"
elasticsearch.password: "密码"
```

启动

```bash
# 前台启动（测试）
./bin/kibana --allow-root
# 后台运行（生产）
./bin/kibana --allow-root &
# 退出
exit
```

浏览器打开

```bash
# 其中：127.0.0.1替换为真实服务器ip
http://127.0.0.1:5601/
```

在管理后台 Management -> Index Pattern -> 创建index pattern:

```bash
logstash-*
```

其他

如果遇到下列问题:

* 删除index失败
* 创建index失败：saved_objects/index-pattern 403 (Forbidden)

```bash
# 解决方案
# 在Dev Tools里面执行
PUT _settings
{
    "index": {
        "blocks": {
            "read_only_allow_delete": "false"
        }
    }
}
# 也有可能是磁盘空间不足引起，建议清理或增加磁盘空间
```

## 参考
