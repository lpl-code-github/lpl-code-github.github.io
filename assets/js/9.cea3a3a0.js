(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{427:function(_,v,t){"use strict";t.r(v);var s=t(34),r=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"项目定位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目定位"}},[_._v("#")]),_._v(" 项目定位")]),_._v(" "),t("h2",{attrs:{id:"_1-本项目实现了什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-本项目实现了什么"}},[_._v("#")]),_._v(" 1. 本项目实现了什么？")]),_._v(" "),t("h3",{attrs:{id:"对象存储的基本要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象存储的基本要求"}},[_._v("#")]),_._v(" 对象存储的基本要求")]),_._v(" "),t("ul",[t("li",[t("p",[t("em",[_._v("可扩展性")])]),_._v(" "),t("p",[_._v("当现有的服务器集群无法满足容量、吞吐量、时延性等性能指标时，我们必须能够轻易的扩展现有的服务器集群，对"),t("strong",[_._v("接口服务")]),_._v("和"),t("strong",[_._v("数据服务")]),_._v("进行"),t("strong",[_._v("解耦")]),_._v("，并且个节点之间"),t("strong",[_._v("并发执行")]),_._v("，没有全局锁以及某个节点上发生的错误不影响其它节点。")]),_._v(" "),t("p",[_._v("当HTTP请求增长时，可以加入新的"),t("strong",[_._v("接口服务器")]),_._v("；当数据存储渐满或者磁盘IO负载过高时，可以加入新的"),t("strong",[_._v("数据服务器")]),_._v("。")])]),_._v(" "),t("li",[t("p",[t("em",[_._v("元数据服务及版本控制")])]),_._v(" "),t("p",[_._v("使用"),t("strong",[_._v("SHA-256")]),_._v("散列函数，产生对象文件的hash值作为对象的唯一标识，并使用"),t("strong",[_._v("ElasticSearch")]),_._v("来存储对象元数据，有了对象的唯一标识，即可完成对象的版本控制")])]),_._v(" "),t("li",[t("p",[t("em",[_._v("数据校验和去重")])]),_._v(" "),t("p",[t("strong",[_._v("SIS检查")]),_._v("实现对象去重，让重复数据在系统内只保留一个实体，极好的节省存储空间、提升了存储利用率。通过数据校验，验证客户端提供的hash值和服务端计算的hash值是否一致。")])]),_._v(" "),t("li",[t("p",[t("em",[_._v("数据冗余和及时修复")])]),_._v(" "),t("p",[_._v("使用"),t("strong",[_._v("Reed-Solomon")]),_._v("冗余策略，"),t("strong",[_._v("4个数据片+2个校验片")]),_._v("，简单来说就是将一个完整的对象平均分成6个分片，其中包括4个数据片对象（每个对象的大小是原始对象大小的25%），另外还有两个校验片，例如丢失了一份数据片，可以通过其它三个数据片和两个校验片恢复出丢失的数据片，最后合并出完整的对象。4+2配置中冗余度为2，即"),t("strong",[_._v("最多可以同时丢失2块数据块，当丢失的数据块个数大于2时，丢失数据块不可恢复")]),_._v("。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://pic.imgdb.cn/item/6267e50b239250f7c583e8ff.png",alt:"img"}})])]),_._v(" "),t("li",[t("p",[t("em",[_._v("断点续传")])]),_._v(" "),t("p",[_._v("对象存储提供断点续传功能，"),t("strong",[_._v("允许客户端从某个检查点而不是从头开始上传或下载对象")]),_._v("。")])]),_._v(" "),t("li",[t("p",[t("em",[_._v("数据压缩")])]),_._v(" "),t("p",[_._v("包括"),t("strong",[_._v("存储时的数据压缩")]),_._v("、"),t("strong",[_._v("下载时的数据压缩")]),_._v("，压缩算法采用的是"),t("strong",[_._v("gzip")])])]),_._v(" "),t("li",[t("p",[t("em",[_._v("系统维护")])]),_._v(" "),t("p",[t("strong",[_._v("版本留存策略")]),_._v("决定了那些版本将要被保留，超过这个阈值的版本将被删除，其中包括两种方式：客户端控制台手动数量限定；服务端定时任务时间限定策略+数量限定策略。")]),_._v(" "),t("p",[_._v("另外还有"),t("strong",[_._v("对无元数据引用的对象数据需要进行清除")]),_._v("，以节省存储空间，同样有两种方式可选，客户端手动操作；服务端定时操作。")]),_._v(" "),t("p",[_._v("最后是"),t("strong",[_._v("数据的定期、不定期检查和修复")]),_._v("，即使服务端提供了即时修复功能，可能某个对象长期没有得到下载操作而始终得不到修复，最终由于损坏的数据片过多而无法修复，同样提供了客户端手动修复和服务端定时修复。")])])]),_._v(" "),t("h3",{attrs:{id:"节点心跳检测及异常报警、硬件信息监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点心跳检测及异常报警、硬件信息监控"}},[_._v("#")]),_._v(" 节点心跳检测及异常报警、硬件信息监控")]),_._v(" "),t("p",[_._v("使用到消息队列"),t("strong",[_._v("Rabbit MQ")]),_._v("，每个接口服务节点在启动后都会创建自己的消息队列并绑定在apiServer交换机上。每个数据服务节点在启动后"),t("strong",[_._v("每隔 5s")]),_._v(" 就会发送一条消息给 apiServers交换机 ，"),t("strong",[_._v("消息的正文就是该数据服务节点的 HTTP 监听地址")]),_._v("。接口服务收到该交换机的消息，会将心跳检测记录在Redis中。如果有异常节点下线，发向钉钉群发送告警信息。")]),_._v(" "),t("p",[_._v("同时"),t("strong",[_._v("Rabbit MQ")]),_._v("在项目中还有一处用途，每个数据服务节点启动会创建自己的消息队列并绑定至dataServers交换机，当接口服务需要定位对象时，会创建一个临时消息队列，然后发送一条消息队列给dataServers交换机，消息的正文是需要定位的对象，定位成功的数据服务节点需要将反馈消息发送给这个临时队列，反馈消息的正文是数据服务节点自身的监听地址，临时消息队列会在一定的时间后关闭，如果在关闭前没有收到任何反馈则该对象定位失败，接口服务节点就知道该对象不存在与数据服务层。")]),_._v(" "),t("p",[t("strong",[_._v("硬件监控")]),_._v("使用gopsutil库实现，监控指标为CPU负载、内存使用率、磁盘分区使用率。")]),_._v(" "),t("h3",{attrs:{id:"可视化的客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可视化的客户端"}},[_._v("#")]),_._v(" 可视化的客户端")]),_._v(" "),t("p",[_._v("基于"),t("strong",[_._v("Vue 2")]),_._v("开发，使用Element UI + Semantic UI + Echarts等UI框架及可视化组件，以及js-base64、js-file-download、crypto-js等三方库，实现了满足"),t("strong",[_._v("可视化节点心跳检测")]),_._v("、"),t("strong",[_._v("硬件信息监控")]),_._v("、"),t("strong",[_._v("桶管理")]),_._v("、"),t("strong",[_._v("对象管理")]),_._v("、"),t("strong",[_._v("系统维护")]),_._v("、"),t("strong",[_._v("日志管理")]),_._v("的专用客户端。")]),_._v(" "),t("h3",{attrs:{id:"日志收集及中间件监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日志收集及中间件监控"}},[_._v("#")]),_._v(" 日志收集及中间件监控")]),_._v(" "),t("p",[_._v("Golang自定义日志框架：log包+tail包实时读取+RabbitMQ推送+Elasticsearch存储")]),_._v(" "),t("h2",{attrs:{id:"_2-本项目没有涉及的范畴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-本项目没有涉及的范畴"}},[_._v("#")]),_._v(" 2. 本项目没有涉及的范畴")]),_._v(" "),t("h3",{attrs:{id:"没有涉及用户管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#没有涉及用户管理"}},[_._v("#")]),_._v(" 没有涉及用户管理")]),_._v(" "),t("p",[_._v("虽然用户管理是云存储系统的一个基本组成部分，但是这部分和其它系统的用户管理并没有什么区别，一个用户信息数据库和权限认证框架可以满足大多数要求。")]),_._v(" "),t("h3",{attrs:{id:"没有提到信息安全方面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#没有提到信息安全方面"}},[_._v("#")]),_._v(" 没有提到信息安全方面")]),_._v(" "),t("p",[_._v("项目使用的通信协议均为HTTP，事实上一个云存储系统对外一定是使用HTTPS协议，服务端和客户端之间需要建立双向的SSL认证，除此之外，用户的合法身份的授权和验证等功能通常都会有一个专门的身份认证系统来进行管理，而服务端客户端可以通过JWT和身份认证系统打交道。")]),_._v(" "),t("h3",{attrs:{id:"没有涉及文件病毒、风险检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#没有涉及文件病毒、风险检测"}},[_._v("#")]),_._v(" 没有涉及文件病毒、风险检测")]),_._v(" "),t("p",[_._v("尝试使用过开放Api对文件进行检测，但最终考虑到时效性和文件隐私等方面弃用，建议使用本地离线检测工具。")]),_._v(" "),t("h2",{attrs:{id:"_3-项目的定位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-项目的定位"}},[_._v("#")]),_._v(" 3. 项目的定位")]),_._v(" "),t("p",[_._v("从1和2可以看出，本项目适用于某项目的中间的服务，而并不能作为像阿里云OSS，腾讯云COS的对外提供的对象云存储产品，作为中间服务，可以自行实现用户功能、支付功能、权限控制功能、加密功能等等其它业务场景来使它成为一个完全的对象云存储，或者如果您的项目中仅需要对象存储的功能，可以直接使用它，或对源码进行二次开发。")])])}),[],!1,null,null,null);v.default=r.exports}}]);