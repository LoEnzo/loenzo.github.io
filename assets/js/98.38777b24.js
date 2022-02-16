(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{822:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[s._v("Cmd用到的命令汇总，每次使用都会忘记，单独写一篇用到了就及时记录一下")])]),s._v(" "),t("h2",{attrs:{id:"网络测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络测试"}},[s._v("#")]),s._v(" 网络测试")]),s._v(" "),t("h3",{attrs:{id:"telnet-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#telnet-命令"}},[s._v("#")]),s._v(" telnet 命令")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("作用：检测网络是否畅通")])]),s._v(" "),t("li",[t("p",[s._v("（1）telnet IP 端口。")]),s._v(" "),t("p",[s._v("（2）telnet 域名 端口。")])]),s._v(" "),t("li",[t("p",[s._v("事例：telnet 10.5.78.40 8089")])])]),s._v(" "),t("p",[s._v("oracle 报错 oracle12c安装失败【INS-30131】执行安装程序验证所需要的初始设置失败")]),s._v(" "),t("p",[s._v("解决 ：")]),s._v(" "),t("ul",[t("li",[s._v("1.Ctrl+R 输入cmd 进入命令\n"),t("ol",[t("li",[s._v("首先进入你的Oracle安装包中setup.exe所在的目录下")]),s._v(" "),t("li",[s._v("在setup.exe所在的目录下执行命令\n"),t("code",[s._v('setup.exe -ignorePrereq -J"-Doracle.install.db.validate.supportedOSCheck=false"')])]),s._v(" "),t("li",[s._v("不行执行"),t("code",[s._v('setup.exe -ignorePrereq -J"-Doracle.install.client.validate.clientSupportedOSCheck=false"')]),s._v("命令\n之后会自动进入安装步骤中")])])])]),s._v(" "),t("p",[s._v("查杀进程")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看端口占用 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ano "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("findstr "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"端口\n# 查看进程 \ntasklist |findstr "')]),s._v("进程id号"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n# 杀掉进程 \ntaskkill /f /t /im "')]),s._v('进程id或者进程名称"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"自动修改本地dns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动修改本地dns"}},[s._v("#")]),s._v(" 自动修改本地DNS")]),s._v(" "),t("p",[s._v("用于公司内网需要指定DNS内容，避免每次切换家里网络和公司网络的麻烦")]),s._v(" "),t("p",[s._v("新建"),t("code",[s._v(".bat")]),s._v("后缀的文件，修改下面需要手动指定的"),t("code",[s._v("ip、dns")]),s._v("等内容并保存，以管理员方式启动即可，根据提示运行")]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("自动修改DNS")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("@ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" off\n\n@ECHO OFF"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("PUSHD %~DP0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("TITLE Network Configuration By Jiang Dequan\n\n%1 %2\nver"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5."')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("nul"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("goto :Admin\nmshta vbscript:createobject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shell.application"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".shellexecute"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%~s0"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"goto :Admin"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runas"')]),s._v(",1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("window.close"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("goto :eof\n:Admin\n\n:: Define Your Network Configuration\nSET "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IP_ADDRESS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.26")]),s._v(".5.124\nSET "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\nSET "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SUBNET_MASK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.26")]),s._v(".5.254\n\nSET "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PRIMARY_DNS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.26")]),s._v(".1.250\nSET "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.26")]),s._v(".1.249\n\nSET "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOCAL_CONNECTION_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("本地网络连接\nSET "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WIRELESS_CONNECTION_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("WLAN\n\n:menu\ncls\n\necho.\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" 第一次运行，请修改脚本里面的IP为自己的IP，修改"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("本地连接"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("为"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("本地网络连接"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\necho.\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": Enable "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("本地网络连接"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - Fixed IP\necho.\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": Enable "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("本地网络连接"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - DHCP\necho.\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": Enable "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("WLAN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - Fixed IP\necho.\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": Enable "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("WLAN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - DHCP\necho.\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(": Exit\necho.\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\necho.\necho.\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" /p "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user_input")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("请输入数字：\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" %user_input% equ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" /b "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" %user_input% equ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" call:configNetworkConnection %LOCAL_CONNECTION_NAME% %WIRELESS_CONNECTION_NAME%\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" %user_input% equ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" call:dhcp %LOCAL_CONNECTION_NAME%\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" %user_input% equ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" call:configNetworkConnection %WIRELESS_CONNECTION_NAME% %LOCAL_CONNECTION_NAME%\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" %user_input% equ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" call:dhcp %WIRELESS_CONNECTION_NAME%\nPause\n\ngoto menu\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" /b "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n\n:dhcp\n:: Get parameters\nSET "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETWORK_CONNECTION_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%1\n\nEcho off \n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Start to "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" %NETWORK_CONNECTION_NAME% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnetsh interface "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" interface "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%NETWORK_CONNECTION_NAME%"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("admin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("enable\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Obtain IP address automatically "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnetsh interface "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" address name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%NETWORK_CONNECTION_NAME%"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dhcp\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Obtain DNS automatically "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnetsh interface "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" dns name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%NETWORK_CONNECTION_NAME%"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dhcp\n\nEcho Success"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\n\ngoto:eof\n\n:configNetworkConnection\n\n:: Get parameters\nSET "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ENABLE_NETWORK_CONNECTION_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%1\nSET "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DISABLE_NETWORK_CONNECTION_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%2\n\nEcho off\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Start to disable %DISABLE_NETWORK_CONNECTION_NAME% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnetsh interface "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" interface "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%DISABLE_NETWORK_CONNECTION_NAME%"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("admin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("disabled\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Start to "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" %ENABLE_NETWORK_CONNECTION_NAME% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnetsh interface "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" interface "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%ENABLE_NETWORK_CONNECTION_NAME%"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("admin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("enable\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Start to "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" the IP of %ENABLE_NETWORK_CONNECTION_NAME% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nNetsh interface IP Set Addr "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%ENABLE_NETWORK_CONNECTION_NAME%"')]),s._v(" Static %IP_ADDRESS% %GATEWAY% %SUBNET_MASK% "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Start to "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" primary dns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nNetsh interface IP Set dns "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%ENABLE_NETWORK_CONNECTION_NAME%"')]),s._v(" static %PRIMARY_DNS% primary "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("validate")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Start to "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" dns "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nNetsh interface IP "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" dns "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%ENABLE_NETWORK_CONNECTION_NAME%"')]),s._v(" %DNS% "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("validate")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n\nEcho Success "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" Your IP is %IP_ADDRESS%, good luck"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\ngoto:eof\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br"),t("span",{staticClass:"line-number"},[s._v("94")]),t("br"),t("span",{staticClass:"line-number"},[s._v("95")]),t("br"),t("span",{staticClass:"line-number"},[s._v("96")]),t("br"),t("span",{staticClass:"line-number"},[s._v("97")]),t("br"),t("span",{staticClass:"line-number"},[s._v("98")]),t("br"),t("span",{staticClass:"line-number"},[s._v("99")]),t("br")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);