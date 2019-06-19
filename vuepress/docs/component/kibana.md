# Kibana

::: tip
可选组件
用途：

* 日志管理
:::

<!-- * [下载](https://www.elastic.co/downloads/kibana) -->
* [下载v6.2](https://www.elastic.co/cn/downloads/past-releases/kibana-6-4-2)

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

## 参考
