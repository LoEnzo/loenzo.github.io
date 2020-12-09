(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{572:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",[t._v("Java项目中的POJO类，我们会话很多的步骤去创建"),s("strong",[t._v("getter")]),t._v("/"),s("strong",[t._v("setter")]),t._v("/"),s("strong",[t._v("toString")]),t._v("；异常处理；I/O流的关闭操作等等，这些样板代码既没有技术含量，又影响着代码的美观，Lombok应运而生。")])]),t._v(" "),s("h2",{attrs:{id:"idea使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea使用"}},[t._v("#")]),t._v(" Idea使用")]),t._v(" "),s("h4",{attrs:{id:"_1-引入相应的maven依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-引入相应的maven依赖"}},[t._v("#")]),t._v(" 1. 引入相应的maven依赖")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.projectlombok"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("lombok"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.16.18"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("provided"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("注：")]),t._v(" "),s("p",[t._v("版本自行选择；")]),t._v(" "),s("p",[t._v("Lombok的    "),s("strong",[s("scope",[t._v("provided")])],1),t._v("，说明它只在编译阶段生效，不需要打入包中。Lombok在编译期将带Lombok注解的Java文件正确编译为完整的Class文件。")]),t._v(" "),s("h4",{attrs:{id:"_2-idea插件支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-idea插件支持"}},[t._v("#")]),t._v(" 2. IDEA插件支持")]),t._v(" "),s("p",[t._v("点击File-- Settings设置界面，安装Lombok插件；")]),t._v(" "),s("p",[t._v("点击File-- Settings设置界面，Build--Complier--AnnocationProcessors，开启 AnnocationProcessors：（开启该项是为了让Lombok注解在编译阶段起到作用）")]),t._v(" "),s("h4",{attrs:{id:"_3-lombok常用注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-lombok常用注解"}},[t._v("#")]),t._v(" 3. lombok常用注解")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("注解")]),t._v(" "),s("th",[t._v("介绍")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("@Data")])]),t._v(" "),s("td",[t._v("在JavaBean中使用，注解包含包含getter、setter、NoArgsConstructor注解")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@Value")])]),t._v(" "),s("td",[t._v("Data类似，区别在于它会把所有成员变量默认定义为private final修饰，并且不会生成set方法")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@getter")])]),t._v(" "),s("td",[t._v("在JavaBean中使用，注解会生成对应的getter方法")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@setter")])]),t._v(" "),s("td",[t._v("在JavaBean中使用，注解会生成对应的setter方法")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@NoArgsConstructor")])]),t._v(" "),s("td",[t._v("在JavaBean中使用，注解会生成对应的无参构造方法")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@AllArgsConstructor")])]),t._v(" "),s("td",[t._v("在JavaBean中使用，注解会生成对应的有参构造方法")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@RequiredArgsConstructor")])]),t._v(" "),s("td",[t._v("生成private构造方法，使用staticName选项生成指定名称的static方法")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@ToString")])]),t._v(" "),s("td",[t._v("在JavaBean中使用，注解会自动重写对应的toStirng方法")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v('@ToString(exclude={"column1","column2"})')])]),t._v(" "),s("td",[t._v("排除多个column列所对应的元素")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v('@ToString(of={"column1","column2"})')])]),t._v(" "),s("td",[t._v("只生成包含多个column列所对应的元素")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@EqualsAndHashCode")])]),t._v(" "),s("td",[t._v("在JavaBean中使用，注解会自动重写对应的equals方法和hashCode方法")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@Slf4j")])]),t._v(" "),s("td",[t._v("在需要打印日志的类中使用，项目中使用slf4j日志框架")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@Log4j")])]),t._v(" "),s("td",[t._v("在需要打印日志的类中使用，项目中使用log4j日志框架")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@NonNull")])]),t._v(" "),s("td",[t._v("注解快速判断是否为空,为空抛出java.lang.NullPointerException")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@Synchronized")])]),t._v(" "),s("td",[t._v("注解自动添加到同步机制，生成的代码并不是直接锁方法,而是锁代码块， 作用范围是方法上")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@Cleanup")])]),t._v(" "),s("td",[t._v("注解用于确保已分配的资源被释放（IO的连接关闭）")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@Accessors(chain = true)")])]),t._v(" "),s("td",[t._v("链式风格，在调用set方法时，返回这个类的实例对象")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v('@RequiredArgsContructor(staticName = "of")')])]),t._v(" "),s("td",[t._v("生成一个静态方法，用于构建本类对象，与@NonNull联用，指定那些属性是本方法参数")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@Builder")])]),t._v(" "),s("td",[t._v("构建者模式")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("@Delegate")])]),t._v(" "),s("td",[t._v("代理模式")])])])]),t._v(" "),s("h2",{attrs:{id:"lombok的五大弊端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lombok的五大弊端"}},[t._v("#")]),t._v(" Lombok的五大弊端")]),t._v(" "),s("h3",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明：")]),t._v(" "),s("p",[t._v("Lombok的目的是减少代码的重复编写，并提供比较好的解决方案。当然也存在一些争议性的注解，可以根据实际场景选择使用。")]),t._v(" "),s("p",[t._v("1️⃣协同性要求较高，侵入性高\n因为Lombok的使用要求开发者一定要在IDE中安装对应的插件。如果未安装插件的话，使用IDE打开一个基于Lombok的项目的话会提示找不到方法等错误。导致项目编译失败。也就是说，如果项目组中有一个人使用了Lombok，那么其他人就必须也要安装IDE插件。否则就没办法协同开发。更重要的是，如果定义的一个jar包中使用了Lombok，那么就要求所有依赖这个jar包的所有应用都必须安装插件，这种侵入性是很高的。")]),t._v(" "),s("p",[t._v("2️⃣代码可读性差，可调试性低。")]),t._v(" "),s("p",[t._v("在代码中使用了Lombok，确实可以帮忙减少很多代码，因为Lombok会帮忙自动生成很多代码。但是这些代码是要在编译阶段才会生成的，所以在开发的过程中，其实很多代码其实是缺失的。在代码中大量使用Lombok，就导致代码的可读性会低很多，而且也会给代码调试带来一定的问题。比如，想要知道某个类中的某个属性的getter方法都被哪些类引用的话，就没那么简单了。")]),t._v(" "),s("p",[t._v("3️⃣有坑")]),t._v(" "),s("p",[t._v("因为Lombok使代码开发非常简便，这就使得部分开发者对其产生过度依赖。在使用Lombok过程中，如果对于各种注解的底层原理不理解的话，很容易产生意想不到的结果。举一个简单的例子，当使用@Data定义一个类的时候，会自动生成equals()方法 。但是如果只使用了@Data，而不使用"),s("code",[t._v("@EqualsAndHashCode(callSuper=true)")]),t._v("的话，会默认是"),s("code",[t._v("@EqualsAndHashCode(callSuper=false)")]),t._v("，这时候生成的equals()方法只会比较子类的属性，不会考虑从父类继承的属性，无论父类属性访问权限是否开放。这就可能得到意想不到的结果。")]),t._v(" "),s("p",[t._v("4️⃣影响升级")]),t._v(" "),s("p",[t._v("因为Lombok对于代码有很强的侵入性，就可能带来一个比较大的问题，那就是会影响对JDK的升级。按照如今JDK的升级频率，每半年都会推出一个新的版本，但是Lombok作为一个第三方工具，并且是由开源团队维护的，那么迭代速度是无法保证的。所以，如果需要升级到某个新版本的JDK的时候，若其中的特性在Lombok中不支持的话就会受到影响。还有一个可能带来的问题，就是Lombok自身的升级也会受到限制。因为一个应用可能依赖了多个jar包，而每个jar包可能又要依赖不同版本的Lombok，这就导致在应用中需要做版本仲裁，而jar包版本仲裁是没那么容易的，而且发生问题的概率也很高。")]),t._v(" "),s("p",[t._v("5️⃣破坏封装性")]),t._v(" "),s("p",[t._v("以上几个问题，我认为都是有办法可以避免的。但是有些人排斥使用Lombok还有一个重要的原因，那就是他会破坏封装性。众所周知，Java的三大特性包括封装性、继承性和多态性。如果在代码中直接使用Lombok，那么会自动生成getter、setter 等方法，这就意味着，一个类中的所有参数都自动提供了设置和读取方法。")]),t._v(" "),s("p",[t._v("面向对象封装的定义是：通过访问权限控制，隐藏内部数据，外部仅能通过类提供的有限的接口访问、修改内部数据。所以，暴露不应该暴露的 setter 方法，明显违反了面向对象的封装特性。")]),t._v(" "),s("h3",{attrs:{id:"实操需要注意的地方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实操需要注意的地方"}},[t._v("#")]),t._v(" 实操需要注意的地方:")]),t._v(" "),s("h5",{attrs:{id:"_1、-getter-和-setter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、-getter-和-setter"}},[t._v("#")]),t._v(" 1、@Getter 和 @Setter")]),t._v(" "),s("p",[t._v("该注解使用在类或者属性上。生成的getter遵循布尔属性的约定。例如：boolean类型的flag，getter方法为 isFlag() 而不是 getFlag()。在使用该注解时，会默认生成一个无参构造，和对应的 getter 和 setter 方法 。")]),t._v(" "),s("h5",{attrs:{id:"_2、-nonnull"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、-nonnull"}},[t._v("#")]),t._v(" 2、@NonNull")]),t._v(" "),s("p",[t._v("该注解使用在属性上，该注解用于属性的非空检查，当放在setter方法的字段上，将生成一个空检查，如果为空则抛出NullPointerException。该注解会默认是生成一个无参构造。")]),t._v(" "),s("h5",{attrs:{id:"_3、-tostring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、-tostring"}},[t._v("#")]),t._v(" 3、@ToString")]),t._v(" "),s("p",[t._v("该注解使用在类上，该注解默认生成任何非静态字段以名称-值的形式输出。")]),t._v(" "),s("ol",[s("li",[t._v("如果需要可以通过注释参数"),s("code",[t._v("includeFieldNames")]),t._v("来控制输出中是否包含的属性名称。")]),t._v(" "),s("li",[t._v("可以通过"),s("code",[t._v("exclude")]),t._v("参数中包含字段名称，可以从生成的方法中排除特定字段。")]),t._v(" "),s("li",[t._v("可以通过"),s("code",[t._v("callSuper")]),t._v("参数控制父类的输出。")])]),t._v(" "),s("p",[t._v("注意：父类也要有toString方法，不然打印的是对象内存地址")]),t._v(" "),s("h5",{attrs:{id:"_4、-equalsandhashcode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、-equalsandhashcode"}},[t._v("#")]),t._v(" 4、@EqualsAndHashCode")]),t._v(" "),s("p",[t._v("该注解使用在类上，会同时生成"),s("code",[t._v("equals")]),t._v("和"),s("code",[t._v("hashCode")]),t._v("。注意继承关系的时候该注解的使用。存在继承关系需要设置"),s("code",[t._v("callSuper")]),t._v("参数为true。")]),t._v(" "),s("h5",{attrs:{id:"_5、-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、-data"}},[t._v("#")]),t._v(" 5、@Data")]),t._v(" "),s("p",[t._v("该注解使用在类上，该注解会提供Getter、Setter、equals、canEqual、hasCode和toString等方法，注解后在编译时会自动加进去。该注解是最常用的注解，本质上使用"),s("code",[t._v("@Data")]),t._v("注解，类默认"),s("code",[t._v("@ToString")]),t._v("和"),s("code",[t._v("@EqualsAndHashCode")]),t._v("以及每个字段都有"),s("code",[t._v("@Setter")]),t._v("和"),s("code",[t._v("@Getter")]),t._v("。该注解也会生成一个公共构造函数，可以将任何"),s("code",[t._v("@NonNull")]),t._v("和final字段作为参数。")]),t._v(" "),s("p",[t._v("虽然"),s("code",[t._v("@Data")]),t._v("注解非常有用，但是它没有与其他注解相同的控制粒度。@Data提供了一个可以生成静态工厂的单一参数，将staticConstructor参数设置为所需要的名称，Lombok自动生成的构造函数设置为私有，并提供公开的给定名称的静态工厂方法。")]),t._v(" "),s("h5",{attrs:{id:"_6、-allargsconstructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、-allargsconstructor"}},[t._v("#")]),t._v(" 6、@AllArgsConstructor")]),t._v(" "),s("p",[t._v("该注解使用在类上。该注解提供一个全参数的构造方法，默认不提供无参构造。")]),t._v(" "),s("h5",{attrs:{id:"_7、-noargsconstructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、-noargsconstructor"}},[t._v("#")]),t._v(" 7、@NoArgsConstructor")]),t._v(" "),s("p",[t._v("该注解使用在类上。使用后创建一个无参构造函数。")]),t._v(" "),s("h5",{attrs:{id:"_8、-requiredargsconstructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、-requiredargsconstructor"}},[t._v("#")]),t._v(" 8、@RequiredArgsConstructor")]),t._v(" "),s("p",[t._v("该注解使用在类上。使用类中所有带有"),s("code",[t._v("@NonNull")]),t._v("注解的或者带有 final 修饰的成员变量生成对应的构造方法。")]),t._v(" "),s("h5",{attrs:{id:"_9、-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、-value"}},[t._v("#")]),t._v(" 9、 @Value")]),t._v(" "),s("p",[t._v("这个注解用在类上。会生成含所有参数的构造方法，get 方法。此外还提供了equals、hashCode、toString 方法。")]),t._v(" "),s("p",[t._v("注意：没有setter")]),t._v(" "),s("h5",{attrs:{id:"_10、-cleanup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10、-cleanup"}},[t._v("#")]),t._v(" 10、@Cleanup")]),t._v(" "),s("p",[t._v("该注解使用在属性前。该注解是用来保证分配的资源被释放。在本地变量上使用该注解，任何后续代码都将封装在try/finally中，确保当前作用于中的资源被释放。默认"),s("code",[t._v("@Cleanup")]),t._v("清理的方法为close，可以使用value指定不同的方法名称。")]),t._v(" "),s("h5",{attrs:{id:"_11、-synchronized"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11、-synchronized"}},[t._v("#")]),t._v(" 11、@Synchronized")]),t._v(" "),s("p",[t._v("该注解使用在类或者实例方法上。Synchronized在一个方法上，使用关键字可能会导致结果和想要的结果不同，因为多线程情况下会出现异常情况。Synchronized\n关键字将在this示例方法情况下锁定当前对象，或者class讲台方法的对象上多锁定。这可能会导致死锁现象。一般情况下建议锁定一个专门用于此目的的独立锁，而不是允许公共对象进行锁定。该注解也是为了达到该目的。")]),t._v(" "),s("h5",{attrs:{id:"_12、-sneakythrows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12、-sneakythrows"}},[t._v("#")]),t._v(" 12、@SneakyThrows")]),t._v(" "),s("p",[t._v("该注解使用在方法上。该注解可以将方法中的代码用 try-catch 语句包裹起来，捕获异常并在 catch 中用 "),s("code",[t._v("Lombok.sneakyThrow(e)")]),t._v("把异常抛出，可以使用 "),s("code",[t._v("@SneakyThrows(Exception.class)")]),t._v("的形式指定抛出哪种异常。该注解需要谨慎使用。")]),t._v(" "),s("h5",{attrs:{id:"_13、-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13、-log"}},[t._v("#")]),t._v(" 13、@Log")]),t._v(" "),s("p",[t._v("(这是一个泛型注解，具体有很多种形式)")]),t._v(" "),s("p",[t._v("注解在类上。有如下选择可用：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@CommonsLog")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commons"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commons"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@JBossLog")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jboss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jboss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@Log")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@Log4j")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log4j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log4j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@Log4j2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log4j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log4j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@Slf4j")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@XSlf4j")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XLogger")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XLoggerFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getXLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v('默认情况下，记录器的主题（或名称）将是使用注释进行@Log注释的类的类名称。这可以通过指定topic参数来定制。例如：@XSlf4j(topic="reporting")。该类型注解可以满足不同的日志系统的日志使用，Lombok提供了一些自定义配置项可以参看官方说明文档。')]),t._v(" "),s("h5",{attrs:{id:"_14、-builder-builder-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14、-builder-builder-pattern"}},[t._v("#")]),t._v(" 14、@Builder "),s("a",{attrs:{href:"https://www.jianshu.com/p/e4944a1bb3a2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Builder Pattern"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("关于Builder较为复杂一些，Builder的作用之一是为了解决在某个类有很多构造函数的情况，也省去写很多构造函数的麻烦，在设计模式"),s("a",{attrs:{href:"https://www.jianshu.com/p/f2dd70d1e2fd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Design Pattern"),s("OutboundLink")],1),t._v("中的思想是：用一个内部类去实例化一个对象，避免一个类出现过多构造函数。")]),t._v(" "),s("h2",{attrs:{id:"报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报错"}},[t._v("#")]),t._v(" 报错：")]),t._v(" "),s("h4",{attrs:{id:"_1-allargsconstructor-添加后编译失败-暂未解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-allargsconstructor-添加后编译失败-暂未解决"}},[t._v("#")]),t._v(" 1. @AllArgsConstructor 添加后编译失败（暂未解决）")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("Parameter "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" of constructor "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" com.hjwu.springboot.entity.User required a bean of "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java.lang.Integer'")]),t._v(" that could not be found.\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);