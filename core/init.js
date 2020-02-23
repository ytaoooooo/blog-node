const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManager{
    static initCore(app){
        InitManager.app = app
        InitManager.initLoadRouter()
        // InitManager.initConfig()
        // InitManager.initException()
    }

    static initLoadRouter(){
        const apiDirectory = process.cwd() + "/app/api"
        requireDirectory(module, apiDirectory,{visit: whenLoadRouter})
        function whenLoadRouter(obj){
            if (obj instanceof Router){
                InitManager.app.use(obj.routes())
            }
        }
    }

    // static initConfig(){
    //     const path = process.cwd() + "/config/config.js"
    //     const config = require(path)
    //     global.config = config
    // }

    // static initException(){
    //     const path = process.cwd() + "/core/http-exception.js"
    //     const error = require(path)
    //     global.errs = error
    // }

    
}


module.exports = {
    InitManager
}