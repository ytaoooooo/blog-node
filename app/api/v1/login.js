const Router = require('koa-router')
const router = new Router()

router.post('/node/api/v1/login', (ctx, next) => {
    const account = 'CIM'
    const password = '123456'
    const data = ctx.request.body
    let msg = 'success'
    if(data.account != account){
        msg = '账号不存在'
    }
    if(data.account == account && data.password != password){
        msg = '密码不正确'
    }
    
    ctx.body = {
        "code": "200",
        "msg": msg,
        "data": {}
    }
})

module.exports = router