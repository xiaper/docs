# Kibana

::: tip
可选组件
用途：

* 日志管理
:::

<!-- * [下载](https://www.elastic.co/downloads/kibana) -->
* [下载v6.2](https://www.elastic.co/cn/downloads/past-releases/kibana-6-2-4)

```bash
tar -xzvf kibana-6.2.4-linux-x86_64.tar.gz
cd kibana-6.2.4-linux-x86_64
```

修改配置文件，使其能够外网访问

```bash
vi config/kibana.yml
# 修改
#server.host: "localhost"
# 为
server.host: "0.0.0.0"
```

用户授权

```bash
# 配置远程访问用户名/密码
```

启动

```bash
# 前台启动（测试）
./bin/kibana
# 后台运行（生产）
./bin/kibana &
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
