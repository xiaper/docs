# Protobuf

## 安卓配置protobuf

### Step 1

创建 src/main/proto文件夹，跟src/main/java同一级，将.proto文件放置在此文件夹

### Step 2

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

### Step 3

修改module的build.gradle文件，在android{}上面添加

```java
// 步骤3：添加下面这一行
apply plugin: 'com.google.protobuf'
//
android {
    ...
}
```

### Step 4

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

### Step 5

在android{}和dependencies{}之间添加protobuf{}

```java
android {
    ...
}
// 步骤5：添加如下protobuf{...}
protobuf {
    protoc {
        // 建议修改为最新版本
        artifact = 'com.google.protobuf:protoc:3.9.0'
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

### Step 6

添加依赖

```java
dependencies {
    ...
    // 步骤6：添加下面两行，建议修改为最新版本
    implementation 'com.google.protobuf:protobuf-java:3.9.0'
    implementation 'com.google.protobuf:protoc:3.9.0'
    ...
}
```

同步Sync之后，会在build/generated/source/proto文件夹找到生成的java文件，直接在代码中import相关类即可

## iOS配置protobuf

## SpringBoot配置protobuf

## 微信公众号

<img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/>

## 参考
