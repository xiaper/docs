# Protobuf

::: tip 提示
虾婆提供Json和Protobuf两种消息传输格式，下面主要讲述Protobuf在各个端的配置步骤
:::

## 安卓

### Step 1-1

创建 src/main/proto文件夹，跟src/main/java同一级，将.proto文件放置在此文件夹

### Step 1-2

修改project的build.gradle文件，如下：

```java
buildscript {
    ...
    repositories {
        mavenCentral()
        jcenter()
        google()
    }
    dependencies {
        // 步骤2：添加此行，建议修改为最新版本
        classpath 'com.google.protobuf:protobuf-gradle-plugin:0.8.10'
    }
    ...
}
```

### Step 1-3

修改module的build.gradle文件，在android{}上面添加

```java
// 步骤3：添加下面这一行
apply plugin: 'com.google.protobuf'
//
android {
    ...
}
```

### Step 1-4

在android{}中添加sourceSets

```java
android {
    ...
    // 步骤4：添加sourceSets
    sourceSets {
        main {
            proto {
                srcDir "src/main/proto"
            }
            java {
                srcDir 'src/main/java'
            }
        }
    }
    ...
}
```

### Step 1-5

在android{}和dependencies{}之间添加protobuf{}

```java
android {
    ...
}
// 步骤5：添加如下protobuf{...}
protobuf {
    protoc {
        // 建议修改为最新版本
        artifact = 'com.google.protobuf:protoc:3.9.1'
    }
    generateProtoTasks {
        all().each { task ->
            task.builtins {
                remove java
            }
            task.builtins {
                java {}
            }
        }
    }
}
//
dependencies {
    ...
}
```

### Step 1-6

添加依赖

```java
dependencies {
    ...
    // 步骤6：添加下面一行，建议修改为最新版本
    implementation 'com.google.protobuf:protobuf-java:3.9.1'
    ...
}
```

同步Sync之后，会在build/generated/source/proto文件夹找到生成的java文件，直接在代码中import相关类即可

## iOS

### Step 2-1

针对pod项目，pod文件里面添加

```java
pod 'Protobuf'
```

保存之后，执行 `pod install`。非pod项目，可直接拖动相关Protobuf源码到项目。

### Step 2-2

项目目录中创建proto文件夹(可自定义文件夹名称)，将.proto文件拷贝到此文件夹

### Step 2-3

打开terminal, cd到.proto文件存放目录，执行如下命令

```bash
protoc --proto_path=. --objc_out=. group.proto hello.proto message.proto thread.proto user.proto
```

### Step 2-4

将生成的.h/.m等文件拖入到项目中

### Step 2-5

选择项目，选中相应TARGETS，在其 Build Phases 的 Compile Sources 中针对 .pbobjc.m文件添加如下 Compiler Flags

```bash
-fno-objc-arc
```

<!-- TODO: 添加截图 -->

## JavaScript

### Step 3-1

## SpringBoot

### Step 4-1

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考
