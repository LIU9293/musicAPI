'use strict'
const NeteaseAPI = require('./netease');
const XiamiAPI = require('./xiami');
const QQAPI = require('./qq');

const searchSong = (vendor, query) => {
  if(!query.key){
    return Promise.reject({
      success: false,
      message: 'No search key provided !'
    });
  }
  let limit = query.limit || 10,
      page = query.page || 1,
      key = query.key,
      raw = query.raw || null;
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.searchSong(key, limit, page, raw);
    case 'qq':
      return QQAPI.searchSong(key, limit, page, raw);
    case 'netease':
      return NeteaseAPI.searchSong(key, limit, page, raw);
    case 'all':
      return new Promise((resolve, reject) => {
        Promise.all([
          XiamiAPI.searchSong(key, limit, page, raw),
          QQAPI.searchSong(key, limit, page, raw),
          NeteaseAPI.searchSong(key, limit, page, raw)
        ])
          .then(res => {
            resolve({
              xiami: res[0],
              qq: res[1],
              netease: res[2]
            });
          })
          .catch(err => reject(err))
      })
    default:
      return Promise.reject({
        success: false,
        message: 'when search songs, the vendor provided is invalid !'
      })
  }
}

const searchAlbum = (vendor, query) => {
  if(!query.key){
    return Promise.reject({
      success: false,
      message: 'No search key provided !'
    });
  }
  let limit = query.limit || 10,
      page = query.page || 1,
      key = query.key,
      raw = query.raw || null;
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.searchAlbum(key, limit, page, raw);
    case 'qq':
      return QQAPI.searchAlbum(key, limit, page, raw);
    case 'netease':
      return NeteaseAPI.searchAlbum(key, limit, page, raw);
    case 'all':
      return new Promise((resolve, reject) => {
        Promise.all([
          XiamiAPI.searchAlbum(key, limit, page, raw),
          QQAPI.searchAlbum(key, limit, page, raw),
          NeteaseAPI.searchAlbum(key, limit, page, raw)
        ])
          .then(res => {
            resolve({
              xiami: res[0],
              qq: res[1],
              netease: res[2]
            });
          })
          .catch(err => reject(err))
      });
    default:
      return Promise.reject({
        success: false,
        message: 'when search album, the vendor provided is invalid !'
      })
  }
}

const searchPlaylist = (vendor, query) => {
  if(!query.key){
    return Promise.reject({
      success: false,
      message: 'No search key provided !'
    });
  }
  let limit = query.limit || 10,
      page = query.page || 1,
      key = query.key,
      raw = query.raw || null;
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.searchPlaylist(key, limit, page, raw);
    case 'qq':
      return QQAPI.searchPlaylist(key, limit, page, raw);
    case 'netease':
      return NeteaseAPI.searchPlaylist(key, limit, page, raw);
    case 'all':
      return new Promise((resolve, reject) => {
        Promise.all([
          XiamiAPI.searchPlaylist(key, limit, page, raw),
          QQAPI.searchPlaylist(key, limit, page, raw),
          NeteaseAPI.searchPlaylist(key, limit, page, raw)
        ])
          .then(res => {
            resolve({
              xiami: res[0],
              qq: res[1],
              netease: res[2]
            });
          })
          .catch(err => reject(err))
      });
    default:
      return Promise.reject({
        success: false,
        message: 'when search playlist, the vendor provided is invalid !'
      })
  }
}

const getSong = (vendor, query) => {
  if(!query.id){
    return Promise.reject({
      success: false,
      message: 'No song id provided !'
    });
  }
  let raw = query.raw,
      br = query.br || 999000,
      id = query.id;
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.getSong(id, raw);
    case 'qq':
      return QQAPI.getSong(id, raw);
    case 'netease':
      return NeteaseAPI.getSong(id, raw, br);
    default:
      return Promise.reject('the vendor is invalid !')
  }
}

const getAlbum = (vendor, query) => {
  if(!query.id){
    return Promise.reject({
      success: false,
      message: 'No album id provided !'
    });
  }
  let raw = query.raw,
      id = query.id;
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.getAlbum(id, raw);
    case 'qq':
      return QQAPI.getAlbum(id, raw);
    case 'netease':
      return NeteaseAPI.getAlbum(id, raw);
    default:
      return Promise.reject('the vendor is invalid !')
  }
}

const getPlaylist = (vendor, query) => {
  if(!query.id){
    return Promise.reject({
      success: false,
      message: 'No playlist id provided !'
    });
  }
  let raw = query.raw,
      id = query.id;
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.getPlaylist(id, raw);
    case 'qq':
      return QQAPI.getPlaylist(id, raw);
    case 'netease':
      return NeteaseAPI.getPlaylist(id, raw);
    default:
      return Promise.reject('the vendor is invalid !')
  }
}

const getDailySuggest = () => {
  return XiamiAPI.getDailySuggest(10);
}

const searchSuggestion = (key) => {
  return QQAPI.searchSuggestion(key);
}

const musicAPI = {
  searchSong: searchSong,
  searchAlbum: searchAlbum,
  searchPlaylist: searchPlaylist,
  getSong: getSong,
  getAlbum: getAlbum,
  getPlaylist: getPlaylist,
  getDailySuggest: getDailySuggest,
  searchSuggestion: searchSuggestion
}

module.exports = musicAPI
