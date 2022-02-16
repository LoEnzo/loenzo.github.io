(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{766:function(v,t,_){"use strict";_.r(t);var r=_(10),a=Object(r.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"title"}),_("p",[_("strong",[v._v("SpringBoot")]),v._v(" 是由 Pivotal 团队提供的全新框架，其设计目的是用来简化新 Spring 应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。简单来说，SpringBoot就是整合了很多基础框架的模板配置方式，达到开箱即用的效果。")])]),v._v(" "),_("h2",{attrs:{id:"一、知识点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、知识点"}},[v._v("#")]),v._v(" 一、知识点")]),v._v(" "),_("h3",{attrs:{id:"_1-springboot项目下的mvnw与mvnw-cmd"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-springboot项目下的mvnw与mvnw-cmd"}},[v._v("#")]),v._v(" 1. SpringBoot项目下的mvnw与mvnw.cmd")]),v._v(" "),_("p",[v._v("Maven是一个常用的构建工具，但是Maven的版本和插件的配合并不是那么完美，有时候你不得不切换到一个稍微旧一些的版本，以保证所有东西正常工作，而Gradle提供了一个Wrapper，可以很好解决版本切换的问题，当然更重要的是不需要预安装Gradle。")]),v._v(" "),_("p",[v._v("Maven虽然没有官方的Wrapper，但是有一个第三方的Wrapper可以使用。")]),v._v(" "),_("p",[v._v("安装： "),_("code",[v._v("mvn -N io.takari:maven:wrapper")]),v._v("；")]),v._v(" "),_("p",[v._v("安装指定版本："),_("code",[v._v("mvn -N io.takari:maven:wrapper -Dmaven=3.1.0")])]),v._v(" "),_("p",[v._v("构建："),_("code",[v._v("./mvnw clean install")])]),v._v(" "),_("h3",{attrs:{id:"_2-jar包查看"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-jar包查看"}},[v._v("#")]),v._v(" 2. jar包查看")]),v._v(" "),_("p",[v._v("springboot最终一般是打成jar包，我们一般会指定一个稳定版本打一个Tag分支，确定本次上线的jar版本是否正确需要和上次的jar包进行对比，而服务器通过临时解压开查是比较麻烦的，受限于网速，jar包大小，下载到本地用软件对比也比较麻烦，可以直接用jar指令来查看版本信息。")]),v._v(" "),_("p",[v._v("常用指令：")]),v._v(" "),_("p",[v._v("查看jar包中工程的信息："),_("code",[v._v('jar tvf jar包路径 | grep "jar包中工程名"')])]),v._v(" "),_("p",[v._v("输出jar包某个工程："),_("code",[v._v("jar -xvf jar包路径 BOOT-INF/lib/需要输入的工程名")])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("参数")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("-c")]),v._v(" "),_("td",[v._v("创建一个jar包")])]),v._v(" "),_("tr",[_("td",[v._v("-t")]),v._v(" "),_("td",[v._v("显示jar中的内容列表")])]),v._v(" "),_("tr",[_("td",[v._v("-x")]),v._v(" "),_("td",[v._v("解压jar包")])]),v._v(" "),_("tr",[_("td",[v._v("-u")]),v._v(" "),_("td",[v._v("添加文件到jar包中")])]),v._v(" "),_("tr",[_("td",[v._v("-f")]),v._v(" "),_("td",[v._v("指定jar包的文件名")])]),v._v(" "),_("tr",[_("td",[v._v("-v")]),v._v(" "),_("td",[v._v("生成详细的报造，并输出至标准设备")])]),v._v(" "),_("tr",[_("td",[v._v("-m")]),v._v(" "),_("td",[v._v("指定manifest.mf文件.(manifest.mf文件中可以对jar包及其中的内容作一些一设置)")])]),v._v(" "),_("tr",[_("td",[v._v("-0")]),v._v(" "),_("td",[v._v("产生jar包时不对其中的内容进行压缩处理")])]),v._v(" "),_("tr",[_("td",[v._v("-M")]),v._v(" "),_("td",[v._v("不产生所有文件的清单文件(Manifest.mf)。这个参数与忽略掉-m参数的设置")])]),v._v(" "),_("tr",[_("td",[v._v("-i")]),v._v(" "),_("td",[v._v("为指定的jar文件创建索引文件")])]),v._v(" "),_("tr",[_("td",[v._v("-C")]),v._v(" "),_("td",[v._v("表示转到相应的目录下执行jar命令,相当于cd到那个目录，然后不带-C执行jar命令")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);