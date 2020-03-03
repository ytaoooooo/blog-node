const Router = require('koa-router')
const router = new Router()

router.post('/node/api/v1/login', (ctx, next) => {
    const account = 'CIM'
    const password = '123456'
    let data = ctx.request.body
    data = Object.keys(data)[0]
    let array = Object.values(JSON.parse(data))

    let msg = 'success'
    if(array[0] != account){
        msg = '账号不存在'
    }
    if(array[0] == account && array[1] != password){
        msg = '密码不正确'
    }
    
    ctx.body = {
        "code": "200",
        "msg": msg,
        "data": {}
    }
})

module.exports = router