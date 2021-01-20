(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{522:function(t,s,a){t.exports=a.p+"assets/img/docker01.94d8669d.png"},523:function(t,s,a){t.exports=a.p+"assets/img/docker02.92f1d270.png"},574:function(t,s,a){"use strict";a.r(s);var r=a(7),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"title"}),r("p",[r("strong",[t._v("Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口")]),t._v("。它是目前最流行的 Linux 容器解决方案。Docker 轻巧快速。它为基于虚拟机管理程序的虚拟机提供了可行、经济、高效的替代方案，因此您可以利用更多的计算能力来实现业务目标。Docker 非常适合于高密度环境以及中小型部署，而您可以用更少的资源做更多的事情。")])]),t._v(" "),r("h2",{attrs:{id:"概要"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),r("h3",{attrs:{id:"相关链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接：")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 官网"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/docker/docker-ce",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Docker 源码"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/cli/?spm=5176.8351553.0.0.4f441991dVcHxY",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker官网命令文档"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.dockerinfo.net/document",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker中文文档"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://cr.console.aliyun.com/cn-hangzhou/instances",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云镜像容器"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"docker架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker架构"}},[t._v("#")]),t._v(" Docker架构")]),t._v(" "),r("p",[r("img",{attrs:{src:a(522),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),r("p",[t._v("Docker 是一个开源的商业产品，有两个版本：社区版（Community Edition，缩写为 CE）和企业版（Enterprise Edition，缩写为 EE）。企业版包含了一些收费服务，个人开发者一般用不到，一般安装社区版，"),r("a",{attrs:{href:"https://www.runoob.com/docker/centos-docker-install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 官方安装脚本自动安装")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://get.docker.com "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -s docker --mirror Aliyun\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 手动安装，如已经安装需要卸载旧版本")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum remove docker "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-client "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-client-latest "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-common "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-latest "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-latest-logrotate "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-logrotate "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-engine\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置仓库")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y yum-utils "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  device-mapper-persistent-data "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  lvm2\n  \n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加源地址")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum-config-manager "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --add-repo "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Docker Engine-Community")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce docker-ce-cli containerd.io\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动 Docker")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start docker\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br"),r("span",{staticClass:"line-number"},[t._v("9")]),r("br"),r("span",{staticClass:"line-number"},[t._v("10")]),r("br"),r("span",{staticClass:"line-number"},[t._v("11")]),r("br"),r("span",{staticClass:"line-number"},[t._v("12")]),r("br"),r("span",{staticClass:"line-number"},[t._v("13")]),r("br"),r("span",{staticClass:"line-number"},[t._v("14")]),r("br"),r("span",{staticClass:"line-number"},[t._v("15")]),r("br"),r("span",{staticClass:"line-number"},[t._v("16")]),r("br"),r("span",{staticClass:"line-number"},[t._v("17")]),r("br"),r("span",{staticClass:"line-number"},[t._v("18")]),r("br"),r("span",{staticClass:"line-number"},[t._v("19")]),r("br"),r("span",{staticClass:"line-number"},[t._v("20")]),r("br"),r("span",{staticClass:"line-number"},[t._v("21")]),r("br"),r("span",{staticClass:"line-number"},[t._v("22")]),r("br"),r("span",{staticClass:"line-number"},[t._v("23")]),r("br"),r("span",{staticClass:"line-number"},[t._v("24")]),r("br"),r("span",{staticClass:"line-number"},[t._v("25")]),r("br"),r("span",{staticClass:"line-number"},[t._v("26")]),r("br"),r("span",{staticClass:"line-number"},[t._v("27")]),r("br"),r("span",{staticClass:"line-number"},[t._v("28")]),r("br")])]),r("details",{staticClass:"custom-block details"},[r("summary",[t._v("ubuntu安装docker")]),t._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[t._v("前提是先执行apt-get update  "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" upgrade\n\n如果还出现这个问题 依次执行下面的步骤：\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#添加docker源、")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb https://download.docker.com/linux/ubuntu zesty edge"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/apt/sources.list.d/docker.list\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#支持解析https")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y apt-transport-https ca-certificates "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" software-properties-common\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#添加GPG密钥")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://download.docker.com/linux/ubuntu/gpg "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置存储库位置")]),t._v("\nadd-apt-repository "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [arch=amd64] https://download.docker.com/linux/ubuntu '),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(' stable"')]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#执行安装命令")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y docker-ce\n\n如果还是不行 就再跑一次update然后执行安装命令。我的环境就是这么装起来的。\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br"),r("span",{staticClass:"line-number"},[t._v("9")]),r("br"),r("span",{staticClass:"line-number"},[t._v("10")]),r("br"),r("span",{staticClass:"line-number"},[t._v("11")]),r("br"),r("span",{staticClass:"line-number"},[t._v("12")]),r("br"),r("span",{staticClass:"line-number"},[t._v("13")]),r("br"),r("span",{staticClass:"line-number"},[t._v("14")]),r("br"),r("span",{staticClass:"line-number"},[t._v("15")]),r("br"),r("span",{staticClass:"line-number"},[t._v("16")]),r("br"),r("span",{staticClass:"line-number"},[t._v("17")]),r("br"),r("span",{staticClass:"line-number"},[t._v("18")]),r("br"),r("span",{staticClass:"line-number"},[t._v("19")]),r("br"),r("span",{staticClass:"line-number"},[t._v("20")]),r("br")])])]),t._v(" "),r("h3",{attrs:{id:"常规指令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常规指令"}},[t._v("#")]),t._v(" 常规指令")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("指令")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("示例")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("docker info")])]),t._v(" "),r("td",[t._v("查看docker 系统信息，包括镜像和容器数")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker version")])]),t._v(" "),r("td",[t._v("查看docker的版本信息")]),t._v(" "),r("td"),t._v(" "),r("td")])])]),t._v(" "),r("h2",{attrs:{id:"docker指令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker指令"}},[t._v("#")]),t._v(" Docker指令")]),t._v(" "),r("p",[r("img",{attrs:{src:a(523),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"生命周期管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生命周期管理"}},[t._v("#")]),t._v(" 生命周期管理")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("指令")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("示例")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("docker run")])]),t._v(" "),r("td",[t._v("创建容器并运行")]),t._v(" "),r("td"),t._v(" "),r("td",[r("code",[t._v("docker run --name killer-nginx -p 8900:80 -d nginx")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker start")])]),t._v(" "),r("td",[t._v("启动容器")]),t._v(" "),r("td",[t._v("容器id或容器名称")]),t._v(" "),r("td",[r("code",[t._v("Docker start nginx")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker stop")])]),t._v(" "),r("td",[t._v("停止容器")]),t._v(" "),r("td",[t._v("容器id或容器名称")]),t._v(" "),r("td",[r("code",[t._v("Docker stop nginx")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker restart")])]),t._v(" "),r("td",[t._v("重启容器")]),t._v(" "),r("td",[t._v("容器id或容器名称")]),t._v(" "),r("td",[r("code",[t._v("docker restart nginx")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker kill")])]),t._v(" "),r("td",[t._v("杀掉运行中的容器")]),t._v(" "),r("td",[t._v("容器id或容器名称")]),t._v(" "),r("td",[r("code",[t._v("docker kill nginx")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker rm")])]),t._v(" "),r("td",[t._v("删除容器")]),t._v(" "),r("td",[r("code",[t._v("-f")]),t._v("：强制删除一个运行中的容器"),r("br"),r("code",[t._v("-l")]),t._v("：移除容器间的网络连接，而非容器本身"),r("br"),r("code",[t._v("-v")]),t._v("：删除与容器关联的卷")]),t._v(" "),r("td",[r("code",[t._v("docker rm nginx")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker exec")])]),t._v(" "),r("td",[t._v("进入容器执行命令")]),t._v(" "),r("td",[r("code",[t._v("-d")]),t._v("：分离模式: 在后台运行"),r("br"),r("code",[t._v("-i")]),t._v("：即使没有附加也保持STDIN 打开"),r("br"),r("code",[t._v("-t")]),t._v("：分配一个伪终端")]),t._v(" "),r("td",[r("code",[t._v("docker exec -it centos /bin/bash")])])])])]),t._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[t._v("docker run options 参数说明")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("示例")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("-a")])]),t._v(" "),r("td",[t._v("指定标准输入输出内容类型，可选 "),r("strong",[t._v("STDIN")]),t._v("/"),r("strong",[t._v("STDOUT")]),t._v("/"),r("strong",[t._v("STDERR")]),t._v(" 三项")]),t._v(" "),r("td",[r("strong",[t._v("-a stdin")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("-d")])]),t._v(" "),r("td",[t._v("后台运行容器，并返回容器ID")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("-i")])]),t._v(" "),r("td",[t._v("以交互模式运行容器，通常与 -t 同时使用")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("-P")])]),t._v(" "),r("td",[t._v("随机端口映射，容器内部端口"),r("strong",[t._v("随机")]),t._v("映射到主机的端口")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("-p")])]),t._v(" "),r("td",[t._v("指定端口映射，格式为：主机(宿主)端口:容器端口****")]),t._v(" "),r("td",[r("strong",[t._v("-p 3306:3306")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("-t")])]),t._v(" "),r("td",[t._v("为容器重新分配一个伪输入终端，通常与 -i 同时使用")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("--name")])]),t._v(" "),r("td",[t._v("为容器指定一个名称")]),t._v(" "),r("td",[r("strong",[t._v("--name mysql")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("--dns")])]),t._v(" "),r("td",[t._v("指定容器使用的DNS服务器，默认和宿主一致")]),t._v(" "),r("td",[r("strong",[t._v("--dns 8.8.8.8")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("-h")])]),t._v(" "),r("td",[t._v("指定容器的hostname")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("-e")])]),t._v(" "),r("td",[t._v("设置环境变量")]),t._v(" "),r("td",[r("strong",[t._v('-e username="ritchie":')])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("--env-file=[]")])]),t._v(" "),r("td",[t._v("从指定文件读入环境变量")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("--cpuset")])]),t._v(" "),r("td",[t._v("绑定容器到指定CPU运行")]),t._v(" "),r("td",[r("strong",[t._v('--cpuset="0-2" or --cpuset="0,1,2"')])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("-m")])]),t._v(" "),r("td",[t._v("设置容器使用内存最大值")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("--net")])]),t._v(" "),r("td",[t._v("指定容器的网络连接类型，支持 "),r("strong",[t._v("bridge")]),t._v("/"),r("strong",[t._v("host")]),t._v("/"),r("strong",[t._v("none")]),t._v("/"),r("strong",[t._v("container")]),t._v(": 四种类型")]),t._v(" "),r("td",[r("strong",[t._v('--net="bridge"')])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("--link=[]")])]),t._v(" "),r("td",[t._v("添加链接到另一个容器")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("--expose=[]")])]),t._v(" "),r("td",[t._v("开放一个端口或一组端口")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("-v")])]),t._v(" "),r("td",[t._v("绑定一个卷")]),t._v(" "),r("td")])])])]),t._v(" "),r("h3",{attrs:{id:"容器管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#容器管理"}},[t._v("#")]),t._v(" 容器管理")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("指令")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("示例")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("docker ps")])]),t._v(" "),r("td",[t._v("列出容器")]),t._v(" "),r("td",[r("code",[t._v("-a")]),t._v("：所有容器")]),t._v(" "),r("td",[r("code",[t._v("docker ps -a")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker port")])]),t._v(" "),r("td",[t._v("列出指定的容器的端口映射")]),t._v(" "),r("td"),t._v(" "),r("td",[r("code",[t._v("docker port mysql")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker logs")])]),t._v(" "),r("td",[t._v("获取容器的日志")]),t._v(" "),r("td",[r("code",[t._v("-f")]),t._v("：跟踪日志输出"),r("br"),r("code",[t._v("--since")]),t._v("：显示某个开始时间的所有日志"),r("br"),r("code",[t._v("-t")]),t._v("：显示时间戳"),r("br"),r("code",[t._v("--tail")]),t._v("：仅列出最新N条容器日志")]),t._v(" "),r("td",[r("code",[t._v("docker logs --tail=10 mysql")])])])])]),t._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[t._v("docker ps 显示进程信息")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("CONTAINER ID")]),t._v(" "),r("th",[t._v("IMAGE")]),t._v(" "),r("th",[t._v("COMMAND")]),t._v(" "),r("th",[t._v("CREATED")]),t._v(" "),r("th",[t._v("STATUS")]),t._v(" "),r("th",[t._v("PORTS")]),t._v(" "),r("th",[t._v("NAMES")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("容器id")]),t._v(" "),r("td",[t._v("使用的镜像")]),t._v(" "),r("td",[t._v("启动容器时运行的命令")]),t._v(" "),r("td",[t._v("容器的创建时间")]),t._v(" "),r("td",[t._v("容器状态")]),t._v(" "),r("td",[t._v("容器的端口信息和使用的连接类型（tcp\\udp）")]),t._v(" "),r("td",[t._v("自动分配的容器名称")])])])])]),t._v(" "),r("h4",{attrs:{id:"批量操作容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#批量操作容器"}},[t._v("#")]),t._v(" 批量操作容器")]),t._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[t._v("docker 启动所有的容器\ndocker start "),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("docker "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -a "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{ print "),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("}'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" -n +2"),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\ndocker 关闭所有的容器\ndocker stop "),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("docker "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -a "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{ print "),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("}'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" -n +2"),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\ndocker 删除所有的容器\ndocker "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("docker "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -a "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{ print "),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("}'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" -n +2"),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\ndocker 删除所有的镜像\ndocker rmi "),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("docker images "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print "),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$3")]),t._v("}'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" -n +2"),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br"),r("span",{staticClass:"line-number"},[t._v("9")]),r("br"),r("span",{staticClass:"line-number"},[t._v("10")]),r("br"),r("span",{staticClass:"line-number"},[t._v("11")]),r("br")])]),r("h3",{attrs:{id:"镜像仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像仓库"}},[t._v("#")]),t._v(" 镜像仓库")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("指令")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("示例")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("docker login/logout")])]),t._v(" "),r("td",[t._v("登陆到一个Docker镜像仓库，如果未指定镜像仓库地址，默认为官方仓库")]),t._v(" "),r("td",[r("code",[t._v("docker login")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker pull")])]),t._v(" "),r("td",[t._v("从镜像仓库中拉取或者更新指定镜像")]),t._v(" "),r("td",[r("code",[t._v("docker pull mysql")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker push")])]),t._v(" "),r("td",[t._v("将本地的镜像上传到镜像仓库,要先登陆到镜像仓库")]),t._v(" "),r("td",[r("code",[t._v("docker push mysql")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker search")])]),t._v(" "),r("td",[t._v("搜索镜像")]),t._v(" "),r("td",[r("code",[t._v("docker search mysql")])])])])]),t._v(" "),r("h4",{attrs:{id:"远程仓库管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库管理"}},[t._v("#")]),t._v(" 远程仓库管理")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("指令")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("docker login --username=hjwu_enzo registry.cn-hangzhou.aliyuncs.com")])]),t._v(" "),r("td",[t._v("登陆到阿里云镜像仓库")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker pull registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/nginx:[镜像版本号]")])]),t._v(" "),r("td",[t._v("从resgistry拉取镜像")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker tag [ImageId] registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/nginx:[镜像版本号]")])]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker push registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/nginx:[镜像版本号]")])]),t._v(" "),r("td",[t._v("将进项推送到registry")])])])]),t._v(" "),r("h4",{attrs:{id:"本地镜像管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地镜像管理"}},[t._v("#")]),t._v(" 本地镜像管理")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("指令")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("示例")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("docker images")])]),t._v(" "),r("td",[t._v("列出本地镜像")]),t._v(" "),r("td",[r("code",[t._v("-a")]),t._v("：列出本地所有的镜像；"),r("br"),r("code",[t._v("--digests")]),t._v("：显示镜像的摘要信息；"),r("br"),r("code",[t._v("-f")]),t._v("：显示满足条件的镜像；"),r("br"),r("code",[t._v("--format")]),t._v(" ：指定返回值的模板文件；"),r("br"),r("code",[t._v("--no-trunc")]),t._v("：显示完整的镜像信息；"),r("br"),r("code",[t._v("-q")]),t._v(" ：只显示镜像ID")]),t._v(" "),r("td",[r("code",[t._v("docker images -a")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker rmi")])]),t._v(" "),r("td",[t._v("删除本地一个或多少镜像")]),t._v(" "),r("td",[r("code",[t._v("-f")]),t._v("：强制删除")]),t._v(" "),r("td",[r("code",[t._v("docker rmi images_name")])])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker tag")])]),t._v(" "),r("td",[t._v("标记本地镜像，将其归入某一仓库")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker build")])]),t._v(" "),r("td",[t._v("用于根据 "),r("code",[t._v("Dockerfile")]),t._v(" 创建镜像")]),t._v(" "),r("td",[r("code",[t._v("-f")]),t._v("：指定要使用的Dockerfile路径；")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker save")])]),t._v(" "),r("td",[t._v("将镜像导出为文件")]),t._v(" "),r("td",[r("code",[t._v("-o")]),t._v("：输出到的文件")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker load")])]),t._v(" "),r("td",[t._v("将文件导入为镜像")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker export")])]),t._v(" "),r("td",[t._v("将容器导出为文件，"),r("strong",[t._v("会保存该镜像操作的历史记录")]),t._v("，文件较大")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("docker import")])]),t._v(" "),r("td",[t._v("将文件导入为镜像，"),r("strong",[t._v("会丢失所有元数据和历史记录")]),t._v("，仅保留容器当时的状态")]),t._v(" "),r("td"),t._v(" "),r("td")])])]),t._v(" "),r("h2",{attrs:{id:"示例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例：")]),t._v(" "),r("h3",{attrs:{id:"mysql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" mysql")]),t._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker mysql 将数据存储在本地目录")]),t._v("\ndocker run -d -e "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MYSQL_ROOT_PASSWORD")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("admin --name mysql -v /data/mysql/data:/var/lib/mysql -p "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v(":3306 mysql \n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定配置文件")]),t._v("\ndocker run -d -e "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MYSQL_ROOT_PASSWORD")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("admin --name mysql -v /data/mysql/my.cnf:/etc/mysql/my.cnf -v /data/mysql/data:/var/lib/mysql -p "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v(":3306 mysql \n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);