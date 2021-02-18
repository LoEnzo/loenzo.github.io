(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{580:function(s,t,a){"use strict";a.r(t);var r=a(6),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("了解什么是RESTful，RESTful的书写风格，以及注意事项。REST（英文："),a("strong",[s._v("Representational State Transfer")]),s._v("，简称REST）。REST 指的是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是 RESTful")])]),s._v(" "),a("h3",{attrs:{id:"restful起源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful起源"}},[s._v("#")]),s._v(" RESTful起源")]),s._v(" "),a("p",[s._v("REST（Representational State Transfer）表象化状态转变（表述性状态转变），在2000年被提出，基于HTTP、URI、XML、JSON等标准和协议，支持轻量级、跨平台、跨语言的架构设计。是Web服务的一种新的架构风格（一种思想）。")]),s._v(" "),a("h3",{attrs:{id:"restful架构的主要原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful架构的主要原则"}},[s._v("#")]),s._v(" RESTful架构的主要原则")]),s._v(" "),a("ul",[a("li",[s._v("对网络上所有的资源都有一个"),a("strong",[s._v("资源标志符")]),s._v("。")]),s._v(" "),a("li",[s._v("对"),a("strong",[s._v("资源")]),s._v("的操作不会改变标识符。")]),s._v(" "),a("li",[s._v("同一资源有"),a("strong",[s._v("多种表现形式")]),s._v("（xml、json）")]),s._v(" "),a("li",[s._v("所有操作都是"),a("strong",[s._v("无状态")]),s._v("的（Stateless）")])]),s._v(" "),a("h4",{attrs:{id:"无状态理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无状态理解"}},[s._v("#")]),s._v(" 无状态理解")]),s._v(" "),a("p",[a("strong",[s._v("有状态")]),s._v("：Web服务中，Client与Server交互的信息（如：用户登录状态)会保存在Server的Session中，再这样的前提下，Client中的用户请求只能被保存有此用户相关状态信息的服务器所接受和理解，这也就意味着在基于状态的Web系统中的Server无法对用户请求进行负载均衡等自由的调度(一个Client请求只能由一个指定的Server处理)。同时这也会导致另外一个容错性的问题，如果指定的Server在Client的用户发出请求的过程中宕机，那么此用户最近的所有交互操作将无法被转移至别的Server上，即此请求将无效化。")]),s._v(" "),a("p",[s._v("**有状态请求：**Server保存了Client的请求状态，Server会通过Client传递的SessionID在Server中的Session作用域找到之前交互的信息，并以此来实现应答。所以Client只能由某一个Server来应答。")]),s._v(" "),a("p",[a("strong",[s._v("无状态")]),s._v("：")]),s._v(" "),a("p",[s._v("在无状态的Web服务中，每一个Web请求都必须是独立的，请求之间是完全分离的。Server没有保存Client的状态信息，所以Client发送的请求必须包含有能够让服务器理解请求的全部信息，包括自己的状态信息。使得一个Client的Web请求能够被任何可用的Server应答，从而将Web系统扩展到大量的Client中。")]),s._v(" "),a("p",[s._v("**无状态请求：**Server不保存任何请求状态信息，Client的每一个请求都具有User credentials等所需要的全部信息，所以能被任意可用的Server应答。")]),s._v(" "),a("h3",{attrs:{id:"restful介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful介绍"}},[s._v("#")]),s._v(" RESTful介绍")]),s._v(" "),a("p",[s._v("RESTful是一种常见的REST应用，是遵循REST风格的web服务，REST式的web服务是一种ROA（面向资源的架构）。")]),s._v(" "),a("p",[s._v("简单的说：RESTful是一种架构的规范与约束、原则，符合这种规范的架构就是RESTful架构。")]),s._v(" "),a("h3",{attrs:{id:"restful规范与约束"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful规范与约束"}},[s._v("#")]),s._v(" RESTful规范与约束")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://restful.p2hp.com/home/resource-naming",target:"_blank",rel:"noopener noreferrer"}},[s._v("规范"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"http://restful.p2hp.com/home/rest-architectural-constraints#layered-system",target:"_blank",rel:"noopener noreferrer"}},[s._v("六个约束"),a("OutboundLink")],1)]),s._v(" "),a("ol",[a("li",[s._v("Client-Server")]),s._v(" "),a("li",[s._v("无状态")]),s._v(" "),a("li",[s._v("分层系统")]),s._v(" "),a("li",[s._v("统一接口")]),s._v(" "),a("li",[s._v("可缓存")]),s._v(" "),a("li",[s._v("按需代码")])]),s._v(" "),a("p",[s._v("目的：实现客户端无需借助任何文档即能调用到所有的服务器资源")]),s._v(" "),a("h3",{attrs:{id:"rest资源操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest资源操作"}},[s._v("#")]),s._v(" REST资源操作")]),s._v(" "),a("p",[s._v("**幂等性：**对同一REST接口的多次访问，得到的资源状态是相同的；")]),s._v(" "),a("p",[s._v("**安全性：**对该REST接口访问，不会使服务器资源的状态发生改变。")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("http方法")]),s._v(" "),a("th",[s._v("资源操作")]),s._v(" "),a("th",[s._v("幂等性")]),s._v(" "),a("th",[s._v("安全性")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("GET")]),s._v(" "),a("td",[s._v("SELECT")]),s._v(" "),a("td",[s._v("是")]),s._v(" "),a("td",[s._v("是")])]),s._v(" "),a("tr",[a("td",[s._v("POST")]),s._v(" "),a("td",[s._v("INSERT")]),s._v(" "),a("td",[s._v("否")]),s._v(" "),a("td",[s._v("否")])]),s._v(" "),a("tr",[a("td",[s._v("PUT")]),s._v(" "),a("td",[s._v("UPDATE")]),s._v(" "),a("td",[s._v("是")]),s._v(" "),a("td",[s._v("否")])]),s._v(" "),a("tr",[a("td",[s._v("DELETE")]),s._v(" "),a("td",[s._v("DELETE")]),s._v(" "),a("td",[s._v("是")]),s._v(" "),a("td",[s._v("否")])])])]),s._v(" "),a("h3",{attrs:{id:"使用restful前后对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用restful前后对比"}},[s._v("#")]),s._v(" "),a("strong",[s._v("使用RESTful前后对比")])]),s._v(" "),a("p",[a("strong",[s._v("传统URL")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("users"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("query"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" GET 根据用户id查询用户数据\n\nhttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("users"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("save POST 新增用户\n\nhttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("users"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("update POST 修改用户信息\n\nhttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("users"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("delete GET"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("POST 删除用户信息\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("strong",[s._v("RESTful风格")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("users"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" GET 根据用户id查询用户数据\n\nhttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("users POST 新增用户\n\nhttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("users PUT 修改用户信息\n\nhttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("users DELETE 删除用户信息  OR http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" DELETE 删除用户信息\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"restful设计准则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful设计准则"}},[s._v("#")]),s._v(" RESTful设计准则")]),s._v(" "),a("p",[s._v("宾语必须是名词，建议统一采用复数形式；避免多级URL，不利于阅读，除了一级，其他级别都用查询串表达")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Books")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("literature"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("categories"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  GET 获取文学类书籍的第一个目录下的书名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"restful的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful的优缺点"}},[s._v("#")]),s._v(" RESTful的优缺点：")]),s._v(" "),a("p",[s._v('REST的名称"表现层状态转化"中，省略了主语。"表现层"其实指的是"资源"（Resources）的"表现层"，所谓资源就只是一个实体，比如一张表，一段文字，一张图片等，可以用一个确定的url地址代表这个资源，访问这个url就是访问这个资源，换句话说，url就是这个资源独一无二的标识。')]),s._v(" "),a("p",[a("strong",[s._v("优点")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("1. 简单、清亮，低耦合，基于http；\n2. 无状态，调用接口不用考虑上下文，状态，降低复杂度；\n3. 接口风格规范统一，根据调用方式不同来对资源进行不同的操作，摈弃了以前接口开发，尤其是增删改查设定不同接口名的弊端；\n")])])]),a("p",[a("strong",[s._v("缺点：")])]),s._v(" "),a("ol",[a("li",[s._v("不是所有用户想获取的都是资源，比如我要获取订单的状态；")]),s._v(" "),a("li",[s._v("含有多重过滤条件的不适合，需求太复杂的反而直接英译需求的接口名更加清晰；")])]),s._v(" "),a("h3",{attrs:{id:"springmvc实现restful服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springmvc实现restful服务"}},[s._v("#")]),s._v(" "),a("strong",[s._v("SpringMVC实现restful服务:")])]),s._v(" "),a("p",[a("strong",[s._v("SpringMVC原生态的支持了REST风格的架构设计")])]),s._v(" "),a("p",[a("strong",[s._v("所涉及到的注解:")])]),s._v(" "),a("p",[a("strong",[s._v("@RequestMapping")])]),s._v(" "),a("p",[a("strong",[s._v("@ResponseBody")])]),s._v(" "),a("p",[a("strong",[s._v("@PathVariable")])]),s._v(" "),a("p",[a("strong",[s._v("@RequestParam")])]),s._v(" "),a("p",[s._v("访问网站的URL，不同用户，或者不同类别的商品，他们的URL只有部分是不一样的，我们不能为每个不一样的URL都写一个对应的映射，")]),s._v(" "),a("p",[s._v("@RequestParam和@PathVariable就是为了解决这个问题，生成动态URL")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/{userId}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//public String userProfile(@RequestParam(value="userId") String userId) {')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("userProfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@PathVariable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rerutn userService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("queryUsersById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("@PathVariable 和@RequestParam")]),s._v(" 的区别：")]),s._v(" "),a("p",[s._v("两者都能实现动态URL功能，但是生成的URL显示效果不同，两者显示效果分别是：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Users")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Users")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("userId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("两种注解的使用建议：")]),s._v(" "),a("p",[a("strong",[s._v("@PathVariable ：")])]),s._v(" "),a("p",[s._v("当URL指向的是某一具体业务资源（或资源列表），例如博客，用户时，使用@PathVariable")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Users")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    id为"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("的用户\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("@RequestParam")])]),s._v(" "),a("p",[s._v("当URL需要对资源或者资源列表进行过滤，筛选时，用@RequestParam")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Users")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("sex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("male   性别为男的用户\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);