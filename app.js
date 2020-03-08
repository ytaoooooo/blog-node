const Koa = require('koa')
var cors = require('koa2-cors');
const app = new Koa()
const {InitManager} = require('./core/init')
const parser = require('koa-bodyparser')



app.use(parser())
app.use(cors());
InitManager.initCore(app)


app.listen(3000)


