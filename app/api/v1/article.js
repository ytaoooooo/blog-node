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

// 文章详情
router.get('/node/api/v1/article/detail', (ctx, next) => {
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
                    "title": "关于网站，关于博客"
                }

            }
            break;

        default:
            ctx.body = {
                "code": 200,
                "msg": 'success',
                "data": {
                    "content": content1,
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