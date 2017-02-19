'use strict'
const querystring = require('querystring');
const parseString = require('xml2js').parseString;
const baseURL = 'http://api.xiami.com/web?';
const NEW_API_URL = 'http://acs.m.xiami.com/h5/';
const Crypto = require('./crypto');
const fetch = require('node-fetch');

/*
 * this api is using by http://h.xiami.com, xiami's mobile site.
 * php version : https://github.com/metowolf/XiamiMusicAPI/blob/master/XiamiMusicAPI.php
 */
const xiamiFetch = (query) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}${querystring.stringify(query)}`, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        cookie: 'user_from=2;XMPLAYER_addSongsToggler=0;XMPLAYER_isOpen=0;_xiamitoken=cb8bfadfe130abdbf5e2282c30f0b39a;',
        referer: 'http://h.xiami.com/',
        user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36'
      },
      body: querystring.stringify(query)
    })
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err))
  });
}

const searchSong = (key, limit, page, raw) => {
  if(!raw){
    return new Promise((resolve, reject) => {
      xiamiFetch({
        v: '2.0',
        key: key,
        limit: limit,
        page: page,
        r: 'search/songs',
        app_key: 1
      })
        .then(res => {
          let songList = res.data.songs.map(item => {
            return {
              album: {
                id: item.album_id,
                name: item.album_name,
                cover: item.album_logo.replace('http', 'https').replace('1.jpg', '2.jpg'),
                coverBig: item.album_logo.replace('http', 'https').replace('1.jpg', '2.jpg'),
                coverSmall: item.album_logo.replace('http', 'https'),
              },
              artists: [{
                id: item.artist_id,
                name: item.artist_name,
                avatar: item.artist_logo,
              }],
              name: item.song_name,
              id: item.song_id,
              needPay: item.need_pay_flag > 0 ? true : false,
              file: item.listen_file,
            };
          });
          let obj = {
            success: true,
            total: res.data.total,
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
  return xiamiFetch({
    v: '2.0',
    key: key,
    limit: limit,
    page: page,
    r: 'search/songs',
    app_key: 1
  });
}

const getPlayListByHot = () => {
  return xiamiFetch({
    v: '2.0',
    app_key: 1,
    r: 'collect/recommand'
  })
}

const getSongsByArtist = (artistID, limit, page) => {
  return xiamiFetch({
    'v': '2.0',
    'app_key': 1,
    'id': artistID,
    'page': page,
    'limit': limit,
    'r': 'artist/hot-songs'
  });
}

/*
 * song detail: GET http://www.xiami.com/song/playlist/id/:id  id example: 20566
 * convert location to url
 * origin python code by : https://github.com/wolfhong/xiamiclient/blob/master/xiamiclient/client.py
 */

const parseLocation = (location) => {
  let head = parseInt(location.substr(0, 1));
  let _str = location.substr(1);
  let rows = head;
  let cols = parseInt(_str.length/rows) + 1;
  let output = '';
  let full_row;
  for(let i = 0; i < head; i++) {
   if((_str.length-i)/head === parseInt(_str.length/head)){
     full_row = i;
   }
  }
  for(let c = 0; c < cols; c++){
   for(let r = 0; r < head; r++){
     if(c === (cols-1) && r >= full_row){
       continue;
     };
     let char;
     if(r < full_row){
       char = _str[r*cols+c];
     } else {
       char = _str[cols*full_row+(r-full_row)*(cols-1)+c];
     }
     output += char;
   }
  }
  return decodeURIComponent(output).replace(/\^/g, '0');
}

const getSong = (id, raw) => {
  return new Promise((resolve, reject) => {
    fetch(`http://www.xiami.com/song/playlist/id/${id}`)
      .then(res => res.text())
      .then(xml => {
        console.log(xml);
        parseString(xml, (err, res) => {
          if(err){
            reject({
              success: false,
              message: 'err paring xml , please check xiami SDK'
            });
          } else {
            let ress = res.playlist.trackList[0].track[0];
            for(let i in ress){
              ress[i] = ress[i][0];
            }
            ress.url = parseLocation(ress.location);
            if(raw){
              resolve(ress);
            } else {
              let obj = {
                success: true,
                artist: {
                  id: ress.artistId,
                  name: ress.artistName
                },
                album: {
                  id: ress.albumId,
                  name: ress.album_name,
                  cover: ress.album_pic,
                },
                url: ress.url,
                lyric: ress.lyric_url,
                name: ress.name
              };
              resolve(obj);
            }
          }
        });
      })
      .catch(err => reject({
        success: false,
        message: '虾米 - 歌曲需要付费或者ID错误!'
      }))
  });
}

/*
 *  New API, wildly used by xiami, 2016.12.14
 *  @param api: 'mtop.alimusic.search.searchservice.searchsongs',
 *  @param query: {
 *    key: "林海",
 *    pagingVO: {
 *      page: 1
 *    }
 *  }
 */

const newRequest = (api, query) => {

  // set up query data, will use to generate url and get sign
  let queryData = {
    header: {
      appId: 200,
      appVersion: 1000000,
      callId: new Date().getTime(),
      network: 1,
      platformId: "mac",
      remoteIp: "192.168.1.101",
      resolution: "1178*778"
    },
    model: query
  };
  let queryStr = JSON.stringify({
    requestStr: JSON.stringify(queryData)
  });

  return new Promise((resolve, reject) => {
    /*
     *  get token from xiami
     *  exmaple: http://acs.m.xiami.com/h5/mtop.alimusic.search.searchservice.searchsongs/1.0/
     */
     fetch(`${NEW_API_URL}${api}/1.0/`)
       .then(res => {

         // myToken is the final token we need;
         let token = Array.from(res.headers._headers['set-cookie']);
         token = token.map(i => i.split(';')[0].trim());
         const myToken = token[0].replace('_m_h5_tk=', '').split('_')[0];

         /*
          * use token to get sign
          */
         let appKey = "12574478"
         let t = new Date().getTime();
         let sign = Crypto.MD5(`${myToken}&${t.toString()}&${appKey}&${queryStr}`);

         /*
          * generate request data
          */
          let params = {
            appKey: 12574478,
            t,
            sign,
            v: 1.0,
            type: 'originaljson',
            dataType: 'json',
            api,
            data: queryStr
          };
          let opts = {
            headers: {
              Host: 'acs.m.xiami.com',
              'Content-Type': 'application/x-www-form-urlencoded',
              Cookie: `${token[0]};${token[1]}`
            },
          };

         /*
          * make request
          */
          fetch(`${NEW_API_URL}${api}/1.0/?${querystring.stringify(params)}`, opts)
            .then(res => res.json())
            .then(json => resolve(json))
            .catch(err => reject(err))

       })
     .catch(err => reject(err))
  });
}

const searchPlaylist = (key, limit, page, raw) => {
  if(!raw){
    return new Promise((resolve, reject) => {
      newRequest('mtop.alimusic.search.searchservice.searchcollects', {
        key,
        pagingVO: {
          page,
          pageSize: limit
        }
      })
        .then(res => {
          let playlists = res.data.data.collects.map(item => {
            return {
              id: item.listId,
              cover: item.collectLogo.replace('http://', 'https://') + '@!c-185-185',
              coverBig: item.collectLogo.replace('http://', 'https://') + '@!c-185-185',
              coverSmall: item.collectLogo.replace('http://', 'https://') + '@!c-185-185',
              name: item.collectName,
              author: {
                name: item.userName,
                id: item.userId,
                avatar: item.authorAvatar
              }
            }
          });
          let obj = {
            success: true,
            total: res.data.data.pagingVO.count,
            playlists: playlists
          };
          resolve(obj);
        })
        .catch(err => reject({
          success: false,
          message: err
        }))
    });
  }
  return newRequest('mtop.alimusic.search.searchservice.searchcollects', {
    key,
    pagingVO: {
      page,
      pageSize: limit
    }
  });
}

const searchAlbum = (key, limit, page, raw) => {
  if(!raw){
    return new Promise((resolve, reject) => {
      newRequest('mtop.alimusic.search.searchservice.searchalbums', {
        key,
        pagingVO: {
          page,
          pageSize: limit
        }
      })
        .then(res => {
          let albumList = res.data.data.albums.map(item => {
            return {
              id: item.albumId,
              cover: item.albumLogo.replace('http://', 'https://') + '@1e_1c_0i_1o_100Q_250w_250h',
              coverBig: item.albumLogo.replace('http://', 'https://') + '@1e_1c_0i_1o_100Q_400w_400h',
              coverSmall: item.albumLogo.replace('http://', 'https://') + '@1e_1c_0i_1o_100Q_150w_150h',
              name: item.albumName,
              needPay: item.price/1 > 0 ? true : false,
              artist: {
                name: item.artistName,
                id: item.artistId
              }
            }
          });
          let obj = {
            success: true,
            total: res.data.data.pagingVO.count,
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
  return newRequest('mtop.alimusic.search.searchservice.searchalbums', {
    key,
    pagingVO: {
      page,
      pageSize: limit
    }
  });
}

const getAlbum = (id, raw) => {
  if(raw){
    return newRequest('mtop.alimusic.music.albumservice.getalbumdetail', {
      albumId: id
    });
  }
  return new Promise((resolve, reject) => {
    newRequest('mtop.alimusic.music.albumservice.getalbumdetail', {
      albumId: id
    })
      .then(res => {
        let ab = res.data.data.albumDetail;
        let songList = ab.songs.map(item => {
          let file = '';
          for(let i = 0; i<item.listenFiles.length; i++){
            if(item.listenFiles[i].format === 'mp3'){
              file = item.listenFiles[i].listenFile;
              if(item.listenFiles[i].quality === 'l'){
                break;
              }
            }
          }
          return {
            id: item.songId,
            name: item.songName,
            artists: [{
              id: item.artistId,
              name: item.artistName
            }],
            album: {
              name: ab.albumName,
              id: ab.albumId,
              cover: ab.albumLogo.replace('http://', 'https://') + '@1e_1c_0i_1o_100Q_250w_250h',
              coverBig: ab.albumLogo.replace('http://', 'https://') + '@1e_1c_0i_1o_100Q_400w_400h',
              coverSmall: ab.albumLogo.replace('http://', 'https://') + '@1e_1c_0i_1o_100Q_150w_150h',
            },
            needPay: ab.price/1 > 0 ? true : false,
            file,
          };
        });
        let obj = {
          success: true,
          name: ab.albumName,
          id: ab.albumId,
          cover: ab.albumLogo.replace('http://', 'https://') + '@1e_1c_0i_1o_100Q_250w_250h',
          coverBig: ab.albumLogo.replace('http://', 'https://') + '@1e_1c_0i_1o_100Q_400w_400h',
          coverSmall: ab.albumLogo.replace('http://', 'https://') + '@1e_1c_0i_1o_100Q_150w_150h',
          artist: {
            name: ab.artistName,
            id: ab.artistId
          },
          songList: songList
        };
        resolve(obj);
      })
      .catch(err => reject({
        success: false,
        message: 'err get xiami album, please query with raw=true to see the detail'
      }))
  });
}

const getPlaylist = (id, raw) => {
  if(raw){
    return newRequest('mtop.alimusic.music.list.collectservice.getcollectdetail', {
      isFullTags: false,
      listId: id,
      pagingVO: {
        page: 1,
        pageSize: 1000
      }
    });
  }
  return new Promise((resolve, reject) => {
    newRequest('mtop.alimusic.music.list.collectservice.getcollectdetail', {
      isFullTags: false,
      listId: id,
      pagingVO: {
        page: 1,
        pageSize: 1000
      }
    })
      .then(res => {
        let pl = res.data.data.collectDetail;
        let songList = pl.songs.map(item => {
          let file = '';
          for(let i = 0; i<item.listenFiles.length; i++){
            if(item.listenFiles[i].format === 'mp3'){
              file = item.listenFiles[i].listenFile;
              if(item.listenFiles[i].quality === 'l'){
                break;
              }
            }
          }
          return {
            id: item.songId,
            name: item.songName,
            needPay: item.needPayFlag > 0 ? true : false,
            file,
            artists: [{
              name: item.artistName,
              id: item.artistId,
              avatar: item.artistLogo,
            }],
            album: {
              id: item.albumId,
              cover: item.albumLogo.replace('http://', 'https://') + '@0e_0c_0i_1o_100Q_250w',
              coverBig: item.albumLogo.replace('http://', 'https://') + '@0e_0c_0i_1o_100Q_400w',
              coverSmall: item.albumLogo.replace('http://', 'https://') + '@0e_0c_0i_1o_100Q_150w',
              name: item.albumName
            }
          }
        });
        let obj = {
          success: true,
          name: pl.collectName,
          id: pl.listId,
          cover: pl.collectLogo.replace('http://', 'https://') + '@0e_0c_0i_1o_100Q_250w',
          coverBig: pl.collectLogo.replace('http://', 'https://') + '@0e_0c_0i_1o_100Q_400w',
          coverSmall: pl.collectLogo.replace('http://', 'https://') + '@0e_0c_0i_1o_100Q_150w',
          author: {
            id: pl.userId,
            name: pl.userName,
            avatar: pl.authorAvatar
          },
          songList: songList
        };
        resolve(obj);
      })
      .catch(err => reject({
        success: false,
        message: 'err get xiami playlist, please query with raw=true to see the detail'
      }))
  });
}

const getDailySuggest = (limit) => {
  return newRequest('mtop.alimusic.recommend.songservice.getdailysongs', {
    context: '',
    like: '',
    limit: limit,
    listen: '',
    unlike: ''
  });
}

module.exports = {
  searchSong: searchSong,
  searchPlaylist: searchPlaylist,
  searchAlbum: searchAlbum,
  getSong: getSong,
  getAlbum: getAlbum,
  getPlaylist: getPlaylist,
  getDailySuggest: getDailySuggest,
};
