const Koa = require('koa')
var cors = require('koa2-cors');
const app = new Koa()
const {InitManager} = require('./core/init')
const parser = require('koa-bodyparser')


app.use(cors());
app.use(parser())
InitManager.initCore(app)


app.listen(3001)

