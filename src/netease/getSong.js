const NeteaseRequest = require('../request/netease')
const Enc = require('../crypto')
const GetPayUrl = require('../request/netease_pay_song')

const getSong = (id, raw, br) => {
  const obj = {
    ids: [id],
    br: br || 999000,
    csrf_token: '',
  }
  const encData = Enc.aesRsaEncrypt(JSON.stringify(obj))
  if (raw) {
    return NeteaseRequest('/song/enhance/player/url', encData)
  }
  return new Promise((resolve, reject) => {
    NeteaseRequest('/song/enhance/player/url', encData)
      .then(res => {
        if (!res.data[0].url && res.data[0].code < 0) {
          throw new Error('下架')
        } else if (!res.data[0].url) {
          GetPayUrl(id)
            .then(url =>
              resolve({
                success: true,
                url,
              })
            )
            .catch(() =>
              reject({
                success: false,
                message: '网易 - 没有版权或者ID错误!',
              })
            )
        }
        resolve({
          success: true,
          url: res.data[0].url,
        })
      })
      .catch(() =>
        reject({
          success: false,
          message: '网易 - 没有版权或者ID错误!',
        })
      )
  })
}

module.exports = getSong
