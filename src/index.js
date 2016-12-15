'use strict'

const NeteaseAPI = require('./netease');
const XiamiAPI = require('./xiami');
const QQAPI = require('./qq');

const searchSong = (vendor, query) => {
  if(!query.key){
    return Promise.reject('No search key provided !');
  }
  let limit = query.limit || 10,
      page = query.page || 1,
      key = query.key;
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.searchSong(key, limit, page);
    case 'qq':
      return QQAPI.searchSong(key, limit, page);
    case 'netease':
      return NeteaseAPI.searchSong(key, limit, page);
    default:
      return Promise.reject('the vendor is invalid !')
  }
}

const searchAlbum = (vendor, query) => {
  if(!query.key){
    return Promise.reject('No search key provided !');
  }
  let limit = query.limit || 10,
      page = query.page || 1,
      key = query.key;
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.searchAlbum(key, limit, page);
    case 'qq':
      return QQAPI.searchAlbum(key, limit, page);
    case 'netease':
      return NeteaseAPI.searchAlbum(key, limit, page);
    default:
      return Promise.reject('the vendor is invalid !')
  }
}

const searchPlaylist = (vendor, query) => {
  if(!query.key){
    return Promise.reject('No search key provided !');
  }
  let limit = query.limit || 10,
      page = query.page || 1,
      key = query.key;
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.searchPlaylist(key, limit, page);
    case 'qq':
      return QQAPI.searchPlaylist(key, limit, page);
    case 'netease':
      return NeteaseAPI.searchPlaylist(key, limit, page);
    default:
      return Promise.reject('the vendor is invalid !')
  }
}

const getSong = (vendor, id) => {
  if(!id){
    return Promise.reject('No id provided !');
  }
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.getSong(key, limit, page);
    case 'qq':
      return QQAPI.getSong(key, limit, page);
    case 'netease':
      return NeteaseAPI.getSong(key, limit, page);
    default:
      return Promise.reject('the vendor is invalid !')
  }
}

const getAlbum = (vendor, id) => {
  if(!id){
    return Promise.reject('No id provided !');
  }
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.getAlbum(key, limit, page);
    case 'qq':
      return QQAPI.getAlbum(key, limit, page);
    case 'netease':
      return NeteaseAPI.getAlbum(key, limit, page);
    default:
      return Promise.reject('the vendor is invalid !')
  }
}

const getPlaylist = (vendor, id) => {
  if(!id){
    return Promise.reject('No id provided !');
  }
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.getPlaylist(key, limit, page);
    case 'qq':
      return QQAPI.getPlaylist(key, limit, page);
    case 'netease':
      return NeteaseAPI.getPlaylist(key, limit, page);
    default:
      return Promise.reject('the vendor is invalid !')
  }
}

module.exports = {
  searchSong: searchSong,
  searchAlbum: searchAlbum,
  searchPlaylist: searchPlaylist,
  getSong: getSong,
  getAlbum: getAlbum,
  getPlaylist: getPlaylist
}
