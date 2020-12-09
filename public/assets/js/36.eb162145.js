(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{558:function(t,a,s){"use strict";s.r(a);var e=s(4),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",[t._v("maven Settings配置详解，各参数解释，"),s("a",{attrs:{href:"https://segmentfault.com/a/1190000020534274",target:"_blank",rel:"noopener noreferrer"}},[t._v("转载自"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("本文使用的maven版本为3.5.4")]),t._v(" "),s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("首先maven setting可以被声明为两个级别：")]),t._v(" "),s("p",[s("strong",[t._v("用户级别")]),t._v("。默认在"),s("code",[t._v("${user.home}/.m2/settings.xml")]),t._v("。可以通过命令行"),s("code",[t._v("-s /path/to/user/settings.xml")]),t._v("修改。\n"),s("strong",[t._v("全局级别")]),t._v("。默认在"),s("code",[t._v("${maven.conf}/settings.xml")]),t._v("。可以通过命令行"),s("code",[t._v("-gs /path/to/global/settings.xml")]),t._v("修改。\n下面对配置中的每一个元素进行说明。")]),t._v(" "),s("h4",{attrs:{id:"localrepository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localrepository"}},[t._v("#")]),t._v(" "),s("strong",[t._v("localRepository")])]),t._v(" "),s("p",[t._v("本地仓库地址，默认值"),s("code",[t._v("${user.home}/.m2/repository")]),t._v("。")]),t._v(" "),s("p",[t._v("如果复制了别人的setting，也要注意下这个值和原来的是否相同，不然又要重下一遍。")]),t._v(" "),s("h5",{attrs:{id:"interactivemode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interactivemode"}},[t._v("#")]),t._v(" "),s("strong",[t._v("interactiveMode")])]),t._v(" "),s("p",[t._v("是否需要和用户输入进行交互。如果为false，则会使用合理的默认值。默认为true。")]),t._v(" "),s("p",[t._v("这个配置没怎么使用过，可以通过创建工程的命令对比下：如果为false，命令如下")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mvn archetype:generate -DgroupId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("com.zworks -DartifactId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("maven-setting -DarchetypeArtifactId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("maven-archetype-quickstart -DinteractiveMode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("需要指定groupId、artifactId、archetypeArtifactId，如果不指定会报错，因为这些是无法推测出值的。")]),t._v(" "),s("p",[t._v("如果为true，命令如下")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("mvn archetype:generate\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("后面会让你选择或输入"),s("code",[t._v("archetype")]),t._v("、"),s("code",[t._v("groupId")]),t._v("、"),s("code",[t._v("artifactId")]),t._v("、"),s("code",[t._v("version")]),t._v("、"),s("code",[t._v("package")]),t._v("、为false的时候之所以不用指定"),s("code",[t._v("version")]),t._v("和"),s("code",[t._v("package")]),t._v("是因为这两个都有默认值。")]),t._v(" "),s("h5",{attrs:{id:"offline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offline"}},[t._v("#")]),t._v(" "),s("strong",[t._v("offline")])]),t._v(" "),s("p",[t._v("是否使用离线模式，默认值为false，这个应该不会设置成true的，要用通过命令行-o指定就可以了。")]),t._v(" "),s("h4",{attrs:{id:"plugingroups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugingroups"}},[t._v("#")]),t._v(" "),s("strong",[t._v("pluginGroups")])]),t._v(" "),s("p",[t._v("如果plugin没有指定groupId，会从设置的这些里查找。默认会有"),s("code",[t._v("org.apache.maven.plugins")]),t._v("和"),s("code",[t._v("org.codehaus.mojo")]),t._v("。")]),t._v(" "),s("p",[t._v("比如，有了如下配置")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pluginGroups")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pluginGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        org.mortbay.jetty\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pluginGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pluginGroups")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("就可以通过"),s("code",[t._v("mvn jetty run")]),t._v("替代长命令"),s("code",[t._v("mvn org.mortbay.jetty:jetty-maven-plugin:run")])]),t._v(" "),s("h4",{attrs:{id:"proxies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxies"}},[t._v("#")]),t._v(" "),s("strong",[t._v("proxies")])]),t._v(" "),s("p",[t._v("代理配置，可以配置多个，如果没有指定会使用第一个激活的配置。")]),t._v(" "),s("p",[t._v("可配置的属性")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("元素")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("active")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是否激活，默认为true")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("protocol")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("代理的协议，默认为http")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("username")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用户名")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("password")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("密码")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("port")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("端口号，默认8080")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("host")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("host")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("nonProxyHosts")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不代理的host，用|分隔")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("id")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("id，默认为default")])])])]),t._v(" "),s("h4",{attrs:{id:"servers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servers"}},[t._v("#")]),t._v(" "),s("strong",[t._v("servers")])]),t._v(" "),s("p",[t._v("用于认证，支持两种方式")]),t._v(" "),s("ul",[s("li",[t._v("密码")]),t._v(" "),s("li",[t._v("privateKey\n比如公司搭建了一个私服，上传和下载需要认证，就需要在这里配置。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("元素")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("username")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("用户名")])]),t._v(" "),s("tr",[s("td",[t._v("password")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("密码，与username一起使用")])]),t._v(" "),s("tr",[s("td",[t._v("privateKey")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("privateKey路径")])]),t._v(" "),s("tr",[s("td",[t._v("passphrase")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("和privateKey一起使用")])]),t._v(" "),s("tr",[s("td",[t._v("filePermissions")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("新创建的文件权限")])]),t._v(" "),s("tr",[s("td",[t._v("directoryPermissions")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("新创建的文件夹的权限")])]),t._v(" "),s("tr",[s("td",[t._v("configuration")]),t._v(" "),s("td",[t._v("DOM")]),t._v(" "),s("td",[t._v("配置")])]),t._v(" "),s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("id，默认default，id需要与repository/mirror中的id相对应")])])])]),t._v(" "),s("p",[t._v("使用密码")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("deploymentRepo"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("repouser"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("repopwd"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("使用privateKey")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("siteServer"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("privateKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/path/to/private/key"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("privateKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("passphrase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("optional; leave empty if not used."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("passphrase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h4",{attrs:{id:"mirrors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mirrors"}},[t._v("#")]),t._v(" "),s("strong",[t._v("mirrors")])]),t._v(" "),s("p",[t._v("仓库的镜像，如果仓库配置了镜像，就会去镜像中下载。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("元素")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("mirrorOf")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("镜像的仓库id，也就是说是那个仓库的镜像")])]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("镜像的名字")])]),t._v(" "),s("tr",[s("td",[t._v("url")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("地址")])]),t._v(" "),s("tr",[s("td",[t._v("layout")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("layout，默认default")])]),t._v(" "),s("tr",[s("td",[t._v("mirrorOfLayouts")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("镜像的仓库的layout，默认值为default,legacy")])]),t._v(" "),s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("id，默认default")])])])]),t._v(" "),s("h5",{attrs:{id:"mirrorof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mirrorof"}},[t._v("#")]),t._v(" "),s("strong",[t._v("mirrorOf")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("*")]),t._v("匹配所有的仓库")]),t._v(" "),s("li",[s("code",[t._v("external:*")]),t._v("匹配所有远程仓库，使用localhost的除外，使用file://协议的除外。也就是说，匹配所有不在本机上的远程仓库。")]),t._v(" "),s("li",[t._v("多个仓库可以使用英文逗号分隔")]),t._v(" "),s("li",[t._v("使用感叹号排除指定的仓库")])]),t._v(" "),s("p",[t._v("举例：")]),t._v(" "),s("p",[s("code",[t._v("repo,repo1")]),t._v("匹配repo 或者 repo1")]),t._v(" "),s("p",[s("code",[t._v("*,!repo1")]),t._v("匹配除了repo1的所有")]),t._v(" "),s("p",[t._v("在匹配的时候，会先找精确匹配的，如果没有用第一个匹配的。")]),t._v(" "),s("h4",{attrs:{id:"layout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" "),s("strong",[t._v("layout")])]),t._v(" "),s("p",[t._v("layout在Maven 2/3中都是default，只有在Maven 1.x中才是legacy，所以也不太用管。")]),t._v(" "),s("p",[t._v("legacy的目录结构")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("  groupId\n  |--artifactId\n     |--jars\n        `--artifact\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("default的目录结构")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("  groupId\n  |--artifactId\n     |--version\n     |  `---artifact\n     |---metadata\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("配置国内镜像")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alimaven"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("aliyun maven"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("https://maven.aliyun.com/repository/central"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("central"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h4",{attrs:{id:"profiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#profiles"}},[t._v("#")]),t._v(" "),s("strong",[t._v("profiles")])]),t._v(" "),s("p",[t._v("setting中的profile主要为了提供本地的路径以及定义构建中要使用到的仓库。")]),t._v(" "),s("h5",{attrs:{id:"profile-in-setting-vs-profile-in-pom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#profile-in-setting-vs-profile-in-pom"}},[t._v("#")]),t._v(" "),s("strong",[t._v("profile in setting VS profile in pom")])]),t._v(" "),s("p",[t._v("setting中的profile一般存放的是不太会变且不会影响构建过程的元素，对全局都影响。")]),t._v(" "),s("p",[t._v("pom中的profile有更多的设置项，但是影响范围只有自身以及子模块。")]),t._v(" "),s("h5",{attrs:{id:"profile的激活方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#profile的激活方式"}},[t._v("#")]),t._v(" "),s("strong",[t._v("profile的激活方式")])]),t._v(" "),s("ul",[s("li",[t._v("通过setting中的activeProfiles指定。")]),t._v(" "),s("li",[t._v("检测操作系统信息是否匹配。")]),t._v(" "),s("li",[t._v("检查环境变量是否匹配。")]),t._v(" "),s("li",[t._v("检测文件是否存在。")]),t._v(" "),s("li",[t._v("检测JDK版本是否匹配。")]),t._v(" "),s("li",[t._v("通过命令行"),s("code",[t._v("-P")]),t._v("指定。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("元素")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("activation")]),t._v(" "),s("td",[t._v("Activation")]),t._v(" "),s("td",[t._v("激活的条件")])]),t._v(" "),s("tr",[s("td",[t._v("properties")]),t._v(" "),s("td",[t._v("Properties")]),t._v(" "),s("td",[t._v("配置")])]),t._v(" "),s("tr",[s("td",[t._v("repositories")]),t._v(" "),s("td",[t._v("List< Repository>")]),t._v(" "),s("td",[t._v("远程仓库")])]),t._v(" "),s("tr",[s("td",[t._v("pluginRepositories")]),t._v(" "),s("td",[t._v("List< Repository>")]),t._v(" "),s("td",[t._v("远程插件仓库")])]),t._v(" "),s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Id,默认default")])])])]),t._v(" "),s("h4",{attrs:{id:"activation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activation"}},[t._v("#")]),t._v(" "),s("strong",[t._v("activation")])]),t._v(" "),s("p",[t._v("profile的激活条件，满足条件则激活。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("元素")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("activeByDefault")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("是否默认激活")])]),t._v(" "),s("tr",[s("td",[t._v("jdk")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("如果JDK版本匹配则激活")])]),t._v(" "),s("tr",[s("td",[t._v("os")]),t._v(" "),s("td",[t._v("ActivationOS")]),t._v(" "),s("td",[t._v("如果操作系统匹配则激活")])]),t._v(" "),s("tr",[s("td",[t._v("property")]),t._v(" "),s("td",[t._v("ActivationProperty")]),t._v(" "),s("td",[t._v("如果系统属性匹配则激活")])]),t._v(" "),s("tr",[s("td",[t._v("file")]),t._v(" "),s("td",[t._v("ActivationFile")]),t._v(" "),s("td",[t._v("如果文件存在/不存在则激活")])])])]),t._v(" "),s("h4",{attrs:{id:"jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk"}},[t._v("#")]),t._v(" "),s("strong",[t._v("jdk")])]),t._v(" "),s("ul",[s("li",[t._v("前缀匹配，比如1.8能匹配jdk1.8.0_181")]),t._v(" "),s("li",[t._v("[1.5,1.8)能匹配1.5、1.6、1.7，语法具体可以参看"),s("a",{attrs:{href:"https://maven.apache.org/enforcer/enforcer-rules/versionRanges.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Version Range Specification"),s("OutboundLink")],1)])]),t._v(" "),s("h5",{attrs:{id:"activationos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activationos"}},[t._v("#")]),t._v(" "),s("strong",[t._v("ActivationOS")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("元素")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("系统的名称")])]),t._v(" "),s("tr",[s("td",[t._v("family")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("系统的系列，如windows、mac")])]),t._v(" "),s("tr",[s("td",[t._v("arch")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Cpu的架构")])]),t._v(" "),s("tr",[s("td",[t._v("version")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("系统版本")])])])]),t._v(" "),s("h5",{attrs:{id:"activationproperty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activationproperty"}},[t._v("#")]),t._v(" "),s("strong",[t._v("ActivationProperty")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("元素")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("系统属性名称")])]),t._v(" "),s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("系统属性值")])])])]),t._v(" "),s("h5",{attrs:{id:"activationfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activationfile"}},[t._v("#")]),t._v(" "),s("strong",[t._v("ActivationFile")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("元素")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("missing")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("文件名称，当该文件不存在时激活")])]),t._v(" "),s("tr",[s("td",[t._v("exists")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("文件名称，当该文件存在时激活")])])])]),t._v(" "),s("h5",{attrs:{id:"repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#repository"}},[t._v("#")]),t._v(" "),s("strong",[t._v("repository")])]),t._v(" "),s("p",[t._v("这里是经常需要修改的地方，公司里一般都有自己的私服，就需要把相应的仓库加进来。就是因为仓库没配置，才会有一些包下不下来。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("元素")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("releases")]),t._v(" "),s("td",[t._v("RepositoryPolicy")]),t._v(" "),s("td",[t._v("如何下载releases")])]),t._v(" "),s("tr",[s("td",[t._v("snapshots")]),t._v(" "),s("td",[t._v("RepositoryPolicy")]),t._v(" "),s("td",[t._v("如何下载snapshots")])]),t._v(" "),s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("仓库的唯一标示")])]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("仓库的名称")])]),t._v(" "),s("tr",[s("td",[t._v("url")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("仓库的地址")])]),t._v(" "),s("tr",[s("td",[t._v("layout")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("layout，默认值default")])])])]),t._v(" "),s("h5",{attrs:{id:"repositorypolicy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#repositorypolicy"}},[t._v("#")]),t._v(" "),s("strong",[t._v("RepositoryPolicy")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("元素")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("enabled")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("是否启用该仓库去下载这个类型的artifact")])]),t._v(" "),s("tr",[s("td",[t._v("updatePolicy")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("更新的频率，可选值always（总是）、daily（每天，默认值）、interval:XXX（间隔多少分钟）、never（从不）")])]),t._v(" "),s("tr",[s("td",[t._v("checksumPolicy")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("如果校验失败该如何做，可选值fail、warn")])])])]),t._v(" "),s("h5",{attrs:{id:"pluginrepository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pluginrepository"}},[t._v("#")]),t._v(" "),s("strong",[t._v("pluginRepository")])]),t._v(" "),s("p",[t._v("插件仓库，配置的值和repository是一样的。")]),t._v(" "),s("h4",{attrs:{id:"activeprofiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activeprofiles"}},[t._v("#")]),t._v(" "),s("strong",[t._v("activeProfiles")])]),t._v(" "),s("p",[t._v("激活的配置，可以配置多个。")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("activeProfiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("activeProfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alwaysActiveProfile"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("activeProfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("activeProfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("anotherAlwaysActiveProfile"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("activeProfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("activeProfiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://maven.apache.org/ref/3.5.4/maven-settings/settings.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("maven setting 官方文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://howtodoinjava.com/maven/create-java-project-maven/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven Create Java Project – Interactive vs Non-interactive modes"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/question-sky/p/6538909.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven settings.xml配置解读"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://maven.apache.org/plugins/maven-deploy-plugin/examples/deploying-in-legacy-layout.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deploy an artifact in legacy layout"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://maven.apache.org/guides/mini/guide-mirror-settings.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Mirrors for Repositories"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://maven.apache.org/guides/introduction/introduction-to-profiles.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction to Build Profiles"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);