# Centralized Node.js API for Netease, QQ, Xiami music

> This SDK provide simple API interface based on Promise, netease API is get
from github, qq api is get from y.qq.com and xiami api is get from xiami Mac App.
 Please make no commerical use of this project.

```
npm install music-api --save
```
## Basic usage
```javascript
const musicAPI = require('music-api');

musicAPI.searchSong('netease', {
  key: '陈粒',
  limit: 10,
  page: 1,
})
  .then(res => console.log(res))
  .catch(err => console.log(err))

```

## Run local
```shell
git clone https://github.com/LIU9293/musicAPI.git
cd musicAPI
npm install
npm run test

// open another terminal
curl http://localhost:8080/api/search/song/all?key=taylor&limit=5&page=1

```

## Usage
 - [x] search songs.
 - [x] search playlist.(xiami collects)
 - [x] search albums.
 - [x] get song play url.
 - [x] get playlist detail.
 - [x] get album detail.
 - [x] get suggestions albums.
 - [ ] get artists' detail.
 - [x] raw data / converted data available.

## API

 - **musicAPI.searchSong(vendor, query)**

   ```
   vendor: one if ['netease', 'xiami', 'qq', 'all'];
   query: {
     key: KEY,
     limit: 10,
     page: 1,
     raw: true or false
   }
   ```
   example: [https://music-api-jwzcyzizya.now.sh/api/search/song/netease?key=刘瑞琦&limit=5&page=1](https://music-api-jwzcyzizya.now.sh/api/search/song/netease?key=刘瑞琦&limit=5&page=1)

 - **musicAPI.searchAlbum(vendor, query)**

   ```
   vendor: one if ['netease', 'xiami', 'qq', 'all'];
   query: {
     key: KEY,
     limit: 10,
     page: 1,
     raw: true or false
   }
   ```
   example: [https://music-api-jwzcyzizya.now.sh/api/search/album/xiami?key=范宗沛&limit=5&page=1](https://music-api-jwzcyzizya.now.sh/api/search/album/xiami?key=范宗沛&limit=5&page=1)

 - **musicAPI.searchPlaylist(vendor, query)**

   ```
   vendor: one if ['netease', 'xiami', 'qq', 'all'];
   query: {
     key: KEY,
     limit: 10,
     page: 1,
     raw: true or false
   }
   ```
   example: [https://music-api-jwzcyzizya.now.sh/api/search/playlist/qq?key=周杰伦&limit=5&page=1](https://music-api-jwzcyzizya.now.sh/api/search/playlist/qq?key=周杰伦&limit=5&page=1)

 - **musicAPI.getSong(vendor, query)** (not work with raw now, keep it false)

   ```
   vendor: one of ['netease', 'xiami', 'qq'];
   query: {
     id: songID,
     raw: true or false
     br: Bit rate (only support Netease ! default is 999000, example 128000 or 192000 or 320000)
   }
   ```
   example: [https://music-api-jwzcyzizya.now.sh/api/get/song/qq?id=003OUlho2HcRHC](https://music-api-jwzcyzizya.now.sh/api/get/song/qq?id=003OUlho2HcRHC)

 - **musicAPI.getAlbum(vendor, query)**

   ```
   vendor: one of ['netease', 'xiami', 'qq'];
   query: {
     id: albumID,
     raw: true or false
   }
   ```
   example: [https://music-api-jwzcyzizya.now.sh/api/get/album/qq?id=002J7XNt2m9sNc](https://music-api-jwzcyzizya.now.sh/api/get/album/qq?id=002J7XNt2m9sNc)

 - **musicAPI.getPlaylist(vendor, query)**

   ```
   vendor: one of ['netease', 'xiami', 'qq'];
   query: {
     id: playlistID,
     raw: true or false
   }
   ```
   example: [https://music-api-jwzcyzizya.now.sh/api/get/playlist/netease?id=461600464](https://music-api-jwzcyzizya.now.sh/api/get/playlist/netease?id=461600464)

 - **musicAPI.getSuggestAlbums(vendor, query)**

   ```
   vendor: one of ['all', 'xiami', 'qq'];
   query: {
     limit: limit,
     raw: true or false
   }
   ```
   example: [https://music-api-jwzcyzizya.now.sh/api/suggest/album/all?limit=10](https://music-api-jwzcyzizya.now.sh/api/suggest/album/all?limit=10)
