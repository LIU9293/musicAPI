'use strict'
const fetch = require('node-fetch');
const querystring = require('querystring');
const parseString = require('xml2js').parseString;
const baseURL = 'http://api.xiami.com/web?';
const NEW_API_URL = 'http://acs.m.xiami.com/h5/';
const Crypto = require('./crypto');

/*
 * this api is using by http://h.xiami.com, xiami's mobile site.
 * php version : https://github.com/metowolf/XiamiMusicAPI/blob/master/XiamiMusicAPI.php
 */
const xiamiFetch = (query) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}${querystring.stringify(query)}`, {
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

const searchSong = (key, limit, page) => {
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

const getSong = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`http://www.xiami.com/song/playlist/id/${id}`)
      .then(res => res.text())
      .then(xml => {
        parseString(xml, (err, res) => {
          if(err){
            reject(err);
          } else {
            let ress = res.playlist.trackList[0].track[0];
            for(let i in ress){
              ress[i] = ress[i][0];
            }
            ress.url = parseLocation(ress.location);
            resolve(ress);
          }
        });
      })
      .catch(err => reject(err))
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

const searchPlaylist = (key, limit, page) => {
  return newRequest('mtop.alimusic.search.searchservice.searchcollects', {
    key,
    pagingVO: {
      page,
      pageSize: limit
    }
  });
}

const searchAlbum = (key, limit, page) => {
  return newRequest('mtop.alimusic.search.searchservice.searchalbums', {
    key,
    pagingVO: {
      page,
      pageSize: limit
    }
  });
}

const getAlbum = (id) => {
  return newRequest('mtop.alimusic.music.albumservice.getAlbum', {
    albumId: id
  });
}

const getPlaylist = (id) => {
  return newRequest('mtop.alimusic.music.list.collectservice.getcollectdetail', {
    isFullTags: false,
    listId: id,
    pagingVO: {
      page: 1,
      pageSize: 1000
    }
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
