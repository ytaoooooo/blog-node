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

app.use(router.routes())





app.listen(3000)