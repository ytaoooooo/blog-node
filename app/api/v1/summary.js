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
                    number: 0,
                    headerImg: "https://yangicheng.cn/static/image/blog-summary/javascript.png",
                    headerName: "javascript",
                    headerSummary: "JavaScript (JS) is a lightweight interpreted programming language with first-class functions",
                },
                {
                    id: 4,
                    name: "Css",
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
                    name: "node是什么",
                    summary: "node的基本概念",
                    date: "2020-2-24"
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
                }
            ]
        }
    }
})



let content2 = `<h1>什么是https</h1><p>https是HTTP+SSL/TLS，也就是在原有的http协议的基础上加上了为了保证传输安全性的协议，所以https并不是一个新的协议</p><h1>为什么要使用https</h1><p>在以前的http协议中，大致存在着三个问题：1、数据明文传输 2、报文完整性无法验证 3、无法验证通信双方的身份</p><h1>对称加密算法</h1><p>对称加密算法是客户端和服务端共用一个密钥</p><p>优点：加密解密效率高、缺点：密钥无法实现安全传输、密钥数目难以管理、无法提供信息完整性校验</p>
<h1>非对称加密算法</h1>
<p>加密具有双向性,密钥分为公钥(公开)和私钥(自己保有)。公钥加密、私钥解密用于加密通信。私钥加密、公钥解密用于数字签名</p>
<p>优点：服务器仅维持一个私钥即可，缺点：加密解密会耗费一定时间</p>
<h1>数据明文传输解决方法</h1>
<p>混合使用对称加密算法和非对称加密算法</p>
<p>连接建立阶段使用非对称加密算法(沟通对称加密算法使用的密钥)，内容传输阶段使用对称加密算法</p>
<img src="https://www.yangicheng.cn/static/image/article-detail/https.png" alt=""/>
<h1>报文完整性如何验证</h1>
<p>客户端或服务端向对方发送消息的时候，不仅会发送原消息，而且会将原消息通过hash算法生成信息摘要，并使用私钥进行加密生成数字签名。对方获得消息后，将消息通过hash算法获得信息摘要，并通过公钥解密私钥加密后的数字签名，得到信息摘要，通过对比两个信息摘要可以验证信息的完整性</p>
<img src="https://www.yangicheng.cn/static/image/article-detail/digital-signature.jpg" alt=""/>
<h1>身份信息如何验证</h1>
<p>通过可信任机构颁发的数字证书，数字证书包含了相关信息可以进行身份的验证</p>
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
<h1>自我描述</h1>
<p>某邮电学校学生，不是科班，自动化学院的学生，在以前也没有想过会写代码，甚至在大一的时候C语言也没怎么好好学，刷题的时候只会找找bug来做题。最开始写代码是有门课是单片机，用c语言写一些跑马灯和篮球计分器啥的代码。说实话当时写只能是硬写，一点也不会，照着敲好多遍。一个功能没实现晚上就一直在那想。特别容易钻牛角尖。
大一疯狂玩。吉他、滑板、吃鸡、王者，社团，部门。确实荒废了一年，不过现在想想如果当时不耍现在也静不下心来。也没啥后悔的。大二确实课太多了。慢慢接触了C。因为辅导员有要求所以不得不去把计算机二级给考了。大二下的时候确实觉得不该浑浑噩噩了。好朋友给了我一门机器学习的课。认认真真学了之后，发现确实太难了。之后跟着他开始学习微信小程序。</p>
<p>微信小程序是学的慕课网7yue的课，不得不说他的课是真的好，培养思维，提纲挈领。渐渐的开始入门。之后就慢慢学习前端的许多的知识。从一开始的微信小程序调试都不怎么会。到现在进步了许多。DOM-BOM-JS-CSS-HTML慢慢的开始学习 es6-react-node 渐入佳境的样子，
如果从去年暑假，也就是7月份的样子开始算的话，到现在应该有半年了吧。其实半年学习的东西还是挺多的。希望学弟学妹们不要学我浑浑噩噩。但是不要觉得半年就能做什么什么，其实我现在也就是个小菜鸡。很多计算机方面基础还没有打牢。还有很多很多的不足。而且在这半年里面确实是每天都花了很多的时间在学习写代码上还有自学一些计算机的课程。特别辛苦，但也感谢自己以前的努力。之后也要坚持一下</p>
<p>为了恰饭，也为了自己能做点事情</p>
<h1>建议</h1>
<p>知识付费的时代，不要舍不得钱买课。一分钱一分货，网上的免费课程很多确实有用，但是没用的东西太多了。花钱买的课。至少是制作者用了特别多的精力，还有团队的支撑，答疑的渠道。学习不应该是拿来开玩笑的，学习我觉得应该自豪一点。</p>
`

// 笔记详情
router.get('/node/api/v1/summary/detail', (ctx, next) => {
    switch (ctx.query.id) {
        case "2":
            ctx.body = {
                "code": 200,
                "msg": 'success',
                "data": {
                    "content": content2,
                    "title": "浅谈https"
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
                    "title": "简单总结"
                }
            }
            break;
    }
})

module.exports = router