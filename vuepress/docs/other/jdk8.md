
# Java 环境安装

版本 jdk 8

* 到Oracle官网[下载](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)JDK8

* 解压

``` bash
sudo tar -zxvf jdk-8u202-linux-x64.tar.gz
```

解压后文件夹 jdk1.8.0_202

* 先在 /usr 下新建文件夹 java ，然后将文件夹jdk1.8.0_202移动到目录/usr/java下：

``` bash
mkdir /usr/java
sudo mv jdk1.8.0_202 /usr/java/
```

* 现在配置系统环境变量，现在我们在全局配置文件/etc/profile下配置，即为所有用户配置Java环境，使用vi命令编辑/etc/profile文件：

``` bash
sudo vi /etc/profile
```

* 在文件底部加上四条配置信息

``` bash
export JAVA_HOME=/usr/java/jdk1.8.0_202
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
java version "1.8.0_202"
Java(TM) SE Runtime Environment (build 1.8.0_202-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.192-b12, mixed mode)
```
