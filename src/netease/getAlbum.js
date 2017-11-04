const NeteaseRequest = require('../request/netease')
const Enc = require('../crypto')

const getAlbum = (id, raw) => {
  const obj = {
    csrf_token: '',
  }
  const encData = Enc.aesRsaEncrypt(JSON.stringify(obj))
  if (raw) {
    return NeteaseRequest(`/v1/album/${id}`, encData)
  }
  return new Promise((resolve, reject) => {
    NeteaseRequest(`/v1/album/${id}`, encData)
      .then(res => {
        const ab = res.songs
        const songList = ab.map(item => ({
          id: item.id,
          name: item.name,
          needPay: item.fee > 0,
          offlineNow: item.privilege.st < 0,
          artists: item.ar,
          album: {
            id: res.album.id,
            name: res.album.name,
            cover: `${res.album.picUrl}?param=250y250`,
            coverBig: `${res.album.picUrl}?param=400y400`,
            coverSmall: `${res.album.picUrl}?param=140y140`,
          },
        }))
        resolve({
          success: true,
          name: res.album.name,
          id: res.album.id,
          cover: `${res.album.picUrl}?param=250y250`,
          coverBig: `${res.album.picUrl}?param=400y400`,
          coverSmall: `${res.album.picUrl}?param=140y140`,
          needPay: songList[0].needPay,
          offlineNow: songList[0].offlineNow,
          artist: {
            name: res.album.artist.name,
            id: res.album.artist.id,
          },
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

module.exports = getAlbum
