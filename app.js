const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()


router.get('/node/api/test',(ctx,next)=>{
    ctx.body = {
        "code": "200",
        "msg" : "success",
        "data": {
            "articleList": [
                {
                    "title":"关于网站，关于博客",
                    "img": "https://yangicheng.cn/static/image/blog-summary/javascript.png",
                    "summary": ["心路历程","闲谈"]
                },
                {
                    "title":"浅谈https",
                    "img": "https://yangicheng.cn/static/image/blog-summary/javascript.png",
                    "summary": ["理论","面试"]
                }
            ]
        }
    }
})

app.use(router.routes())





app.listen(3000)