const NeteaseRequest = require('../request/netease')
const Enc = require('../crypto')

const searchSong = (key, limit, page, raw) => {
  const obj = {
    s: key,
    type: 1,
    limit,
    offset: (page - 1) * limit,
  }
  const encData = Enc.aesRsaEncrypt(JSON.stringify(obj))
  if (!raw) {
    return new Promise((resolve, reject) => {
      NeteaseRequest('/cloudsearch/get/web?csrf_token=', encData)
        .then(res => {
          let songList
          if (res.result.songCount === 0) {
            songList = []
          } else {
            songList = res.result.songs.map(item => ({
              album: {
                id: item.al.id,
                name: item.al.name,
                cover: `${item.al.picUrl}?param=250y250`,
                coverBig: `${item.al.picUrl}?param=400y400`,
                coverSmall: `${item.al.picUrl}?param=140y140`,
              },
              artists: item.ar,
              name: item.name,
              id: item.id,
              needPay: item.fee > 0,
            }))
          }
          resolve({
            success: true,
            total: res.result.songCount,
            songList,
          })
        })
        .catch(err =>
          reject({
            success: false,
            message: err.toString(),
          })
        )
    })
  }
  return NeteaseRequest('/cloudsearch/get/web?csrf_token=', encData)
}

module.exports = searchSong
