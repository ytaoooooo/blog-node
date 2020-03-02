const Router = require('koa-router')
const router = new Router()

router.get('/node/api/v1/summary', (ctx, next) => {
    ctx.body = {
        "code": "200",
        "msg": "success",
        "data": {
            sideBarList: [
                {
                    id: 0,
                    name: "React",
                    number: 1,
                    headerImg: "https://yangicheng.cn/static/image/blog-summary/react.png",
                    headerName: "React",
                    headerSummary: "React is an open source JavaScript library used for designing user interfaces.",
                },
                {
                    id: 1,
                    name: "Node",
                    number: 1,
                    headerImg: "https://yangicheng.cn/static/image/blog-summary/node.png",
                    headerName: "Node",
                    headerSummary: "Node.js is a tool for executing JavaScript in a variety of environments.",

                },
                {
                    id: 2,
                    name: "Vue",
                    number: 0,
                    headerImg: "https://yangicheng.cn/static/image/blog-summary/vue.png",
                    headerName: "Vue",
                    headerSummary: "Vue.js is a JavaScript framework for building interactive web applications.",
                },
                {
                    id: 3,
                    name: "Js",
                    number: 1,
                    headerImg: "https://yangicheng.cn/static/image/blog-summary/javascript.png",
                    headerName: "javascript",
                    headerSummary: "JavaScript (JS) is a lightweight interpreted programming language with first-class functions",
                },
                {
                    id: 4,
                    name: "Css/other",
                    number: 0,
                    headerImg: "https://yangicheng.cn/static/image/blog-summary/css.png",
                    headerName: "Css",
                    headerSummary: "Cascading Style Sheets (CSS) is a language used most often to style and improve upon the appearance of views.",
                }
            ],
            summaryItem: [
                {
                    id: 0,
                    type: 0,
                    name: "hooks",
                    summary: "hooks知识点",
                    date: "2020-2-24",
                },
                {
                    id: 1,
                    type: 1,
                    name: "路由",
                    summary: "路由分类和前端路由",
                    date: "2020-2-24"
                },
                {
                    id: 2,
                    type: 3,
                    name: "JS基础",
                    summary: "初级JS基础概述",
                    date: "2020-2-27"
                },
                {
                    id:3,
                    type: 4,
                    name: "http发展历史",
                    summary: "版本迭代",
                    date: "2020-3-2"
                }
            ]
        }
    }
})


router.get('/node/api/v1/summary/nice', (ctx, next) => {
    ctx.body = {
        "code": "200",
        "msg": "success",
        "data": {
            niceSummaryItem: [
                {
                    id: 0,
                    type: 0,
                    name: "hooks",
                    summary: "hooks知识点",
                    date: "2020-2-24"
                },
                {
                    id: 1,
                    type: 1,
                    name: "路由",
                    summary: "路由分类和前端路由",
                    date: "2020-2-24"
                },
                {
                    id: 2,
                    type: 3,
                    name: "JS基础",
                    summary: "初级JS基础概述",
                    date: "2020-2-27"
                }
            ]
        }
    }
})

let content3= `
http协议的发展历史 
HTTP/0.9：只有一个命令GET 没有header等描述数据的信息 服务器发送完毕就关闭TCP连接
HTTP/1.0：增加了很多命令 增加了status code 和header
HTTP/1.1：持久连接 pipeline 同一个连接发送多个请求增加host(可以跑多个web服务器)和其他命令
HTTP/2：所有数据以二进制传输。同一个TCP连接里面发送多个请求不再需要按照顺序，头信息压缩以及推送(服务端主动发送信息)等提高效率的功能，TCP连接上的http请求可以并发
`

let content2 = `
<h1>JS变量类型和计算</h1>
<p>值类型&引用类型 值类型的变量的值在栈中存储互不影响，栈从上往下排列。引用类型的变量的值在堆中存储，变量中存储的是指向内存中的地址，可以通过这个地址拿到内存中存储的引用类型的变量的值。堆是从下往上排列。引用类型放在堆中的原因是引用类型可能会很大，存储堆中的地址比复制一个引用类型的值对内存更友好，消耗更小</p>
<p>常见值类型 undefined string number boolean symbol 常见引用类型：object array 特殊引用类型：null指向空地址 function(也可作为第三个函数类型) </p>
<p>typeof运算符：能够识别所有的值类型，识别函数，判断是否是引用类型(不可分辨object和array)，深拷贝(递归)</p>
<p>变量计算中存在着类型转换</p>
<h1>原型和原型链</h1>
<p>ts中对面向对象支持较好，但是本质还是原型和原型链继承 instanceof类型判断可以区分array和object 显式原型prototype(构造函数) 隐式原型__proto__(实例) 使用方法和属性时如果实例没有则会原型链向上查找</p>
<h1>作用域和闭包</h1>
<p>作用域就是变量的合法使用范围 全局作用域、函数作用域、块级作用域{}ES6 let和const 变量会向上查找。 闭包:作用域应用的特殊情况。1、函数作为参数被传递。2、函数作为返回值 闭包中的变量查找是在函数定义的地方查找，不是子在函数运行的地方向上查找</p>
<p>this是在函数执行的时候确定的，this作为参数传递会发生隐式丢失(react中) bind(返回一个新的函数) apply call。箭头函数的this是继承而来，构造函数中的this指向实例</p>
<h1>异步和单线程</h1>
<p>JS是单线程语言，JS和DOM渲染共用一个线程所以JS可以修改DOM结构 同步和异步最大区别是会不会阻塞代码执行 promise 异步终极解决方案 async，await </p>
<h1>JS</h1>
<p>JS的核心基础是ECMA 262标准规定的语法。JS Web API是W3C标准，用于网页操作API 前者和后者结合就是javascript能够在浏览器上跑的语言</p>
<h1>DOM</h1>
<p>浏览器解析html后生成的树结构的文档对象模型DOM 获取DOM等基本操作 attribute和property。property是DOM中的属性，是JavaScript里的对象；attribute是HTML标签上的特性，它的值只能够是字符串；</p>
<p>DOM性能，DOM操作特别"昂贵" 1、对DOM查询做缓存 2、将频繁操作改为一次性操作(创建文档片段 document.createDocumentFragment)</p>
<h1>BOM</h1>
<p>BOM api  navigator(浏览器信息) screen(屏幕信息) location(路由信息) history(前进后退)</p>
<h1>事件</h1>
<p>事件绑定 事件冒泡 事件捕获 组织默认行为(preventDefault()) 事件冒泡会向外触发事件 事件捕获从外到里触发事件 stopPropagation()组织事件冒泡。 </p>
<p>事件代理: 自动绑定事件 原理就是事件冒泡，在父级容器中监听事件 再通过event.target拿到具体的绑定内容</p>
<h1>ajax</h1>
<p>Asynchronous Javascript And XML,异步的javascript和XML 核心API XMLHttpRequest</p>
<p>ajax请求时，浏览器要求当前页面和server必须同源(协议、域名、端口必须一致) src和herf可以跨域。CORS服务器设置http header允许跨域请求</p>
<h1>存储</h1>
<p>cookie localStorage sessionStorage</p>
<p>cookie用于浏览器和server通讯，h5之前借用cookie用作存储功能但cookie存储量不大4KB(document.cookie)</p>                   
<p>localStorage sessionStorage每个域最大可存5m。localStorage.setItem,getItem localStorage(常用)数据会永久存储，除非代码或者手动删除。sessionStorage数据值存在于当前会话，浏览器关闭则情空</p>
<h1>页面加载过程</h1>
<p>资源形式有html、js、css 媒体文件：图片视频</p>
<p>DNS解析：域名->IP地址 浏览器根据IP地址向浏览器发起http请求 服务器处理http请求，并返回浏览器</p>
<p>根据HTML生成DOM tree 根据CSS生成CSSOM将DOMTree和CSSOM整合形成RenderTree，根据RenderTree渲染页面，遇到Script则暂停渲染，优先加载并执行JS代码完成后继续，直至将RenderTree渲染完成</p>
<h1>性能优化</h1>
<p>性能优化原则：多使用内存，缓存或其他方法，减少CPU计算量，减少网络加载耗时，(空间换时间) 加载更快(减少资源体积，压缩代码。减少访问次数，合并代码，SSR服务器渲染，缓存。使用CDN)、渲染更快(css放在head(css放在head标签中比css放在body标签尾部少了一次构建RenderTree,)，js放在body最下面，尽早执行JS、懒加载、对DOM查询进行缓存、合并频繁DOM操作，节流(每隔多少秒才执行一次)、防抖(输入框用户名密码))</p>
<h1>安全</h1>
<p>XSS</p>



`
let content1 = `
<h1>web中的路由</h1>
<p>web开发中，路由主要分为前端路由和后端路由</p>
<h1>后端路由</h1>
<p>对于普通的网站，所有的超链接都是URL地址，所有的URL地址都对应服务器上的资源，浏览器中输入URL就会通过网络层协议一层一层往下再传输达到之后拆包获取请求，服务器会获得URL，同时还有http的报文，经过处理之后返回对应URL的资源给浏览器(客户端)即可实现输入一个URL打开一个页面的效果</p>
<h1>前端路由</h1>
<p>前端路由的出现是将通过URL展示页面的功能从后端移到了前端，通过后端路由展示不同的页面即是多页应用，每跳转一个页面就会向服务器发起一个http请求。而对应的前端路由就是解决频繁跳转频繁发http请求的问题，通过js对路由的监听，返回不同的组件来达到切换页面的效果，实际上所有的操作都是在一个html页面中，这就是单页应用，react和vue都是构建的一个单页应用</p>
<h1>前端路由的优缺点</h1>
<p>前端路由的优点是用户体验好，不需要每次都从服务器全部获取，快速展现给用户。缺点是不利于 SEO使用浏览器的前进，后退键的时候会重新发送请求，没有合理利用缓存单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置。但是可以使用其他的技术如SSR解决SEO的问题等等</p>
<h1>前端路由的分类</h1>
<p>目前前端的路由实现主要是两种方式，这两种方式都是基于浏览器自身的特性，两种方式分别是hash路由、h5 history路由</p>
<h1>hash路由</h1>
<p>在h5 history api没有出来之前，通常使用的是hash路由，hash路由一个明显的标志#，通过这个监听URL中的hash变化来进行路由的跳转hash 路由的本质是浏览器 location 对象中的 hash 属性，它会记录链接地址中 '#' 后面的内容（e.g.：#part1）。因此，我们可以通过监听 window.onhashchange事件获取到跳转前后访问的地址，从而实现地址切换的目的。</p>
<h1>history路由</h1>
<p>在之前的 html 版本中，我们可以通过 history.back(), history.forward()和 history.go(number)方法来完成在用户历史记录中向后和向前的跳转。而history路由则是使用了 html5中新增的 pushState事件和 replaceState() 事件。</p>
<h1>hash和history对比</h1>
<p>不会刷新页面,不能跳转其他路径,只会在当前路径后面拼上#/test/sss hash就是#后面的路径浏览器不会解析,可以通过hashchange来进行操作hashHistoryhash （url中#后面的部分）虽然出现在 URL 中，但不会被包含在 http 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。</p>
<p>可以在同源下其他路径跳转 优于#路由，可以操作路径也可以操作hash 但是兼容不好</p>
`

let content0 = `
<h1>正在学习中...</h1>
`

// 笔记详情
router.get('/node/api/v1/summary/detail', (ctx, next) => {
    switch (ctx.query.id) {
        case "3":
            ctx.body={
                "code":200,
                "msg": "success",
                "data":{
                    "content":content3,
                    "title":"http发展历史"
                }
            }
        case "2":
            ctx.body = {
                "code": 200,
                "msg": 'success',
                "data": {
                    "content": content2,
                    "title": "JS基础"
                }

            }
            break;
        case "1":
            ctx.body = {
                "code": 200,
                "msg": 'success',
                "data": {
                    "content": content1,
                    "title": "路由"
                }

            }
            break;  
        default:
            ctx.body = {
                "code": 200,
                "msg": 'success',
                "data": {
                    "content": content0,
                    "title": "hooks"
                }
            }
            break;
    }
})

module.exports = router