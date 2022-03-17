const errors = require('./errors')

const errHandle = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    if (err instanceof errors) {
      // 已知错误
      ctx.body = {
        msg: err.msg,
      }
      ctx.status = err.code
    } else {
      // 未知错误
      ctx.body = {
        msg: '服务器未知错误',
      }
      ctx.status = 500
    }
  }
}

module.exports = errHandle
