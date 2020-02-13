const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()


router.get('/test',(ctx,next)=>{
    ctx.body = {
        key: 'test'
    }
})

app.use(router.routes())





app.listen(3000)