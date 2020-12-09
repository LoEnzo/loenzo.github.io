(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{549:function(e,t,s){"use strict";s.r(t);var a=s(4),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",[e._v("Windows下安装PHP开发环境的基本配置，包含Apache，mysql，php")])]),e._v(" "),s("h3",{attrs:{id:"一、apache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、apache"}},[e._v("#")]),e._v(" 一、Apache")]),e._v(" "),s("p",[e._v("因为Apache官网只提供源代码，如果要使用必须得自己编译，这里我选择第三方安装包Apache Lounge。")]),e._v(" "),s("ul",[s("li",[e._v("进入Apachelounge官方"),s("a",{attrs:{href:"http://www.apachelounge.com/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载地址"),s("OutboundLink")],1),e._v(";")]),e._v(" "),s("li",[e._v("首先下载并安装"),s("strong",[e._v("vc redist")]),e._v("，这是Apache运行必需的一个组件;")]),e._v(" "),s("li",[e._v("下载Apache解压版，将解压后的文件夹放在你想要安装的路径下;")]),e._v(" "),s("li",[e._v("修改配置文件:")])]),e._v(" "),s("p",[e._v("打开你的对应的安装路径 Apache\\conf\\httpd.conf")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("配置中默认的路径："),s("strong",[e._v("C:\\Apache24")]),e._v(' 下（版本号可能不同）\n将其中所有前面没有被"#"注释的 '),s("strong",[e._v("c:\\Apache24")]),e._v("、"),s("strong",[e._v("C:\\Apache24\\htdocs")]),e._v(" 和 ***C:\\Apache24\\cgi-bin***改成对应的路径。")])]),e._v(" "),s("li",[s("p",[e._v("指定IP和端口：在"),s("strong",[e._v("httpd.conf")]),e._v("找到"),s("strong",[e._v("ServerName www.example.com:80")]),e._v('，将前面的注释去掉，将"www.example.com"修改为"localhost"。如果你要修改端口，将这里"80”和前面“Listen：80”中的80一起修改。')])]),e._v(" "),s("li",[s("p",[e._v('添加系统变量：将"Apache的安装路径\\bin"添加到Path中。验证安装是否成功：运行Apache的启动httpd.exe。在浏览器上输入localhost:80，如果不是无法访问那么Apache的配置便完成了。')])]),e._v(" "),s("li",[s("p",[e._v("将Apache注册为Windows服务")]),e._v(" "),s("p",[e._v("以管理员打开命令行")])])]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install | Uninstall")]),e._v("\nhttpd.exe -k "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\nhttpd.exe -k uninstall\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"二、php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、php"}},[e._v("#")]),e._v(" 二、PHP")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("进入官网"),s("a",{attrs:{href:"http://windows.php.net/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载安装"),s("OutboundLink")],1),e._v("，下载最新线程安全版PHP zip压缩包，解压缩后放在想要安装的路径下；")]),e._v(" "),s("p",[s("strong",[e._v("注意：")]),e._v(" 下载的PHP VC版本不能比前面安装的vc redist版高。")])]),e._v(" "),s("li",[s("p",[e._v("进入PHP安装目录，复制一份"),s("strong",[e._v("php.ini-development")]),e._v(" 改名为 "),s("strong",[e._v("php.ini")]),e._v(" 放到安装路径下")])])]),e._v(" "),s("div",{staticClass:"language-ini line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 打开找到;extension_dir=ext，去掉注释符;，将值改为PHP安装路径\\ext")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("extension_dir")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(' "C:/Config/php-7.4.9/ext"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("在Apache中加载PHP & 定义执行PHP模块的文件，打开Apache的配置文件"),s("code",[e._v("conf\\httpd.conf")]),e._v("，找到"),s("code",[e._v("LoadModule")]),e._v("区域，在其后加入：")])]),e._v(" "),s("div",{staticClass:"language-ini line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 不同的PHP版本“php7apache2_4.dll”可能不同，下载的php压缩包的时候选择 Thread Safe，否则没有dll")]),e._v('\nLoadModule php7_module "PHP安装路径\\php7apache2_4.dll"\n<IfModule php7_module>\n'),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("    #告诉Apache PHP的安装路径")]),e._v("\n    PHPIniDir 'C:/Config/php-7.4.9/php.ini'        \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("    # define php  module file .php和.html的文件能执行PHP程序")]),e._v("\n    AddType application/x-httpd-php .php .html\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("    #AddType application/x-httpd-php-source .phps")]),e._v("\n</IfModule>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("测试：在 Apache安装路径\\htdocs下新建文件：test.php，里面编辑："),s("code",[e._v("<?php phpinfo(); ?>")]),e._v("， 启动Apache， 在浏览器输入：localhost:80/test.php，能看到php相关信息即成功。")])]),e._v(" "),s("h3",{attrs:{id:"三、mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、mysql"}},[e._v("#")]),e._v(" 三、MySQL")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("官网"),s("a",{attrs:{href:"https://dev.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载安装"),s("OutboundLink")],1),e._v("，根据自己的需求的版本安装，默认初始化配置不在赘述")])]),e._v(" "),s("li",[s("p",[e._v("在PHP中加载连接MySQL的程序集")]),e._v(" "),s("p",[e._v("在"),s("code",[e._v("php.ini")]),e._v(" extension板块中增加一行"),s("code",[e._v("extension=php_mysqli.dll")]),e._v("，不同的PHP版本可能提供不同的连接mysq的程序集，去ext文件夹下看看PHP提供的是什么这里就写什么，我添加了没有生效；")]),e._v(" "),s("p",[e._v("把自带的哪一行注释取消了却生效了，不知道为啥，自带的是"),s("code",[e._v(";extension=mysqli")]),e._v("，取消注释即可")])]),e._v(" "),s("li",[s("p",[e._v("测试：在test.php中编辑："),s("code",[e._v('<?php $mysqli = mysqli_connect("localhost","root","pwd") or die("cannt connet"); ?>')]),e._v("，启动数据库，重启Apache，在浏览器端查看，如果没有错误信息便配置正确了。")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);