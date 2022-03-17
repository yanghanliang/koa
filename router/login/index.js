const router = require('koa-router')() // 实例化
const response = require('../../config/response')
const { Token } = require('../../database/index')

router.post('/login', async ctx => {
  const query = `db.collection(\"user\").add({
    data: [
      {
        name: "张三",
        age: 18
      }
    ]
  })`

  new Token().handleDatabase(query)
  // new response(ctx, { msg: '请求成功' }).answer()
})

module.exports = router.routes()
