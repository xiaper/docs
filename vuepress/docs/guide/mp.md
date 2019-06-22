# 公众号

::: tip 提示
功能列表

* 机器人
* 人工客服
* TODO:菜单管理
* TODO:素材管理
* TODO:用户管理
* TODO:统计数据
:::

## 对接

## 机器人

## 人工客服

## 其他

接收到‘安全模式’的消息，需要解密，可能遇到下面问题：

```bash
java.security.invalidkeyexception: illegal key size
```

由于受到美国对出口软件的限制，我们需要手动[下载jdk加密jar包](http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html)，解压之后，需要将local_policy.jar和US_export_policy.jar放到jdk安装文件夹jre/lib/security文件夹，比如：

```bash
# 根据自己电脑实际路径配置
# 可通过命令 echo $JAVA_HOME 查看jdk本地路径
# 如：
/**/jdk1.8.0_152.jdk/jre/lib/security
```

### 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考
