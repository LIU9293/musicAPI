const NeteaseRequest = require('../request/netease')
const Enc = require('../crypto')

const searchPlaylist = (key, limit, page, raw) => {
  const obj = {
    s: key,
    type: 1000,
    limit,
    offset: (page - 1) * limit,
  }
  const encData = Enc.aesRsaEncrypt(JSON.stringify(obj))
  if (!raw) {
    return new Promise((resolve, reject) => {
      NeteaseRequest('/cloudsearch/get/web?csrf_token=', encData)
        .then(res => {
          const playlists = res.result.playlists.map(item => ({
            id: item.id,
            cover: `${item.coverImgUrl}?param=250y250`,
            coverBig: `${item.coverImgUrl}?param=400y400`,
            coverSmall: `${item.coverImgUrl}?param=140y140`,
            name: item.name,
            author: {
              name: item.creator.nickname,
              id: item.creator.userId,
              // @important: no avatar here
              avatar: null,
            },
          }))
          resolve({
            success: true,
            total: res.result.playlistCount,
            playlists,
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

module.exports = searchPlaylist
