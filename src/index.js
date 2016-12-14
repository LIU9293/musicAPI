const NeteaseAPI = require('./netease');
const XiamiAPI = require('./xiami');
const QQAPI = require('./qq');

const search = (type, vendor, query) => {
  const { key, limit = 10, page = 1 } = query;
  if(!key){
    return Promise.reject('No Search Key !');
  };
  switch (type) {
    case 'song':
      switch (vendor) {
        case 'xiami':
          return XiamiAPI.searchSong(key, limit, page);
          break;
        case 'netease':
          return NeteaseAPI.searchSong(key, limit, page);
          break;
        case 'qq':
          return QQAPI.searchSong(key, limit, page);
          break;
        default:
          return Promise.reject('No such vendor !');
          break;
      }
      break;
    case 'album':
      switch (vendor) {
        case 'xiami':
          return XiamiAPI.searchAlbum(key, limit, page);
          break;
        case 'netease':
          return NeteaseAPI.searchAlbum(key, limit, page);
          break;
        case 'qq':
          return QQAPI.searchAlbum(key, limit, page);
          break;
        default:
          return Promise.reject('No such vendor !');
          break;
      }
      break;
    case 'playlist':
      switch (vendor) {
        case 'xiami':
          return XiamiAPI.searchPlaylist(key, limit, page);
          break;
        case 'netease':
          return NeteaseAPI.searchPlaylist(key, limit, page);
          break;
        case 'qq':
          return QQAPI.searchPlaylist(key, limit, page);
          break;
        default:
          return Promise.reject('No such vendor !');
          break;
      }
      break;
    default:
      return Promise.reject('No such search type !');
      break;
  }
}

const get = (type, vendor, id) => {
  switch (type) {
    case 'song':
      switch (vendor) {
        case 'xiami':
          return XiamiAPI.getSong(id);
          break;
        case 'netease':
          return NeteaseAPI.getSong(id);
          break;
        case 'qq':
          return QQAPI.getSong(id);
          break;
        default:
          return Promise.reject('No such vendor !');
          break;
      }
      break;
    case 'album':
      switch (vendor) {
        case 'xiami':
          return XiamiAPI.getAlbumDetail(id);
          break;
        case 'netease':
          return NeteaseAPI.getAlbumDetail(id);
          break;
        case 'qq':
          return QQAPI.getAlbumDetail(id);
          break;
        default:
          return Promise.reject('No such vendor !');
          break;
      }
      break;
    case 'playlist':
      switch (vendor) {
        case 'xiami':
          return XiamiAPI.getPlaylistDetail(id);
          break;
        case 'netease':
          return NeteaseAPI.getPlaylistDetail(id);
          break;
        case 'qq':
          return QQAPI.getPlaylistDetail(id);
          break;
        default:
          return Promise.reject('No such vendor !');
          break;
      }
      break;
    default:
      return Promise.reject('No such search type !');
      break;
  }
}

module.exports = {
  search,
  get,
}
