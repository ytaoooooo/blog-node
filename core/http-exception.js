class HttpException extends Error{
    constructor(msg="服务器出现了一个问题",errorCode=10000,code=400){
        super()
        this.msg = msg
        this.errorCode = errorCode
        this.code = code
    }
}

class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 412
        this.msg = msg || '激活码错误'
        this.errorCode = errorCode || 10001
    }
}


class SDKused extends HttpException{
    constructor(msg,errorCode){
        super()
        this.msg = msg || '激活码已被使用'
        this.errorCode = errorCode || 10002
        this.code = 412
        
    }
}

// class Forbbiden extends HttpException {
//     constructor(msg, errorCode) {
//         super()
//         this.msg = msg || '禁止访问'
//         this.errorCode = errorCode || 10006
//         this.code = 403
//     }
// }

class Success extends HttpException{
    constructor(msg, errorCode,lisence){
        super()
        this.msg = msg|| '激活成功'
        this.errorCode = errorCode || 10000
        this.code = 200
        this.lisence = lisence 
    }
}


module.exports = {
    HttpException,
    ParameterException,
    // Forbbiden,
    SDKused,
    Success
}