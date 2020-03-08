const Router = require('koa-router')
const router = new Router()


// 文章简介
router.get('/node/api/v1/article', (ctx, next) => {
    ctx.body = {
        "code": "200",
        "msg": "success",
        "data": {
            "articleList": [
                {
                    "id": 0,
                    "articleTitle": "简单总结",
                    "articleImg": "https://yangicheng.cn/static/image/blog-summary/javascript.png",
                    "articleLabel": ["总结一下"],
                    "articleDate": '2020-2-22'
                },
                {
                    "id": 1,
                    "articleTitle": "关于网站，关于博客",
                    "articleImg": "https://yangicheng.cn/static/image/blog-summary/javascript.png",
                    "articleLabel": ["心路历程", "闲谈"],
                    "articleDate": '2020-2-23'
                },
                {
                    "id": 2,
                    "articleTitle": "浅谈https",
                    "articleImg": "https://yangicheng.cn/static/image/blog-summary/javascript.png",
                    "articleLabel": ["理论", "面试"],
                    "articleDate": '2020-2-22'

                },
                {
                    "id": 3,
                    "articleTitle": "浏览器渲染过程",
                    "articleImg": "https://yangicheng.cn/static/image/blog-summary/javascript.png",
                    "articleLabel": ["原理","底层"],
                    "articleDate": '2020-3-8'

                }
            ]
        }
    }
})
let content3 = `
<p>在浏览器中输入URL之后，经过DNS解析，建立TCP连接之后开始发送http请求，web服务器接收到请求之后将返回相应的html</p>
<h1>浏览器拿到html后</h1>
<p>拿到代码后，浏览器在内存条中开辟出一块栈内存，用来给代码执行提供环境；同时分配一个主线程去一行行解析和执行代码</p>
<p>进栈执行，执行完出栈。js是单线程的，主线程就是一行一行解析代码。当浏览器遇到Link/script/img等异步操作后，都会开辟全新的线程去加载资源文件，所以浏览器是多线程的，新的线程所做的事情放在一个TASK QUEUE任务队列中</p>
<h1>浏览器解析和执行完html后</h1>
<p>主线程会去任务队列中查看任务是否完成，所完成一个取出一个执行，这就是事件循环</p>
<p>这就是为什么css要放在body前面，因为要尽早的使全新的线程去加载css代码，加快网页的渲染速度</p>
<img src="https://www.yangicheng.cn/static/image/article-detail/eventLoop.jpg" alt=""/>
<h1>回流、重绘</h1>
<p>回流根据生成的渲染树，计算他们在设备视口内的确切位置和大小， 重绘是根据渲染树以及回流得到的几何信息，得到节点的绝对像素再发送给GPU展示在页面上</p>
`

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
<h1>关于网站</h1>
<p>网站的是基于react框架开发，采用了响应式开发，目前兼容了小屏移动端和pc网页端，样式在慢慢改进，功能会慢慢增加。设计能力也需要加强学习</p>
<p>react开发使用了hooks，路由，和redux。源码可以进入我的仓库查看</p>
<p>后端暂时是用的node，只写了简单的逻辑代码</p>
<p>后台管理系统还在开发中,准备使用react + antd 框架，之后有时间的话会用vue和vue好用的后台管理模板练练手</p>
<p>网站的服务器是租的腾讯云的学生服务器，学生服务器挺便宜的。而且性能够用。云服务器上配置了node和nginx。nginx配置了https和node的反向代理。如果想要参照，我会在文章中贴上详细步骤</p>
<h1>关于博客</h1>
<p>这是我自己开发的网站，我也会好好的将它完善，将自己学习的一些经验分享给大家，踩过的一些坑也会分享给大家，在从无到有的过程中，需要注意的地方我也会详细的将细节写出来，前端在配置服务器的时候确实会有一些困难，因为没有怎么学过计算机的课程</p>
<p>根据板块可以选择你喜欢的内容进行浏览，在以后添加了点赞评论功能之后希望你也能动动手指给我一点鼓励</p>
<p>学习代码的动力就是看到自己的成果，希望我能一直坚持下去</p>
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

// 文章详情
router.get('/node/api/v1/article/detail', (ctx, next) => {
    switch (ctx.query.id) {
        case "3":
            ctx.body = {
                "code": 200,
                "msg": 'success',
                "data": {
                    "content": content3,
                    "title": "浏览器渲染过程"
                }

            }
            break;
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
                    "title": "关于网站，关于博客"
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
// 精选文章
router.get('/node/api/v1/article/nice', (ctx, next) => {
    ctx.body = {
        "code": "200",
        "msg": "success",
        "data": {
            "niceArticleList": [
                {
                    "id": 0,
                    "articleTitle": "简单总结",
                    "articleImg": "https://yangicheng.cn/static/image/blog-summary/javascript.png",
                    "articleLabel": ["总结一下"],
                    "articleDate": '2020-2-22'
                },
                {
                    "id": 1,
                    "articleTitle": "关于网站，关于博客",
                    "articleImg": "https://yangicheng.cn/static/image/blog-summary/javascript.png",
                    "articleLabel": ["心路历程", "闲谈"],
                    "articleDate": '2020-2-23'
                },
                {
                    "id": 2,
                    "articleTitle": "浅谈https",
                    "articleImg": "https://yangicheng.cn/static/image/blog-summary/javascript.png",
                    "articleLabel": ["理论", "面试"],
                    "articleDate": '2020-2-22'

                }
            ]
        }
    }

})

module.exports = router