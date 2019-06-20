# Coturn

::: tip 提示
for WebRTC
:::

- [下载](https://github.com/coturn/coturn/wiki/Downloads)

## 依赖

```bash
sudo apt-get install -y libssl-dev libevent-dev libpq-dev mysql-client libmysqlclient-dev libhiredis-dev openssl
sudo apt-get install -y gdebi-core
sudo apt-get install -y sqlite libsqlite3-dev
```

## 安装

```bash
tar -zxvf turnserver-4.5.1.1.tar.gz
cd turnserver-4.5.11
./configure
make
sudo make install
```

## 配置

```bash
sudo cp /usr/local/etc/turnserver.conf.default  /usr/local/etc/turnserver.conf
turnadmin -a –u jackning -r bytedesk -p 123456
turnadmin -A –u jackning -r bytedesk -p 123456
turnadmin -k -u jackning -r bytedesk -p 123456
0xc35c1783903fb35c8471f45bba6aa19f
openssl req -x509 -newkey rsa:2048 -keyout /usr/local/etc/turn_server_pkey.pem -out /usr/local/etc/turn_server_cert.pem -days 99999 -nodes
```

编辑turnserver.conf内容

```bash
listening-port=3478
external-ip=47.99.38.99
user=jackning:123456
realm=stun.bytedesk.com
```

阿里云云服务器安全组开放端口号

```bash
3478
3479
5349
# 同时支持 TCP/UDP
```

## 启动

```bash
# 后台启动:
turnserver -o -a -f -r bytedesk
nohup turnserver &
# 前台启动:
turnserver 或
turnserver -a -f -r bytedesk
```

## 测试

```bash
# 测试 STUN
turnutils_stunclient 47.99.38.99
```

- [网页测试](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/)

```bash
# 输入：
STUN or TURN URI: stun:47.99.38.99:3478
TURN username: jackning
TURN password: 123456
```

## 参考

- [coturn 服务搭建](https://syaka-yin.github.io/2018/08/01/coturn/)
- [WebRTC信令控制与STUN/TURN服务器搭建](https://webrtc.org.cn/webrtc-tutorial-2-signaling-stun-turn/)
