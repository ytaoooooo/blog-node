const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()


router.get('/node/api/article',(ctx,next)=>{
    ctx.body = {
        "code": "200",
        "msg" : "success",
        "data": {
            "articleList": [
                {
                    "id":0,
                    "articleTitle":"关于网站，关于博客",
                    "articleImg": "https://yangicheng.cn/static/image/blog-summary/javascript.png",
                    "articleLabel": ["心路历程","闲谈"],
                    "articleDate": '2020-2-21'
                },
                {
                    "id":1,
                    "articleTitle":"浅谈https",
                    "articleImg": "https://yangicheng.cn/static/image/blog-summary/javascript.png",
                    "articleLabel": ["理论","面试"],
                    "articleDate": '2020-2-21'

                }
            ]
        }
    }
})

router.get('/node/api/article/detail',(ctx,next)=>{
    switch (ctx.query.id) {
        case "1":
            ctx.body= {
                "code": 200,
                "msg": 'success',
                "res": `<h1>什么是https</h1><p>https是HTTP+SSL/TLS，也就是在原有的http协议的基础上加上了为了保证传输安全性的协议，所以https并不是一个新的协议</p><h1>为什么要使用https</h1><p>在以前的http协议中，大致存在着三个问题：1、数据明文传输 2、报文完整性无法验证 3、无法验证通信双方的身份</p><h1>对称加密算法</h1><p>对称加密算法是客户端和服务端共用一个密钥</p><p>优点：加密解密效率高、缺点：密钥无法实现安全传输、密钥数目难以管理、无法提供信息完整性校验</p><h1>非对称加密算法</h1><p>加密具有双向性,密钥分为公钥(公开)和私钥(自己保有)。公钥加密、私钥解密用于加密通信。私钥加密、公钥解密用于数字签名</p><p>优点：服务器仅维持一个私钥即可，缺点：加密解密会耗费一定时间</p><h1>数据明文传输解决方法</h1><p>混合使用对称加密算法和非对称加密算法</p><p>连接建立阶段使用非对称加密算法(沟通对称加密算法使用的密钥)，内容传输阶段使用对称加密算法</p><img src="https://www.yangicheng.cn/static/image/article-detail/https.png" alt=""/><h1>报文完整性如何验证</h1>`
            }  
            break;
    
        default:
            ctx.body = {
                "code": 201,
                "msg": 'success',
                "res": `<h1>什么是https</h1><p>https是HTTP+SSL/TLS，也就是在原有的http协议的基础上加上了为了保证传输安全性的协议，所以https并不是一个新的协议</p><h1>为什么要使用https</h1><p>在以前的http协议中，大致存在着三个问题：1、数据明文传输 2、报文完整性无法验证 3、无法验证通信双方的身份</p><h1>对称加密算法</h1><p>对称加密算法是客户端和服务端共用一个密钥</p><p>优点：加密解密效率高、缺点：密钥无法实现安全传输、密钥数目难以管理、无法提供信息完整性校验</p><h1>非对称加密算法</h1><p>加密具有双向性,密钥分为公钥(公开)和私钥(自己保有)。公钥加密、私钥解密用于加密通信。私钥加密、公钥解密用于数字签名</p><p>优点：服务器仅维持一个私钥即可，缺点：加密解密会耗费一定时间</p><h1>数据明文传输解决方法</h1><p>混合使用对称加密算法和非对称加密算法</p><p>连接建立阶段使用非对称加密算法(沟通对称加密算法使用的密钥)，内容传输阶段使用对称加密算法</p><img src="https://www.yangicheng.cn/static/image/article-detail/https.png" alt=""/><h1>报文完整性如何验证</h1>`
            }
            break;
    }
})

app.use(router.routes())





app.listen(3000)