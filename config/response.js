class response {
  result = {
    code: 200,
    data: null,
    msg: 'success',
  }

  constructor(ctx, result) {
    this.ctx = ctx

    if (result?.data.errcode === 0) {
      this.result.data = result.data
      return
    }

    this.result = { ...this.result, ...result }
  }

  // 统一返回
  answer() {
    this.ctx.body = this.result
  }
}

module.exports = response
