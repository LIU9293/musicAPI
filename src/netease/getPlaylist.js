const NeteaseRequest = require('../request/netease')
const Enc = require('../crypto')

const getPlaylist = (id, raw) => {
  const obj = {
    id,
    n: 1000,
    csrf_token: '',
  }
  const encData = Enc.aesRsaEncrypt(JSON.stringify(obj))
  if (raw) {
    return NeteaseRequest('/v3/playlist/detail', encData)
  }
  return new Promise((resolve, reject) => {
    NeteaseRequest('/v3/playlist/detail', encData)
      .then(res => {
        const songList = res.playlist.tracks.map((item, index) => ({
          id: item.id,
          name: item.name,
          artists: item.ar,
          needPay: item.fee > 0,
          offlineNow: res.privileges[index].st < 0,
          album: {
            id: item.al.id,
            cover: `${item.al.picUrl}?param=250y250`,
            coverBig: `${item.al.picUrl}?param=400y400`,
            coverSmall: `${item.al.picUrl}?param=140y140`,
            name: item.al.name,
          },
        }))
        resolve({
          success: true,
          name: res.playlist.name,
          id,
          cover: null,
          author: {
            id: res.playlist.creator.userId,
            name: res.playlist.creator.nickname,
            avatar: res.playlist.creator.avatarUrl,
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

module.exports = getPlaylist
