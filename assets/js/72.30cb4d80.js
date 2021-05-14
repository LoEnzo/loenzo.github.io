(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{644:function(t,e,s){"use strict";s.r(e);var a=s(4),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("Cmd用到的命令汇总，每次使用都会忘记，单独写一篇用到了就及时记录一下")])]),t._v(" "),s("h2",{attrs:{id:"网络测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测试"}},[t._v("#")]),t._v(" 网络测试")]),t._v(" "),s("h3",{attrs:{id:"_1-telnet-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-telnet-命令"}},[t._v("#")]),t._v(" 1. telnet 命令")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("作用：检测网络是否畅通")])]),t._v(" "),s("li",[s("p",[t._v("（1）telnet IP 端口。")]),t._v(" "),s("p",[t._v("（2）telnet 域名 端口。")])]),t._v(" "),s("li",[s("p",[t._v("事例：telnet 10.5.78.40 8089")])])]),t._v(" "),s("p",[t._v("oracle 报错 oracle12c安装失败【INS-30131】执行安装程序验证所需要的初始设置失败")]),t._v(" "),s("p",[t._v("解决 ：")]),t._v(" "),s("ul",[s("li",[t._v("1.Ctrl+R 输入cmd 进入命令\n"),s("ol",[s("li",[t._v("首先进入你的Oracle安装包中setup.exe所在的目录下")]),t._v(" "),s("li",[t._v("在setup.exe所在的目录下执行命令\n"),s("code",[t._v('setup.exe -ignorePrereq -J"-Doracle.install.db.validate.supportedOSCheck=false"')])]),t._v(" "),s("li",[t._v("不行执行"),s("code",[t._v('setup.exe -ignorePrereq -J"-Doracle.install.client.validate.clientSupportedOSCheck=false"')]),t._v("命令\n之后会自动进入安装步骤中")])])])]),t._v(" "),s("p",[t._v("查杀进程")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看端口占用 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -ano "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("findstr "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"端口\n# 查看进程 \ntasklist |findstr "')]),t._v("进程id号"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\n# 杀掉进程 \ntaskkill /f /t /im "')]),t._v('进程id或者进程名称"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);