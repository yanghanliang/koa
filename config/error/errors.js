class Errors extends Error {
  constructor(err, code, msg) {
    super()
    this.err = err
    this.code = code
    msg && (this.msg = msg)
  }
}

module.exports = Errors
