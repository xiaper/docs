# Nginx

## 重定向

``` bash
server {
 listen 80 default_server;
 listen [::]:80 default_server;

 server_name bytedesk.com;
 # 强制http 转 https
 return 301 https://www.bytedesk.com$request_uri;
}
```

## 反向代理

``` bash
server {
 server_name _;

 root /var/www/html;
 index index.html index.htm index.nginx-debian.html;

  ## 反向代理
  # https代理stomp连接
  location /stomp/ {
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_pass http://bytedesk/stomp/;

    # 为记录真实ip地址，而不是反向代理服务器地址
    proxy_set_header  Host            $host;
    proxy_set_header  X-Real-IP       $remote_addr;
    proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
    include           fastcgi_params;
  }

  ## 反向代理
  # https代理websocket连接
  location /websocket/ {
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_pass http://bytedesk/websocket/;

    # 为记录真实ip地址，而不是反向代理服务器地址
    proxy_set_header  Host            $host;
    proxy_set_header  X-Real-IP       $remote_addr;
    proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
    include           fastcgi_params;
  }

  #增加两头部
  add_header X-Via $server_addr;
  add_header X-Cache $upstream_cache_status;

  ## 反向代理
  #  X-Real-IP 让日志的IP显示真实的客户端的IP
  location / {
    # 将nginx所有请求均跳转到8000端口
    proxy_pass http://bytedesk;
    # 为记录真实ip地址，而不是反向代理服务器地址
    proxy_set_header  Host            $host;
    proxy_set_header  X-Real-IP       $remote_addr;
    proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
    include           fastcgi_params;

    # 设置缓存
    # 为应答代码为200和302的设置缓存时间为10分钟，404代码缓存1分钟。
    proxy_cache webserver;
    proxy_cache_valid  200 302  10m;
    proxy_cache_valid  404      1m;
  }
}
```

## 负载均衡

``` bash
upstream bytedesk {
  # 这样来自同一个IP的访客固定访问一个后端服务器
  ip_hash;

  server 47.99.38.99:8000     weight=2 max_fails=10 fail_timeout=60s;
  server 47.98.54.86:8000     weight=2 max_fails=10 fail_timeout=60s;

  # backup 服务器，当上面所有服务器均不可用的情况下，访问此服务器
  # ip_hash 不能使用backup
  # server 127.0.0.1:80 backup;
}
```

## 缓存

``` bash
# 注意：要放在/var/www/html目录下，否则会permission denied
proxy_cache_path /var/www/html/nginx/cache/webserver levels=1:2 keys_zone=webserver:20m max_size=1g;
```

## https证书

``` bash
server {
 # SSL configuration
 #
 listen 443 ssl default_server;
 listen [::]:443 ssl default_server;

 ssl on;
 ssl_certificate /etc/letsencrypt/live/bytedesk.com/fullchain.pem;
 ssl_certificate_key /etc/letsencrypt/live/bytedesk.com/privkey.pem;
 ssl_trusted_certificate  /etc/letsencrypt/live/bytedesk.com/chain.pem;
}
```