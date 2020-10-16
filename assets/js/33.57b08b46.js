(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{534:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[s._v("mysql安装以及使用")])]),s._v(" "),t("h2",{attrs:{id:"linux安装mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux安装mysql"}},[s._v("#")]),s._v(" linux安装mysql")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("下载安装，使用命令可以直接获取对应你系统的mysql版本")]),s._v(" "),t("blockquote",[t("p",[s._v("sudo apt-get install mysql-server")])])]),s._v(" "),t("li",[t("p",[s._v("初始化设置")]),s._v(" "),t("blockquote",[t("p",[s._v("sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf")])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("mysqld.cnf基本设置")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[s._v("[mysqld]\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("user")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("mysql")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("pid-file")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/var/run/mysqld/mysqld.pid")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("socket")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/var/run/mysqld/mysqld.sock")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("port")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("3306")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("datadir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/var/lib/mysql")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("character_set_server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("utf8")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("bind-address")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("127.0.0.1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("key_buffer_size")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("16M")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("myisam-recover-options")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("BACKUP")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("log_error")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/var/log/mysql/error.log")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("max_binlog_size")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("100M")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])])]),s._v(" "),t("li",[t("p",[s._v("启动服务")]),s._v(" "),t("blockquote",[t("p",[s._v("/etc/init.d/mysql start")])])])]),s._v(" "),t("h2",{attrs:{id:"基本设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本设置"}},[s._v("#")]),s._v(" 基本设置")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("修改为密码登陆")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mysql -u root\n\nuse mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SELECT user, host, plugin FROM user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改root用户认证方式")]),s._v("\nupdate user "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql_native_password'")]),s._v(" where "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("root安全设置")]),s._v(" "),t("blockquote",[t("p",[s._v("sudo mysql_secure_installation")])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("安全设置")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("➜  ~ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mysql_secure_installation \n\nSecuring the MySQL server deployment.\n\nConnecting to MySQL using a blank password.\nThe "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'validate_password'")]),s._v(" plugin is installed on the server.\nThe subsequent steps will run with the existing configuration\nof the plugin.\nPlease "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" the password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" root here.\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置密码，但是这里可以看到，由于启用了validate_password，所以如果密码复杂度不够，会如下所示的提示密码设置不成功")]),s._v("\nNew password: \n\nRe-enter new password: \n\nEstimated strength of the password: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" \nDo you wish to "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("continue")]),s._v(" with the password provided?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Press y"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("Y "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Yes, any other key "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" No"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" y\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". Failed"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" Error: Your password does not satisfy the current policy requirements\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#密码设置成Root@123这种有大小写、特殊字符、数字的内容，就通过了")]),s._v("\nNew password: \n\nRe-enter new password: \n\nEstimated strength of the password: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" \nDo you wish to "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("continue")]),s._v(" with the password provided?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Press y"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("Y "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Yes, any other key "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" No"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" y\nBy default, a MySQL installation has an anonymous user,\nallowing anyone to log into MySQL without having to have\na user account created "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" them. This is intended only "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v("\ntesting, and to "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" the installation go a bit smoother.\nYou should remove them before moving into a production\nenvironment.\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否删除匿名用户，这里删除即可，没太大用处")]),s._v("\nRemove anonymous users? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Press y"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("Y "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Yes, any other key "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" No"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" y\nSuccess.\n\n\nNormally, root should only be allowed to connect from\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" This ensures that someone cannot guess at\nthe root password from the network.\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#　是否禁用root用户远程登录？这里不禁用，当然如果你希望禁用，并且创建别的用户远程登录，这里可以选择ｙ")]),s._v("\nDisallow root login remotely? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Press y"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("Y "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Yes, any other key "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" No"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" n\n\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". skipping.\nBy default, MySQL comes with a database named "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(" that\nanyone can access. This is also intended only "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" testing,\nand should be removed before moving into a production\nenvironment.\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否删除test数据库，这里删除即可，不然留着也没什么用")]),s._v("\nRemove "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" database and access to it? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Press y"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("Y "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Yes, any other key "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" No"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" y\n - Dropping "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" database"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nSuccess.\n\n - Removing privileges on "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" database"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nSuccess.\n\nReloading the privilege tables will ensure that all changes\nmade so far will take effect immediately.\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否刷新权限？，这里选择y，然后会生效")]),s._v("\nReload privilege tables now? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Press y"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("Y "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Yes, any other key "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" No"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" y\nSuccess.\n\nAll done"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br")])])])])]),s._v(" "),t("p",[s._v("​\t\t:::")]),s._v(" "),t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题：")]),s._v(" "),t("h4",{attrs:{id:"_1-无法解决报错-卸载mysql重装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-无法解决报错-卸载mysql重装"}},[s._v("#")]),s._v(" 1. 无法解决报错，卸载mysql重装")]),s._v(" "),t("blockquote",[t("p",[s._v("sudo apt-get autoremove mysql*  "),t("em",[s._v("--purge")])]),s._v(" "),t("p",[s._v("sudo apt-get remove apparmor   "),t("em",[s._v("//这个apparmor是在装mysql-server时装上的，和安全有关")])])]),s._v(" "),t("h4",{attrs:{id:"_2-修改root密码-密码等级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改root密码-密码等级"}},[s._v("#")]),s._v(" 2. 修改root密码，密码等级")]),s._v(" "),t("blockquote",[t("p",[s._v("set global validate_password.policy=LOW;")]),s._v(" "),t("p",[s._v("ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'your_password'")])]),s._v(" "),t("h2",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),t("h3",{attrs:{id:"_1-springboot整合mybatise启动报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-springboot整合mybatise启动报错"}},[s._v("#")]),s._v(" 1.  springBoot整合mybatise启动报错")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Failed to obtain JDBC Connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" nested exception is java.sql.SQLException: The server "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" zone value "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'�й���׼ʱ��'")]),s._v(" is unrecognized or represents "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" than one "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" zone. You must configure either the server or JDBC driver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("via the "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'serverTimezone'")]),s._v(" configuration property"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to use a "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" specifc "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" zone value "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" you want to utilize "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" zone support.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("原因：使用 mysql 的 jdbc 驱动最新版（6.0+）时，会遇到数据库和系统时区差异引起的问题。")]),s._v(" "),t("p",[s._v("解决：在 jdbc 连接的 url 后面添加 serverTimezone=CST")]),s._v(" "),t("p",[s._v("注：CST 代表的是中国上海时间（与北京时间，东八区相同）")]),s._v(" "),t("p",[s._v("例：jdbc:mysql://localhost:3306**/your_database_name**?useUnicode=true&characterEncoding=UTF-8&useSSL=false&serverTimezone=CST")])])}),[],!1,null,null,null);a.default=e.exports}}]);