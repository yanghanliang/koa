const axios = require('axios')
const qs = require('querystring') // 自带模块
const errors = require('../config/error/errors')

// 必须先获取 token 才有权限对云数据库进行增删改查
let params = qs.stringify({
  grant_type: 'client_credential',
  appid: 'wx995b128ed851ae42',
  secret: 'f13be535d0a36820904246f332e85c1d',
})

let url = `https://api.weixin.qq.com/cgi-bin/token?${params}`
let addUrl = 'https://api.weixin.qq.com/tcb/databaseadd?access_token='

class Token {
  async getToken() {
    try {
      let res = await axios.get(url)

      if (res.status === 200 && res.data.access_token) {
        return res.data.access_token
      }

      throw res.data
    } catch (err) {
      console.log(err, 'err')
      throw new errors(err, 599, '获取token失败')
    }
  }

  async handleDatabase(query) {
    try {
      const token = await this.getToken()
      console.log(token, 'token')
      const res = await axios.post(`https://api.weixin.qq.com/tcb/databaseadd?access_token=${token}`, {
        env: "dream-3gv985rd98fc9f0e",
        query,
      })

      if (res?.data.errcode === 0) {
        return res.data
      }

      throw query
    } catch (err) {
      throw new errors(err, 599, '数据操作失败')
    }
  }
}


module.exports = {
  Token
}
