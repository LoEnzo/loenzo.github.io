(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{753:function(s,n,a){"use strict";a.r(n);var t=a(10),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"})]),s._v(" "),a("h3",{attrs:{id:"_1-安装vmware-15虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装vmware-15虚拟机"}},[s._v("#")]),s._v(" 1. 安装"),a("code",[s._v("VMware 15")]),s._v("虚拟机")]),s._v(" "),a("p",[s._v("官网下载安装报，默认安装即可")]),s._v(" "),a("h3",{attrs:{id:"_2-安装centos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装centos"}},[s._v("#")]),s._v(" 2. 安装centos")]),s._v(" "),a("p",[s._v("网上找"),a("code",[s._v("CentOS-7-x86_64-DVD-1804.iso")]),s._v("镜像")]),s._v(" "),a("p",[s._v("打开VMware，新建虚拟机，选择自定义，稍后安装操作系统，系统选择linux，版本选择Centos 64位，取名字，选择安装位置，选择配置，一般2G，2核，使用NAT网络模式，其他模式自行了解，选择磁盘大小，一般50G，存储为单个文件，性能好点，其他自定义硬件根据需求自行选择即可，只做命令练习，声卡，打印机这些可以不需要了。")]),s._v(" "),a("p",[s._v("服务器启动后进行一些基本设置：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("软件选择：基础设施服务器")])]),s._v(" "),a("li",[a("p",[s._v("分区选择：自动分区")])]),s._v(" "),a("li",[a("p",[s._v("网络配置：按照下面配置网路地址信息")]),s._v(" "),a("p",[s._v("网络地址：192.168.109.100，根据自己的"),a("code",[s._v("VMware Network Adapter VMnet8")]),s._v("网关来，192.168.109前三位一致，最后一位自信修改即可\n子网掩码：255.255.255.0\n默认网关：192.168.109.2\nDNS：    223.5.5.5")])])]),s._v(" "),a("p",[s._v("IP输入错误，导致无法上网，ping baidu.com有响应则说明能联网成功，需要修改虚拟网卡设置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sysconfig/network-scripts/ifcfg-eth0\t//这个根据自己使用的来，有些是 eth33等\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEVICE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eth0 //网卡名字 不用改\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BOOTPROTO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("static //默认为dhcp 修改为static\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPADDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("x.x.x.x //ip 地址\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETMASK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0 //子网掩码\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("x.x.x.1 //网关地址\n\n保存退出，重启网络\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" network restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_3-安装ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装ssh"}},[s._v("#")]),s._v(" 3. 安装"),a("code",[s._v("SSH")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装ssh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" policycoreutils-pythonopenssh-server\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将ssh服务设置为开机自启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" sshd  \n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动ssh服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start sshd\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装防火墙")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" firewalled systemd -y\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启防火墙")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firwalled start\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加`http`服务到`firewalld`，`permmanet`表示永久生效，若不加--permanet系统下次启动就会失效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --permanet --add-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启防火墙")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl reload firewalld\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装Postfix以发送邮件通知")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postfix\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将postfix服务设置为开机自启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start postfix\n\n在安装Postfix期间，可能会出现配置屏幕。选择“Internet Site”并按enter键。使用您的服务器的外部DNS以“mail name”并按enter。如果出现额外的屏幕，继续按enter键接受默认值。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h3",{attrs:{id:"_4-防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-防火墙"}},[s._v("#")]),s._v(" 4. 防火墙")]),s._v(" "),a("h4",{attrs:{id:"_4-1-iptable防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-iptable防火墙"}},[s._v("#")]),s._v(" 4.1  "),a("code",[s._v("iptable")]),s._v("防火墙")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火墙状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables status  \n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止防火墙")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables stop  \n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动防火墙")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables start  \n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启防火墙")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables restart\n  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久关闭防火墙")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" iptables off  \n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久关闭后重启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" iptables on　\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存退出重启防火墙")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables restart\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启80端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sysconfig/iptables\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加入如下代码")]),s._v("\n-A INPUT -m state --state NEW -m tcp -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -j ACCEPT\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h4",{attrs:{id:"_4-2-firwall防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-firwall防火墙"}},[s._v("#")]),s._v(" 4.2  "),a("code",[s._v("firwall")]),s._v("防火墙")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld start\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld restart\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld stop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看firewall服务状态")]),s._v("\nsystemctl status firewalld\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看firewall的状态")]),s._v("\nfirewall-cmd --state\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火墙规则")]),s._v("\nfirewall-cmd --list-all \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询端口是否开放")]),s._v("\nfirewall-cmd --query-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开放80端口")]),s._v("\nfirewall-cmd --permanent --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除端口")]),s._v("\nfirewall-cmd --permanent --remove-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启防火墙(修改配置后要重启防火墙)")]),s._v("\nfirewall-cmd --reload\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参数解释")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、firwall-cmd：是Linux提供的操作firewall的一个工具；\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、--permanent：表示设置为持久；\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、--add-port：标识添加的端口；\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("h4",{attrs:{id:"_4-3-同步虚拟机和主机时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-同步虚拟机和主机时间"}},[s._v("#")]),s._v(" 4.3. 同步虚拟机和主机时间")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载依赖（这步我没有做）")]),s._v("\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" perl gcc gcc-c++ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" cmake kernel kernel-headers kernel-devel net-tools\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 点击VMware -> 虚拟机 -> 安装WMware Tools")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将CD-ROM 挂载到指定目录，/mnt/cdrom目录若不存在，自行创建")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t auto /dev/cdrom /mnt/cdrom\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看压缩包名称")]),s._v("\nll /mnt/cadrom/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝安装包到用户目录 /home/user")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /mnt/cdrom/WMwareTools压缩包名称.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解除挂载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("umount")]),s._v(" /dev/cdrom\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压安装包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf VMwareTools压缩包.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入解压目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vmware-tools-distrib/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行 vmware-install.pl文件")]),s._v("\n./vmware-install.pl\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一路enter,看到Enjoy表示安装成功，")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 虚拟机里可以在设置中勾选将主机与虚拟机时间同步")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h3",{attrs:{id:"_5-其他配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-其他配置"}},[s._v("#")]),s._v(" 5. 其他配置")]),s._v(" "),a("h4",{attrs:{id:"_5-1-访问虚拟机服务器慢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-访问虚拟机服务器慢"}},[s._v("#")]),s._v(" 5.1 访问虚拟机服务器慢")]),s._v(" "),a("p",[s._v("​\t\tSecureCRT、Xshell 访问本地虚拟机linux系统慢的问题，原因是ssh的服务端在连接时会自动检测dns环境是否一致导致的，修改为不检测即可，操作如下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改ssh配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/ssh/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" sshd_config\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改UseDNS的属性值为no, 并打开注释")]),s._v("\nUseDNS: no\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新启动sshd服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);