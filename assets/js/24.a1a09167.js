(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{536:function(t,s,a){t.exports=a.p+"assets/img/springcloud_bus01.0f2fd07d.png"},611:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[n("strong",[t._v("Spring Cloud Bus")]),t._v(" （消息总线）通过轻量消息代理连接各个分布的节点，用于广播 状态变更（如配置文件变更）或者其他的消息指令，可以将其理解为管理和传播消息所有分布式服务中的详细即可。"),n("strong",[t._v("Spring Cloud Bus")]),t._v(" 配合 "),n("strong",[t._v("Spring Cloud Config")]),t._v(" 使用可以实现配置的动态刷新。目前 "),n("strong",[t._v("Spring Cloud Bus")]),t._v(" 支持两种消息代理："),n("strong",[t._v("RabbitMQ")]),t._v(" 和 "),n("strong",[t._v("Kafka")]),t._v("。"),n("strong",[t._v("AMQP")]),t._v("（(Advanced Message Queuing Protocol），一个提供统一消息服务的应用层标准高级消息队列协议")])]),t._v(" "),n("h2",{attrs:{id:"为什么需要统一配置管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要统一配置管理"}},[t._v("#")]),t._v(" 为什么需要统一配置管理")]),t._v(" "),n("ul",[n("li",[t._v("多服务，多环境配置集中管理，结构目录清晰，方便快速查找")]),t._v(" "),n("li",[t._v("运行期间动态调整配置")]),t._v(" "),n("li",[t._v("广播状态变更（配置变更），不要每个微服务都去刷新依次，只需要刷新依次，及所有微服务都可以接收到广播信息进行更新")])]),t._v(" "),n("h2",{attrs:{id:"windows-rabbitmq-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-rabbitmq-安装"}},[t._v("#")]),t._v(" Windows "),n("strong",[t._v("RabbitMQ")]),t._v(" 安装")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[n("a",{attrs:{href:"http://erlang.org/download/otp_win64_21.3.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装Erlang"),n("OutboundLink")],1)])])]),t._v(" "),n("li",[n("p",[n("strong",[n("a",{attrs:{href:"https://dl.bintray.com/rabbitmq/all/rabbitmq-server/3.7.14/rabbitmq-server-3.7.14.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装RabbitMQ"),n("OutboundLink")],1)])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("启动RabbitMQ")])])])]),t._v(" "),n("p",[t._v("启动控制管理台，进入"),n("strong",[t._v("RabbitMQ")]),t._v("安装目录下的"),n("code",[t._v("sbin")]),t._v("子目录，输入以下启动管理功能：")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("rabbitmq-plugins "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" rabbitmq_management\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("因为网络原因，没有安装成功"),n("strong",[t._v("Erlang")]),t._v("，直接在虚拟机中用"),n("strong",[t._v("docker")]),t._v("启动的"),n("strong",[t._v("RabbitMQ")])]),t._v(" "),n("p",[t._v("本地启动访问地址："),n("code",[t._v("http://localhost:15672/")]),t._v("，我是用的虚拟机的ip")]),t._v(" "),n("p",[t._v("默认用户名、密码为"),n("code",[t._v("guest")])]),t._v(" "),n("h2",{attrs:{id:"动态刷新配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态刷新配置"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"http://www.macrozheng.com/#/cloud/bus?id=%E5%8A%A8%E6%80%81%E5%88%B7%E6%96%B0%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("动态刷新配置"),n("OutboundLink")],1)]),t._v(" "),n("ul",[n("li",[t._v("给"),n("strong",[t._v("config-server")]),t._v("添加消息总线依赖")])]),t._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-bus-amqp"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-actuator"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("ul",[n("li",[t._v("添加"),n("code",[t._v("application-yml")]),t._v("配置，添加"),n("code",[t._v("RabbitMQ")]),t._v("配置及暴露了刷新配置的Actuator端点")])]),t._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8904")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("git")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自己的git配置仓库，可以根据作者的fork一份，便于验证修改")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//gitee.com/myMagicRain/springcloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config.git \n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" macro "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自己git的用户名和密码")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clone-on-start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启启动时直接从git获取配置")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rabbitmq")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rabbitmq相关配置")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5672")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" guest\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" guest\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eureka")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service-url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defaultZone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8001/eureka/\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("management")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoints")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#暴露bus刷新配置的端点")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exposure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("include")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bus-refresh'")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br")])]),n("ul",[n("li",[t._v("启动"),n("code",[t._v("config-client 9004 9005")]),t._v("、"),n("code",[t._v("config-server 8094")])]),t._v(" "),n("li",[t._v("登陆"),n("code",[t._v("RabbitMQ")]),t._v("，默认用户名和密码是guest，点击"),n("strong",[t._v("Exchanges")]),t._v("和"),n("strong",[t._v("Queues")]),t._v("可以发现"),n("strong",[t._v("Spring Cloud Bus")]),t._v(" 创建了一个叫"),n("code",[t._v("springCloudBus")]),t._v("的交换机及三个以 "),n("code",[t._v("springCloudBus.anonymous")]),t._v("开头的队列：")])]),t._v(" "),n("p",[t._v("修改git仓库中配置dev分支的配置文件，因为"),n("code",[t._v("config-client")]),t._v("配置的是加载dev的配置，先调用，然后刷新配置中心配置，然后再次调用，可以观察到配置变更成功了")]),t._v(" "),n("ul",[n("li",[t._v("调用注册中心的接口刷新所有配置，发送"),n("strong",[t._v("POST")]),t._v("请求："),n("code",[t._v("http://localhost:8904/actuator/bus-refresh")])])]),t._v(" "),n("p",[t._v("如果只刷新部分客户端，例如刷新9004的客户端，可以发送"),n("strong",[t._v("POST")]),t._v("请求："),n("code",[t._v("http://localhost:8904/actuator/bus-refresh/config-client:9004")])]),t._v(" "),n("h2",{attrs:{id:"配合webhooks使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配合webhooks使用"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"http://www.macrozheng.com/#/cloud/bus?id=%E9%85%8D%E5%90%88webhooks%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("配合WebHooks使用"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("webHooks相当于是一个钩子函数，我们可以配置当向Git仓库push代码时触发这个钩子函数，不然每次更新配置都需要自己手动发送"),n("strong",[t._v("POST")]),t._v("请求刷新一次，根据自己环境来谨慎使用，配置一般也不是需要一次性全部刷新")]),t._v(" "),n("p",[t._v("这里以Gitee为例来介绍下其使用方式，这里当我们向配置仓库push代码时就会自动刷新服务配置了")]),t._v(" "),n("p",[n("img",{attrs:{src:a(536),alt:"来自Spring官网"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);