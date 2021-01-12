(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{378:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"protobuf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#protobuf","aria-hidden":"true"}},[s._v("#")]),s._v(" Protobuf")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("虾婆提供Json和Protobuf两种消息传输格式，下面主要讲述Protobuf在各个端的配置步骤")])]),s._v(" "),t("h2",{attrs:{id:"安卓"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安卓","aria-hidden":"true"}},[s._v("#")]),s._v(" 安卓")]),s._v(" "),t("h3",{attrs:{id:"step-1-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-1","aria-hidden":"true"}},[s._v("#")]),s._v(" Step 1-1")]),s._v(" "),t("p",[s._v("创建 src/main/proto文件夹，跟src/main/java同一级，将.proto文件放置在此文件夹")]),s._v(" "),t("h3",{attrs:{id:"step-1-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-2","aria-hidden":"true"}},[s._v("#")]),s._v(" Step 1-2")]),s._v(" "),t("p",[s._v("修改project的build.gradle文件，如下：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("buildscript "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    repositories "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mavenCentral")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jcenter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("google")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    dependencies "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 步骤2：添加此行，建议修改为最新版本")]),s._v("\n        classpath "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'com.google.protobuf:protobuf-gradle-plugin:0.8.10'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"step-1-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-3","aria-hidden":"true"}},[s._v("#")]),s._v(" Step 1-3")]),s._v(" "),t("p",[s._v("修改module的build.gradle文件，在android{}上面添加")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 步骤3：添加下面这一行")]),s._v("\napply plugin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'com.google.protobuf'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\nandroid "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"step-1-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-4","aria-hidden":"true"}},[s._v("#")]),s._v(" Step 1-4")]),s._v(" "),t("p",[s._v("在android{}中添加sourceSets")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("android "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 步骤4：添加sourceSets")]),s._v("\n    sourceSets "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        main "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            proto "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                srcDir "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/main/proto"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            java "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                srcDir "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/main/java'")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"step-1-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-5","aria-hidden":"true"}},[s._v("#")]),s._v(" Step 1-5")]),s._v(" "),t("p",[s._v("在android{}和dependencies{}之间添加protobuf{}")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("android "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 步骤5：添加如下protobuf{...}")]),s._v("\nprotobuf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    protoc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 建议修改为最新版本")]),s._v("\n        artifact "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'com.google.protobuf:protoc:3.9.1'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    generateProtoTasks "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("each "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" task "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            task"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("builtins "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                remove java\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            task"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("builtins "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                java "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\ndependencies "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h3",{attrs:{id:"step-1-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-6","aria-hidden":"true"}},[s._v("#")]),s._v(" Step 1-6")]),s._v(" "),t("p",[s._v("添加依赖")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("dependencies "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 步骤6：添加下面一行，建议修改为最新版本")]),s._v("\n    implementation "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'com.google.protobuf:protobuf-java:3.9.1'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("同步Sync之后，会在build/generated/source/proto文件夹找到生成的java文件，直接在代码中import相关类即可")]),s._v(" "),t("h2",{attrs:{id:"ios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ios","aria-hidden":"true"}},[s._v("#")]),s._v(" iOS")]),s._v(" "),t("h3",{attrs:{id:"step-2-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-1","aria-hidden":"true"}},[s._v("#")]),s._v(" Step 2-1")]),s._v(" "),t("p",[s._v("针对pod项目，pod文件里面添加")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("pod "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Protobuf'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("保存之后，执行 "),t("code",[s._v("pod install")]),s._v("。非pod项目，可直接拖动相关Protobuf源码到项目。")]),s._v(" "),t("h3",{attrs:{id:"step-2-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-2","aria-hidden":"true"}},[s._v("#")]),s._v(" Step 2-2")]),s._v(" "),t("p",[s._v("项目目录中创建proto文件夹(可自定义文件夹名称)，将.proto文件拷贝到此文件夹")]),s._v(" "),t("h3",{attrs:{id:"step-2-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-3","aria-hidden":"true"}},[s._v("#")]),s._v(" Step 2-3")]),s._v(" "),t("p",[s._v("打开terminal, cd到.proto文件存放目录，执行如下命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("protoc --proto_path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(". --objc_out"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(". group.proto hello.proto message.proto thread.proto user.proto\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"step-2-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-4","aria-hidden":"true"}},[s._v("#")]),s._v(" Step 2-4")]),s._v(" "),t("p",[s._v("将生成的.h/.m等文件拖入到项目中")]),s._v(" "),t("h3",{attrs:{id:"step-2-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-5","aria-hidden":"true"}},[s._v("#")]),s._v(" Step 2-5")]),s._v(" "),t("p",[s._v("选择项目，选中相应TARGETS，在其 Build Phases 的 Compile Sources 中针对 .pbobjc.m文件添加如下 Compiler Flags")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("-fno-objc-arc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),s._v(" "),t("h2",{attrs:{id:"javascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[s._v("#")]),s._v(" JavaScript")]),s._v(" "),t("h3",{attrs:{id:"step-3-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-1","aria-hidden":"true"}},[s._v("#")]),s._v(" Step 3-1")]),s._v(" "),t("h2",{attrs:{id:"springboot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot","aria-hidden":"true"}},[s._v("#")]),s._v(" SpringBoot")]),s._v(" "),t("h3",{attrs:{id:"step-4-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-4-1","aria-hidden":"true"}},[s._v("#")]),s._v(" Step 4-1")]),s._v(" "),t("h2",{attrs:{id:"微信公众号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号","aria-hidden":"true"}},[s._v("#")]),s._v(" 微信公众号")]),s._v(" "),t("img",{staticStyle:{width:"250px"},attrs:{src:s.$withBase("/image/qrcode_xiaperio_430.jpg")}}),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")])])},[],!1,null,null,null);a.default=e.exports}}]);