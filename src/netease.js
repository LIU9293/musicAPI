'use strict'
const Enc = require('./crypto');
const querystring = require('querystring');
const NETEASE_API_URL = 'http://music.163.com/weapi';
const fetch = require('node-fetch');

const NeteaseRequest = (url, query) => {
  let opts = {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Origin': 'http://music.163.com',
      'Referer': 'http://music.163.com',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    credentials: 'include'
  };
  opts.body = querystring.stringify(query);
  return new Promise((resolve, reject) => {
    fetch(NETEASE_API_URL + url, opts)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err))
  });
}

const NeteaseRequest2 = (url, query, type) => {
  let NETEASE_API_URL = "http://music.163.com";
  let opts = {
    mode: 'no-cors',
    method: type,
    headers: {
      'Origin': 'http://music.163.com',
      'Referer': 'http://music.163.com',
      'Content-Type': 'application/x-www-form-urlencoded',
      "Cookie": '__remember_me=true; MUSIC_U=5f9d910d66cb2440037d1c68e6972ebb9f15308b56bfeaa4545d34fbabf71e0f36b9357ab7f474595690d369e01fbb9741049cea1c6bb9b6; __csrf=8ea789fbbf78b50e6b64b5ebbb786176; os=uwp; osver=10.0.10586.318; appver=1.2.1; deviceId=0e4f13d2d2ccbbf31806327bd4724043'
    },
    credentials: 'include'
  };
  opts.body = querystring.stringify(query);
  return new Promise((resolve, reject) => {
    fetch(NETEASE_API_URL + url, opts)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err))
  });
}

/*
 *  查询
 *  type - 搜索单曲(1)，歌手(100)，专辑(10)，歌单(1000)，用户(1002)
 */

const searchSong = (key, limit, page, raw) => {
  let obj = {
    s: key,
    type: 1,
    limit: limit,
    offset: (page - 1) * limit
  };
  let encData = Enc.aesRsaEncrypt(JSON.stringify(obj));
  if (!raw) {
    return new Promise((resolve, reject) => {
      NeteaseRequest(`/cloudsearch/get/web?csrf_token=`, encData)
        .then(res => {
          let songList;
          if (res.result.songCount === 0) {
            songList = [];
          } else {
            songList = res.result.songs.map(item => {
              return {
                album: {
                  id: item.al.id,
                  name: item.al.name,
                  cover: item.al.picUrl.replace('http://', 'https://') + '?param=250y250',
                  coverBig: item.al.picUrl.replace('http://', 'https://') + '?param=400y400',
                  coverSmall: item.al.picUrl.replace('http://', 'https://') + '?param=140y140',
                },
                // [{id: , name: }]
                artists: item.ar,
                name: item.name,
                id: item.id,
                needPay: item.fee > 0 ? true : false,
              };
            });
          }
          let obj = {
            success: true,
            total: res.result.songCount,
            songList: songList
          };
          resolve(obj);
        })
        .catch(err => reject({
          success: false,
          message: err
        }));
    });
  }
  return NeteaseRequest(`/cloudsearch/get/web?csrf_token=`, encData);
}

const searchPlaylist = (key, limit, page, raw) => {
  let obj = {
    s: key,
    type: 1000,
    limit: limit,
    offset: (page - 1) * limit
  };
  let encData = Enc.aesRsaEncrypt(JSON.stringify(obj));
  if (!raw) {
    return new Promise((resolve, reject) => {
      NeteaseRequest(`/cloudsearch/get/web?csrf_token=`, encData)
        .then(res => {
          let playlists = res.result.playlists.map(item => {
            return {
              id: item.id,
              cover: item.coverImgUrl.replace('http://', 'https://') + '?param=250y250',
              coverBig: item.coverImgUrl.replace('http://', 'https://') + '?param=400y400',
              coverSmall: item.coverImgUrl.replace('http://', 'https://') + '?param=140y140',
              name: item.name,
              author: {
                name: item.creator.nickname,
                id: item.creator.userId,
                // @important: no avatar here
                avatar: null
              },
            }
          });
          let obj = {
            success: true,
            total: res.result.playlistCount,
            playlists: playlists
          }
          resolve(obj);
        })
        .catch(err => reject({
          success: false,
          message: err
        }))
    });
  }
  return NeteaseRequest(`/cloudsearch/get/web?csrf_token=`, encData);
}

const searchAlbum = (key, limit, page, raw) => {
  let obj = {
    s: key,
    type: 10,
    limit: limit,
    offset: (page - 1) * limit
  };
  let encData = Enc.aesRsaEncrypt(JSON.stringify(obj));
  if (!raw) {
    return new Promise((resolve, reject) => {
      NeteaseRequest(`/cloudsearch/get/web?csrf_token=`, encData)
        .then(res => {
          let albumList = res.result.albums.map(item => {
            return {
              id: item.id,
              cover: item.picUrl.replace('http://', 'https://') + '?param=250y250',
              coverBig: item.picUrl.replace('http://', 'https://') + '?param=400y400',
              coverSmall: item.picUrl.replace('http://', 'https://') + '?param=140y140',
              name: item.name,
              artist: {
                name: item.artist.name,
                id: item.artist.id
              },
            }
          });
          let obj = {
            success: true,
            total: res.result.albumCount,
            albumList: albumList
          };
          resolve(obj)
        })
        .catch(err => reject({
          success: false,
          message: err
        }))
    });
  }
  return NeteaseRequest(`/cloudsearch/get/web?csrf_token=`, encData);
}

const getSong = (id, raw) => {
  id = id.split('.').map(i => parseInt(i));
  let obj = {
    'ids': id,
    'br': 999000,
    'csrf_token': ''
  };
  let encData = Enc.aesRsaEncrypt(JSON.stringify(obj));
  if (raw) {
    return NeteaseRequest(`/song/enhance/player/url?csrf_token=`, encData);
  }
  return new Promise((resolve, reject) => {
    NeteaseRequest(`/song/enhance/player/url?csrf_token=`, encData)
      .then(res => {
        // if(!res.data[0].url){
        //   reject({
        //     success: false,
        //     message: '网易 - 歌曲需要付费或者ID错误!'
        //   })
        // }
        let resData = res.data[0];
        if (resData.code == 200) {
          resolve({
            success: true,
            url: res.data[0].url
          })
        }
        _getPayUrl(id)
          .then(url => resolve({
            success: true,
            url: url
          }))
          .catch(err => reject({
            success: false,
            message: 'ID错误或api变更!'
          }))
      })
      .catch(err => reject({
        success: false,
        message: '网易 - 歌曲需要付费或者ID错误!'
      }))
  });
}

const getAlbum = (id, raw) => {
  let obj = {
    'csrf_token': ''
  };
  let encData = Enc.aesRsaEncrypt(JSON.stringify(obj));
  if (raw) {
    return NeteaseRequest(`/v1/album/${id}?csrf_token=`, encData);
  }
  return new Promise((resolve, reject) => {
    NeteaseRequest(`/v1/album/${id}?csrf_token=`, encData)
      .then(res => {
        let ab = res.songs;
        let songList = ab.map(item => {
          return {
            id: item.id,
            name: item.name,
            needPay: item.fee > 0 ? true : false,
            offlineNow: item.privilege.st < 0 ? true : false,
            artists: item.ar,
            album: {
              id: res.album.id,
              name: res.album.name,
              cover: res.album.picUrl.replace('http://', 'https://') + '?param=250y250',
              coverBig: res.album.picUrl.replace('http://', 'https://') + '?param=400y400',
              coverSmall: res.album.picUrl.replace('http://', 'https://') + '?param=140y140',
            }
          }
        });
        let obj = {
          success: true,
          name: res.album.name,
          id: res.album.id,
          cover: res.album.picUrl.replace('http://', 'https://') + '?param=250y250',
          coverBig: res.album.picUrl.replace('http://', 'https://') + '?param=400y400',
          coverSmall: res.album.picUrl.replace('http://', 'https://') + '?param=140y140',
          needPay: songList[0].needPay,
          offlineNow: songList[0].offlineNow,
          artist: {
            name: res.album.artist.name,
            id: res.album.artist.id
          },
          songList: songList
        };
        resolve(obj);
      })
      .catch(err => reject({
        success: false,
        message: err
      }))
  });
}

const getPlaylist = (id, raw) => {
  let obj = {
    id,
    n: 1000,
    'csrf_token': ''
  };
  let encData = Enc.aesRsaEncrypt(JSON.stringify(obj));
  if (raw) {
    return NeteaseRequest(`/v3/playlist/detail?csrf_token=`, encData);
  }
  return new Promise((resolve, reject) => {
    NeteaseRequest(`/v3/playlist/detail?csrf_token=`, encData)
      .then(res => {
        try {
          let songList = res.playlist.tracks.map((item, index) => {
            return {
              id: item.id,
              name: item.name,
              artists: item.ar,
              needPay: item.fee > 0 ? true : false,
              offlineNow: res.privileges[index].st < 0 ? true : false,
              album: {
                id: item.al.id,
                cover: item.al.picUrl.replace('http://', 'https://') + '?param=250y250',
                coverBig: item.al.picUrl.replace('http://', 'https://') + '?param=400y400',
                coverSmall: item.al.picUrl.replace('http://', 'https://') + '?param=140y140',
                name: item.al.name
              }
            };
          });
          let obj = {
            success: true,
            name: res.playlist.name,
            id: id,
            cover: null,
            author: {
              id: res.playlist.creator.userId,
              name: res.playlist.creator.nickname,
              avatar: res.playlist.creator.avatarUrl
            },
            songList: songList
          };
          resolve(obj);
        } catch (e) {
          console.log(e);
          reject({
            success: false,
            message: 'your netease playlist id is not correct or data mapping is not correct, try query with raw=true'
          })
        }
      })
      .catch(err => reject({
        success: false,
        message: err
      }))
  });
}

const _getPayUrl = (id, quality) => {
  return new Promise((resolve, reject) => {
    _getASongDetail(id)
      .then(detail => {
        let album = detail.songs[0].al;
        NeteaseRequest2("/api/album/" + album.id, {}, "GET")
          .then(res => {
            let mp3Url = "";
            let songs=[];
            let allSongs = res.album.songs;
            allSongs.forEach(song=>{
              if(song.id==id){
                songs.push(song);
              }
            })
            songs.forEach(song => {
              switch(quality){
                case "320000":
                  let dfsId=!!song.hMusic?song.hMusic.dfsId:!!song.mMusic?song.mMusic.dfsId:"";
                  if(!!dfsId){
                    resolve(_getUrlWithdfsId(dfsId));
                  }else{
                    resolve(song.mp3Url);
                  }
                  break;
                case "192000":{
                  mp3Url=!!song.mMusic?_getUrlWithdfsId(song.mMusic.dfsId):song.mp3Url;
                  resolve(mp3Url);
                }
                break;
                default:
                  resolve(song.mp3Url);
              }
            })
            resolve(mp3Url)
          })
      })
      .catch(err=>reject(err))
  })
}

const _getASongDetail = (id) => {
  let obj = {
    'c': '[{"id":"' + id + '"}]'
  }
  return new Promise((resolve, reject) => {
    NeteaseRequest2("/api/v3/song/detail",obj,"POST")
      .then(detail=>resolve(detail))
      .catch(err=>reject(err))
  })
}

const _getUrlWithdfsId = (dfsId) => {
  var encryptPath = _encryptId(dfsId);
  var url = "http://m2.music.126.net/" + encryptPath + "/" + dfsId + ".mp3";
  return url;
}

const _encryptId = (dfsId) => {
  var secrect = "3go8&$8*3*3h0k(2)2";
  var buf1 = new Buffer(secrect, "ascii");
  var buf2 = new Buffer(dfsId.toString(), "ascii");
  for (let i = 0; i < buf2.byteLength; i++) {
    buf2[i] = buf2[i] ^ buf1[i % buf1.byteLength];
  }
  var res = crypto.createHash("md5").update(buf2).digest("base64");
  res = res.replace('/', '_').replace('+', '-');
  return res;
}

module.exports = {
  searchSong: searchSong,
  searchPlaylist: searchPlaylist,
  searchAlbum: searchAlbum,
  getSong: getSong,
  getAlbum: getAlbum,
  getPlaylist: getPlaylist
};
