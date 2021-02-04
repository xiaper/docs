
# Java环境

版本 jdk 8

* 到Oracle官网[下载](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)JDK8

* 解压

``` bash
sudo tar -zxvf jdk-8u192-linux-x64.tar.gz
```

解压后文件夹 jdk1.8.0_192

* 先在 /usr 下新建文件夹 java ，然后将文件夹jdk1.8.0_192移动到目录/usr/java下：

``` bash
mkdir /usr/java
sudo mv jdk1.8.0_192 /usr/java/
```

* 现在配置系统环境变量，现在我们在全局配置文件/etc/profile下配置，即为所有用户配置Java环境，使用vi命令编辑/etc/profile文件：

``` bash
sudo vi /etc/profile
```

* 在文件底部加上四条配置信息

``` bash
export JAVA_HOME=/usr/java/jdk1.8.0_192
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:%{JAVA_HOME}/lib:%{JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
```

* 编辑好后保存退出，执行命令：

``` bash
source /etc/profile
```

* 验证是否安装成功

``` bash
java -version
```

* 安装成功

``` bash
java version "1.8.0_192"
Java(TM) SE Runtime Environment (build 1.8.0_192-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.192-b12, mixed mode)
```

## 其他

由于受到美国对出口软件的限制，我们需要手动[下载jdk加密jar包](http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html)，解压之后，需要将local_policy.jar和US_export_policy.jar放到jdk安装文件夹jre/lib/security文件夹，比如：

```bash
unzip jce_policy-8.zip
cd UnlimitedJCEPolicyJDK8
# 根据自己电脑实际路径配置
# 可通过命令 echo $JAVA_HOME 查看jdk本地路径
# 如：/usr/java/jdk1.8.0_192/jre/lib/security
sudo cp US_export_policy.jar /usr/java/jdk1.8.0_192/jre/lib/security
sudo cp local_policy.jar /usr/java/jdk1.8.0_192/jre/lib/security
```

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考
