# Letsencrypt

::: tip 提示
支持https
:::

## 安装acme.sh

```shell
curl  https://get.acme.sh | sh
source ~/.bashrc
apt-get install socat
```

## 生成证书

```shell
# 首先停止nginx
service nginx stop
# 如果有设置cdn的话，在阿里云域名后台暂停www/cdn解析，否则忽略
# 将域名解析到此服务器ip地址
# 初次生成(二级域名可自行增加或删除)：
acme.sh --issue -d example.com -d www.example.com -d vip.example.com -d wechat.example.com -d oauth.example.com -d api.example.com -d upload.example.com -d support.example.com -d stomp.example.com -d export.example.com -d cdn.example.com -d mini.example.com --standalone
# 后续更新
# acme.sh --renew -d example.com -d www.example.com -d vip.example.com -d wechat.example.com -d oauth.example.com -d api.example.com -d upload.example.com -d support.example.com -d stomp.example.com -d export.example.com -d cdn.example.com -d mini.example.com --standalone --force -w /var/www/html
```

## 安装证书

```shell
# 创建文件夹
cd /etc/nginx
mkdir ssl
# 安装上述到文件夹
acme.sh --installcert -d example.com --key-file /etc/nginx/ssl/example.key --fullchain-file /etc/nginx/ssl/fullchain.cer
# 不管多域名证书里有几个域名，这里的 -d 参数只需要带第一个域名即可
# 修改/etc/nginx/sites-available/default添加：
ssl_certificate /etc/nginx/ssl/fullchain.cer;
ssl_certificate_key /etc/nginx/ssl/example.key;
# 启动nginx
service nginx start
# 重启nginx:
# systemctl restart nginx
# 重新加载：
# service nginx force-reload
# acme自动升级：
acme.sh  --upgrade  --auto-upgrade
# 
# [Sat Aug 15 06:42:06 CST 2020] Your cert is in  /root/.acme.sh/example.com/example.com.cer
# [Sat Aug 15 06:42:06 CST 2020] Your cert key is in  /root/.acme.sh/example.com/example.com.key
# [Sat Aug 15 06:42:06 CST 2020] The intermediate CA cert is in  /root/.acme.sh/example.com/ca.cer
# [Sat Aug 15 06:42:06 CST 2020] And the full chain certs is there:  /root/.acme.sh/example.com/fullchain.cer
# 
# 清除浏览器缓存之后，然后刷新网页，查看证书日期
```

## 参考

- [说明](https://github.com/Neilpang/acme.sh/wiki/%E8%AF%B4%E6%98%8E)
- [其他](https://segmentfault.com/a/1190000018244767)
