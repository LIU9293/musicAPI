'use strict'
/*
 * php api => https://github.com/metowolf/TencentMusicApi/blob/master/TencentMusicAPI.php
 */
const request = require('request');
const querystring = require('querystring');
const origin = 'http://y.qq.com/';
const S = require('string');

const header = {
  Origin: origin,
  Referer: origin,
}

const getSongNew = (mid, sizekey, sizeID) => {
  return new Promise((resolve, reject) => {
    let guid = Math.floor(Math.random()*1000000000);
    request(`https://c.y.qq.com/base/fcgi-bin/fcg_musicexpress.fcg?json=3&guid=${guid.toString()}`, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        body = body.replace('jsonCallback(', '').trim();
        body = body.substr(0, body.length - 2);
        let json = JSON.parse(body);
        let key = json.key;
        let perfix = '';
        if(sizekey === 'size128'){
          perfix = 'M500';
        } else if(sizekey === 'size320'){
          perfix = 'M800';
        }
        let uri = `http://dl.stream.qqmusic.qq.com/${perfix}${mid}.mp3?vkey=${key}&guid=${guid}&fromtag=30`;
        resolve(uri)
      } else {
        reject(err);
      }
    })
  });
}

const getSong = (mid, raw) => {
  let url = 'http://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg?';
  let query = {
    'songmid': mid,
    'format': 'json'
  };
  return new Promise((resolve, reject) => {
    request(`${url}${querystring.stringify(query)}`, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        let data = JSON.parse(body).data[0].file;
        if(data.size_320mp3){
          resolve(getSongNew(mid, 'size320', data.size_320mp3));
        } else if(data.size_128mp3){
          resolve(getSongNew(mid, 'size128', data.size_128mp3));
        }
      } else {
        reject(err);
      }
    })
  });
}

const searchSong = (key, limit, page, raw) => {
  let url = 'http://c.y.qq.com/soso/fcgi-bin/search_cp?';
  let query = {
    'p': page,
    'n': limit,
    'w': key,
    'aggr': 1,
    'lossless': 1,
    'cr': 1
  };
  return new Promise((resolve, reject) => {
    request(`${url}${querystring.stringify(query)}`, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        let json = body.replace('callback(', '');
        json = json.substr(0, json.length - 1);
        json = JSON.parse(json);
        if(!raw){
          let songList = json.data.song.list.map(item => {
            return {
              album: {
                id: item.albumid,
                cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albummid}.jpg`,
                name: item.albumname
              },
              artists: item.singer.map(i => {return {id: i.mid, name: i.name}; }),
              name: item.songname,
              id: item.songmid
            }
          });
          let obj = {
            success: true,
            total: json.data.song.totalnum,
            songList: songList
          };
          resolve(obj);
        } else {
          resolve(json); 
        }
      } else {
        reject({
          success: false,
          message: error
        });
      }
    });
  });
}

//网页版搜索建议
const searchSuggestion = (key) => {
  let url = `https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?format=json&key=${key}&platform=yqq`;
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if(!err && res.statusCode == 200){
        resolve(JSON.parse(body));
      } else {
        reject(err);
      }
    })
  });
}

const searchPlaylist = (key, limit, page, raw) => {
  let url = `https://c.y.qq.com/soso/fcgi-bin/client_music_search_songlist?`;
  let query = {
    remoteplace: 'txt.yqq.center',
    searchid: Math.floor(Math.random()*96551345134513451).toString(),
    page_no: page-1,
    num_per_page: limit,
    query: key,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq'
  };
  return new Promise((resolve, reject) => {
    request({
      headers: {
        Referer: 'https://y.qq.com/portal/search.html',
        Host: 'c.y.qq.com'
      },
      url: `${url}${querystring.stringify(query)}`
    }, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        let json = JSON.parse(body).data;
        if(raw){
          resolve(json);
        } else {
          let playlists = json.list.map(item => {
            return {
              id: item.dissid,
              cover: item.imgurl,
              name: S(item.dissname).decodeHTMLEntities().stripTags().s,
              author: {
                name: item.creator.name,
                id: parseInt(item.creator.creator_uin),
                avatar: item.creator.avatarUrl
              }
            }
          });
          let obj = {
            success: true,
            total: json.sum,
            playlists: playlists
          }
          resolve(obj);
        }
      } else {
        reject({
          success: false,
          message: err
        });
      }
    })
  });
}

const searchAlbum = (key, limit, page, raw) => {
  let url = 'https://c.y.qq.com/soso/fcgi-bin/search_cp?';
  let query = {
    remoteplace: 'txt.yqq.album',
    searchid: Math.floor(Math.random()*96551345134513451).toString(),
    //如果这里选1只搜索有无损的
    lossless: 0,
    p: page,
    n: limit,
    w: key,
    //应该是某种type的意思，不太懂
    t: 8,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq'
  };
  return new Promise((resolve, reject) => {
    request({
      headers: {
        Referer: 'https://y.qq.com/portal/search.html',
        Host: 'c.y.qq.com'
      },
      url: `${url}${querystring.stringify(query)}`
    }, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        let json = JSON.parse(body).data.album;
        if(raw){
          resolve(json);
        } else {
          let albumList = json.list.map(item => {
            return {
              id: item.albumMID,
              cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albumMID}.jpg`,
              name: item.albumName,
              artist: {
                name: item.singerName,
                id: item.singerMID
              }
            }
          });
          let obj = {
            success: true,
            total: res.totalnum,
            albumList: albumList
          };
          resolve(obj);
        }
      } else {
        reject({
          success: false,
          message: err
        });
      }
    })
  });
}

const getAlbum = (mid, raw) => {
  let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?';
  let query = {
    albummid: mid,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq'
  };
  return new Promise((resolve, reject) => {
    request({
      headers: {
        Referer: 'https://y.qq.com/portal/search.html',
        Host: 'c.y.qq.com'
      },
      url: `${url}${querystring.stringify(query)}`
    }, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        resolve(JSON.parse(body).data);
      } else {
        reject(err);
      }
    });
  });
}

const getPlaylist = (disstid, raw) => {
  let url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?';
  let query = {
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 1,
    disstid,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq'
  };
  return new Promise((resolve, reject) => {
    request({
      headers: {
        Referer: 'https://y.qq.com/portal/search.html',
        Host: 'c.y.qq.com'
      },
      url: `${url}${querystring.stringify(query)}`
    }, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        if(body.substr(0, 12) === 'jsonCallback'){
          body = body.substr(13);
          body = body.substr(0, body.length - 1);
          resolve(JSON.parse(body));
        } else {
          resolve(JSON.parse(body));
        }
      } else {
        reject(err);
      }
    });
  });
}

module.exports = {
  searchSong: searchSong,
  searchPlaylist: searchPlaylist,
  searchAlbum: searchAlbum,
  getSong: getSong,
  getAlbum: getAlbum,
  getPlaylist: getPlaylist
};
