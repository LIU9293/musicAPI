const NeteaseRequest = require('../request/netease')
const Enc = require('../crypto')

const searchAlbum = (key, limit, page, raw) => {
  const obj = {
    s: key,
    type: 10,
    limit,
    offset: (page - 1) * limit,
  }
  const encData = Enc.aesRsaEncrypt(JSON.stringify(obj))
  if (!raw) {
    return new Promise((resolve, reject) => {
      NeteaseRequest('/cloudsearch/get/web?csrf_token=', encData)
        .then(res => {
          const albumList = res.result.albums.map(item => ({
            id: item.id,
            cover: `${item.picUrl}?param=250y250`,
            coverBig: `${item.picUrl}?param=400y400`,
            coverSmall: `${item.picUrl}?param=140y140`,
            name: item.name,
            artist: {
              name: item.artist.name,
              id: item.artist.id,
            },
          }))
          resolve({
            success: true,
            total: res.result.albumCount,
            albumList,
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

module.exports = searchAlbum
