const router = require('koa-router')() // 实例化

router.post('/login', async ctx => {
  console.log('login')
})

module.exports = router.routes()
