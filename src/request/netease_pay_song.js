const NeteaseRequest2 = (url, query, type) => {
  const NETEASE_API_URL = 'http://music.163.com'
  const opts = {
    mode: 'no-cors',
    method: type,
    headers: {
      Origin: 'http://music.163.com',
      Referer: 'http://music.163.com',
      'Content-Type': 'application/x-www-form-urlencoded',
      Cookie:
        '__remember_me=true; MUSIC_U=5f9d910d66cb2440037d1c68e6972ebb9f15308b56bfeaa4545d34fbabf71e0f36b9357ab7f474595690d369e01fbb9741049cea1c6bb9b6; __csrf=8ea789fbbf78b50e6b64b5ebbb786176; os=uwp; osver=10.0.10586.318; appver=1.2.1; deviceId=0e4f13d2d2ccbbf31806327bd4724043',
    },
    credentials: 'include',
  }
  opts.body = querystring.stringify(query)
  return new Promise((resolve, reject) => {
    fetch(NETEASE_API_URL + url, opts)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err))
  })
}

const _getASongDetail = id => {
  const obj = {
    c: `[{"id":"${id}"}]`,
  }
  return new Promise((resolve, reject) => {
    NeteaseRequest2('/api/v3/song/detail', obj, 'POST')
      .then(detail => resolve(detail))
      .catch(err => reject(err))
  })
}

const _getUrlWithdfsId = dfsId => {
  const encryptPath = _encryptId(dfsId)
  const url = `http://m2.music.126.net/${encryptPath}/${dfsId}.mp3`
  return url
}

const _encryptId = dfsId => {
  const secrect = '3go8&$8*3*3h0k(2)2'
  const buf1 = new Buffer(secrect, 'ascii')
  const buf2 = new Buffer(dfsId.toString(), 'ascii')
  for (let i = 0; i < buf2.byteLength; i++) {
    buf2[i] = buf2[i] ^ buf1[i % buf1.byteLength]
  }
  let res = crypto
    .createHash('md5')
    .update(buf2)
    .digest('base64')
  res = res.replace('/', '_').replace('+', '-')
  return res
}

const _getPayUrl = (id, quality) =>
  new Promise((resolve, reject) => {
    _getASongDetail(id)
      .then(detail => {
        const album = detail.songs[0].al
        NeteaseRequest2(`/api/album/${album.id}`, {}, 'GET').then(res => {
          let mp3Url = ''
          const songs = []
          const allSongs = res.album.songs
          allSongs.forEach(song => {
            if (song.id == id) {
              songs.push(song)
            }
          })
          songs.forEach(song => {
            switch (quality) {
              case '320000':
                const dfsId = song.hMusic
                  ? song.hMusic.dfsId
                  : song.mMusic ? song.mMusic.dfsId : ''
                if (dfsId) {
                  resolve(_getUrlWithdfsId(dfsId))
                } else {
                  resolve(song.mp3Url)
                }
                break
              case '192000':
                {
                  mp3Url = song.mMusic
                    ? _getUrlWithdfsId(song.mMusic.dfsId)
                    : song.mp3Url
                  resolve(mp3Url)
                }
                break
              default:
                resolve(song.mp3Url)
            }
          })
          resolve(mp3Url)
        })
      })
      .catch(err => reject(err))
  })

module.exports = _getPayUrl
