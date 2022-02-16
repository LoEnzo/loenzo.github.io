(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{614:function(s,e,t){s.exports=t.p+"assets/img/image-20211003200215533.7cbb3186.png"},615:function(s,e,t){s.exports=t.p+"assets/img/image-20211003200305126.61744e2e.png"},793:function(s,e,t){"use strict";t.r(e);var a=t(10),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[a("strong",[s._v("k3s")]),s._v("是rancher开源的一个Kubernetes发行版，从名字上就可以看出k3s相对k8s做了很多裁剪和优化，二进制程序不足50MB，占用资源更少，只需要512MB内存即可运行")])]),s._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://docs.rancher.cn/docs/k3s/quick-start/_index",target:"_blank",rel:"noopener noreferrer"}},[s._v("K3S Rancher官网文档"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/125499493",target:"_blank",rel:"noopener noreferrer"}},[s._v("轻量级Kubernetes k3s初探"),a("OutboundLink")],1)])])]),s._v(" "),a("h2",{attrs:{id:"k3s概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#k3s概述"}},[s._v("#")]),s._v(" K3s概述")]),s._v(" "),a("p",[s._v("k3s是史上最轻量级Kubernetes，相比K8S少了5，主要裁剪了下面这5个功能，如果想学习k8s，而又不想折腾k8s的繁琐安装部署，完全可以使用k3s代替k8s，k3s包含了k8s的所有基础功能，而k8s附加功能其实大多数情况也用不到")]),s._v(" "),a("ul",[a("li",[s._v("过时的功能和非默认功能")]),s._v(" "),a("li",[s._v("Alpha功能")]),s._v(" "),a("li",[s._v("内置的云提供商插件")]),s._v(" "),a("li",[s._v("内置的存储驱动")]),s._v(" "),a("li",[s._v("Docker")])]),s._v(" "),a("p",[s._v("相比K8s的优化")]),s._v(" "),a("ul",[a("li",[s._v("使用内嵌轻量级数据库SQLite作为默认数据存储替代etcd，当然etcd仍然是支持的。")]),s._v(" "),a("li",[s._v("内置了local storage provider、service load balancer、helm controller、Traefik ingress controller，开箱即用。")]),s._v(" "),a("li",[s._v("所有Kubernetes控制平面组件如api-server、scheduler等封装成为一个精简二进制程序，控制平面只需要一个进程即可运行。")]),s._v(" "),a("li",[s._v("删除内置插件(比如cloudprovider插件和存储插件)。")]),s._v(" "),a("li",[s._v("减少外部依赖，操作系统只需要安装较新的内核以及支持cgroup即可，k3s安装包已经包含了containerd、Flannel、CoreDNS，非常方便地一键式安装，不需要额外安装Docker、Flannel等组件")])]),s._v(" "),a("p",[s._v("K3s使用场景：")]),s._v(" "),a("ul",[a("li",[s._v("Edge")]),s._v(" "),a("li",[s._v("IoT")]),s._v(" "),a("li",[s._v("CI")]),s._v(" "),a("li",[s._v("ARM")])]),s._v(" "),a("h2",{attrs:{id:"k3s安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#k3s安装"}},[s._v("#")]),s._v(" K3s安装")]),s._v(" "),a("p",[s._v("国内用户一键安装脚本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_K3S_MIRROR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("K3s 服务将被配置为在节点重启后或进程崩溃或被杀死时自动重启。")]),s._v(" "),a("li",[s._v("将安装其他实用程序，包括"),a("code",[s._v("kubectl")]),s._v("、"),a("code",[s._v("crictl")]),s._v("、"),a("code",[s._v("ctr")]),s._v("、"),a("code",[s._v("k3s-killall.sh")]),s._v(" 和 "),a("code",[s._v("k3s-uninstall.sh")]),s._v("。")]),s._v(" "),a("li",[s._v("将kubeconfig文件写入到"),a("code",[s._v("/etc/rancher/k3s/k3s.yaml")]),s._v("，由 K3s 安装的 kubectl 将自动使用该文件")])]),s._v(" "),a("p",[s._v("再其他节点安装K3s，并加入到集群中,")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_K3S_MIRROR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cn "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("K3S_URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://myserver:6443 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("K3S_TOKEN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mynodetoken "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("设置"),a("code",[s._v("K3S_URL")]),s._v("参数会使 K3s 以 worker 模式运行。K3s agent 将在所提供的 URL 上向监听的 K3s 服务器注册。"),a("code",[s._v("K3S_TOKEN")]),s._v("使用的值存储在你的服务器节点上的"),a("code",[s._v("/var/lib/rancher/k3s/server/node-token")]),s._v("路径下。")]),s._v(" "),a("p",[a("strong",[s._v("注意")])]),s._v(" "),a("p",[s._v("每台计算机必须具有唯一的主机名。如果您的计算机没有唯一的主机名，请传递"),a("code",[s._v("K3S_NODE_NAME")]),s._v("环境变量，并为每个节点提供一个有效且唯一的主机名。")]),s._v(" "),a("p",[s._v("k3s 默认使用 crictl 替代docker 管理容器，同一个公司出品，指令和docker基本保持一直，")]),s._v(" "),a("h2",{attrs:{id:"k9s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#k9s"}},[s._v("#")]),s._v(" K9s")]),s._v(" "),a("p",[s._v("快捷管理kubenetes集群的运维软件，k3s同理")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/derailed/k9s/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("github地址"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/zgshi/p/12681355.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("下载对应版本的系统即可，以windows平台为例，下载下来，解压，把k9s.exe 加入系统环境变量即可。")]),s._v(" "),a("ul",[a("li",[s._v("登录服务器，下载k8s集群的yaml配置文件")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# k3s ")]),s._v("\n/etc/rancher/k3s/k3s.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# k8s")]),s._v("\n./kube/config\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件下载到本地路径，创建环境变量配置")]),s._v("\n%KUBECTL_HOME%\t\tk3s.yaml配置文件路径\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("下载kubectl指令文件")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 kubectl.exe 最新版本")]),s._v("\nhttps://storage.googleapis.com/kubernetes-release/release/stable.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载最新版本")]),s._v("\nhttps://storage.googleapis.com/kubernetes-release/release/v1.22.2/bin/windows/amd64/kubecti.exe\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置kubectl.exe 指定文件路径")]),s._v("\n%KUBECTL_HOME%\t\tkubectl.exe 文件路径\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl 工具下载 可选")]),s._v("\nhttps://curl.se/windows/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("验证：")]),s._v(" "),a("p",[a("img",{attrs:{src:t(614),alt:"image-20211003200215533"}})]),s._v(" "),a("p",[s._v("数据k9s即可进入k9s管理界面，根据快捷键，快速查看资源信息")]),s._v(" "),a("p",[a("img",{attrs:{src:t(615),alt:"image-20211003200305126"}})]),s._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),a("p",[s._v("pc、ios平台可视化管理k8s集群 kubenav，根据软件描述，导入对应配置即可，k8s,k3s的配置文件上面有说，导入的时候改一下里面的127.0.0.1为自己服务器的ip地址即可")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://docs.kubenav.io/mobile/kubeconfig/",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);