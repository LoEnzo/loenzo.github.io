(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{649:function(s,e,a){"use strict";a.r(e);var t=a(3),r=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[s._v("正常一个证书只能匹配一个域名，个人申请阿里云服务器、免费域名，搭建多个服务，需要通过nginx配置多个子域名来进行访问，且需要支持https，所以泛域名证书应运而生，一个证书可以配套多个域名生效。")])]),s._v(" "),e("h1",{attrs:{id:"泛域名证书申请"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#泛域名证书申请"}},[s._v("#")]),s._v(" 泛域名证书申请")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Let's Encrypt")]),s._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://letsencrypt.osfipin.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Let's Encrypt"),e("OutboundLink")],1),s._v("：免费证书申请，支持泛域名，")]),s._v(" "),e("ul",[e("li",[s._v("手动方式：手动申请、下载，上传到服务器使用即可")]),s._v(" "),e("li",[s._v("自动方式：使用 Certbot 工具自动申请证书、续期，自行搜索docker方式， certbot-auto 已经过时废弃了；其他方式 "),e("a",{attrs:{href:"https://github.com/jinhucheung/letscertbot",target:"_blank",rel:"noopener noreferrer"}},[s._v("letscertbot"),e("OutboundLink")],1)])])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://www.yuque.com/osfipin/letsencrypt/uslilx",target:"_blank",rel:"noopener noreferrer"}},[s._v("Let's Encrypt 在线文档"),e("OutboundLink")],1)])])])]),s._v(" "),e("li",[e("p",[s._v("acme.sh")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/acmesh-official/acme.sh",target:"_blank",rel:"noopener noreferrer"}},[s._v("acme.sh"),e("OutboundLink")],1),s._v("：使用 acme.sh 自动申请泛域名证书")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/acmesh-official/acme.sh/wiki/dnsapi",target:"_blank",rel:"noopener noreferrer"}},[s._v("不同平台需要的AccessKeyID、AccessKeySecret配置参考"),e("OutboundLink")],1),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://usercenter.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("阿里云"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://console.dnspod.cn/account/token/apikey",target:"_blank",rel:"noopener noreferrer"}},[s._v("dnspod"),e("OutboundLink")],1)])])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.jeay.net/server/acme-aliyun-cer.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档"),e("OutboundLink")],1),s._v("（未成功，有报错，自行尝试）")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装acme.sh")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://get.acme.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据自己服务器配置AccessKey ID和AccessKey Secret，不同平台进行的域名解析需要的值不一样")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 阿里云")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Ali_Key")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"刚刚的AccessKey ID"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Ali_Secret")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"刚刚的AccessKey Secret"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dnspod")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DP_Id")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1234"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DP_Key")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sADDsdasdgdsf"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dnspod")]),s._v("\n\n\n~/.acme.sh/acme.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--issue")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--dns")]),s._v(" dns_ali "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" lmzg.com "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" *.lmzg.com "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 阿里云")]),s._v("\n~/.acme.sh/acme.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--issue")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--dns")]),s._v(" dns_dp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" lmzg.com "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" *.lmzg.com  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dnspod")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新证书")]),s._v("\nacme.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--renew")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" example.com "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--force")]),s._v("\nacme.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--renew")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" example.com "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--force")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--ecc")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ecc证书")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);