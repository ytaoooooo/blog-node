const { HttpException } = require('../core/http-exception')

const catchError = async(ctx,next)=>{
    try {
        await next()
    } catch (error) {
        const isDev = global.config.enviroument === 'dev'
        const isHttpException = error instanceof HttpException
        if(isDev && !isHttpException){
            throw error
        }
        if(isHttpException){
            ctx.body={
                msg : error.msg,
                errorCode: error.errorCode,
                requestUrl: `${ctx.method} ${ctx.path}`
            }
            error.status = error.code
        }else{
            ctx.body = {
                msg : 'we made a mistake',
                errorCode: 999,
                requestUrl: `${ctx.method} ${ctx.path}`
            }
            error.status= 500
        }
    }
}

module.exports = {
    catchError
}