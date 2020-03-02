const Router = require('koa-router')
const router = new Router()

router.post('/node/api/v1/login', (ctx, next) => {
    const data = ctx.request.body
    ctx.body = {
        "code": "200",
        "msg": "success",
        "data": {
            data
        }
    }
})

module.exports = router