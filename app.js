const Koa = require('koa')
const app = new Koa()

const cors = require('koa2-cors')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')() // 实例化
const errHandle = require('./config/error/index')

app.use(cors())
app.use(json())
app.use(bodyParser())
app.use(errHandle)

const login = require('./router/login/index')
router.use('/api', login)

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
