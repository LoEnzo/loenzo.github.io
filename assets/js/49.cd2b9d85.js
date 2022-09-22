(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{581:function(s,a,n){"use strict";n.r(a);var t=n(3),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"})]),s._v(" "),a("h2",{attrs:{id:"安装启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装启动"}},[s._v("#")]),s._v(" 安装启动")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("yum，apt安装influxDB，启动服务"),a("code",[s._v("sudo service influxdb start")])])]),s._v(" "),a("li",[a("p",[s._v("压缩包安装，在"),a("code",[s._v("对应安装目录\\usr\\bin\\influxd")]),s._v("启动，也可以将该路径加入环境变量，直接以配置文件方式启动")]),s._v(" "),a("p",[a("code",[s._v("nohup influxd -config /opt/app/lab/influxdb-1.6.2-1/etc/influxdb/influxdb.conf &")])])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/mafeng/p/6848166.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参数参考1"),a("OutboundLink")],1),s._v("，"),a("a",{attrs:{href:"https://www.cnblogs.com/guyeshanrenshiwoshifu/p/9188368.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参数参考2"),a("OutboundLink")],1)])])]),s._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入influx")]),s._v("\ninflux\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看influxDB状态")]),s._v("\nshow stats\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个数据库")]),s._v("\ncreate database "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db_name"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有数据库")]),s._v("\nshow databases\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除数据库")]),s._v("\ndrop database "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db_name"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用数据库")]),s._v("\nuser db_name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看该数据下所有表")]),s._v("\nshow measurements \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建表，不需要单独表，插入语句即可，表就是test")]),s._v("\ninsert test,host"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1,monitor_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看表的所有列")]),s._v("\nshow series from your_table_name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除表")]),s._v("\ndrop measurement measurement_name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from database limit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h2",{attrs:{id:"开启身份验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启身份验证"}},[s._v("#")]),s._v(" 开启身份验证")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建管理员")]),s._v("\ninflux\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CREATE "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'your_name'")]),s._v(" WITH PASSWORD "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'your_password'")]),s._v(" WITH ALL PRIVILEGES\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SHOW USERS\nuser    admin\nhjwu    "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("开启身份验证（编辑influxdb配置文件，将165行处配置项的值由false改为true并保存退出）")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("162")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("163")]),s._v("   enabled "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("164")]),s._v("   bind-address "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":8086"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("165")]),s._v("   auth-enabled "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("166")]),s._v("   log-enabled "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("167")]),s._v("   write-tracing "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("168")]),s._v("   pprof-enabled "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("169")]),s._v("   https-enabled "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("170")]),s._v("   https-certificate "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/ssl/influxdb.pem"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("171")]),s._v("   max-row-limit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("使用管理员登陆")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("influx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-username")]),s._v(" your_name "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-password")]),s._v(" your_password\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"保存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保存策略"}},[s._v("#")]),s._v(" 保存策略")]),s._v(" "),a("p",[s._v("注：保存策略即存储在数据库中的数据，多长时间删除一次。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建保存策略")]),s._v("\ncreate retention policy  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"policy_name"')]),s._v(" on test_db duration 2h replication "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" default\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看保存的策略")]),s._v("\nshow retention policies on your_database_name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改保存策略")]),s._v("\nALTER  retention policy "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),s._v(" on test_db DEFAULT（修改默认）\n或者：ALTER  retention policy "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),s._v(" on "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_database_name"')]),s._v(" duration 719h\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除保留策略")]),s._v("\ndrop retention policy policy_name on your_database_name\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"在浏览器中如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器中如何使用"}},[s._v("#")]),s._v(" 在浏览器中如何使用")]),s._v(" "),a("p",[s._v("InfluxDB默认是通过Http请求访问数据库的，也支持UDP协议（默认关闭），所以可以通过浏览器直接查询或新增删除数据。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式：数据库地址 + 端口 + query?db = 数据库名&q = 查询或删除或插入的SQL语句")]),s._v("\nhttp://10.10.1.2:8086/query?db"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("testdb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("q")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("select * from measurement limit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);