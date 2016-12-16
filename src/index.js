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
      key = query.key,
      raw = query.raw || null;
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.searchSong(key, limit, page, raw);
    case 'qq':
      return QQAPI.searchSong(key, limit, page, raw);
    case 'netease':
      return NeteaseAPI.searchSong(key, limit, page, raw);
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
      key = query.key,
      raw = query.raw || null;
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.searchAlbum(key, limit, page, raw);
    case 'qq':
      return QQAPI.searchAlbum(key, limit, page, raw);
    case 'netease':
      return NeteaseAPI.searchAlbum(key, limit, page, raw);
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
      key = query.key,
      raw = query.raw || null;
  switch (vendor) {
    case 'xiami':
      return XiamiAPI.searchPlaylist(key, limit, page, raw);
    case 'qq':
      return QQAPI.searchPlaylist(key, limit, page, raw);
    case 'netease':
      return NeteaseAPI.searchPlaylist(key, limit, page, raw);
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
      return XiamiAPI.getSong(id);
    case 'qq':
      return QQAPI.getSong(id);
    case 'netease':
      return NeteaseAPI.getSong(id);
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
      return XiamiAPI.getAlbum(id);
    case 'qq':
      return QQAPI.getAlbum(id);
    case 'netease':
      return NeteaseAPI.getAlbum(id);
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
      return XiamiAPI.getPlaylist(id);
    case 'qq':
      return QQAPI.getPlaylist(id);
    case 'netease':
      return NeteaseAPI.getPlaylist(id);
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
