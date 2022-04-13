const router = require('koa-router')() // 实例化
const response = require('../../config/response')
const { Token } = require('../../database/index')

router.post('/login', async ctx => {
  const name = '李四'
  const query = `db.collection('user').add({
    data: [
      {
        name: '${name}',
        age: 18
      }
    ]
  })`

  const res = new Token().handleDatabase(query)
  new response(ctx, res).answer()
})

module.exports = router.routes()
