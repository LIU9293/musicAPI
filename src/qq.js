// php api => https://github.com/metowolf/TencentMusicApi/blob/master/TencentMusicAPI.php
/* global fetch */
const querystring = require('querystring')
const S = require('string')
require('es6-promise').polyfill()
require('isomorphic-fetch')

const getSongNew = (mid, sizekey) =>
  new Promise((resolve, reject) => {
    const guid = Math.floor(Math.random() * 1000000000)
    fetch(
      `https://c.y.qq.com/base/fcgi-bin/fcg_musicexpress.fcg?json=3&guid=${guid.toString()}`
    )
      .then(res => res.text())
      .then(text => {
        let res = text.replace('jsonCallback(', '').trim()
        res = res.substr(0, text.length - 2)
        return Promise.resolve(JSON.parse(res))
      })
      .then(json => {
        const { key } = json
        let perfix = ''
        if (sizekey === 'size128') {
          perfix = 'M500'
        } else if (sizekey === 'size320') {
          perfix = 'M800'
        }
        const url = `http://dl.stream.qqmusic.qq.com/${perfix}${mid}.mp3?vkey=${key}&guid=${guid}&fromtag=30`
        resolve({
          success: true,
          url,
        })
      })
      .catch(err =>
        reject({
          success: false,
          message: err,
        })
      )
  })

const generateKey = mid => {
  const url = 'http://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg?'
  const query = {
    songmid: mid,
    format: 'json',
  }
  return new Promise((resolve, reject) => {
    fetch(`${url}${querystring.stringify(query)}`)
      .then(res => res.json())
      .then(d => {
        const data = d.data[0].file
        if (data.size_320mp3) {
          resolve('size320')
        } else if (data.size_128mp3) {
          resolve('size128')
        }
      })
      .catch(() =>
        reject({
          success: false,
          message: 'QQ - 歌曲需要付费或者ID错误!',
        })
      )
  })
}

const getSong = mid =>
  new Promise((resolve, reject) => {
    generateKey(mid)
      .then(size => getSongNew(mid, size))
      .then(data => resolve(data))
      .catch(err => reject(err))
  })

const searchSong = (key, limit, page, raw) => {
  const url = 'http://c.y.qq.com/soso/fcgi-bin/search_cp?'
  const query = {
    p: page,
    n: limit,
    w: key,
    aggr: 1,
    lossless: 1,
    cr: 1,
  }
  return new Promise((resolve, reject) => {
    fetch(`${url}${querystring.stringify(query)}`)
      .then(res => res.text())
      .then(text => {
        if (text.substr(0, 8) === 'callback') {
          const json = JSON.parse(
            text
              .replace('callback(', '')
              .substr(0, text.replace('callback(', '').length - 1)
          )
          if (!raw) {
            const songList = json.data.song.list.map(item => ({
              album: {
                id: item.albummid,
                cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albummid}.jpg`,
                coverBig: `https://y.gtimg.cn/music/photo_new/T002R500x500M000${item.albummid}.jpg`,
                coverSmall: `https://y.gtimg.cn/music/photo_new/T002R150x150M000${item.albummid}.jpg`,
                name: item.albumname,
              },
              artists: item.singer.map(i => ({ id: i.mid, name: i.name })),
              name: item.songname,
              id: item.songmid,
              needPay: item.pay.payplay > 0,
            }))
            const obj = {
              success: true,
              total: json.data.song.totalnum,
              songList,
            }
            resolve(obj)
          } else {
            resolve(json)
          }
        }
      })
      .catch(err =>
        reject({
          success: false,
          message: err,
        })
      )
  })
}

const searchPlaylist = (key, limit, page, raw) => {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/client_music_search_songlist?'
  const query = {
    remoteplace: 'txt.yqq.center',
    searchid: Math.floor(Math.random() * 96551345134513451).toString(),
    page_no: page - 1,
    num_per_page: limit,
    query: key,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq',
  }
  return new Promise((resolve, reject) => {
    fetch(`${url}${querystring.stringify(query)}`, {
      headers: {
        Referer: 'https://y.qq.com/portal/search.html',
        Host: 'c.y.qq.com',
      },
    })
      .then(res => res.json())
      .then(d => {
        if (raw) {
          resolve(d.data)
        } else {
          const json = d.data
          const playlists = json.list.map(item => {
            const originCover = item.imgurl.replace('http://', 'https://')
            return {
              id: item.dissid,
              cover: `${originCover.substr(0, originCover.length - 4)}/300`,
              coverBig: `${originCover.substr(0, originCover.length - 4)}/600`,
              coverSmall: `${originCover.substr(
                0,
                originCover.length - 4
              )}/150`,
              name: S(item.dissname)
                .decodeHTMLEntities()
                .stripTags().s,
              author: {
                name: item.creator.name,
                id: parseInt(item.creator.creator_uin, 10),
                avatar: item.creator.avatarUrl,
              },
            }
          })
          const obj = {
            success: true,
            total: json.sum,
            playlists,
          }
          resolve(obj)
        }
      })
      .catch(err =>
        reject({
          success: false,
          message: err,
        })
      )
  })
}

const searchAlbum = (key, limit, page, raw) => {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_cp?'
  const query = {
    remoteplace: 'txt.yqq.album',
    searchid: Math.floor(Math.random() * 96551345134513451).toString(),
    // 如果这里选1只搜索有无损的
    lossless: 0,
    p: page,
    n: limit,
    w: key,
    // 应该是某种type的意思，不太懂
    t: 8,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq',
  }
  return new Promise((resolve, reject) => {
    fetch(`${url}${querystring.stringify(query)}`, {
      headers: {
        Referer: 'https://y.qq.com/portal/search.html',
        Host: 'c.y.qq.com',
      },
    })
      .then(res => res.json())
      .then(d => {
        if (raw) {
          resolve(d.data)
        } else {
          const json = d.data.album
          const albumList = json.list.map(item => ({
            id: item.albumMID,
            cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albumMID}.jpg`,
            coverBig: `https://y.gtimg.cn/music/photo_new/T002R500x500M000${item.albumMID}.jpg`,
            coverSmall: `https://y.gtimg.cn/music/photo_new/T002R150x150M000${item.albumMID}.jpg`,
            name: item.albumName,
            artist: {
              name: item.singerName,
              id: item.singerMID,
            },
          }))
          const obj = {
            success: true,
            total: json.totalnum,
            albumList,
          }
          resolve(obj)
        }
      })
      .catch(err =>
        reject({
          success: false,
          err: err || 'problem in search qq album, try query with raw=true',
        })
      )
  })
}

const getAlbum = (mid, raw) => {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?'
  const query = {
    albummid: mid,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq',
  }
  return new Promise((resolve, reject) => {
    fetch(`${url}${querystring.stringify(query)}`, {
      headers: {
        Referer: 'https://y.qq.com/portal/search.html',
        Host: 'c.y.qq.com',
      },
    })
      .then(res => res.json())
      .then(d => {
        if (raw) {
          resolve(d)
        }
        const ab = d.data
        const songList = ab.list.map(item => ({
          id: item.songmid,
          name: item.songname,
          needPay: item.pay.payplay > 0,
          artists: item.singer.map(i => ({ id: i.mid, name: i.name })),
          album: {
            name: ab.name,
            id: ab.mid,
            cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${ab.mid}.jpg`,
            coverBig: `https://y.gtimg.cn/music/photo_new/T002R500x500M000${ab.mid}.jpg`,
            coverSmall: `https://y.gtimg.cn/music/photo_new/T002R150x150M000${ab.mid}.jpg`,
          },
        }))
        const obj = {
          success: true,
          name: ab.name,
          id: ab.mid,
          cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${ab.mid}.jpg`,
          coverBig: `https://y.gtimg.cn/music/photo_new/T002R500x500M000${ab.mid}.jpg`,
          coverSmall: `https://y.gtimg.cn/music/photo_new/T002R150x150M000${ab.mid}.jpg`,
          artist: {
            name: ab.singername,
            id: ab.singermid,
          },
          songList,
        }
        resolve(obj)
      })
      .catch(() =>
        reject({
          success: false,
          message:
            'no qq album found with current id, please try with raw=true !',
        })
      )
  })
}

const getPlaylist = (disstid, raw) => {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?'
  const query = {
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 1,
    disstid,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq',
  }
  return new Promise((resolve, reject) => {
    fetch(`${url}${querystring.stringify(query)}`, {
      headers: {
        Referer: 'https://y.qq.com/portal/search.html',
        Host: 'c.y.qq.com',
      },
    })
      .then(res => res.text())
      .then(text => {
        const jsonText = text.substr(13).substr(0, text.substr(13).length - 1)
        return Promise.resolve(JSON.parse(jsonText))
      })
      .then(pl => {
        if (raw) {
          resolve(pl)
        }
        const songList = pl.songlist.map(item => ({
          id: item.songmid,
          name: item.songname,
          artists: item.singer.map(i => ({ id: i.mid, name: i.name })),
          needPay: item.pay.payplay > 0,
          album: {
            id: item.albummid,
            cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albummid}.jpg`,
            coverBig: `https://y.gtimg.cn/music/photo_new/T002R500x500M000${item.albummid}.jpg`,
            coverSmall: `https://y.gtimg.cn/music/photo_new/T002R150x150M000${item.albummid}.jpg`,
            name: item.albumname,
          },
        }))
        const obj = {
          success: true,
          name: null,
          id: pl.disstid,
          cover: null,
          author: {
            id: null,
            name: null,
            avatar: null,
          },
          songList,
        }
        resolve(obj)
      })
      .catch(() =>
        reject({
          success: false,
          message:
            'your qq playlist id is not correct or data mapping is not correct, try query with raw=true',
        })
      )
  })
}

const getSuggestAlbums = (limit, raw) => {
  const url = 'https://c.y.qq.com/v8/fcg-bin/album_library?'
  const query = {
    page: 0,
    pagesize: limit,
    language: -1,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq',
    cmd: 'get_album_info',
    sort: 1,
    genre: 0,
    year: 1,
    pay: 0,
    type: -1,
    company: -1,
  }
  return new Promise((resolve, reject) => {
    fetch(`${url}${querystring.stringify(query)}`, {
      headers: {
        Referer: 'https://y.qq.com/portal/search.html',
        Host: 'c.y.qq.com',
      },
    })
      .then(res => res.json())
      .then(d => {
        if (raw) {
          resolve(d.data)
        } else {
          const { albumlist } = d.data
          const albumList = albumlist.map(item => ({
            id: item.album_mid,
            cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg`,
            coverBig: `https://y.gtimg.cn/music/photo_new/T002R500x500M000${item.album_mid}.jpg`,
            coverSmall: `https://y.gtimg.cn/music/photo_new/T002R150x150M000${item.album_mid}.jpg`,
            name: item.album_name,
            artist: {
              name: item.singer_name,
              id: item.singer_mid,
            },
          }))
          const obj = {
            success: true,
            albumList,
          }
          resolve(obj)
        }
      })
      .catch(err =>
        reject({
          success: false,
          err,
          message: 'problem in get qq suggest album, try query with raw=true',
        })
      )
  })
}

// 网页版搜索建议
const searchSuggestion = key => {
  const url = `https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?format=json&key=${key}&platform=yqq`
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err =>
        reject({
          success: false,
          message: err,
        })
      )
  })
}

module.exports = {
  searchSong,
  searchPlaylist,
  searchAlbum,
  getSong,
  getAlbum,
  getPlaylist,
  searchSuggestion,
  getSuggestAlbums,
}
