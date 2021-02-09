# Nginx

## 安装

``` bash
sudo apt update
sudo apt install nginx
# 查看是否安装成功
netstat -ntlp
# 如果80端口正常启动，则证明安装成功
# 停止nginx
# service nginx stop
# 启动nginx
# service nginx start
# 重启nginx:
# service nginx restart
# systemctl restart nginx
# 重新加载：
# service nginx force-reload
```

```bash
# 查看是否安装stream模块
nginx -V | grep stream # 注意是大写V
# 有输出内容证明已经安装
nginx version: nginx/1.18.0 (Ubuntu)
built with OpenSSL 1.1.1f  31 Mar 2020
TLS SNI support enabled
configure arguments: --with-cc-opt='-g -O2 -fdebug-prefix-map=/build/nginx-5J5hor/nginx-1.18.0=. -fstack-protector-strong -Wformat -Werror=format-security -fPIC -Wdate-time -D_FORTIFY_SOURCE=2' --with-ld-opt='-Wl,-Bsymbolic-functions -Wl,-z,relro -Wl,-z,now -fPIC' --prefix=/usr/share/nginx --conf-path=/etc/nginx/nginx.conf --http-log-path=/var/log/nginx/access.log --error-log-path=/var/log/nginx/error.log --lock-path=/var/lock/nginx.lock --pid-path=/run/nginx.pid --modules-path=/usr/lib/nginx/modules --http-client-body-temp-path=/var/lib/nginx/body --http-fastcgi-temp-path=/var/lib/nginx/fastcgi --http-proxy-temp-path=/var/lib/nginx/proxy --http-scgi-temp-path=/var/lib/nginx/scgi --http-uwsgi-temp-path=/var/lib/nginx/uwsgi --with-debug --with-compat --with-pcre-jit --with-http_ssl_module --with-http_stub_status_module --with-http_realip_module --with-http_auth_request_module --with-http_v2_module --with-http_dav_module --with-http_slice_module --with-threads --with-http_addition_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_image_filter_module=dynamic --with-http_sub_module --with-http_xslt_module=dynamic --with-stream=dynamic --with-stream_ssl_module --with-mail=dynamic --with-mail_ssl_module
# 可以看到参数：--with-stream=dynamic，说明已经安装stream模块
```

```bash
# 对应报错：unknown directive "stream" in /etc/nginx/nginx.conf，需要在nginx.conf的第一行插入
load_module /usr/lib/nginx/modules/ngx_stream_module.so;
```

```bash
# 缓存路径，创建文件夹，在nginx.conf文件中用到
mkdir -p /var/www/html/nginx/cache/webserver
```

```bash
# 对外开放端口号
http：80
https：443
# wss：3885 # nginx对内代理，无需对外开放
# tcp：3883
# tls：13883
# 另外
mysql：3306
redis：6379
```

## SSL证书生成

``` bash
wget https://dl.eff.org/certbot-auto
chmod a+x certbot-auto
./certbot-auto certonly  -d "*.chainsnow.com" --manual --preferred-challenges dns-01  --server https://acme-v02.api.letsencrypt.org/directory
```

[Letsencrypt](/other/letsencrypt.md)

## 配置

```bash
vi /etc/nginx/nginx.conf
```

``` bash
# 注意对于新版本需要手动加载此行，否则会报错：unknown directive "stream" in /etc/nginx/nginx.conf
load_module /usr/lib/nginx/modules/ngx_stream_module.so;
# 
user www-data;
worker_processes auto;
pid /run/nginx.pid;
# https://blog.csdn.net/liupeifeng3514/article/details/79007079
# 报错500: nginx too many open files
worker_rlimit_nofile 65535;

events {
  use epoll;
  worker_connections 65535;
  accept_mutex off;
  multi_accept on;
}

http {
  ##
  # Basic Settings
  ##
  sendfile on;
  tcp_nopush on;
  tcp_nodelay on;
  keepalive_timeout 65;
  types_hash_max_size 2048;
  # server_tokens off;

  # server_names_hash_bucket_size 64;
  # server_name_in_redirect off;

  include /etc/nginx/mime.types;
  default_type application/octet-stream;

  ##
  # SSL Settings
  ##
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
  ssl_prefer_server_ciphers on;

  ##
  # Logging Settings
  ##
  access_log /var/log/nginx/access.log;
  error_log /var/log/nginx/error.log;

  ##
  # Gzip Settings
  ##
  gzip on;
  gzip_disable "msie6";

  # gzip_vary on;
  # gzip_proxied any;
  # gzip_comp_level 6;
  # gzip_buffers 16 8k;
  # gzip_http_version 1.1;
  # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

  ##
  # Virtual Host Configs
  ##

  ## http://blog.51cto.com/freeloda/1288553
  ## 设置缓存
  ## 注意：要放在/var/www/html目录下，否则会permission denied
  proxy_cache_path /var/www/html/nginx/cache/webserver levels=1:2 keys_zone=webserver:20m max_size=1g;
  # nginx 出现413 Request Entity Too Large问题的解决方法
  client_max_body_size 1024m;

  ## 负载均衡
  upstream bytedesk {

    # 这样来自同一个IP的访客固定访问一个后端服务器
    # ip_hash;
    #fair;
    # least_conn;

    # 替换ip填写多条
    # server 127.0.0.2:8000     weight=2 max_fails=10 fail_timeout=60s;
    server 127.0.0.1:8000     weight=2 max_fails=10 fail_timeout=60s;

    # backup 服务器，当上面所有服务器均不可用的情况下，访问此服务器
    # ip_hash 不能使用backup
    # server 127.0.0.1:80 backup;
  }

  upstream bytedeskwss {

    # 这样来自同一个IP的访客固定访问一个后端服务器
    # ip_hash;
    #fair;
    # least_conn;

    # 替换ip填写多条
    # server 127.0.0.2:3885     weight=2 max_fails=10 fail_timeout=60s;
    server 127.0.0.1:3885     weight=2 max_fails=10 fail_timeout=60s;
  }

  include /etc/nginx/conf.d/*.conf;
  include /etc/nginx/sites-enabled/*;
}

# 配置tcp ssl代理
stream {

  #tcp
  upstream bytedesktcp {
      #ip_hash;

      # 替换ip填写多条
      server 127.0.0.1:3883     weight=2 max_fails=10 fail_timeout=60s;
      # server 127.0.0.1:3883     weight=2 max_fails=10 fail_timeout=60s;
  }

  server {                     
      listen 13883 ssl;

      ssl_certificate /etc/nginx/ssl/fullchain.cer;
      ssl_certificate_key /etc/nginx/ssl/bytedesk.key;

      # ssl_session_cache    shared:SSL:10m;
      # ssl_session_timeout  10m;     
      # ssl_ciphers  HIGH:!aNULL:!MD5;  
      # ssl_prefer_server_ciphers  on; 

      proxy_connect_timeout 25s;
      proxy_timeout 60s; 
      proxy_pass bytedesktcp;      
  }
}
```

```bash
vi /etc/nginx/sites-available/default
```

``` bash
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  # root /var/www/html;

  # Add index.php to the list if you are using PHP
  # index index.html index.htm index.nginx-debian.html;

  # server_name bytedesk.com;

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
  location /websocket {
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_pass http://bytedeskwss/websocket;

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


# Virtual Host configuration for example.com
#
# You can move that to a different file under sites-available/ and symlink that
# to sites-enabled/ to enable it.
#
server {
  # SSL configuration
  #
  listen 443 ssl default_server;
  listen [::]:443 ssl default_server;

  ssl on; # 最新版nginx可注释掉此行
  #ssl_certificate /etc/letsencrypt/live/bytedesk.com/fullchain.pem;
  #ssl_certificate_key /etc/letsencrypt/live/bytedesk.com/privkey.pem;
  #ssl_trusted_certificate  /etc/letsencrypt/live/bytedesk.com/chain.pem;

  ssl_certificate /etc/nginx/ssl/fullchain.cer;
  ssl_certificate_key /etc/nginx/ssl/bytedesk.key;

  server_name _;

  ## 不起作用
  ## redirect nowww to www
  #if ($host = 'bytedesk.com' ) {
  #    rewrite  ^/(.*)$  https://www.bytedesk.com/$1  permanent;
  #}

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
  location /websocket {
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_pass http://bytedeskwss/websocket;

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

``` bash
# 重新加载配置文件
nginx -s reload
# 或者 重启nginx
```

## Linux-TCP连接数修改

```bash
# 查看Linux系统用户最大打开的文件限制
ulimit -n 
# 65535
# 修改打开文件限制
vi /etc/security/limits.conf
root soft nofile 655350
root hard nofile 655350
nginx soft nofile 6553500
nginx hard nofile 6553500
* soft nofile 655350
* hard nofile 655350
# 其中root指定了要修改哪个用户的打开文件数限制。
# 可用'*'号表示修改所有用户的限制；soft或hard指定要修改软限制还是硬限制；
# 102400则指定了想要修改的新的限制值，即最大打开文件数(请注意软限制值要小于或等于硬限制)
# 注意：修改了/etc/security/limits.conf，关闭Terminal重新登录或重启服务器生效
# 查看 open files数
ulimit -a
```

## 常见问题

```shell
# 查看nginx log
cd /var/log/nginx
# 2020/12/16 08:11:44 [error] 11023#11023: *8510657 connect() failed (111: Connection refused) while connecting to upstream, client: ipXXX, server: 0.0.0.0:13883, upstream: "47.98.54.86:3883", bytes from/to client:0/0, bytes from/to upstream:0/0
# 解决方案

```

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考

- [letsencrypt](https://letsencrypt.org/)
- [LetsEncrypt通配符证书](https://www.jianshu.com/p/c5c9d071e395)
- [Ubuntu /etc/security/limits.conf 不生效问题](https://www.cnblogs.com/xiao987334176/p/11008812.html)
