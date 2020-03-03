const Koa = require('koa')

const app = new Koa()
const {InitManager} = require('./core/init')
const parser = require('koa-bodyparser')



app.use(parser())
InitManager.initCore(app)


app.listen(3000)