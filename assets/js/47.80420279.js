(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{587:function(s,a,n){"use strict";n.r(a);var t=n(6),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[s._v("在虚拟机Linux搭建私有Gitlab，对应虚拟机端口转发，常规配置问题，安装常用JDK，Maven，Git；")])]),s._v(" "),n("h3",{attrs:{id:"_1-安装gitlab"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装gitlab"}},[s._v("#")]),s._v(" 1. 安装"),n("code",[s._v("gitlab")])]),s._v(" "),n("p",[s._v("因为直接下载安装"),n("code",[s._v("gitlab")]),s._v("，速度相对较慢，选取清华大学开源镜像网站，由于虚拟机里操作命令，再切换为Windows会比较卡顿，建议再"),n("code",[s._v("SecureCRT")]),s._v("中进行操作")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建 gitlab-ce.repo, 并配置镜像下载路径")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/yum.repos.d/gitlab-ce.repo\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("gitlab-ce"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Gitlab CE Repository\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum makecache\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gitlab-ce\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h3",{attrs:{id:"_2-修改配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改配置文件"}},[s._v("#")]),s._v(" 2. 修改配置文件")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置文件指定服务器`ip`和自定义端口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/gitlab/gitlab.rb\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改访问路径地址")]),s._v("\nexternal_url "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新配置(这一步很执行很久，耐心等待)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gitlab-ctl reconfigure\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启gitlab")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gitlab-ctl restart\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"_3-gitlab相关指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-gitlab相关指令"}},[s._v("#")]),s._v(" 3. gitlab相关指令")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\ngitlab-ctl status\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启")]),s._v("\ngitlab-ctl start\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭")]),s._v("\ngitlab-ctl stop\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"_4-重设root密码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-重设root密码"}},[s._v("#")]),s._v(" 4. 重设"),n("code",[s._v("root")]),s._v("密码")]),s._v(" "),n("p",[s._v("​\t\t看网上教程是重启完"),n("code",[s._v("gitlab")]),s._v("就可以直接在浏览器访问服务器地址加设置的端口号即可登陆，")]),s._v(" "),n("p",[s._v("默认的用户名: admin@example.com  | root 密码: 5iveL!fe，但不知道为什么我没有生效，所以需要自己修改密码")]),s._v(" "),n("p",[s._v("官方参考文档：https://docs.gitlab.com/ce/security/reset_root_password.html")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 Ruby on Rails 控制台  (这一步，执行非常慢，还提示错误，或者不反应， 建议在虚拟机命令里操作)")]),s._v("\ngitlab-rails console -e production\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索用户名")]),s._v("\nuser "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" User.where"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id:1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".first 或\nuser "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" User.find_by"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("email: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin@example.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改并确认密码")]),s._v("\nuser.password "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'secret_pass'")]),s._v("\nuser.password_confirmation "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'secret_pass'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存")]),s._v("\nuser.save"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出")]),s._v("\nquit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"_5-端口转发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-端口转发"}},[s._v("#")]),s._v(" 5. 端口转发")]),s._v(" "),n("p",[s._v("​\t\t添加端口转发， 使同一个局域网的其他"),n("code",[s._v("ip")]),s._v("可以方位本地的虚拟机服务器")]),s._v(" "),n("p",[n("code",[s._v("VMware")]),s._v(" ：编辑 --\x3e  虚拟网络编辑器 --\x3e "),n("code",[s._v("vmnet8")]),s._v(" --\x3e  "),n("code",[s._v("nat")]),s._v("设置  --\x3e  端口转发  添加")]),s._v(" "),n("p",[n("strong",[s._v("配置：")])]),s._v(" "),n("ul",[n("li",[s._v("主机端口（别人访问主机端口，转发到虚拟机）")]),s._v(" "),n("li",[s._v("虚拟机"),n("code",[s._v("ip")])]),s._v(" "),n("li",[s._v("虚拟机端口（Tomcat端口）")])]),s._v(" "),n("h3",{attrs:{id:"_6-配置ssh公钥"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-配置ssh公钥"}},[s._v("#")]),s._v(" 6. 配置ssh公钥")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成公钥")]),s._v("\nssh-keygen -t rsa -C "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"XXX@163.com.cn"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以上命令会创建 .ssh 的隐藏文件夹,文件夹中有2个文件:id_rsa(私钥)和id_rsa.pub(公钥)")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看公钥内容并拷贝")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" id_rsa.pub\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在设置中SSH选项中添加生成的密钥即可")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"_7-安装runner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-安装runner"}},[s._v("#")]),s._v(" 7. 安装Runner")]),s._v(" "),n("h4",{attrs:{id:"_7-1-下载runner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-下载runner"}},[s._v("#")]),s._v(" 7.1 下载Runner")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目组")]),s._v("\nhttps://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最新版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gitlab-runner\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装特定版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gitlab-runner"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看gitlab版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /opt/gitlab/embedded/service/gitlab-rails/VERSION\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h4",{attrs:{id:"_7-2-安装启动runner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-安装启动runner"}},[s._v("#")]),s._v(" 7.2 安装启动Runner")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件放入/usr/local/bin目录下，修改文件权限 ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" filename\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /usr/local/bin/gitlab-runner "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --user"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("用户名 --working-directory"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/用户名\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动Runner")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /usr/local/bin/gitlab-runner start\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装证书")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" 证书下载路径 -o /etc/pki/ca-trust/source/anchors/证书具体路径\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注册")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /usr/local/bin/gitlab-runner register\n\t· 输入url\n\t· 输入tocken\n\t· 输入runner名称\n\t· 输入runner标签名称\n\t· 输入执行各项命令的形式为shell\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多个runner，具体需要那个runner运行需要在ci中配置tag")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h4",{attrs:{id:"_7-3-gitlab-runner-命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-gitlab-runner-命令"}},[s._v("#")]),s._v(" 7.3 "),n("code",[s._v("Gitlab-runner")]),s._v(" 命令")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlab-runner 版本信息")]),s._v("\ngitlab-runner -v \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlab-runner 运行状态")]),s._v("\ngitlab-runner status\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlab-runner 启动")]),s._v("\ngitLab-runner start\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlabr-runner 停止")]),s._v("\ngitlab-runner stop\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"_8-安装git"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-安装git"}},[s._v("#")]),s._v(" 8. 安装"),n("code",[s._v("Git")])]),s._v(" "),n("p",[s._v("​\t\t获取"),n("a",{attrs:{href:"https://github.com/git/git/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("github"),n("OutboundLink")],1),s._v("最新的Git安装包下载链接")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/git/git/archive/v2.24.1.tar.gz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf v2.24.1.tar.gz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到目录下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" git-2.24.1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行编译")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("prefix")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/git all\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装git到对应路径")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("prefix")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/git "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 环境变量配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n\t添加git相关配置信息\n\t· "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/usr/local/git/bin\n\t· "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" \n\t\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使配置生效")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h3",{attrs:{id:"_9-安装jdk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-安装jdk"}},[s._v("#")]),s._v(" 9. 安装"),n("code",[s._v("JDK")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建jdk目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/jdk_1.8\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载jdk压缩包（下载不了百度）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://www.oracle.com/technetwork/java/javase/archive-139210.html\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#解压")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf jdk_1.8\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 环境变量配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/jdk_1.8/jdk1.8.0_231\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$:CLASSPATH:"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使配置生效")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"_10-安装maven"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-安装maven"}},[s._v("#")]),s._v(" 10. 安装"),n("code",[s._v("Maven")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建maven目录")]),s._v("\nmKdir /usr/local/maven\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载安装包")]),s._v("\nhttp://maven.apache.org/download.cgi?Preferred"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http%3A%2F%2Fmirror.bit.edu.cn%2Fapache%2F\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#解压")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf maven_3.6.3\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 环境变量配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" etc/profile\n\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAVEN_HOME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/maven/maven_3.6.3\n\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAVEN_HOME")]),s._v("/bin:"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);