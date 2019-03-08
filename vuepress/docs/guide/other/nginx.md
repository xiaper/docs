# Nginx

## nginx.conf

``` bash
http {
  ## http://blog.51cto.com/freeloda/1288553
  ## 设置缓存
  ## 注意：要放在/var/www/html目录下，否则会permission denied
  ## 注意：需要手动创建此目录：mkdir -p /var/www/html/nginx/cache/webserver
  proxy_cache_path /var/www/html/nginx/cache/webserver levels=1:2 keys_zone=webserver:20m max_size=1g;

  # nginx 出现413 Request Entity Too Large问题的解决方法
  client_max_body_size 1024m;

  ## 负载均衡
  upstream bytedesk{
    # 这样来自同一个IP的访客固定访问一个后端服务器
    ip_hash;

    # 注意此处每一行代表一个IMServer，可以添加多个，需要自行替换ip地址和端口号
    server ip:port     weight=2 max_fails=10 fail_timeout=60s;
    server ip:port     weight=2 max_fails=10 fail_timeout=60s;

    # backup 服务器，当上面所有服务器均不可用的情况下，访问此服务器
    # ip_hash 不能使用backup
    # server 127.0.0.1:80 backup;
  }

 include /etc/nginx/conf.d/*.conf;
 include /etc/nginx/sites-enabled/*;
}
```

## sites-available/default

``` bash
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  # 开发者自定义
  server_name bytedesk.com;

  # 强制http 转 https, 开发者需要修改为自己的域名
  return 301 https://www.bytedesk.com$request_uri;
}

server {
  # SSL configuration
  #
  listen 443 ssl default_server;
  listen [::]:443 ssl default_server;

  # 开发者需要修改成自己的证书，本文底部可以找到免费证书连接
  ssl on;
  ssl_certificate /etc/letsencrypt/live/bytedesk.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/bytedesk.com/privkey.pem;
  ssl_trusted_certificate  /etc/letsencrypt/live/bytedesk.com/chain.pem;

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
    #try_files $uri $uri/ =404;

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

## 免费https证书

- [letsencrypt](https://letsencrypt.org/)
- [LetsEncrypt通配符证书](https://www.jianshu.com/p/c5c9d071e395)